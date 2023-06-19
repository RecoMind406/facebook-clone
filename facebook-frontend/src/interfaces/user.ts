import Post from "./post";
import Dialogue from "./dialogue";

export default class User {
    id = "";
    name = "";
    email = "";
    password = "";
    gender = "";
    birthdate = new Date();
    phone = "";
    location = "";
    profilePicture = "";
    cover = "";
    friends: string[] = [];
    posts: Post[] = [];
    dialogues: Dialogue[] = [];
    friendRequestSent: User[] = [];
    friendRequestReceived: User[] = [];
}

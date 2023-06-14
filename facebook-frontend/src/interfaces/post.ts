import Reaction from "./reaction";
import User from "./user";

export default class Post {
    id = "";
    userID = "";
    content = "";
    images: string[] = [];
    timestamp: Date = new Date();
    reactions: Reaction[] = [];
    comments: Comment[] = [];
    share: User[] = [];
    originalID?: string;
}

import Post from "./post";
import Dialogue from "./dialogue";

export default class User {
    constructor(
        public id = "",
        public name = "",
        public email = "",
        public password = "",
        public gender = "",
        public birthdate = new Date(),
        public phone = "",
        public location = "",
        public profilePicture = "",
        public cover = "",
        public friends: string[] = [],
        public posts: Post[] = [],
        public dialogues: Dialogue[] = [],
        public friendRequestSent: string[] = [],
        public friendRequestReceived: string[] = []
    ) {}
}

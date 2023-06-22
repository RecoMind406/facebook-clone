import Comment from "./comment";

export default class Post {
    constructor(
        public id: string = "",
        public userID: string = "",
        public content: string = "",
        public image: string = "",
        public timestamp: Date = new Date(),
        public reactions: number = Math.floor(Math.random() * 100),
        public comments: Comment[] = [],
        public share: string[] = [],
        public originalID: string = ""
    ) {}
}

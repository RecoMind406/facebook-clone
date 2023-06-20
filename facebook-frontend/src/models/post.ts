export default class Post {
    constructor(
        public id = "",
        public userID = "",
        public content = "",
        public image = "",
        public timestamp: Date = new Date(),
        public reactions = Math.floor(Math.random() * 100),
        public comments: Comment[] = [],
        public share: string[] = [],
        public originalID?: string
    ) {}
}

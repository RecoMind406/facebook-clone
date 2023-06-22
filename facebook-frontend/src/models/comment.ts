export default class Comment {
    constructor(
        public id: string = "",
        public text = "",
        public timestamp: Date = new Date(),
        public userID = ""
    ) {}
}

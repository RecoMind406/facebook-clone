export default class Comment {
    constructor(
        public id: string = "",
        public text: string = "",
        public timestamp: Date = new Date(),
        public userID: string = ""
    ) {}
}

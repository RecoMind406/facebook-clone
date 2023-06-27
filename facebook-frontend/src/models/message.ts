export default class Message {
    constructor(
        public id: string = "",
        public text: string = "",
        public timestamp: Date = new Date(),
        public isSent: boolean = false
    ) {}
}

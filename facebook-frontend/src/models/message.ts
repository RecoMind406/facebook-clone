export default class Message {
    constructor(
        public text = "",
        public timestamp: Date = new Date(),
        public isSent = false
    ) {}
}

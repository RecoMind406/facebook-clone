import Message from "./message";

export default class Dialogue {
    constructor(
        public id: string = "",
        public toUser: string = "",
        public messages: Message[] = []
    ) {}
}

import Message from "./message";

export default class Dialogue {
    constructor(public toUser = "", public message: Message[] = []) {}
}

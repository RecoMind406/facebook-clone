import User from "./user";
import Message from "./message";

export default class Dialogue {
    toUser: User = new User();
    message: Message[] = [];
}

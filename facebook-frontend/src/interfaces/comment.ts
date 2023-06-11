import Reaction from "./reaction";

export class Comment {
    id = "";
    text = "";
    timestamp: Date = new Date();
    reactions: Reaction[] = [];
    userID = "";
}

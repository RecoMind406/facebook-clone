export default class Post {
    id = "";
    userID = "";
    content = "";
    images = "";
    timestamp: Date = new Date();
    reactions = Math.floor(Math.random() * 100);
    comments: Comment[] = [];
    share: string[] = [];
    originalID?: string;
}

import Dialogue from "./dialogue";
import Post from "./post";

export default class User {
	constructor(
		public id: string = "",
		public name: string = "",
		public email: string = "",
		public password: string = "",
		public gender: string = "",
		public birthdate: Date = new Date(),
		public phone: string = "",
		public location: string = "",
		public profilePicture: string = "",
		public cover: string = "",
		public friends: string[] = [],
		public posts: Post[] = [],
		public dialogues: Dialogue[] = [],
		public friendRequestSent: string[] = [],
		public friendRequestReceived: string[] = []
	) {}
}

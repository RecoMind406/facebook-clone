import classNames from "classnames/bind";
import styles from "./MessengerItem.module.scss";
import { db } from "../../../config/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import User from "~/models/user";
import Message from "~/models/message";

const cx = classNames.bind(styles);

const MessengerItem = ({
	userId,
	toUserId,
	dialogueId,
}: {
	userId: string;
	toUserId: string;
	dialogueId: string;
}) => {
	const [toUserData, setToUserData] = useState<User>(new User());
	const [lastMessageText, setLastMessageText] = useState("");
	const [lastMessageTime, setLastMessageTime] = useState("");
	useEffect(() => {
		const fetchToUserData = async () => {
			const toUserRef = doc(db, "users", toUserId);
			const toUserDoc = await getDoc(toUserRef);

			const toUser = {
				...toUserDoc.data(),
				id: toUserDoc.id,
			};
			setToUserData(toUser);
		};

		const fetchLastMessage = async () => {
			const messagesDoc = await getDocs(
				collection(db, "users", userId, "dialogues", dialogueId, "messages")
			);
			const messagesData = messagesDoc.docs.map((doc) => doc.data());
			messagesData.sort(
				(a: any, b: any) =>
					new Date(a.timestamp.toDate()) - new Date(b.timestamp.toDate())
			);

			if (messagesData.length > 0) {
				const lastMessageData = messagesData[messagesData.length - 1];
				setLastMessageText(lastMessageData.text);

				const jsDate = new Date(lastMessageData.timestamp.toDate());
				const jsHour = jsDate.getHours();
				const jsMinute = jsDate.getMinutes();
				if (jsMinute < 10) {
					setLastMessageTime(jsHour + ":0" + jsMinute);
				} else {
					setLastMessageTime(jsHour + ":" + jsMinute);
				}
			}
		};

		fetchToUserData();
		fetchLastMessage();
	}, []);

	if (lastMessageText === "") return;

	return (
		<div className={cx("messenger-item")}>
			<div className={cx("avatar")}>
				<img src={toUserData.profilePicture} alt="" />
				{true && <span className={cx("status")}></span>}
			</div>

			<div className={cx("dialog")}>
				<div className={cx("name")}>{toUserData.name}</div>
				<div className={cx("message")}>
					<span className={cx("last-message")}>{lastMessageText}</span>
					<span className={cx("dot")}></span>
					<span className={cx("time")}>{lastMessageTime}</span>
				</div>
			</div>
		</div>
	);
};

export default MessengerItem;

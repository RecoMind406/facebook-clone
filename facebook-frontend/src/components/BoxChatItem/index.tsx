import classNames from "classnames/bind";
import styles from "./BoxChatItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCirclePlus,
	faMinus,
	faPaperPlane,
	faPhone,
	faVideo,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import MessageItem from "./MessageItem";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	setDoc,
	Timestamp,
} from "firebase/firestore";
import { db } from "../../../config/firebase";
import Message from "~/models/message";
import User from "~/models/user";
import Dialogue from "~/models/dialogue";

const cx = classNames.bind(styles);

// Props of BoxChatItem includes: handleClose, listMessage and id of user
// From id of user --> find image, name of user
const BoxChatItem = ({
	userId,
	toUserId,
	handleClose,
}: {
	userId: string;
	toUserId: string;
	handleClose: any;
}) => {
	const [isHoverInformation, setIsHoverInformation] = useState(false);
	const [isFocusBoxChat, setIsFocusBoxChat] = useState(false);
	const dialogRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const [newMessageText, setNewMessageText] = useState<string>("");
	const [messagesList, setMessagesList] = useState<any[]>([]);

	const [toUserData, setToUserData] = useState<User>(new User());
	const [dialogueId, SetDialogueId] = useState("");

	const handleSubmitMessage = async () => {
		if (newMessageText === "") return;
		// Handle submit message
		const newMessage = new Message();
		// Lưu new message vào database
		await setDoc(
			doc(collection(db, "users", userId, "dialogues", dialogueId, "messages")),
			{
				text: newMessageText,
				timestamp: Timestamp.fromDate(newMessage.timestamp),
				isSent: true,
			}
		);
		console.log(userId);
		// Lưu vào new message bên người nhận
		const dialoguesDoc = await getDocs(
			collection(db, "users", toUserId, "dialogues")
		);

		const dialoguesData = dialoguesDoc.docs.map((doc) => ({
			...doc.data(),
			idDoc: doc.id,
		}));
		// Tìm ra dialogue ứng với userId
		let dialogueWithUser = dialoguesData.find(
			(dialogue) => dialogue.toUser === userId
		);

		if (!dialogueWithUser) {
			await setDoc(doc(collection(db, "users", toUserId, "dialogues")), {
				toUser: userId,
			});

			dialogueWithUser = dialoguesData.find(
				(dialogue) => dialogue.toUser === userId
			);
		}
		const dialougeWithUserId = dialogueWithUser?.idDoc;

		if (dialougeWithUserId) {
			const pathMessages = doc(
				collection(
					db,
					"users",
					toUserId,
					"dialogues",
					dialougeWithUserId,
					"messages"
				)
			);
			await setDoc(pathMessages, {
				text: newMessageText,
				timestamp: Timestamp.fromDate(newMessage.timestamp),
				isSent: false,
			});
		}
		setMessagesList([
			...messagesList,
			{
				text: newMessageText,
				timestamp: Timestamp.fromDate(newMessage.timestamp),
				isSent: true,
			},
		]);
		setNewMessageText("");
	};

	const handleSubmitInput = (e: any) => {
		e.preventDefault();
		handleSubmitMessage();
	};

	useEffect(() => {
		// Lấy data người gửi tin nhắn
		const fetchToUserData = async () => {
			const toUserRef = doc(db, "users", toUserId);
			const toUserDoc = await getDoc(toUserRef);
			const toUser = {
				...toUserDoc.data(),
				idDoc: toUserDoc.id,
			};
			setToUserData(toUser);
		};

		// Lấy data đoạn dialogue
		const fetchDialogueData = async () => {
			// Lấy tất cả data dialogues
			const dialoguesDoc = await getDocs(
				collection(db, "users", userId, "dialogues")
			);

			const dialoguesData = dialoguesDoc.docs.map((doc) => ({
				...doc.data(),
				idDoc: doc.id,
			}));

			// Tìm ra dialogue ứng với toUserId
			let dialogueWithToUser = dialoguesData.find(
				(dialogue) => dialogue.toUser === toUserId
			);

			if (!dialogueWithToUser) {
				await setDoc(doc(collection(db, "users", userId, "dialogues")), {
					toUser: toUserId,
				});
				dialogueWithToUser = dialoguesData.find(
					(dialogue) => dialogue.toUser === toUserId
				);
			}

			const dialogueWithToUserId = dialogueWithToUser?.idDoc;

			if (dialogueWithToUserId) {
				SetDialogueId(dialogueWithToUserId);
				// Lấy tất cả message trong Dialogue này
				const messagesDoc = await getDocs(
					collection(
						db,
						"users",
						userId,
						"dialogues",
						dialogueWithToUserId,
						"messages"
					)
				);
				const messagesData = messagesDoc.docs.map((doc) => doc.data());
				messagesData.sort(
					(a: any, b: any) =>
						new Date(a.timestamp.toDate()) - new Date(b.timestamp.toDate())
				);

				setMessagesList(messagesData);
			}
		};

		fetchToUserData();
		fetchDialogueData();
		if (dialogRef.current != null) {
			dialogRef.current.scrollTop = dialogRef.current.scrollHeight;
		}
		inputRef.current?.focus();
	}, []);

	return (
		<div className={cx("box-chat-item", isFocusBoxChat && "focus")}>
			<div className={cx("heading")}>
				<div className={cx("information", isHoverInformation && "hover")}>
					<div className={cx("image-box")}>
						<div className={cx("image")}>
							<img src={toUserData.profilePicture} alt="" />

							<span className={cx("online-status")}></span>
						</div>
					</div>
					<div
						className={cx("name-status")}
						onMouseOver={() => {
							setIsHoverInformation(true);
						}}
						onMouseOut={() => {
							setIsHoverInformation(false);
						}}>
						<span className={cx("name")}>{toUserData.name}</span>
						<span className={cx("status")}>Đang hoạt động</span>
					</div>
				</div>
				<div className={cx("icons")}>
					<div className={cx("icon")}>
						<FontAwesomeIcon icon={faPhone} />
					</div>
					<div className={cx("icon")}>
						<FontAwesomeIcon icon={faVideo} />
					</div>
					<div className={cx("icon")}>
						<FontAwesomeIcon icon={faMinus} />
					</div>
					<div className={cx("icon")} onClick={handleClose}>
						<FontAwesomeIcon icon={faXmark} />
					</div>
				</div>
			</div>

			<div ref={dialogRef} className={cx("dialog", "scrollbar")}>
				{messagesList.map((message, index) => (
					<MessageItem
						key={index}
						imgUser={toUserData.profilePicture}
						nameUser={toUserData.name}
						text={message.text}
						send={message.isSent}
						time={message.timestamp}
					/>
				))}
			</div>

			<div className={cx("input-send-message")}>
				<Tippy
					content="Mở hành động khác"
					placement="top"
					arrow={false}
					delay={[500, 0]}>
					<div className={cx("plus-btn")}>
						<FontAwesomeIcon icon={faCirclePlus} />
					</div>
				</Tippy>
				<div className={cx("input")}>
					<form onSubmit={(e) => handleSubmitInput(e)}>
						<input
							ref={inputRef}
							type="text"
							placeholder="Nhập tin nhắn"
							onFocus={() => setIsFocusBoxChat(true)}
							onBlur={() => setIsFocusBoxChat(false)}
							value={newMessageText}
							onChange={(e) => setNewMessageText(e.target.value)}
						/>
					</form>
				</div>
				<Tippy
					content="Nhấn Enter để gửi"
					placement="top"
					arrow={false}
					delay={[500, 0]}>
					<div className={cx("send-btn")} onClick={handleSubmitMessage}>
						<FontAwesomeIcon icon={faPaperPlane} />
					</div>
				</Tippy>
			</div>
		</div>
	);
};

export default BoxChatItem;

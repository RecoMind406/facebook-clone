import classNames from "classnames/bind";
import styles from "./CommentItem.module.scss";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import User from "~/models/user";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import Comment from "~/models/comment";

const cx = classNames.bind(styles);

const CommentItem = ({
	text,
	timestamp,
	userId,
}: {
	text: string;
	timestamp: any;
	userId: string;
}) => {
	const [ownerCommentData, setOwnerCommentData] = useState<User>(new User());

	const [timeComment, setTimeComment] = useState("");

	useEffect(() => {
		const fetchCommentData = async () => {
			const ownerCommentRef = doc(db, "users", userId);
			const ownerCommentDoc = await getDoc(ownerCommentRef);
			const ownerComment = {
				...ownerCommentDoc.data(),
				idDoc: ownerCommentDoc.id,
			};
			setOwnerCommentData(ownerComment);
		};
		fetchCommentData();
		const jsTime = new Date(timestamp.toDate());
		const currentTime = new Date();
		if (currentTime.getDate() - jsTime.getDate() > 0) {
			if (currentTime.getHours() - jsTime.getHours() > 0) {
				setTimeComment(currentTime.getDate() - jsTime.getDate() + " ngày");
			} else {
				setTimeComment(
					currentTime.getHours() - jsTime.getHours() + 24 + " giờ"
				);
			}
		} else {
			if (currentTime.getHours() - jsTime.getHours() > 0) {
				if (currentTime.getMinutes() - jsTime.getMinutes() > 0) {
					setTimeComment(currentTime.getHours() - jsTime.getHours() + " giờ");
				} else {
					setTimeComment(
						currentTime.getMinutes() - jsTime.getMinutes() + 60 + " phút"
					);
				}
			} else {
				setTimeComment(
					currentTime.getMinutes() - jsTime.getMinutes() + " phút"
				);
			}
		}
	}, []);

	return (
		<div className={cx("comment-item")}>
			<div className={cx("avatar")}>
				<img src={ownerCommentData.profilePicture} alt="" />
			</div>
			<div className={cx("main-content-comment")}>
				<div>
					<div className={cx("comment-box")}>
						<Link to={"/"} className={cx("name-account")}>
							<span>{ownerCommentData.name}</span>
						</Link>
						<p className={cx("text-comment")}>{text}</p>
					</div>
				</div>
				<div className={cx("button-comment-box")}>
					<div className={cx("item")}>Thích</div>
					<div className={cx("item")}>Phản hồi</div>
					<div className={cx("item")}>Chia sẻ</div>
					<div className={cx("time-comment")}>{timeComment}</div>
				</div>
			</div>
		</div>
	);
};

export default CommentItem;

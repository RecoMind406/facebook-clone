import classNames from "classnames/bind";
import styles from "./PostItem.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEarthAmerica,
	faEllipsis,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import {
	Timestamp,
	collection,
	doc,
	getDoc,
	getDocs,
	setDoc,
	updateDoc,
} from "firebase/firestore";
import { db } from "../../../config/firebase";
import Post from "~/models/post";
import User from "~/models/user";
import CommentItem from "../CommentItem";
// Import tippy
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);

const PostItem = ({ postId, userId }: { postId: string; userId: string }) => {
	const [postData, setPostData] = useState<Post>(new Post());
	const [ownerPostData, setOwnerPostData] = useState<User>(new User());
	const [userData, setUserData] = useState<User>(new User());
	const [timePost, setTimePost] = useState<string>("");

	const [isLikePost, setIsLikePost] = useState(false);
	const handleLikePostBtn = async () => {
		setIsLikePost(!isLikePost);

		const postRef = doc(db, "posts", postData.idDoc);
		if (isLikePost === true) {
			await updateDoc(postRef, {
				reactions: postData.reactions - 1,
			});
		} else {
			await updateDoc(postRef, {
				reactions: postData.reactions + 1,
			});
		}
	};

	const [commentText, setCommentText] = useState("");
	const [listComment, setListComment] = useState([]);

	const handleSubmitComment = async (e: any) => {
		e.preventDefault();
		if (commentText === "") return;
		const newComment = {
			text: commentText,
			timestamp: Timestamp.fromDate(new Date()),
			userID: userId,
		};

		await setDoc(doc(collection(db, "posts", postId, "comments")), newComment);

		const fetchListCommentData = async () => {
			const allCommentDoc = await getDocs(
				collection(db, "posts", postId, "comments")
			);
			const allCommentData = allCommentDoc.docs.map((doc: any) => ({
				...doc.data(),
				idDoc: doc.id,
			}));
			console.log(allCommentData);

			setListComment(allCommentData);
		};

		fetchListCommentData();

		setCommentText("");
	};

	useEffect(() => {
		const fetchDataPost = async () => {
			const postRef = doc(db, "posts", postId);
			const postDoc = await getDoc(postRef);
			const post = {
				...postDoc.data(),
				idDoc: postDoc.id,
			};
			setPostData(post);

			const ownerPostRef = doc(db, "users", post.userID);
			const ownerPostDoc = await getDoc(ownerPostRef);
			const ownerPost = {
				...ownerPostDoc.data(),
				idDoc: ownerPostDoc.id,
			};
			setOwnerPostData(ownerPost);

			const jsTime = new Date(post.timestamp.toDate());
			const currentTime = new Date();
			console.log(jsTime);
			console.log(currentTime);
			if (currentTime.getDate() - jsTime.getDate() > 0) {
				if (currentTime.getHours() - jsTime.getHours() > 0) {
					setTimePost(currentTime.getDate() - jsTime.getDate() + " ngày");
				} else {
					setTimePost(currentTime.getHours() - jsTime.getHours() + 24 + " giờ");
				}
			} else {
				if (currentTime.getHours() - jsTime.getHours() > 0) {
					if (currentTime.getMinutes() - jsTime.getMinutes() > 0) {
						setTimePost(currentTime.getHours() - jsTime.getHours() + " giờ");
					} else {
						setTimePost(
							currentTime.getMinutes() - jsTime.getMinutes() + 60 + " phút"
						);
					}
				} else {
					setTimePost(currentTime.getMinutes() - jsTime.getMinutes() + " phút");
				}
			}
		};

		const fetchListCommentData = async () => {
			const allCommentDoc = await getDocs(
				collection(db, "posts", postId, "comments")
			);
			const allCommentData = allCommentDoc.docs.map((doc: any) => ({
				...doc.data(),
				idDoc: doc.id,
			}));

			setListComment(allCommentData);
		};

		const fetchUserData = async () => {
			const userRef = doc(db, "users", userId);
			const userDoc = await getDoc(userRef);
			const user = {
				...userDoc.data(),
				idDoc: userDoc.id,
			};

			setUserData(user);
		};

		fetchDataPost();
		fetchUserData();
		fetchListCommentData();
	}, [isLikePost]);

	return (
		<div className={cx("post-item")}>
			<div className={cx("heading")}>
				<div className={cx("information")}>
					<Tippy placement="left" content={ownerPostData.name} arrow="false">
						<Link to={"/"} className={cx("avatar")}>
							<img src={ownerPostData.profilePicture} alt="" />
						</Link>
					</Tippy>

					<div className={cx("sub-info")}>
						<Link to={"/"} className={cx("title")}>
							{ownerPostData.name}
						</Link>

						<div className={cx("publish")}>
							<span className={cx("time")}>{timePost}</span>
							<span className={cx("dot")}></span>
							<span className={cx("range")}>
								<FontAwesomeIcon icon={faEarthAmerica} />
							</span>
						</div>
					</div>
				</div>

				<div className={cx("buttons")}>
					<div className={cx("item")}>
						<FontAwesomeIcon icon={faEllipsis} />
					</div>
					<div className={cx("item")}>
						<FontAwesomeIcon icon={faXmark} />
					</div>
				</div>
			</div>
			<div className={cx("content")}>
				<div className={cx("text")}>
					<p>{postData.content}</p>
				</div>
				<div className={cx("image")}>
					<img src={postData.image} alt="" />
				</div>
			</div>

			<div className={cx("number-interact")}>
				<div className={cx("number-react")}>
					<div className={cx("icon")}>
						<img
							src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
							alt=""
						/>
						<img
							src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e"
							alt=""
						/>
					</div>
					<span className={cx("count")}>{postData.reactions}</span>
				</div>
				{/* Nếu count == 0 thì không hiện bình luận */}
				<div className={cx("commnet-share-count")}>
					{listComment.length !== 0 && (
						<div className={cx("item")}>{listComment.length} bình luận</div>
					)}
					<div className={cx("item")}>3 lượt chia sẻ</div>
				</div>
			</div>

			<div className={cx("button-interact")}>
				<div
					className={cx("item", isLikePost && "liked")}
					onClick={handleLikePostBtn}>
					<div className={cx("icon")}>
						{isLikePost === false ? (
							<i className={cx("like-icon")}></i>
						) : (
							<i className={cx("liked-icon")}></i>
						)}
					</div>
					<span className={cx("title")}>Thích</span>
				</div>
				<div className={cx("item")}>
					<div className={cx("icon")}>
						<i className={cx("comment-icon")}></i>
					</div>
					<span className={cx("title")}>Bình luận</span>
				</div>
				<div className={cx("item")}>
					<div className={cx("icon")}>
						<i className={cx("share-icon")}></i>
					</div>
					<span className={cx("title")}>Chia sẻ</span>
				</div>
			</div>

			<div className={cx("list-comments")}>
				<div className={cx("your-comment-input")}>
					<div className={cx("avatar")}>
						<img src={userData.profilePicture} alt="" />
					</div>
					<div className={cx("input-comment")}>
						<form onSubmit={(e) => handleSubmitComment(e)}>
							<input
								type="text"
								placeholder="Hãy gửi bình luận của bạn..."
								value={commentText}
								onChange={(e) => setCommentText(e.target.value)}
							/>
						</form>
					</div>
				</div>
				{listComment.map((comment, index) => (
					<CommentItem
						key={index}
						userId={comment.userID}
						timestamp={comment.timestamp}
						text={comment.text}
					/>
				))}
			</div>
		</div>
	);
};

export default PostItem;

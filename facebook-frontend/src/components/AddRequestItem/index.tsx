import classNames from "classnames/bind";
import styles from "./AddRequestItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import User from "~/models/user";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

const cx = classNames.bind(styles);

const AddRequestItem = ({ id }: { id: string }) => {
	const [addRequestData, setAddRequestData] = useState<User>(new User());

	useEffect(() => {
		const fetchAddRequest = async () => {
			const addRequestRef = doc(db, "users", id);
			const addRequestDoc = await getDoc(addRequestRef);
			const addRequest = {
				...addRequestDoc.data(),
				id: addRequestDoc.id,
			};
			setAddRequestData(addRequest);
		};

		fetchAddRequest();
	}, []);

	return (
		<div className={cx("friend-request-item")}>
			<div className={cx("avatar")}>
				<img src={addRequestData.profilePicture} alt="" />
				<span className={cx("user-icon")}>
					<FontAwesomeIcon icon={faUser} />
				</span>
			</div>
			<div className={cx("information")}>
				<p className={cx("text")}>
					<span className={cx("name")}>{addRequestData.name} </span>
					đã gửi cho bạn lời mời kết bạn.
				</p>
				{/* <div className={cx("time")}>{time} trước</div>
				<div className={cx("number-mutual-friends")}>
					{numberMutualFriends} bạn chung
				</div> */}
				<div className={cx("friend-request-buttons")}>
					<button className={cx("accept")}>Xác nhận</button>
					<button className={cx("delete")}>Xóa</button>
				</div>
			</div>
		</div>
	);
};

export default AddRequestItem;

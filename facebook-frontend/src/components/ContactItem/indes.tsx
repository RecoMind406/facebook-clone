import classNames from "classnames/bind";
import styles from "./ContactItem.module.scss";
import { useEffect, useState } from "react";
import User from "~/models/user";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

const cx = classNames.bind(styles);

const ContactItem = ({
	id,
	handleOnClick,
}: {
	id: string;
	handleOnClick: any;
}) => {
	const [friendData, setFriendData] = useState<User>(new User());

	useEffect(() => {
		const fetchFriendData = async () => {
			const friendRef = doc(db, "users", id);
			const friendDoc = await getDoc(friendRef);

			const friend = {
				...friendDoc.data(),
				id: friendDoc.id,
			};
			setFriendData(friend);
		};

		fetchFriendData();
	}, []);

	return (
		<div className={cx("contact-item")} onClick={handleOnClick}>
			<div className={cx("avatar")}>
				<img src={friendData.profilePicture} alt="" />
			</div>
			<div className={cx("name")}>{friendData.name}</div>
		</div>
	);
};

export default ContactItem;

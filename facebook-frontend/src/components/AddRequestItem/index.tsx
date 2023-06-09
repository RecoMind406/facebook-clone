import classNames from "classnames/bind";
import styles from "./AddRequestItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const AddRequestItem = ({
	avatar,
	name,
	numberMutualFriends,
	time,
}: {
	avatar: string;
	name: string;
	numberMutualFriends: number;
	time: string;
}) => {
	return (
		<div className={cx("friend-request-item")}>
			<div className={cx("avatar")}>
				<img src={avatar} alt="" />
				<span className={cx("user-icon")}>
					<FontAwesomeIcon icon={faUser} />
				</span>
			</div>
			<div className={cx("information")}>
				<p className={cx("text")}>
					<span className={cx("name")}>{name} </span>
					đã gửi cho bạn lời mời kết bạn.
				</p>
				<div className={cx("time")}>{time} trước</div>
				<div className={cx("number-mutual-friends")}>
					{numberMutualFriends} bạn chung
				</div>
				<div className={cx("friend-request-buttons")}>
					<button className={cx("accept")}>Xác nhận</button>
					<button className={cx("delete")}>Xóa</button>
				</div>
			</div>
		</div>
	);
};

export default AddRequestItem;

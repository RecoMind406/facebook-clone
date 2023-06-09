import classNames from "classnames/bind";
import styles from "./MessengerItem.module.scss";

const cx = classNames.bind(styles);

const MessengerItem = ({
	avatar,
	status,
	name,
	lastMessage,
	time,
}: {
	avatar: string;
	status: boolean;
	name: string;
	lastMessage: string;
	time: string;
}) => {
	return (
		<div className={cx("messenger-item")}>
			<div className={cx("avatar")}>
				<img src={avatar} alt="" />
				{true && <span className={cx("status")}></span>}
			</div>

			<div className={cx("dialog")}>
				<div className={cx("name")}>{name}</div>
				<div className={cx("message")}>
					<span className={cx("last-message")}>{lastMessage}</span>
					<span className={cx("dot")}></span>
					<span className={cx("time")}>{time}</span>
				</div>
			</div>
		</div>
	);
};

export default MessengerItem;

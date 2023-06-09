import classNames from "classnames/bind";
import styles from "./NotificationItem.module.scss";

const cx = classNames.bind(styles);
const NotificationItem = ({
	avatar,
	type,
	name,
	title = "",
	inPost = "",
	time,
}: {
	avatar: string;
	type: string;
	name: string;
	title: string;
	inPost: any;
	time: string;
}) => {
	return (
		<div className={cx("notification-item")}>
			<div className={cx("avatar")}>
				<img src={avatar} alt="" />
				{type === "group" && <i className={cx("type", "group")}></i>}
				{type === "comment" && <i className={cx("type", "comment")}></i>}
				{type === "video" && <i className={cx("type", "video")}></i>}
			</div>
			<div className={cx("information")}>
				{type === "comment" && (
					<p className={cx("text")}>
						<span className={cx("name")}>{name} </span>
						đã nhắc đến bạn trong ở bình luận trong{" "}
						<span className={cx("in-post")}>{inPost}</span>
					</p>
				)}
				{type === "video" && (
					<p className={cx("text")}>
						<span className={cx("name")}>{name} </span>
						đã phát trực tiếp: "{title}"
					</p>
				)}
				<div className={cx("time")}>{time}</div>
			</div>
		</div>
	);
};

export default NotificationItem;

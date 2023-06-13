import classNames from "classnames/bind";
import styles from "./GroupChatItem.module.scss";

const cx = classNames.bind(styles);

const GroupChatItem = ({
	groupImg,
	avatarImg,
	nameGroup,
	message = "",
	lastTime = "",
}: {
	groupImg: string;
	avatarImg: string;
	nameGroup: string;
	message: string;
	lastTime: string;
}) => {
	return (
		<div className={cx("item-box")}>
			<div className={cx("item")}>
				<div className={cx("image")}>
					<img className={cx("group-img")} src={groupImg} alt="" />
					<div className={cx("avatar-img")}>
						<img src={avatarImg} alt="" />
					</div>
				</div>
				<div className={cx("name-chat")}>
					<span className={cx("name")}>{nameGroup}</span>
					{message && (
						<div className={cx("chat")}>
							<span className={cx("message")}>{message}</span>
							<div className={cx("dot")}></div>
							<span className={cx("time")}>{lastTime}</span>
						</div>
					)}

					{!message && (
						<div>
							<span className={cx("click-to-join-message")}>
								Nhấn để tham gia
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default GroupChatItem;

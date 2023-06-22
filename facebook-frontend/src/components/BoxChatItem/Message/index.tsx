import classNames from "classnames/bind";
import styles from "./Message.module.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);

const Message = ({
	send,
	nameUser,
	imgUser,
	text,
	time,
}: {
	send: boolean;
	nameUser: string;
	imgUser: string;
	text: string;
	time: string;
}) => {
	return (
		<div className={cx("wrapper", send && "send")}>
			{send === false && (
				<Tippy content={nameUser} placement="right" arrow={false}>
					<img className={cx("img-user")} src={imgUser} alt="" />
				</Tippy>
			)}
			<Tippy content={time} placement="left" arrow={false} delay={[600, 0]}>
				<div className={cx("message")}>{text}</div>
			</Tippy>
		</div>
	);
};

export default Message;

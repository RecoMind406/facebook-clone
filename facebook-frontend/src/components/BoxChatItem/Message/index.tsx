import classNames from "classnames/bind";
import styles from "./Message.module.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);

const Message = ({
	send,
	text,
	time,
}: {
	send: boolean;
	text: string;
	time: string;
}) => {
	return (
		<div className={cx("wrapper", send && "send")}>
			<Tippy content={time} placement="left" arrow={false} delay={[600, 0]}>
				<div className={cx("message")}>{text}</div>
			</Tippy>
		</div>
	);
};

export default Message;

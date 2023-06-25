import classNames from "classnames/bind";
import styles from "./Message.module.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);

const MessageItem = ({
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
	time: any;
}) => {
	const [timeTooltip, setTimetoolTip] = useState("");
	useEffect(() => {
		const jsDate = new Date(time.toDate());
		const jsHour = jsDate.getHours();
		const jsMinute = jsDate.getMinutes();
		if (jsMinute < 10) {
			setTimetoolTip(jsHour + ":0" + jsMinute);
		} else {
			setTimetoolTip(jsHour + ":" + jsMinute);
		}
	}, []);
	return (
		<div className={cx("wrapper", send && "send")}>
			{send === false && (
				<Tippy content={nameUser} placement="right" arrow={false}>
					<img className={cx("img-user")} src={imgUser} alt="" />
				</Tippy>
			)}
			<Tippy
				content={timeTooltip}
				placement="left"
				arrow={false}
				delay={[600, 0]}>
				<div className={cx("message")}>{text}</div>
			</Tippy>
		</div>
	);
};

export default MessageItem;

import classNames from "classnames/bind";
import styles from "./BoxChatItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCirclePlus,
	faMinus,
	faPaperPlane,
	faPhone,
	faVideo,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Message from "./Message";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);

// Props of BoxChatItem includes: handleClose, listMessage and id of user
// From id of user --> find image, name of user
const BoxChatItem = ({ handleClose }: { handleClose: any }) => {
	const [isHoverInformation, setIsHoverInformation] = useState(false);
	const [isFocusBoxChat, setIsFocusBoxChat] = useState(false);

	const [newMessage, setNewMessage] = useState("");

	const handleSubmitMessage = () => {
		// Add new message to listMessage
		setNewMessage("");
	};

	const handleEnterClick = (e: any) => {
		if (e.keyCode !== 13) return;
		handleSubmitMessage();
	};

	return (
		<div className={cx("box-chat-item", isFocusBoxChat && "focus")}>
			<div className={cx("heading")}>
				<div className={cx("information", isHoverInformation && "hover")}>
					<div className={cx("image-box")}>
						<div className={cx("image")}>
							<img
								src="https://upload-os-bbs.hoyolab.com/upload/2023/01/26/46002819/593e3d1442d0e4ce5e9af86956cee87d_6529371014013143752.jpg?x-oss-process=image/resize,s_1000/quality,q_80/auto-orient,0/interlace,1/format,jpg"
								alt=""
							/>

							<span className={cx("online-status")}></span>
						</div>
					</div>
					<div
						className={cx("name-status")}
						onMouseOver={() => {
							setIsHoverInformation(true);
						}}
						onMouseOut={() => {
							setIsHoverInformation(false);
						}}>
						<span className={cx("name")}>Nguyễn Thành Danh</span>
						<span className={cx("status")}>Đang hoạt động</span>
					</div>
				</div>
				<div className={cx("icons")}>
					<div className={cx("icon")}>
						<FontAwesomeIcon icon={faPhone} />
					</div>
					<div className={cx("icon")}>
						<FontAwesomeIcon icon={faVideo} />
					</div>
					<div className={cx("icon")}>
						<FontAwesomeIcon icon={faMinus} />
					</div>
					<div className={cx("icon")} onClick={handleClose}>
						<FontAwesomeIcon icon={faXmark} />
					</div>
				</div>
			</div>

			<div className={cx("dialog", "scrollbar")}>
				{/* listMessage.map((message) =>) */}
				<Message text="alo 1234" send={false} time="12:35" />
				<Message
					text="alo 123445465456as4d564as56d4"
					send={true}
					time="12:35"
				/>
				<Message
					text="alo 123445465456as4d564as56d4"
					send={true}
					time="12:35"
				/>
				<Message
					text="alo 123445465456as4d564as56d4"
					send={false}
					time="12:35"
				/>
				<Message
					text="alo 123445465456as4d564as56d4"
					send={true}
					time="12:35"
				/>
				<Message text="alo 1234" send={false} time="12:35" />
				<Message
					text="alo 123445465456as4d564as56d4"
					send={true}
					time="12:35"
				/>
				<Message
					text="alo 123445465456as4d564as56d4"
					send={true}
					time="12:35"
				/>
				<Message
					text="alo 123445465456as4d564as56d4"
					send={false}
					time="12:35"
				/>
				<Message
					text="alo 123445465456as4d564as56d4"
					send={true}
					time="12:35"
				/>
			</div>

			<div className={cx("input-send-message")}>
				<Tippy
					content="Mở hành động khác"
					placement="top"
					arrow={false}
					delay={[500, 0]}>
					<div className={cx("plus-btn")}>
						<FontAwesomeIcon icon={faCirclePlus} />
					</div>
				</Tippy>
				<div className={cx("input")}>
					<input
						type="text"
						placeholder=""
						onFocus={() => setIsFocusBoxChat(true)}
						onBlur={() => setIsFocusBoxChat(false)}
						onChange={(e) => setNewMessage(e.target.value)}
						onKeyDown={(e) => handleEnterClick(e)}
					/>
				</div>
				<Tippy
					content="Nhấn Enter để gửi"
					placement="top"
					arrow={false}
					delay={[500, 0]}>
					<div className={cx("send-btn")} onClick={handleSubmitMessage}>
						<FontAwesomeIcon icon={faPaperPlane} />
					</div>
				</Tippy>
			</div>
		</div>
	);
};

export default BoxChatItem;

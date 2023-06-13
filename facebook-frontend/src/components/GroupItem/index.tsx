import classNames from "classnames/bind";
import styles from "./GroupItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronDown,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const GroupItem = ({
	type,
	avatar,
	nameGroup,
	timeLastActity,
}: {
	type: string;
	avatar: string;
	nameGroup: string;
	timeLastActity: string;
}) => {
	return (
		<div className={cx("group-item")}>
			<div className={cx("avatar")}>
				<img src={avatar} alt="" />
			</div>
			<div className={cx("information")}>
				<div className={cx("name-group")}>{nameGroup}</div>
				<div className={cx("last-actity")}>
					Lần hoạt động gần nhất: {timeLastActity} trước
				</div>
			</div>

			<div className={cx("icon")}>
				{type === "manage" && <FontAwesomeIcon icon={faChevronRight} />}
				{type === "participate" && <FontAwesomeIcon icon={faChevronDown} />}
			</div>
		</div>
	);
};

export default GroupItem;

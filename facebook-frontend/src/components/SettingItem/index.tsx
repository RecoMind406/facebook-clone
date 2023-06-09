import classNames from "classnames/bind";
import styles from "./SettingItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const SettingItem = ({
	icon,
	title,
	level2,
	onClick,
}: {
	icon: any;
	title: string;
	level2: boolean;
	onClick: any;
}) => {
	return (
		<div onClick={onClick} className={cx("setting-item")}>
			<div className={cx("icon-title")}>
				<div className={cx("icon")}>{icon}</div>
				<span className={cx("title")}>{title}</span>
			</div>
			{level2 && (
				<span className={cx("icon-level2")}>
					<FontAwesomeIcon icon={faChevronRight} />
				</span>
			)}
		</div>
	);
};

export default SettingItem;

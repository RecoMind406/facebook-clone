import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import styles from "./TabPageItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const TabPageItem = ({
	contentTooltip,
	isActive,
	classNameForId,
	to,
	icon,
}: {
	contentTooltip: string;
	isActive: boolean;
	classNameForId: string;
	to: string;
	icon: any;
}) => {
	return (
		<Tippy content={contentTooltip} placement="bottom" arrow="false">
			<div className={cx("tab-item-box", isActive && "active", classNameForId)}>
				<Link className={cx("tab-item")} to={to}>
					{icon}
				</Link>
			</div>
		</Tippy>
	);
};

export default TabPageItem;

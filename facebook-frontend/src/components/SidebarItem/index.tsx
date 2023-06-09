import classNames from "classnames/bind";
import styles from "./SidebarItem.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const SidebarItem = ({
	image,
	position,
	title,
	to,
}: {
	image: any;
	position: string;
	title: string;
	to: string;
}) => {
	if (to === "") {
		return (
			<div className={cx("sidebar-item-box")}>
				<div className={cx("sidebar-item")}>
					<div className={cx("button")}>{image}</div>
					<span className={cx("title")}>{title}</span>
				</div>
			</div>
		);
	}

	if (position !== "") {
		const inlineStyle = {
			backgroundImage: `url(${image})`,
			backgroundPosition: `${position}`,
		};

		return (
			<div className={cx("sidebar-item-box")}>
				<Link className={cx("sidebar-item")} to={to}>
					<i className={cx("icon")} style={inlineStyle}></i>
					<span className={cx("title")}>{title}</span>
				</Link>
			</div>
		);
	} else {
		return (
			<div className={cx("sidebar-item-box")}>
				<Link className={cx("sidebar-item")} to={to}>
					<img className={cx("logo")} src={image} alt="" />
					<span className={cx("title")}>{title}</span>
				</Link>
			</div>
		);
	}
};

export default SidebarItem;

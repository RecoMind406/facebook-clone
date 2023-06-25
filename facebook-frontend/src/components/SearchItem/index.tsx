import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./SearchItem.module.scss";

const cx = classNames.bind(styles);

const SearchItem = ({ image, title }: { image: string; title: string }) => {
	return (
		<div className={cx("box")}>
			<Link to={"/"} className={cx("search-item")}>
				<div className={cx("avatar")}>
					<img src={image} alt="" />
				</div>
				<div className={cx("information")}>
					<span className={cx("name")}>{title}</span>
				</div>
			</Link>
		</div>
	);
};

export default SearchItem;

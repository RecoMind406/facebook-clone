import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

const Header = () => {
	return (
		<div className={cx("wrapper", "bg-red" && false)}>
			<img width={200} src="../src/assets/images/logo.png" />
			<div>Header</div>
		</div>
	);
};

export default Header;

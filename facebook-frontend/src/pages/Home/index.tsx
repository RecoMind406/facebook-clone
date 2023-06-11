import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Header from "../../components/Header";

const cx = classNames.bind(styles);

const Home = () => {
	return (
		<>
			<Header />
			<div className={cx("red")}>Home</div>
		</>
	);
};

export default Home;

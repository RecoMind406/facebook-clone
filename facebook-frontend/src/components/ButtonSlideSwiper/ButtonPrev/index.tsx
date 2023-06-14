import classNames from "classnames/bind";
import styles from "../ButtonSlideSwiper.module.scss";

const cx = classNames.bind(styles);
import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const ButtonPrevSlide = () => {
	const swiper = useSwiper();

	return (
		<div className={cx("box")} onClick={() => swiper.slidePrev()}>
			{" "}
			<FontAwesomeIcon icon={faChevronLeft} />
		</div>
	);
};

export default ButtonPrevSlide;

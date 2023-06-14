import classNames from "classnames/bind";
import styles from "../ButtonSlideSwiper.module.scss";

const cx = classNames.bind(styles);

import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ButtonNextSlide = () => {
	const swiper = useSwiper();

	return (
		<div className={cx("box")} onClick={() => swiper.slideNext()}>
			<FontAwesomeIcon icon={faChevronRight} />
		</div>
	);
};

export default ButtonNextSlide;

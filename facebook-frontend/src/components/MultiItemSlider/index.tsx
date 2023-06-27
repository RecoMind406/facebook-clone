import React, { useState } from 'react';

import classNames from "classnames/bind";
import styles from "./MultiItemSlider.module.scss";

const cx = classNames.bind(styles);

const MultiItemSlider = ({ images }:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  if (images[0].type){
    return (
    <div className={cx("carousel")}>
    <div className={cx("slides-wrapper")} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
      {images.map((image:any, index:any) => (
        <div className={cx("slide2")} key={index}>
          <img src={images[index].url} alt={`Slide ${index}`} />
          <span>{images[index].title}</span>
          <p>{images[index].type}</p>
        </div>
      ))}
    </div>
    <button className={cx("prev-button")} onClick={goToPrevSlide}>
    <svg fill="#666" viewBox="0 0 24 24" width="1em" height="1em" ><path d="M14.791 5.207 8 12l6.793 6.793a1 1 0 1 1-1.415 1.414l-7.5-7.5a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.415 1.414z"></path></svg>
    </button>
    <button className={cx("next-button")} onClick={goToNextSlide}>
    <svg fill="#666" viewBox="0 0 24 24" width="1em" height="1em" ><path d="M9.209 5.207 16 12l-6.791 6.793a1 1 0 1 0 1.415 1.414l7.5-7.5a1 1 0 0 0 0-1.414l-7.5-7.5a1 1 0 1 0-1.415 1.414z"></path></svg>
    </button>
  </div>
  )
  }
  else
  return (
    <div className={cx("carousel")}>
      <div className={cx("slides-wrapper")} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image:any, index:any) => (
          <div className={cx("slide")} key={index}>
            <span>{images[index].title}</span>
            <img src={images[index].url} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className={cx("prev-button")} onClick={goToPrevSlide}>
      <svg fill="#666" viewBox="0 0 24 24" width="1em" height="1em" ><path d="M14.791 5.207 8 12l6.793 6.793a1 1 0 1 1-1.415 1.414l-7.5-7.5a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.415 1.414z"></path></svg>
      </button>
      <button className={cx("next-button")} onClick={goToNextSlide}>
      <svg fill="#666" viewBox="0 0 24 24" width="1em" height="1em" ><path d="M9.209 5.207 16 12l-6.791 6.793a1 1 0 1 0 1.415 1.414l7.5-7.5a1 1 0 0 0 0-1.414l-7.5-7.5a1 1 0 1 0-1.415 1.414z"></path></svg>
      </button>
    </div>
  );
};
  
export default MultiItemSlider;

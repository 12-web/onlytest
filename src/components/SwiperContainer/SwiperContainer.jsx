import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwiperContainer.scss";
import { useContext } from "react";
import { PeriodsContext } from "../../contexts/PeriodsContext";

export const SwiperContainer = ({ name, activeSlideIndex }) => {
  const data = useContext(PeriodsContext);

  return (
    <div className="custom-swiper">
      <button
        className={`custom-swiper__arrow custom-swiper__arrow_dir_left custom-swiper__arrow_dir_left-${name}`}
      />
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        breakpoints={{
          600: {
            slidesPerView: "auto",
            spaceBetween: 80,
          },
        }}
        navigation={{
          prevEl: `.custom-swiper__arrow_dir_left-${name}`,
          nextEl: `.custom-swiper__arrow_dir_right-${name}`,
        }}
        modules={[Keyboard, Navigation]}
        className="custom-swiper__container"
      >
        {data[activeSlideIndex].dates.map((item, index, nodeRef) => (
          <SwiperSlide key={index + activeSlideIndex} className="slide">
            <h3 className="custom-swiper__number">{item.year}</h3>
            <p className="custom-swiper__text">{item.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`custom-swiper__arrow custom-swiper__arrow_dir_right custom-swiper__arrow_dir_right-${name}`}
      />
    </div>
  );
};

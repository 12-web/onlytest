import { useEffect, useState } from "react";
import { Pagination, Keyboard, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Dates.css";
import { Cyrcle } from "../Cyrcle/Cyrcle";

// export const SlideNextButton = () => {
//   const swiper = useSwiper();

//   return (
//     <button className="swiper-button-next" onClick={() => swiper.slideNext()}>
//       Slide to the next slide
//     </button>
//   );
// };

const data = [
  {
    name: "Кино",
    start: 2015,
    end: 2022,
    dates: [
      {
        year: 2015,
        description:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        year: 2016,
        description:
          "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
      },
      {
        year: 2017,
        description:
          "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
      },
      {
        year: 2018,
        description: "Старт космического аппарата",
      },
    ],
  },
  {
    name: "Литература",
    start: 1992,
    end: 1997,
    dates: [
      {
        year: 1992,
        description:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        year: 1993,
        description:
          "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
      },
      {
        year: 1997,
        description:
          "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
      },
      {
        year: 1997,
        description: "Старт космического аппарата",
      },
    ],
  },
  {
    name: "Кино",
    start: 2000,
    end: 2002,
    dates: [
      {
        year: 2000,
        description:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        year: 2001,
        description:
          "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
      },
      {
        year: 2002,
        description:
          "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
      },
      {
        year: 2003,
        description: "Старт космического аппарата",
      },
    ],
  },
  {
    name: "Кино",
    start: 2000,
    end: 2002,
    dates: [
      {
        year: 2000,
        description:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        year: 2001,
        description:
          "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
      },
      {
        year: 2002,
        description:
          "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
      },
      {
        year: 2003,
        description: "Старт космического аппарата",
      },
    ],
  },
  {
    name: "Кино",
    start: 2000,
    end: 2002,
    dates: [
      {
        year: 2000,
        description:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        year: 2001,
        description:
          "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
      },
      {
        year: 2002,
        description:
          "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
      },
      {
        year: 2003,
        description: "Старт космического аппарата",
      },
    ],
  },
  {
    name: "Кино",
    start: 2000,
    end: 2002,
    dates: [
      {
        year: 2000,
        description:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        year: 2001,
        description:
          "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
      },
      {
        year: 2002,
        description:
          "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
      },
      {
        year: 2003,
        description: "Старт космического аппарата",
      },
    ],
  },
];
export const Dates = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const increaseActiveIndex = () => {
    setActiveSlideIndex(activeSlideIndex + 1);
  };
  const decreaseActiveIndex = () => {
    setActiveSlideIndex(activeSlideIndex - 1);
  };
  const formatIndex = (index: number) => {
    return index < 10 ? `0${index}` : index;
  };

  return (
    <section className="container">
      <h2 className="title">Исторические даты</h2>
      <div className="current-contaner">
        <Cyrcle
          data={data}
          changeActiveIndex={setActiveSlideIndex}
          activeIndex={activeSlideIndex}
        />
        <span className="current-date current-date-left">
          {data[activeSlideIndex].start}
        </span>
        <span className="current-date current-date-right">
          {data[activeSlideIndex].end}
        </span>
      </div>
      <p className="main-count-container">
        <span className="main-count-count">
          {formatIndex(activeSlideIndex + 1)}
        </span>
        <span>/</span>
        <span className="main-count-length">{formatIndex(data.length)}</span>
      </p>

      <div className="arrow-main-container">
        <button
          onClick={decreaseActiveIndex}
          className={`arrow-main-left ${
            activeSlideIndex === 0 && "arrow-main_disabled"
          }`}
          disabled={activeSlideIndex === 0}
        />
        <button
          onClick={increaseActiveIndex}
          className={`arrow-main-right ${
            activeSlideIndex === data.length - 1 && "arrow-main_disabled"
          }`}
          disabled={activeSlideIndex === data.length - 1}
        />
      </div>

      <div className="swiper-container">
        <button className="arrow-left" />
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={80}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
          }}
          modules={[Keyboard, Pagination, Navigation]}
          className="second-swiper"
        >
          {data[activeSlideIndex].dates.map((year, index) => (
            <SwiperSlide key={index} className="slide">
              <h3 className="number">{year.year}</h3>
              <p className="text">{year.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="arrow-right" />
      </div>
    </section>
  );
};

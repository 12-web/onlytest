import { FC, useState } from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { CurrentContainer } from "../CurrentContainer/CurrentContainer";
import { MainSwiperCounter } from "../MainSwiperCounter/MainSwiperCounter";
import { MainSwiperArrows } from "../MainSwiperArrows/MainSwiperArrows";
import { SwiperContainer } from "../SwiperContainer/SwiperContainer";
import { Bullets } from "../Bullets/Bullets";

import "./Dates.scss";

type DatesProps = {
  name: string;
};
export const Dates: FC<DatesProps> = ({ name }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const increaseActiveIndex = () => setActiveSlideIndex(activeSlideIndex + 1);
  const decreaseActiveIndex = () => setActiveSlideIndex(activeSlideIndex - 1);

  return (
    <section className="container">
      <SectionTitle>Исторические даты</SectionTitle>
      <CurrentContainer
        name={name}
        activeSlideIndex={activeSlideIndex}
        setActiveSlideIndex={setActiveSlideIndex}
      />
      <MainSwiperCounter activeSlideIndex={activeSlideIndex} />
      <MainSwiperArrows
        decreaseActiveIndex={decreaseActiveIndex}
        activeSlideIndex={activeSlideIndex}
        increaseActiveIndex={increaseActiveIndex}
      />
      <SwiperContainer name={name} activeSlideIndex={activeSlideIndex} />
      <Bullets
        activeSlideIndex={activeSlideIndex}
        setActiveSlideIndex={setActiveSlideIndex}
      />
    </section>
  );
};

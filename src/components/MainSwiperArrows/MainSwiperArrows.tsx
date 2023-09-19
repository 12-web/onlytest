import { FC, useContext } from "react";
import { PeriodsContext } from "../../contexts/PeriodsContext";
import { ArrowButton } from "../ArrowButton/ArrowButton";
import "./MainSwiperArrows.scss";

type MainSwiperArrowsProps = {
  decreaseActiveIndex: () => void;
  increaseActiveIndex: () => void;
  activeSlideIndex: number;
};
export const MainSwiperArrows: FC<MainSwiperArrowsProps> = ({
  decreaseActiveIndex,
  activeSlideIndex,
  increaseActiveIndex,
}) => {
  const data = useContext(PeriodsContext);

  return (
    <div className="arrow-main__container">
      <ArrowButton
        onClick={decreaseActiveIndex}
        dir="left"
        disabled={activeSlideIndex === 0}
      />
      <ArrowButton
        onClick={increaseActiveIndex}
        dir="right"
        disabled={activeSlideIndex === data.length - 1}
      />
    </div>
  );
};

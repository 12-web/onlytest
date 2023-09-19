import { useEffect, useRef, useState, useContext, FC } from "react";
import gsap from "gsap";
import { Circle } from "../Circle/Circle";
import { CurrentYear } from "../CurrentYear/CurrentYear";
import { PeriodsContext } from "../../contexts/PeriodsContext";
import "./CurrentContainer.scss";

type CurrentContainerProps = {
  name: string;
  activeSlideIndex: number;
  setActiveSlideIndex: (id: number) => void;
};

export const CurrentContainer: FC<CurrentContainerProps> = ({
  name,
  activeSlideIndex,
  setActiveSlideIndex,
}) => {
  const data = useContext(PeriodsContext);

  const [startValue, setStartValue] = useState(data[activeSlideIndex].start);
  const [endValue, setEndValue] = useState(data[activeSlideIndex].end);
  const [endResult, setEndResult] = useState(data[activeSlideIndex].end);
  const [startResult, setStartResult] = useState(data[activeSlideIndex].start);
  const prevStartValue = useRef(data[activeSlideIndex].start);
  const prevEndValue = useRef(data[activeSlideIndex].end);

  useEffect(() => {
    prevStartValue.current = startValue;
    prevEndValue.current = endValue;
  }, [startValue, endValue]);

  useEffect(() => {
    setStartValue(data[activeSlideIndex].start);
    setEndValue(data[activeSlideIndex].end);
  }, [activeSlideIndex]);

  useEffect(() => {
    const start = startValue + startValue - prevStartValue.current;
    const end = endValue + endValue - prevEndValue.current;
    gsap.fromTo(
      `.current__year-left-${name}`,
      { textContent: startResult },
      {
        textContent: start,
        duration: 1,
        snap: { textContent: 1 },
      }
    );
    gsap.fromTo(
      `.current__year-right-${name}`,
      { textContent: endResult },
      {
        textContent: end,
        duration: 1,
        snap: { textContent: 1 },
      }
    );
    setStartResult(start);
    setEndResult(end);
  }, [startValue, endValue]);

  return (
    <div className="current__container">
      <Circle
        name={name}
        changeActiveIndex={setActiveSlideIndex}
        activeIndex={activeSlideIndex}
      />
      <CurrentYear name={name} format="left">
        {startResult}
      </CurrentYear>
      <CurrentYear name={name} format="right">
        {endResult}
      </CurrentYear>
    </div>
  );
};

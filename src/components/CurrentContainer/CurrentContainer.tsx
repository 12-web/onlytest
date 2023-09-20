import { useEffect, useState, useContext, FC } from "react";
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

/**
 * CurrentContainer - контенер, который содержит min и max года активного свайпера
 * name - имя свайпера
 * activeSlideIndex - индекс антивного свайпера
 * setActiveSlideIndex - функция установки активного спайпера
 */

export const CurrentContainer: FC<CurrentContainerProps> = ({
  name,
  activeSlideIndex,
  setActiveSlideIndex,
}) => {
  const data = useContext(PeriodsContext);
  const periodStart = data[activeSlideIndex].start;
  const periodEnd = data[activeSlideIndex].end;
  /** начальные значения для элементов, содержащих начало и конец периода */
  const [initialStart] = useState(periodStart);
  const [initialEnd] = useState(periodEnd);
  const [startResult, setStarResult] = useState(periodStart);
  const [endResult, setEndResult] = useState(periodEnd);

  /** смена значений в элементах, содержащих начало и конец периода */
  useEffect(() => {
    setStarResult(periodStart);
    setEndResult(periodEnd);
  }, [periodStart, periodEnd]);

  /** анимирование смены цифр начала и конца периода в свайпере */
  useEffect(() => {
    gsap.to(`.current__year-left-${name}`, {
      textContent: startResult,
      duration: 1,
      snap: { textContent: 1 },
    });
    gsap.to(`.current__year-right-${name}`, {
      textContent: endResult,
      duration: 1,
      snap: { textContent: 1 },
    });
  }, [startResult, endResult, name]);

  return (
    <div className="current__container">
      <Circle
        name={name}
        changeActiveIndex={setActiveSlideIndex}
        activeIndex={activeSlideIndex}
      />
      <CurrentYear name={name} format="left">
        {initialStart}
      </CurrentYear>
      <CurrentYear name={name} format="right">
        {initialEnd}
      </CurrentYear>
    </div>
  );
};

import { FC, useContext } from "react";
import { PeriodsContext } from "../../contexts/PeriodsContext";
import { CircleButton } from "../CircleButton/CircleButton";
import { CircleCaption } from "../CircleCaption/CircleCaption";
import "./CircleButtonContainer.scss";

type CircleButtonContainerProps = {
  changeActiveIndex: (index: number) => void;
  index: number;
  dataLength: number;
  activeIndex: number;
};
export const CircleButtonContainer: FC<CircleButtonContainerProps> = ({
  changeActiveIndex,
  index,
  dataLength,
  activeIndex,
}) => {
  const data = useContext(PeriodsContext);

  return (
    <div
      key={index}
      style={{
        transform: `rotate(calc(${(360 * (index + 1) - 180) / dataLength}deg))`,
      }}
      className="circle__button-wrapper"
    >
      <div
        className="circle__button-container"
        style={{
          transform: `rotate(calc(-${
            (360 * (index + 1) - 180) / dataLength -
            (activeIndex &&
              (index < activeIndex ? activeIndex * 60 - 360 : activeIndex * 60))
          }deg))`,
        }}
      >
        <CircleButton
          index={index}
          isActive={activeIndex === index}
          changeActiveIndex={changeActiveIndex}
        />
        <CircleCaption isActive={activeIndex === index}>
          {data[index].name}
        </CircleCaption>
      </div>
    </div>
  );
};

import { FC, useContext, useEffect } from "react";
import "./Circle.scss";
import gsap from "gsap";
import { CircleButtonContainer } from "../CircleButtonContainer/CircleButtonContainer";
import { PeriodsContext } from "../../contexts/PeriodsContext";

type CircleProps = {
  name: string;
  changeActiveIndex: (id: number) => void;
  activeIndex: number;
};
export const Circle: FC<CircleProps> = ({
  name,
  changeActiveIndex,
  activeIndex,
}) => {
  const data = useContext(PeriodsContext);

  const rotation =
    activeIndex * 60 > 225 ? 360 - activeIndex * 60 : -activeIndex * 60;

  useEffect(() => {
    gsap.to(`.circle-${name}`, {
      rotation: rotation,
      duration: 0.6,
      ease: "sine.in",
    });
  }, [rotation, name]);

  return (
    <div className="circle">
      <div className={`circle__container circle-${name}`}>
        {data.map((_, index) => (
          <CircleButtonContainer
            key={index}
            changeActiveIndex={changeActiveIndex}
            index={index}
            dataLength={data.length}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </div>
  );
};

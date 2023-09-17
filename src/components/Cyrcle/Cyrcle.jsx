import "./styles.css";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { CircleButton } from "../CircleButton/CircleButton";

export const Cyrcle = ({ data, changeActiveIndex, activeIndex }) => {
  useEffect(() => {
    gsap.to(".cyrcle", {
      rotation:
        activeIndex * 60 > 225 ? 360 - activeIndex * 60 : -activeIndex * 60,
      ease: "none",
    });
  }, [changeActiveIndex, activeIndex]);

  return (
    <div className="cyrcle">
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            transform: `rotate(calc(${
              (360 * (index + 1) - 180) / data.length
            }deg))`,
          }}
          className="cyrcle__button-container"
        >
          <CircleButton
            changeActiveIndex={changeActiveIndex}
            index={index}
            dataLength={data.length}
            activeIndex={activeIndex}
          />
        </div>
      ))}
    </div>
  );
};

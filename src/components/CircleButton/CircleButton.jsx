import { useState } from "react";
import gsap from "gsap";
import styles from "./CircleButton.module.css";

export const CircleButton = ({
  changeActiveIndex,
  index,
  dataLength,
  activeIndex,
}) => {
  const [isShown, setIsShown] = useState(false);
  console.log([
    index,
    activeIndex,
    index < activeIndex,
    `rotate(calc(-${
      (360 * (index + 1) - 180) / dataLength -
      (activeIndex &&
        (index < activeIndex ? activeIndex * 60 - 360 : activeIndex * 60))
    }deg))`,
  ]);
  const handleClick = (e, index) => {
    changeActiveIndex(index);

    // gsap.to(".cyrcle", {
    //   rotation: 30,
    //   ease: "none",
    // });

    // gsap.fromTo("#circle-button", {
    //   rotation: +30,
    //   ease: "none",
    // });
  };
  const rotateValue = (360 * (index + 1) - 180) / dataLength;
  return (
    <button
      id="circle-button"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={(e) => handleClick(e, index)}
      style={{
        transform: `rotate(calc(-${
          (360 * (index + 1) - 180) / dataLength -
          (activeIndex &&
            (index < activeIndex ? activeIndex * 60 - 360 : activeIndex * 60))
        }deg))`,
      }}
      className={`${styles.button} ${
        (activeIndex === index || isShown) && styles.buttonActive
      }`}
    >
      {(activeIndex === index || isShown) && index + 1}
    </button>
  );
};

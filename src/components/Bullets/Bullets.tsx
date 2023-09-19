import { FC, useContext } from "react";
import { PeriodsContext } from "../../contexts/PeriodsContext";
import "./Bullets.scss";

type BulletsProps = {
  activeSlideIndex: number;
  setActiveSlideIndex: (index: number) => void;
};
export const Bullets: FC<BulletsProps> = ({
  activeSlideIndex,
  setActiveSlideIndex,
}) => {
  const data = useContext(PeriodsContext);

  return (
    <div className="bullets">
      {data.map((_, index) => (
        <button
          onClick={() => setActiveSlideIndex(index)}
          key={index}
          className={`bullets__item ${
            index === activeSlideIndex && "bullets__item_active"
          }`}
        />
      ))}
    </div>
  );
};

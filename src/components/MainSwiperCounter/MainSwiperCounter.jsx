import { useContext } from "react";
import { PeriodsContext } from "../../contexts/PeriodsContext";
import "./MainSwiperCounter.scss";

export const MainSwiperCounter = ({ activeSlideIndex }) => {
  const formatIndex = (index) => (index < 10 ? `0${index}` : index);
  const data = useContext(PeriodsContext);

  return (
    <p className="main-counter__container">
      {`${formatIndex(activeSlideIndex + 1)}/${formatIndex(data.length)}`}
    </p>
  );
};

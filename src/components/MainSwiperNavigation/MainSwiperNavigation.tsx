import { FC, useContext } from 'react';
import { PeriodsContext } from '../../contexts/PeriodsContext';
import { ArrowButton } from '../ArrowButton/ArrowButton';
import { Bullets } from '../Bullets/Bullets';
import './MainSwiperNavigation.scss';

type MainSwiperNavigationProps = {
  activeSlideIndex: number;
  setActiveSlideIndex: (id: number) => void;
};

/**
 * MainSwiperArrows - блок, содержащий навигационные элементу между сваперами
 * activeSlideIndex - индекс активного свайпера
 * setActiveSlideIndex - функция установки произвольного значения активного свайпера
 */

export const MainSwiperNavigation: FC<MainSwiperNavigationProps> = ({
  activeSlideIndex,
  setActiveSlideIndex,
}) => {
  const data = useContext(PeriodsContext);

  return (
    <div className='arrow-main__container'>
      <ArrowButton
        onClick={() => setActiveSlideIndex(activeSlideIndex - 1)}
        dir='left'
        disabled={activeSlideIndex === 0}
      />
      <ArrowButton
        onClick={() => setActiveSlideIndex(activeSlideIndex + 1)}
        dir='right'
        disabled={activeSlideIndex === data.length - 1}
      />
      <Bullets
        activeSlideIndex={activeSlideIndex}
        setActiveSlideIndex={setActiveSlideIndex}
      />
    </div>
  );
};

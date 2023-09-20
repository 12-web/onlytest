import { FC, useContext } from 'react';
import { PeriodsContext } from '../../contexts/PeriodsContext';
import './MainSwiperCounter.scss';

type MainSwiperCounterProps = {
  activeSlideIndex: number;
};

/**
 * MainSwiperCounter - элемент счетчика свайперов
 * activeSlideIndex - индекс активного свайпера
 */

export const MainSwiperCounter: FC<MainSwiperCounterProps> = ({
  activeSlideIndex,
}) => {
  const data = useContext(PeriodsContext);
  const formatIndex = (index: number) => (index < 10 ? `0${index}` : index);

  return (
    <p className='main-counter__container'>
      {`${formatIndex(activeSlideIndex + 1)}/${formatIndex(data.length)}`}
    </p>
  );
};

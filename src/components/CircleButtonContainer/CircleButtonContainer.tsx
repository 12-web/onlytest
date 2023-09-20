import { FC, useContext } from 'react';
import { PeriodsContext } from '../../contexts/PeriodsContext';
import { CircleButton } from '../CircleButton/CircleButton';
import { CircleCaption } from '../CircleCaption/CircleCaption';
import './CircleButtonContainer.scss';

type CircleButtonContainerProps = {
  changeActiveIndex: (index: number) => void;
  index: number;
  activeIndex: number;
};

/**
 * CircleButtonContainer - элемент кнопки в круге
 * changeActiveIndex - функция изменения активного индекса
 * index - индекс свайпера, который станет активным, нажав на кнопку
 * activeIndex - индекс активного свайпера
 */

export const CircleButtonContainer: FC<CircleButtonContainerProps> = ({
  changeActiveIndex,
  index,
  activeIndex,
}) => {
  const data = useContext(PeriodsContext);
  /** угол вращения для начальной позиции элемента */
  const positionDegrees = (360 * (index + 1) - 180) / data.length;
  /** угол вращения для стабилизации элемента */
  const equilibDegrees = (activeIndex * 360) / data.length;
  /** направление вращение в зависимости от того, элемент находится правее или левеее активной кнопки */
  const directRotation =
    index < activeIndex ? equilibDegrees - 360 : equilibDegrees;

  return (
    <div
      key={index}
      style={{
        transform: `rotate(calc(${positionDegrees}deg))`,
      }}
      className='circle__button-wrapper'
    >
      <div
        className='circle__button-container'
        style={{
          transform: `rotate(calc(-${positionDegrees - directRotation}deg))`,
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

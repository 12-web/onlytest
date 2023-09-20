import { FC, useContext, useEffect } from 'react';
import './Circle.scss';
import gsap from 'gsap';
import { CircleButtonContainer } from '../CircleButtonContainer/CircleButtonContainer';
import { PeriodsContext } from '../../contexts/PeriodsContext';

type CircleProps = {
  name: string;
  changeActiveIndex: (id: number) => void;
  activeIndex: number;
};

/**
 * Circle - элемент круга с кнопками переключения между свайперами
 * name - имя свайпера
 * changeActiveIndex - функция изменения активного индекса свайпера
 * activeIndex - индекс активного свайпера
 */

export const Circle: FC<CircleProps> = ({
  name,
  changeActiveIndex,
  activeIndex,
}) => {
  const data = useContext(PeriodsContext);
  const itemRotation = 360 / data.length;
  const rotation =
    activeIndex * itemRotation > 225
      ? 360 - activeIndex * itemRotation
      : -activeIndex * itemRotation;

  useEffect(() => {
    gsap.to(`.circle-${name}`, {
      rotation: rotation,
      duration: 0.6,
      ease: 'sine.in',
    });
  }, [rotation, name]);

  return (
    <div className='circle'>
      <div className={`circle__container circle-${name}`}>
        {data.map((_, index) => (
          <CircleButtonContainer
            key={index}
            changeActiveIndex={changeActiveIndex}
            index={index}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </div>
  );
};

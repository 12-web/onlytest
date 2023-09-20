import { FC, useState } from 'react';
import './CircleButton.scss';

type CircleButtonProps = {
  index: number;
  isActive: boolean;
  changeActiveIndex: (index: number) => void;
};

/**
 * CircleButton - элемент кнопки в круге
 * index - индекс свайпера, который станет активным, нажав на кноку
 * isActive - переключатель состояния кнопки (в зависимости от состояния свайпера)
 * changeActiveIndex - функция изменения активного индекса
 */

export const CircleButton: FC<CircleButtonProps> = ({
  index,
  isActive,
  changeActiveIndex,
}) => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (index: number) => changeActiveIndex(index);

  return (
    <button
      id='circle-button'
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={() => handleClick(index)}
      className={`circle__button ${
        (isActive || isShown) && 'circle__button_active'
      }`}
    >
      {(isActive || isShown) && index + 1}
    </button>
  );
};

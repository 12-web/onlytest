import { FC } from 'react';
import './ArrowButton.scss';

type ArrowButtonProps = {
  onClick: () => void;
  disabled: boolean;
  dir: string;
};

/**
 * ArrowButton - элемент кнопки переключения между свайперами
 * onClick - функция нажатия на кнопку (переключение между свайперами)
 * disabled - переключатель состояния кнопки
 * {dir} - направление кнопки (влево/вправо)
 */
export const ArrowButton: FC<ArrowButtonProps> = ({
  onClick,
  disabled,
  dir = 'right',
}) => {
  return (
    <button
      onClick={onClick}
      className={`arrow-main arrow-main_dir_${dir} ${
        disabled && 'arrow-main_disabled'
      }`}
      disabled={disabled}
    />
  );
};

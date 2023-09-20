import { FC } from 'react';
import './CircleCaption.scss';

type CircleCaptionProps = {
  isActive: boolean;
  children: string | JSX.Element | JSX.Element[];
};

/**
 * CircleCaption - подпись активной кнопки
 * isActive - состояние надписи, в зависимости от котого переключаются стили
 * children - текст надписи
 */

export const CircleCaption: FC<CircleCaptionProps> = ({
  isActive,
  children,
}) => {
  return (
    <span
      className={`circle__caption ${isActive && 'circle__caption_active'} `}
    >
      {children}
    </span>
  );
};

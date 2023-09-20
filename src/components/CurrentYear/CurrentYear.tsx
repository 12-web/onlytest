import { FC } from 'react';
import './CurrentYear.scss';

type CurrentYearProps = {
  name: string;
  format: string;
  children: number | JSX.Element | JSX.Element[];
};

/**
 * CurrentYear - элемент года
 * name - имя свайпера
 * format - формат года, на основании которого задается стилистика
 * children - текст элемента (год)
 */

export const CurrentYear: FC<CurrentYearProps> = ({
  name,
  format,
  children,
}) => {
  return (
    <span
      className={`current__year current__year-${format} current__year-${format}-${name}`}
    >
      {children}
    </span>
  );
};

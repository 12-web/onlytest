import { FC } from 'react';
import './SectionTitle.scss';

type SectionTitleProps = {
  children: string;
};

/**
 * SectionTitle - элемент заголовка секции
 * children - текст заголовка
 */

export const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
  return <h2 className='title'>{children}</h2>;
};

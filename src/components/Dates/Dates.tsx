import { FC, useState } from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { CurrentContainer } from '../CurrentContainer/CurrentContainer';
import { MainSwiperCounter } from '../MainSwiperCounter/MainSwiperCounter';
import { MainSwiperNavigation } from '../MainSwiperNavigation/MainSwiperNavigation';
import { SwiperContainer } from '../SwiperContainer/SwiperContainer';

import './Dates.scss';

type DatesProps = {
  name: string;
};

/**
 * Dates - радел, содержащий тематические свайперы
 * name - имя свайпера
 */

export const Dates: FC<DatesProps> = ({ name }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <section className='container'>
      <SectionTitle>Исторические даты</SectionTitle>
      <CurrentContainer
        name={name}
        activeSlideIndex={activeSlideIndex}
        setActiveSlideIndex={setActiveSlideIndex}
      />
      <MainSwiperCounter activeSlideIndex={activeSlideIndex} />
      <MainSwiperNavigation
        activeSlideIndex={activeSlideIndex}
        setActiveSlideIndex={setActiveSlideIndex}
      />
      <SwiperContainer name={name} activeSlideIndex={activeSlideIndex} />
    </section>
  );
};

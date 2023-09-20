import { FC, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation } from 'swiper';
import { PeriodsContext } from '../../contexts/PeriodsContext';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SwiperContainer.scss';

type SwiperContainerTypes = {
  name: string;
  activeSlideIndex: number;
};
/**
 * SwiperContainer - контейнер, содержащий основной свайпер
 * name - имя свайпера
 * activeSlideIndex - индекс активного свайпера
 */

export const SwiperContainer: FC<SwiperContainerTypes> = ({
  name,
  activeSlideIndex,
}) => {
  const data = useContext(PeriodsContext);

  return (
    <div className='custom-swiper'>
      <button
        className={`custom-swiper__arrow custom-swiper__arrow_dir_left custom-swiper__arrow_dir_left-${name}`}
      />
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        breakpoints={{
          1024: {
            spaceBetween: 80,
          },
          600: {
            spaceBetween: 50,
          },
        }}
        navigation={{
          prevEl: `.custom-swiper__arrow_dir_left-${name}`,
          nextEl: `.custom-swiper__arrow_dir_right-${name}`,
        }}
        modules={[Keyboard, Navigation]}
        className='custom-swiper__container'
      >
        {data[activeSlideIndex].dates.map((period, index) => (
          <SwiperSlide key={index + activeSlideIndex} className='slide'>
            <h3 className='custom-swiper__number'>{period.year}</h3>
            <p className='custom-swiper__text'>{period.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`custom-swiper__arrow custom-swiper__arrow_dir_right custom-swiper__arrow_dir_right-${name}`}
      />
    </div>
  );
};

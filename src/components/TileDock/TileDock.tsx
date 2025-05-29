'use client';

import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper as SwiperClass } from 'swiper';
import { Navigation } from 'swiper/modules';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '../Card/Card';

type Playlist = {
  title: string;
  seriesId: string;
  mediaid: string;
  description?: string;
  images: { src: string }[];
};

type CardCarouselProps = {
  items: Playlist[];
  cardAspectRatio?: number;
  isCardEnhanced?: boolean;
  onCardClick?: (seriesId: string, mediaid: string) => void;
  TopTenNumber?: number[]; // Added this
};

export default function Tile({ TopTenNumber = [], items, cardAspectRatio = 16 / 9, isCardEnhanced = true, onCardClick }: CardCarouselProps) {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      setActiveIndex(swiperRef.current.realIndex);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setActiveIndex(swiperRef.current.realIndex);
    }
  };

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1280) setSlidesPerView(5);
      else if (width >= 1024) setSlidesPerView(4);
      else if (width >= 768) setSlidesPerView(3);
      else if (width >= 640) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  return (
    <div className=' relative mx-14 h-50 group hover:z-20 z-10 transition-all duration-300 '>
      {/* Chevron Buttons */}
      <button
        onClick={handlePrev}
        className='absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'
        aria-label='Previous Slide'
      >
        <ChevronLeft className='w-6 h-6 text-white transition-transform duration-500 ease-in-out hover:scale-125' />
      </button>

      <button
        onClick={handleNext}
        className='absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'
        aria-label='Next Slide'
      >
        <ChevronRight className='w-6 h-6 text-white transition-transform duration-500 ease-in-out hover:scale-125' />
      </button>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        rewind={true}
        speed={500}
        spaceBetween={12}
        slidesPerView={slidesPerView}
        slidesPerGroup={Math.min(slidesPerView, items.length)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className='!overflow-visible'
        navigation={false}
      >
        {items.map((item, index) => {
          const isVisible = index >= activeIndex && index < activeIndex + slidesPerView;
          const showTopTen = TopTenNumber?.includes(index);

          return (
            <SwiperSlide key={index} className={` ${isVisible ? 'opacity-100' : 'opacity-50'}`}>
              <Card item={item} cardAspectRatio={cardAspectRatio} isCardEnhanced={isCardEnhanced} onClick={onCardClick} isTileDock showTopTen={showTopTen} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

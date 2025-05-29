'use client';

import { useRouter } from 'next/navigation';
import TileDock from '../TileDock/TileDock';

type Show = {
  title: string;
  seriesId: string;
  mediaid: string;
  images: { src: string }[];
};

type Rail = {
  preset_name: string;
  items: Show[];
};

export default function ShelfForHome({ rails, cardAspectRatio = 16 / 9 }: { rails: Rail[]; cardAspectRatio?: number }) {
  const router = useRouter();

  const handleClick = (seriesId: string, mediaid: string) => {
    router.push(`/series/${seriesId}?mediaId=${mediaid}`);
  };

  return (
    <div className='bg-black text-white w-full overflow-x-hidden'>
      {rails.map((rail, index) => (
        <div key={index} className='w-full mx-auto'>
          <h1 className='text-3xl font-bold mb-2 pl-15'>{rail.preset_name}</h1>
          <TileDock items={rail.items} cardAspectRatio={cardAspectRatio} onCardClick={handleClick} />
        </div>
      ))}
    </div>
  );
}

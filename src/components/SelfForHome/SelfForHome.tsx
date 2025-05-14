'use client';

import { useRouter } from 'next/navigation';
import TileDock from '../TileDock/TileDock';

type Show = {
  title: string;
  seriesId: string;
  mediaid: string;
  images: { src: string }[];
};

export default function ShelfForHome({ items, cardAspectRatio = 16 / 9 }: { items: Show[]; cardAspectRatio?: number }) {
  const router = useRouter();

  const handleClick = (seriesId: string, mediaid: string) => {
    router.push(`/series/${seriesId}?mediaId=${mediaid}`);
  };

  return (
    <div className='bg-black text-white min-h-screen p-6 w-full'>
      <div className='w-full overflow-x-hidden mx-auto'>
        <h1 className='text-3xl font-bold mb-6'>Shows</h1>
        <TileDock items={items} cardAspectRatio={cardAspectRatio} onCardClick={handleClick} />
        <h1 className='text-3xl font-bold mb-6'>Showsfgadhgffggbksdyvbkjsdbcjhbd vljsbdvlugdbliubsdlkvcjbSDkjvblksjdbvlkjsdbvlkjsdbvlsdbvlkbv;skd</h1>
        <TileDock items={items} cardAspectRatio={cardAspectRatio} onCardClick={handleClick} />
      </div>
    </div>
  );
}

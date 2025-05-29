'use client';

import { useRouter } from 'next/navigation';
import CardGrid from '../CardGrid/CardGrid';

type Show = {
  title: string;
  seriesId: string;
  mediaid: string;
  images: { src: string }[];
};

export default function ShelfForSeries({ items, cardAspectRatio = 16 / 9 }: { items: Show[]; cardAspectRatio?: number }) {
  const router = useRouter();

  const handleClick = (seriesId: string, mediaid: string) => {
    router.push(`/series/${seriesId}?mediaId=${mediaid}`);
  };

  return (
    <div className='bg-black text-white min-h-screen px-12 py-6 w-full'>
      <div className=' mx-auto'>
        <h1 className='text-3xl font-bold mb-6'>Shows</h1>
        <CardGrid items={items} cardAspectRatio={cardAspectRatio} onCardClick={handleClick} />
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';
import CardGrid from '../CardGrid/CardGrid';
import ShowBanner from '../ShowBanner/ShowBanner';

type Playlist = {
  title: string;
  seriesId: string;
  description?: string;
  images: { src: string }[];
};

type Media = {
  title: string;
  seriesId: string;
  description?: string;
  images: { src: string }[];
};

export default function ShelfForCuratedList({ playlist, media, cardAspectRatio = 16 / 9 }: { playlist: Playlist[]; cardAspectRatio?: number; media: Media[] }) {
  const [activeTab, setActiveTab] = useState('Episodes');
  console.log('items', media);

  const featuredContent = media && media.length > 0 ? media[0] : null;

  return (
    <div className='bg-black text-white min-h-screen w-full'>
      <ShowBanner
        title={featuredContent?.title}
        subtitle='25'
        description={featuredContent?.description}
        episodeCount={20}
        backgroundImage={featuredContent?.images?.[7]?.src}
        onTabChange={setActiveTab}
      />

      <div className='container mx-auto p-6'>
        <h2 className='text-3xl font-bold mb-6'>Shows</h2>
        <CardGrid items={playlist} cardAspectRatio={cardAspectRatio} isCardEnhanced={true} />
      </div>
    </div>
  );
}

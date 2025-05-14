import { useState } from 'react';

export default function ShowBanner({
  title = 'Gather',
  logo,
  subtitle = '25',
  description = 'Every time zone. Every language. Every denomination. Every generation. For 25 hours we will all be connected at once lifting up praise and prayer to heaven. In 2025, for 25 hours, the Global Church gathered across six continents for a time of prayer, worship, repentance, and commissioning.',
  episodeCount = 20,
  backgroundImage = '/api/placeholder/1200/600',
  onTabChange = (tab: string) => {},
}: {
  title?: string;
  logo?: string;
  subtitle?: string;
  description?: string;
  episodeCount?: number;
  backgroundImage?: string;
  onTabChange?: (tab: string) => void;
}) {
  const [activeTab, setActiveTab] = useState('Episodes');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className='relative w-full aspect-[16/6] max-h-[700px]'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-black to-transparent z-10'></div>
      <div
        className='absolute inset-0 bg-cover bg-center z-0'
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundPosition: 'center right',
        }}
      ></div>

      {/* Content positioned over the background */}
      <div className='relative z-20 h-full flex flex-col justify-center p-6 md:p-12 max-w-3xl'>
        {/* Logo or Title */}
        <div className='flex items-center mb-4'>
          {logo ? <img src={logo} alt={title} className='h-36 object-contain' /> : <h1 className='text-6xl font-bold ml-4 mt-6'>{title}</h1>}
        </div>

        {/* Action Buttons */}
        <div className='flex space-x-4 mb-6 mt-6'>
          <button className='bg-blue-600 px-6 py-2 rounded'>Login to start watching!</button>
          <button className='border border-white px-6 py-2 rounded flex items-center'>
            <span className='mr-2'>▶</span> Trailer
          </button>
          <button className='border border-white w-10 h-10 rounded-full flex items-center justify-center'>
            <span>→</span>
          </button>
        </div>

        {/* Episode count */}
        <p className='text-gray-300 mb-4'>{episodeCount} episodes</p>

        {/* Description */}
        <p className='text-lg mb-8'>{description}</p>

        {/* Tabs */}
        <div className='border-b border-gray-700 mt-auto'>
          <div className='flex space-x-8'>
            {['Episodes', 'About the Show', 'Recommended'].map((tab) => (
              <button key={tab} className={`pb-4 ${activeTab === tab ? 'border-b-2 border-white font-bold' : ''}`} onClick={() => handleTabChange(tab)}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

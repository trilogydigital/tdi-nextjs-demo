import Image from 'next/image';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { CardProps } from '../../../types/card';

export default function Card({ item, cardAspectRatio = 16 / 9, onClick, isCardEnhanced = false, isTileDock = false }: CardProps) {
  const { title, images, description, seriesId, mediaid } = item;
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick(seriesId, mediaid);
    }
  };

  return (
    <div
      className={`relative w-full group cursor-pointer ${isCardEnhanced ? 'transition-transform duration-700 ease-in-out' : 'transition-transform duration-300'}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={`w-full ${isHovering ? 'z-20 scale-104' : 'z-0 scale-100'} ${isCardEnhanced && isHovering && !isTileDock ? 'absolute' : 'relative'} ${
          isTileDock && 'relative'
        } ${isCardEnhanced ? 'transition-transform duration-400 ease-in-out delay-0' : 'transition-transform duration-300'}`}
        style={{ inset: 0 }}
      >
        <div
          className={`relative w-full overflow-hidden rounded-lg border-3 bg-black ${isHovering ? 'border-white' : 'border-transparent'} ${
            isCardEnhanced ? 'transition-colors duration-500 delay-50 ease-in-out' : 'transition-colors duration-300'
          }`}
        >
          <div style={{ aspectRatio: `${cardAspectRatio}` }} className='relative w-full'>
            <Image src={images[0].src} alt={title} fill className='object-cover rounded-t-md' sizes='(max-width: 768px) 100vw, 20vw' />
          </div>

          {isCardEnhanced && isHovering && (
            <div className='bg-gray-900 text-white text-xs font-semibold p-2 text-start rounded-b-md flex flex-col justify-start items-start gap-2 h-[200px] relative'>
              <h3 className='text-base'>{title}</h3>
              <p className='text-sm font-normal line-clamp-3'>{description}</p>

              {/* Navigation icon in bottom right */}
              <div className='absolute bottom-2 right-2 bg-gray-400 rounded-full p-2 hover:bg-gray-300 transition-colors'>
                <Send size={15} className='text-black' />
              </div>
            </div>
          )}
        </div>
      </div>
      {!isTileDock && <h3 className={`mt-2 text-sm font-medium break-words ${isCardEnhanced && isHovering ? 'opacity-0' : 'opacity-100'}`}>{title}</h3>}
    </div>
  );
}

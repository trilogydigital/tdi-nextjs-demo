import Image from 'next/image';

type Show = {
  title: string;
  images: { src: string }[];
};

type ShowCardProps = {
  item: Show;
  cardAspectRatio?: number;
};

export default function Card({ item, cardAspectRatio = 16 / 9 }: ShowCardProps) {
  const { title, images } = item;

  return (
    <div className='flex flex-col items-start'>
      <div className='group relative cursor-pointer transition-transform duration-300 hover:scale-105 w-full'>
        <div
          className='relative w-full overflow-hidden rounded-md border-3 border-transparent group-hover:border-white transition-colors duration-300'
          style={{ aspectRatio: `${cardAspectRatio}` }}
        >
          <Image src={images[0].src} alt={title} fill className='object-cover rounded-md' sizes='(max-width: 768px) 100vw, 20vw' />
        </div>
      </div>
      <h3 className='mt-2 text-sm font-medium break-words'>{title}</h3>
    </div>
  );
}

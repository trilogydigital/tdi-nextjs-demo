import Card from '../Card/Card';

type Show = {
  title: string;
  images: { src: string }[];
};

export default function ShelfForHome({ items, cardAspectRatio = 16 / 9 }: { items: Show[]; cardAspectRatio?: number }) {
  return (
    <div className='bg-black text-white min-h-screen p-6 w-full'>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-bold mb-6'>Shows</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-1 gap-y-4'>
          {items.map((item, index) => (
            <Card key={index} item={item} cardAspectRatio={cardAspectRatio} />
          ))}
        </div>
      </div>
    </div>
  );
}

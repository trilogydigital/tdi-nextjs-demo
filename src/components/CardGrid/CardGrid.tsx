import Card from '../Card/Card';

type playlist = {
  title: string;
  seriesId: string;
  mediaid: string;
  description?: string;
  images: { src: string }[];
};

type CardGridProps = {
  items: playlist[];
  cardAspectRatio?: number;
  isCardEnhanced?: boolean;
  onCardClick?: (seriesId: string, mediaid: string) => void;
};

export default function CardGrid({ items, cardAspectRatio = 16 / 9, isCardEnhanced = false, onCardClick }: CardGridProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-1 ${isCardEnhanced ? 'gap-y-12' : 'gap-y-4'}`}>
      {' '}
      {items.map((item, index) => (
        <Card key={index} item={item} cardAspectRatio={cardAspectRatio} isCardEnhanced={isCardEnhanced} onClick={onCardClick} />
      ))}
    </div>
  );
}

import React from 'react';
import Card from '@/components/Card/Card';

const CardContainer = ({ data }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-15 items-start justify-items-center gap-2'>
      {data.map((media) => {
        const { fields } = media;
        const { title, description1, image } = fields;
        return <Card key={media.sys.id} title={title} description={description1} image={image} />;
      })}
    </div>
  );
};

export default CardContainer;

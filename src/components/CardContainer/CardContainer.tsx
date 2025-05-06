import React from 'react';
import DashboardCard from '../DashboardCard/DashboardCard';

const CardContainer = ({ data }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10  items-start justify-items-center gap-x-4 gap-y-6'>
      {data.map((media: { fields: { title: string; description1: string; image: string }; sys: { id: string } }) => {
        const { fields } = media;
        const { title, description1, image } = fields;
        return <DashboardCard key={media.sys.id} title={title} description={description1} image={image} />;
      })}
    </div>
  );
};

export default CardContainer;

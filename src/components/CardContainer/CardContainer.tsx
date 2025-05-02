import React from 'react'
import Card from '@/components/Card/Card';


const CardContainer = ({data}) => {
  return (
    <div>
      {data.map((media) => {
        const { fields } = media;
        const { title, description1, image } = fields;
        return (
          <Card key={media.sys.id} title={title} description={description1} image={image} />
        )
      })}</div>
  )
}

export default CardContainer;
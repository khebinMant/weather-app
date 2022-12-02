import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const PlacesImageList = ({images}) => {
    console.log(images)
  return (
    <ImageList sx={{ width: '19.5rem', height: 460 }} cols={3} rowHeight={164}>
      {images.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={item.urls.small}
            srcSet={item.urls.small}
            alt={item.id}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

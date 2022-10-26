import React from 'react';

import Photo from './Photo';

const Photos = ({items}) => {
  if (items.length <= 0) return null;

  return (
    <div className="photos">
      <ul className="items">
        {items.map(photo =>
          <Photo url={photo.url} title={photo.title} key={photo.id} />
        )}
      </ul>
    </div>
  );
}

export default Photos;

import React from 'react';

const Photo = ({url, title}) => (
  <li className="item">
    <img src={url} alt={title} />
  </li>
);

export default Photo;

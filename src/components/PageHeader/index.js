import React from 'react';

const PageHeader = ({title}) => {
  return (
    <div className="content-header">
      <h1 className="content-header__title">
        {title}
      </h1>
    </div>
  );
}

export default PageHeader;

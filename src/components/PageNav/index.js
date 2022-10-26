import React from 'react';
import { NavLink } from 'react-router-dom';

import "./contentNav.scss";

const PageNav = ({navData}) => {
  if (!navData || navData.length <= 0) return null;

  return (
    <div className="content-nav">
      <ul>
        {navData.map(({ path, title }, index) => (
          <li key={`nav-${index}`}>
            <NavLink to={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageNav;

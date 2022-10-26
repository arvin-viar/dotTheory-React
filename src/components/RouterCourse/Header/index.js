import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <ul className="main-nav">
      <li><NavLink to="/routercourse/home">Home</NavLink></li>
      <li><NavLink to="/routercourse/about">About</NavLink></li>
      <li><NavLink to="/routercourse/teachers">Teachers</NavLink></li>
      <li><NavLink to="/routercourse/courses">Courses</NavLink></li>
    </ul>
  </header>
);

export default Header;

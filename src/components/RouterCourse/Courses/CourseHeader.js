import React from 'react';
import { NavLink } from 'react-router-dom';

const CourseHeader = () => (
  <div className="course-header group">
    <h2>Courses</h2>
    <ul className="course-nav">
      <li>
        <NavLink
          to="/routercourse/courses/html"
        >
          HTML
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/routercourse/courses/css"
        >
          CSS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/routercourse/courses/javascript"
        >
          JavaScript
        </NavLink>
      </li>
    </ul>
  </div>
);

export default CourseHeader;

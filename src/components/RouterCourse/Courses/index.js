import React from 'react';
import { NavLink } from 'react-router-dom';

import CourseContainer from './CourseContainer';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/Courses';

const Courses = ({course}) => (
  <div className="main-content courses">
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

    {course === "html" && (
      <CourseContainer data={HTMLCourses} />
    )}
    {course === "css" && (
      <CourseContainer data={CSSCourses} />
    )}
    {course === "javascript" && (
      <CourseContainer data={JSCourses} />
    )}
  </div>
);

export default Courses;

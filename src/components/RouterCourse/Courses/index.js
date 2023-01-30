import React from 'react';
import { NavLink } from 'react-router-dom';

import CourseContainer from './CourseContainer';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/Courses';

const courseDataMap = {
  html: HTMLCourses,
  css: CSSCourses,
  javascript: JSCourses,
};

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

    <CourseContainer data={courseDataMap[course]} />
  </div>
);

export default Courses;

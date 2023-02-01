import React from 'react';

import CourseContainer from './CourseContainer';
import CourseHeader from './CourseHeader';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/Courses';

const courseDataMap = {
  html: HTMLCourses,
  css: CSSCourses,
  javascript: JSCourses,
};

const Courses = ({course}) => (
  <div className="main-content courses">
    <CourseHeader />
    <CourseContainer data={courseDataMap[course]} />
  </div>
);

export default Courses;

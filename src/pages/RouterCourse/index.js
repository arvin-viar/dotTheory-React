import React from "react";

import Header from '../../components/RouterCourse/Header';
import Home from "../../components/RouterCourse/Home";
import About from "../../components/RouterCourse/About";
import Teachers from "../../components/RouterCourse/Teachers";
import Courses from "../../components/RouterCourse/Courses";

import './routercourse.css';

const RouterCoursePage = ({page, course}) => {
  const componentMap = {
    home: <Home />,
    about: <About />,
    teachers: <Teachers />,
    courses: <Courses course={course} />,
  };
  return (
    <div className="page page-router-course">
      <section>
        <div className="container">
          <Header />
          {componentMap[page]}
        </div>
      </section>
    </div>
  );
};

export default RouterCoursePage;

import React from "react";

import Header from '../../components/RouterCourse/Header';
import Home from "../../components/RouterCourse/Home";
import About from "../../components/RouterCourse/About";
import Teachers from "../../components/RouterCourse/Teachers";
import Courses from "../../components/RouterCourse/Courses";

import './routercourse.css';

const RouterCoursePage = ({page, course}) => (
  <div className="page page-router-course">
    <section>
      <div className="container">
        <Header />
        {page === "home" && (
          <Home />
        )}
        {page === "about" && (
          <About />
        )}
        {page === "teachers" && (
          <Teachers />
        )}
        {page === "courses" && (
          <Courses course={course} />
        )}
      </div>
    </section>
  </div>
);

export default RouterCoursePage;

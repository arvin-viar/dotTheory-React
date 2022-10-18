import React from "react";
import { Link } from "react-router-dom";

import './Home.scss';

const HomePage = () => (
  <div className="page page-home">
    <div className="page_header">
      <h1>Arvin T. Viar</h1>
      <h2>React Training</h2>

      <ul className="page_header--links">
        <li>
          <Link to="/scoreboard">
            Score Board
          </Link>
        </li>
        <li>
          <Link to="/routercourse">
            Router Course
          </Link>
        </li>
        <li>
          <Link to="/whatsnew">
            What's New in React
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default HomePage;

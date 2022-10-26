import React from "react";
import { Link } from "react-router-dom";

import "./backtohome.scss";

const BackToHome = () => (
  <div className="back-to-home">
    <Link to="/">Back To Home</Link>
  </div>
);

export default BackToHome;

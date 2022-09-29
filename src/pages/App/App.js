import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "../Home/Home";
import ScoreBoardPage from "../Scoreboard/Scoreboard";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/scoreboard"
            element={<ScoreBoardPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import HomePage from "../Home/Home";
import ScoreBoardPage from "../Scoreboard";
import RouterCourse from "../RouterCourse";
import WhatsNew from "../WhatsNew";
import NotFound from "../NotFound";

import './App.scss';

const App = () => (
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
        <Route
          path="/routercourse"
        >
          <Route index element={<Navigate to="/routercourse/home" />} />
          <Route path="home" element={<RouterCourse page="home"/>} />
          <Route path="about" element={<RouterCourse page="about"/>} />
          <Route path="teachers" element={<RouterCourse page="teachers"/>} />
          <Route
            path="courses"
          >
            <Route
              index
              element={
                <Navigate to="/routercourse/courses/html" />
              }
            />
            <Route
              path="html"
              element={
                <RouterCourse page="courses" course="html" />
              }
            />
            <Route
              path="css"
              element={
                <RouterCourse page="courses" course="css" />
              }
            />
            <Route
              path="javascript"
              element={
                <RouterCourse page="courses" course="javascript" />
              }
            />
          </Route>
        </Route>
        <Route
          path="/whatsnew"
        >
          <Route index element={<Navigate to="/whatsnew/component-did-catch" />} />
          <Route path="component-did-catch" element={<WhatsNew page="component-did-catch"/>} />
          <Route path="error-boundaries" element={<WhatsNew page="error-boundaries"/>} />
          <Route path="portals" element={<WhatsNew page="portals"/>} />
          <Route path="set-state" element={<WhatsNew page="set-state"/>} />
        </Route>
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Router>
  </div>
);

export default App;

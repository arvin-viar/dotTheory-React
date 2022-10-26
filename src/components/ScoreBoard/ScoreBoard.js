import React from "react";

import Header from "./Header";
import PlayerList from "./PlayerList";
import AddPlayer from "./AddPlayer";

import './scoreboard.scss';

const ScoreBoard = () => (
  <div className="scoreboard">
    <Header />
    <PlayerList />
    <AddPlayer />
  </div>
);

export default ScoreBoard;

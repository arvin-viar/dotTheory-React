import React from 'react';
import Stats from '../Stats';
import Stopwatch from '../StopWatch';

const Header = () => (
  <header className="page-score-board__header">
    <Stats />
    <h1>Scoreboard</h1>
    <Stopwatch />
  </header>
);

export default Header;

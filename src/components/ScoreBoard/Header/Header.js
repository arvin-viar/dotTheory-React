import React from 'react';

const Header = ({title, totalPlayers}) => {
  return (
    <header>
      <h1>{ title }</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  );
}

export default Header;

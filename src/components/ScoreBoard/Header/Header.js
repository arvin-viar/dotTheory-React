import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, totalPlayers }) => (
  <header>
    <h1>{ title }</h1>
    <span className="stats">
      Players: {totalPlayers}
    </span>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
  totalPlayers: PropTypes.number,
};

export default Header;

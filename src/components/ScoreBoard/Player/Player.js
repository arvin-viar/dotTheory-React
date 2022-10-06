import React from 'react';
import PropTypes from 'prop-types';
import Counter from "../Counter/Counter";

const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button
        className="remove-player"
        onClick={() => props.removePlayer(props.id)}
      >
        ✖
      </button>
      { props.name }
    </span>

    <Counter />
  </div>
);

Player.propTypes = {
  removePlayer: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Player;

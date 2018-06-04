import React, { Component } from 'react';

import Song from "./Song";
import PropTypes from "prop-types";

class Player extends Component {
  render() {
    const {currentSong, playNext, playPrevious} = this.props;

    return <span>
          <button onClick={playPrevious}>Previous</button>
      <audio controls key={currentSong.fileName}>
      <source src={`/resources/${currentSong.fileName}`} type="audio/mpeg"/>
      Your browser does not support the audio tag.
    </audio>
      <button onClick={playNext}>Next</button>
    </span>;
  }
}

Player.propTypes = {
  currentSong: PropTypes.shape(Song.propTypes).isRequired,
  playNext: PropTypes.func,
  playPrevious: PropTypes.func,
};

export default Player;
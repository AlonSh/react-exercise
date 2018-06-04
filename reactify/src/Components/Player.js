import React, { Component } from 'react';

import Song from "./Song";
import PropTypes from "prop-types";

class Player extends Component {
  render() {
    const {currentSong} = this.props;

    return <audio controls>
      <source src={`/resources/${currentSong.fileName}`} type="audio/mp3"/>
      Your browser does not support the audio tag.
    </audio>;
  }
}

Player.propTypes = {
  currentSong: PropTypes.shape(Song.propTypes).isRequired,
  playNext: PropTypes.func,
  playPrevious: PropTypes.func,
};

export default Player;
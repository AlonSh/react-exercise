import React, { Component } from 'react';
import Song from "./Song";
import PropTypes from "prop-types";

class Playlist extends Component {
  render() {
    const { songs } = this.props;

    return <div>
      {songs.map((song, index) => (
        <Song song={song} key={index}/>
      ))}
    </div>;
  }
}

Playlist.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape(Song.propTypes)),
};

export default Playlist;
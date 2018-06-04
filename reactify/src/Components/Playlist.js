import React, { Component } from 'react';
import Song from "./Song";
import PropTypes from "prop-types";

class Playlist extends Component {
  render() {
    const { songs } = this.props;

    return <div>
      {songs.map((song) => (
        <Song song={song}/>
      ))}
    </div>;
  }
}

Playlist.propTypes = {
  songs: PropTypes.arrayOf(Song.propTypes),
};

export default Playlist;
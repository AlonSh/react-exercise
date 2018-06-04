import React, { Component } from 'react';
import Song from "./Song";
import PropTypes from "prop-types";

class Playlist extends Component {
  render() {
    const {songs, chooseSong} = this.props;

    return <div>
      {songs.map((song, index) => (
        <div onClick={() => chooseSong(index)}>
          <Song artist={song.artist} name={song.name} key={index}/>
        </div>
      ))}
    </div>;
  }
}

Playlist.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape(Song.propTypes)),
  chooseSong: PropTypes.func,

};

export default Playlist;
import React, { Component } from 'react';
import Song from "./Song";
import PropTypes from "prop-types";

class Playlist extends Component {
  render() {
    const {name, songs, chooseSong} = this.props;

    return <div>
      <h2>{name}</h2>
      {songs.map((song, index) => (
        <div key={index} onClick={() => chooseSong(index)}>
          <Song artist={song.artist} name={song.name}/>
        </div>
      ))}
    </div>;
  }
}

Playlist.propTypes = {
  name: PropTypes.string.isRequired,
  songs: PropTypes.arrayOf(PropTypes.shape(Song.propTypes)),
  chooseSong: PropTypes.func,
};

export default Playlist;
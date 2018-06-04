import React, { Component } from 'react';
import Playlist from "./Playlist";
import PropTypes from "prop-types";
import Song from "./Song";

class Library extends Component {
  render() {
    const {songs, chooseSong} = this.props;
    return <Playlist songs={songs} chooseSong={chooseSong}/>;
  }
}

Library.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape(Song.propTypes)),
  chooseSong: PropTypes.func,
};


export default Library;
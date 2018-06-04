import React, { Component } from 'react';
import Playlist from "./Playlist";
import PropTypes from "prop-types";
import Song from "./Song";

class Library extends Component {
  render() {
    const {songs} = this.props;
    return <Playlist songs={songs}/>;
  }
}

Library.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape(Song.propTypes)),
};


export default Library;
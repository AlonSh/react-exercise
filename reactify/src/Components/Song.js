import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Song extends Component {
  render() {
    const {song} = this.props;

    return <div>
      {song.artist} - {song.name}
    </div>;
  }
}

Song.propTypes = {
  song: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired
  }),
};

export default Song;
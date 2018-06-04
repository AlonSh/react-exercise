import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Song extends Component {
  render() {
    const {artist, name} = this.props;

    return <div>
      {artist} - {name}
    </div>;
  }
}

Song.propTypes = {
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    fileName: PropTypes.string,
};

export default Song;
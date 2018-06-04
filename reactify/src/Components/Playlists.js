import React, {Component} from 'react';
import Playlist from "./Playlist";
import PropTypes from "prop-types";

class Playlists extends Component {
    render() {
        const {playlists, choosePlaylist} = this.props;
        return <div>
            {playlists.map((playlist, index) => (
                <div key={index} onClick={() => choosePlaylist(index)}>
                    {playlist.name}
                </div>)
            )}
        </div>;
    }
}

Playlists.propTypes = {
    playlists: PropTypes.arrayOf(PropTypes.shape(Playlist.propTypes)),
    choosePlaylist: PropTypes.func,
};


export default Playlists;
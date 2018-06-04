import React, {Component} from 'react';
import Playlist from "./Playlist";
import PropTypes from "prop-types";

class Playlists extends Component {
    render() {
        const {playlists} = this.props;
        return <div>
            {playlists.map((playlist, index) => (
                <div key={index}>
                    <a href={`/playlists/${index}`}>
                        {playlist.name}
                    </a>
                </div>)
            )}
        </div>;
    }
}

Playlists.propTypes = {
    playlists: PropTypes.arrayOf(PropTypes.shape(Playlist.propTypes)),
};


export default Playlists;
import React, {Component} from 'react';
import Song from "./Song";
import PropTypes from "prop-types";
import Player from "./Player";

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songIndex: 0,
        }
    }

    nextSong = () => {
        const {songs} = this.props;
        let nextIndex = this.state.songIndex < songs.length - 1 ? this.state.songIndex + 1 : 0;
        this.setState({
            songIndex: nextIndex,
        })
    };

    previousSong = () => {
        const {songs} = this.props;
        let previousIndex = this.state.songIndex > 0 ? this.state.songIndex - 1 : songs.length - 1;

        this.setState({
            songIndex: previousIndex,
        })
    };

    chooseSong = (songIndex) => {
        this.setState({
            songIndex,
        })
    };

    render() {
        const {name, songs} = this.props;

        return <div>
            <h2>{name}</h2>
            {songs.map((song, index) => (
                <div key={index} onClick={() => this.chooseSong(index)}>
                    <Song artist={song.artist} name={song.name}/>
                </div>
            ))}
            <Player currentSong={songs[this.state.songIndex]} playNext={this.nextSong}
                    playPrevious={this.previousSong}/>
        </div>;
    }
}

Playlist.propTypes = {
    name: PropTypes.string.isRequired,
    songs: PropTypes.arrayOf(PropTypes.shape(Song.propTypes)),
};

export default Playlist;
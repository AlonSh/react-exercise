import React, {Component} from 'react';
import Song from "./Song";
import Player from "./Player";
import {connect} from "react-redux";
import {nextSong, previousSong, selectSong} from "../actions/playlistActions";

class Playlist extends Component {
    render() {
        const {playlist, songIndex, nextSong, previousSong, selectSong} = this.props;

        return <div>
            <h2>{playlist.name}</h2>
            {playlist.songs.map((song, index) => (
                <div key={index} onClick={() => selectSong(index)}>
                    <Song artist={song.artist} name={song.name}/>
                </div>
            ))}
            <Player currentSong={playlist.songs[songIndex]} playNext={nextSong} playPrevious={previousSong}/>
        </div>;
    }
}

export default connect((store) => ({
    songIndex: store.songIndex,
    playlist: store.playlist
}), (dispatch) => ({
    nextSong: () => dispatch(nextSong()),
    previousSong: () => dispatch(previousSong()),
    selectSong: (index) => dispatch(selectSong(index)),
}))(Playlist);
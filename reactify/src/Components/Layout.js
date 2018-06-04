import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import Library from "./Library";
import Player from "./Player";
import Playlists from "./Playlists";


class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [
                {artist: "Redbone", name: "Come and Get Your Love", fileName: "ComeAndGetYourLove.mp3"},
                {
                    artist: "Marvin Gaye & Tammi Terrell",
                    name: "Ain't no Mountain High Enough",
                    fileName: "AintNoMountainHighEnough.mp3"
                },
            ],
            playlists: [
                {name: "My Playlist", songs: [
                    {artist: "Redbone", name: "Come and Get Your Love", fileName: "ComeAndGetYourLove.mp3"},
                    {
                        artist: "Marvin Gaye & Tammi Terrell",
                        name: "Ain't no Mountain High Enough",
                        fileName: "AintNoMountainHighEnough.mp3"
                    },
                ]}
            ],
            songIndex: 0,
            view: "Library"
        };
        this.state.activePlaylist = this.state.songs;
    }

    nextSong = () => {
        const {songIndex, songs} = this.state;
        let nextIndex = songIndex < songs.length - 1 ? songIndex + 1 : 0;
        this.setState({
            songIndex: nextIndex,
        })
    };

    previousSong = () => {
        const {songIndex, songs} = this.state;
        let previousIndex = songIndex > 0 ? songIndex - 1 : songs.length - 1;

        this.setState({
            songIndex: previousIndex,
        })
    };

    chooseSong = (songIndex) => {
        if (this.state.view === "Library") {
            this.setState({
                activePlaylist: this.state.songs,
            })
        }
        this.setState({
            songIndex,
        })
    };

    choosePlaylist = (playlistIndex) => {
        this.setState({
            activePlaylist: this.state.playlists[playlistIndex].songs,
        }, () => {
            this.chooseSong(0)
        });
    };

    getView = () => {
        switch (this.state.view) {
            case "Playlists":
                return <Playlists playlists={this.state.playlists} choosePlaylist={this.choosePlaylist}/>;
            default:
                return <Library songs={this.state.songs} chooseSong={this.chooseSong}/>;
        }
    };

    selectView = (view) => {
        this.setState({view});
    };

    render() {
        return <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Reactify</NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <NavLink onClick={() => this.selectView("Library")}>Library</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => this.selectView("Playlists")}>Playlists</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            {this.getView()}
            <Player currentSong={this.state.songs[this.state.songIndex]} playNext={this.nextSong}
                    playPrevious={this.previousSong}/>
        </div>;
    }
}

export default Layout;
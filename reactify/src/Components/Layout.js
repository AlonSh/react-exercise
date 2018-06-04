import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import Player from "./Player";
import Playlists from "./Playlists";
import Playlist from "./Playlist";
import {Switch} from "react-router";
import {Redirect, Route, withRouter} from "react-router-dom";


class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [
                {
                    name: "Library",
                    songs: [
                        {artist: "Redbone", name: "Come and Get Your Love", fileName: "ComeAndGetYourLove.mp3"},
                        {
                            artist: "Marvin Gaye & Tammi Terrell",
                            name: "Ain't no Mountain High Enough",
                            fileName: "AintNoMountainHighEnough.mp3"
                        },
                    ]
                },
                {
                    name: "My Playlist",
                    songs: [
                        {artist: "Redbone", name: "Come and Get Your Love", fileName: "ComeAndGetYourLove.mp3"},
                        {
                            artist: "Marvin Gaye & Tammi Terrell",
                            name: "Ain't no Mountain High Enough",
                            fileName: "AintNoMountainHighEnough.mp3"
                        },
                    ]
                }
            ],
            songIndex: 0,
            view: "Library"
        };
        this.state.activePlaylist = this.state.playlists[0];
    }

    nextSong = () => {
        const {songIndex, activePlaylist} = this.state;
        let nextIndex = songIndex < activePlaylist.songs.length - 1 ? songIndex + 1 : 0;
        this.setState({
            songIndex: nextIndex,
        })
    };

    previousSong = () => {
        const {songIndex, activePlaylist} = this.state;
        let previousIndex = songIndex > 0 ? songIndex - 1 : activePlaylist.songs.length - 1;

        this.setState({
            songIndex: previousIndex,
        })
    };

    chooseSong = (songIndex) => {
        if (this.state.view === "Library") {
            this.setState({
                activePlaylist: this.state.playlists[0],
            })
        }
        this.setState({
            songIndex,
        })
    };

    choosePlaylist = (playlistIndex) => {
        this.setState({
            activePlaylist: this.state.playlists[playlistIndex],
            view: "Playlist",
        }, () => {
            this.chooseSong(0)
        });
    };

    getView = () => {
        switch (this.state.view) {
            case "Playlists":
                return <Playlists playlists={this.state.playlists} choosePlaylist={this.choosePlaylist}/>;
            case "Playlist":
                return <Playlist songs={this.state.activePlaylist.songs} chooseSong={this.chooseSong}
                                 name={this.state.activePlaylist.name}/>;
            default:
                return <Playlist songs={this.state.playlists[0].songs} chooseSong={this.chooseSong}
                                 name={this.state.playlists[0].name}/>;
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
            <Player currentSong={this.state.activePlaylist.songs[this.state.songIndex]} playNext={this.nextSong}
                    playPrevious={this.previousSong}/>
        </div>;
    }
}

export default Layout;
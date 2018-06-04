import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import Playlists from "./Playlists";
import Playlist from "./Playlist";
import {Switch} from "react-router";
import {Redirect, Route, Router} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';

const history = createHistory();


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
        };
    }

    navigate = (url) => {
        history.push(url);
    };

    choosePlaylist = (index) => {
        history.push(`/playlists/${index}`);
    };

    render() {
        return <Router history={history}>
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand onClick={() => this.navigate('/')}>Reactify</NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink onClick={() => this.navigate('/')}>Library</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.navigate('/playlists')}>Playlists</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route path="/" exact
                           render={() => (
                               <Playlist songs={this.state.playlists[0].songs} name={this.state.playlists[0].name}/>
                           )}/>
                    <Route path="/playlists" exact render={() => (
                        <Playlists playlists={this.state.playlists} choosePlaylist={this.choosePlaylist}/>)
                    }/>
                    <Route path="/playlists/:index" render={({match}) => (
                        <Playlist songs={this.state.playlists[match.params.index].songs}
                                  name={this.state.playlists[match.params.index].name}/>
                    )}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>;
    }
}

export default Layout;
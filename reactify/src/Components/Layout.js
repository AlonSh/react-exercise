import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import Playlists from "./Playlists";
import Playlist from "./Playlist";
import {Switch} from "react-router";
import {Redirect, Route, Router} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import {connect} from "react-redux";
import {selectPlaylist} from "../actions/playlistActions";

const history = createHistory();


class Layout extends Component {

    constructor(props) {
        super(props);
        const urlParts = history.location.pathname.split('/');
        const currentPlaylist = urlParts[urlParts.length - 1] || 0;
        this.props.selectPlaylist(currentPlaylist);
    }

    navigate = (url) => {
        history.push(url);
    };

    goToLibrary = () => {
        this.props.selectPlaylist(0);
        this.navigate('/');
    };

    choosePlaylist = (index) => {
        this.props.selectPlaylist(index);
        history.push(`/playlists/${index}`);
    };

    render() {
        const {playlists} = this.props;

        return <Router history={history}>
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand onClick={this.goToLibrary}>Reactify</NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink onClick={this.goToLibrary}>Library</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.navigate('/playlists')}>Playlists</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route path="/" exact component={Playlist}/>
                    <Route path="/playlists" exact render={() => (
                        <Playlists playlists={playlists} choosePlaylist={this.choosePlaylist}/>)
                    }/>
                    <Route path="/playlists/:index" component={Playlist} />
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>;
    }
}

export default connect((store) => ({
    playlists: store.playlists,
}), (dispatch) => ({
    selectPlaylist: (index) => dispatch(selectPlaylist(index))
}))(Layout);
import React, { Component } from 'react';
import { Container } from "reactstrap";
import Library from "./Library";
import Player from "./Player";


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [
        {artist: "Redbone", name: "Come and Get Your Love", fileName: "ComeAndGetYourLove.mp3"},
        {artist: "The Rolling Stones", name: "Gimme Shelter"},
        {artist: "Red Hot Chili Peppers", name: "Californication"}
      ]
    }
  }

  render() {
    return <Container>
      <Library songs={this.state.songs}/>
      <Player currentSong={this.state.songs[0]}/>
    </Container>;
  }
}

export default Layout;
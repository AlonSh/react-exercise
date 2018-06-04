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
        {
          artist: "Marvin Gaye & Tammi Terrell",
          name: "Ain't no Mountain High Enough",
          fileName: "AintNoMountainHighEnough.mp3"
        },
      ],
      songIndex: 0
    }
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
    this.setState({
      songIndex,
    })
  };

  render() {
    return <Container>
      <Library songs={this.state.songs} chooseSong={this.chooseSong}/>
      <Player currentSong={this.state.songs[this.state.songIndex]} playNext={this.nextSong}
              playPrevious={this.previousSong}/>
    </Container>;
  }
}

export default Layout;
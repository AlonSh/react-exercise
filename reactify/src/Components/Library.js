import React, { Component } from 'react';
import Playlist from "./Playlist";

class Library extends Component {
  render() {
    return <Playlist songs={
      [
        {artist: "Redbone", name: "Come and Get Your Love"},
        {artist: "The Rolling Stones", name: "Gimme Shelter"},
        {artist: "Red Hot Chili Peppers", name: "Californication"}
      ]
    }/>;
  }
}

export default Library;
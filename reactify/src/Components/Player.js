import React, { Component } from 'react';

import comeAndGetYourLove from "../resources/ComeAndGetYourLove.mp3";

class Player extends Component {
  render() {
    return <audio controls>
      <source src={comeAndGetYourLove} type="audio/ogg"/>
      Your browser does not support the audio tag.
    </audio>;
  }
}

export default Player;
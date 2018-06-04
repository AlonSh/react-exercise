import React, { Component } from 'react';
import { Container } from "reactstrap";
import Library from "./Library";
import Player from "./Player";

class Layout extends Component {
  render() {
    return <Container>
      <Library/>
      <Player/>
    </Container>;
  }
}

export default Layout;
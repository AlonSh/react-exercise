import React, { Component } from 'react';
import { Container } from "reactstrap";

class Layout extends Component {
  render() {
    return <Container>
      <Library/>
      <Player/>
    </Container>;
  }
}

export default Layout;
import React, { Component } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(#e66465, #9198e5);
  margin: -20px;
  padding: 10px;
`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Main />
      </Container>
    );
  }
}

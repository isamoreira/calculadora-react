import React, { Component } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  color: white;
`;

export default class Header extends Component {
  render() {
    return (
      <div>
        <H1>Minha primeira calculadora em React</H1>
      </div>
    );
  }
}

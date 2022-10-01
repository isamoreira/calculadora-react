import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: pink;
  font-size: 15px;
  border-radius: 50%;
  border: none;
  width: 50px;
  height: 50px;
  margin: 10px;
`;

const Input = styled.input`
  width: 80px;
  height: 50px;
  margin: 10px;
  font-size: 20px;
  border: none;
`;

const H1 = styled.h1`
  font-size: 30px;
  color: white;
`;

export default class Mains extends Component {
  state = {
    num1: "",
    num2: "",
    result: 0,
  };

  handleChange1 = (event) => {
    this.setState({
      num1: Number(event.target.value),
    });
  };

  handleChange2 = (event) => {
    this.setState({
      num2: Number(event.target.value),
    });
  };

  somar = () => {
    const { num1, num2 } = this.state;
    this.setState({
      result: num1 + num2,
      num1: "",
      num2: "",
    });
  };

  subtrairr = () => {
    const { num1, num2 } = this.state;
    this.setState({
      result: num1 - num2,
      num1: "",
      num2: "",
    });
  };

  multiplicar = () => {
    const { num1, num2 } = this.state;
    this.setState({
      result: num1 * num2,
      num1: "",
      num2: "",
    });
  };

  dividir = () => {
    const { num1, num2 } = this.state;
    this.setState({
      result: num1 / num2,
      num1: "",
      num2: "",
    });
  };

  render() {
    return (
      <Div>
        <Div>
          <Input
            type="number"
            onChange={this.handleChange1}
            value={this.state.num1}
          />
          <div>
            <Button onClick={this.somar}>[ + ]</Button>
            <Button onClick={this.subtrair}>[ - ]</Button>
            <Button onClick={this.multiplicar}>[ * ]</Button>
            <Button onClick={this.dividir}>[ / ]</Button>
          </div>
          <Input
            type="number"
            onChange={this.handleChange2}
            value={this.state.num2}
          />
        </Div>
        <H1>O resultado é:</H1>
        <H1>{this.state.result}</H1>
      </Div>
    );
  }
}

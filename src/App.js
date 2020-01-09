import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Img = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

const P = styled.p`
  &:hover {
    color: red;
  }
`;

const A = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    <Container>
      <Header>
        <Img src={logo} alt="logo" />

        <P>
          Edit <code>src/App.js</code> and save to HI.
        </P>
        <A href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </A>
      </Header>
    </Container>
  );
}

export default App;

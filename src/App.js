import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state={
    score: 0,
    highScore: 0
  }

  clickCount = id => {
    
  }


  render() {
    return (
      <div>
        <Navbar />
        <Wrapper>
          <Container>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

          </Container>

        </Wrapper>
        <Footer/>

      </div>

      
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    );
  }
}

export default App;

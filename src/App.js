import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";
import Row from "./components/Row";
import Col from "./components/Col";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import data from './data.json';
import './App.css';


class App extends Component {
  state = {
    score: 0,
    highScore: 0
  }

 
  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  clickPicture = event => {
//changes score and highScore if the picture hasn't been clicked before
    this.setState({score: this.state.score +1});
    this.setState({ score: this.state.highScore + 1 });
    //then shuffleArray();
      //
    
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Jumbotron />
        <Container>
          <Wrapper>
            {this.state.data.map(data => {
              return (
                <Card
                  id={data.id}
                  picture={data.image}
                />
              )
            }
            )}
          </Wrapper>
        </Container>



        <Footer />

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

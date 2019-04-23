import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import data from './data.json';
import './App.css';


class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    hasBeenClicked: [],
    cards: []
  }

  componentDidMount() {
    this.setState({ cards: data})
  }

  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({
        cards: array
      });
  }

  clickPicture = id => {

    //changes score and highScore if the picture hasn't been clicked before
    let copyArr = [...this.state.hasBeenClicked]
    if (copyArr.indexOf(id) > -1) {
      this.setState({
        score: 0,
        cards: data,
        hasBeenClicked: []
      })
      copyArr = [];
      alert("You lost a life. Game resets...now!");
    } else {
      copyArr.push(id)
      this.setState({
        score: this.state.score + 1,
        highScore: this.state.highScore + 1,
        hasBeenClicked: copyArr
      });
      let arrToShuffle = data.map(data => {
        return data
      })
      this.shuffleArray(arrToShuffle);
    }
  } 
  

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
        
        />
        <Jumbotron />
        <Container>
          <Wrapper>
            {this.state.cards && this.state.cards.map(data => {
              return (
                <Card
                  key={data.id}
                  id={data.id}
                  picture={data.image}
                  clickPicture={this.clickPicture}
                />
              )})}
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

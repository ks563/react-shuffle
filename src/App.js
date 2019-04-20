import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";
import Row from "./components/Row";
import Col from "./components/Col";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import images from "./images.json"
import './App.css';


class App extends Component {
  state={
    score: 0,
    highScore: 0
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  clickPicture = id => {
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
    

  }


  render() {
    return (
      <div>
        {/* <Navbar /> */}
          <Jumbotron/>
        <Container>
        <Wrapper>
          <Row>
              <Col>
                 
                  {this.state.images.map(image => {
                    
                    return (
                      <Card
                      id = { images.id }
                        picture={images.image}
                        />
                    )
                  
                  }
                  )}
               

              {/* <Card
                id={images[0].id}
                  image={images[0].image}
                  
              />
               <Card
                id={images[1].id}
                image={images[1].image}  
              />
               <Card
                id={images[2].id}
                image={images[2].image}  
              />
               <Card
                id={images[3].id}
                image={images[3].image}  
              />
               <Card
                id={images[4].id}
                image={images[4].image}  
              />
               <Card
                id={images[5].id}
                image={images[5].image}  
              />
               <Card
                id={images[6].id}
                image={images[6].image}  
              />
               <Card
                id={images[7].id}
                image={images[7].image}
              />
               <Card
                id={images[8].id}
                image={images[8].image}  
              />
               <Card
                id={images[9].id}
                image={images[9].image}  
              />
               <Card
                id={images[10].id}
                image={images[10].image}   */}
              />
            </Col>
          </Row>
          </Wrapper>
          </Container>
          

     
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

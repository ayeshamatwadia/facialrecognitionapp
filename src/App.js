import React from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank';
import './App.css';
import {particlesOptions} from './constants/constants';
  
const app = new Clarifai.App({
    apiKey: 'cb525549334c4b708f70f45e4a2db83b',
  })

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      input:'',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onClickDetectButton = (event) => {
    app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg')
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log('There is an error', error);
    });
  }
  // api key cb525549334c4b708f70f45e4a2db83b
  
  render() {
    return (
      <div className="App">
         <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onClickDetectButton={this.onClickDetectButton} 
        />
      {
      /* <FacRecognition /> */}
      </div>
    );
  }
}

export default App;

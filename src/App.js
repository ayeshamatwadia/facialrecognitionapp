import React from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
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
      input: '',
      imageUrl: '',      
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onClickDetectButton = (event) => {
    this.setState({imageUrl: this.state.input});

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    })
    .catch(error => {
      console.log('There is an error', error);
    });
  }
  
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
       <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;

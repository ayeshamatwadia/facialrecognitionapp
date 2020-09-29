import React from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
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
      box: {},
      route: 'signin',     
    }
  }

  calculateFaceLocation = (data) => {
    const boundingBox = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: boundingBox.left_col * width,
      topRow: boundingBox.top_row * height,
      rightCol: width - (boundingBox.right_col * width),
      bottomRow: height - (boundingBox.bottom_row * height),
    }
  };

  displayFaceBox = (box) => {
    this.setState({box: box});
  };

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onClickDetectButton = (event) => {
    this.setState({imageUrl: this.state.input});

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
      this.displayFaceBox(this.calculateFaceLocation(response));
    })
    .catch(error => {
      console.log('There is an error', error);
    });
  }

  onRouteChanged = (route) => {
      this.setState({route: route})
  }
  
  render() {
    return (
      <div className="App">
         <Particles className="particles" params={particlesOptions} />
        <Navigation onRouteChanged={this.onRouteChanged}/>
        {this.state.route === 'signin' ? <Signin onRouteChanged={this.onRouteChanged} />
        : <div>
            <Logo />
            <Rank />
            <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onClickDetectButton={this.onClickDetectButton} 
            />
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
          </div> 
       } 
      </div>
    );
  }
}

export default App;

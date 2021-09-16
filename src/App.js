import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import tachyons from 'tachyons';

const app = new Clarifai.App({
  apiKey: '3c28c898a6fb41cca8cf0970aa91d8f8'
});

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      inputUrlText:'',
      inputUrl:'',
      concepts:''
    }
  }

  oninputchange=(event)=>{
    let temp=event.target.value;
    this.setState((state)=>{
      return {inputUrlText:temp}
    });
  };
  onimageSubmit=()=>{
    this.setState((state)=>{
      return {inputUrl:this.state.inputUrlText}
    });
    app.models.predict(Clarifai.GENERAL_MODEL, this.state.inputUrlText)
      .then(
        (response)=>{
        console.log("resp--",response.outputs[0].data.concepts[0].name);
        this.c=response.outputs[0].data.concepts[0].name;
        this.updateConcepts(this.c);
//        response.outputs[0].data.regions[0].region_info.bounding_box
        },
        (error)=>{
        console.log("oh oh",error);
        }
      );
  };
  updateConcepts=(con)=>{
    this.setState({concepts:con});
  }
  render(){
      return (
        <div className="App">
          <Navigation/>
          <Logo/><Rank/>
          <ImageLinkForm inputChange={this.oninputchange} onbuttonClick={this.onimageSubmit} concepts={this.state.concepts}/>
          <FaceRecognition imgurl={this.state.inputUrlText}/>
        </div>
      ); 
  }
}  
export default App;

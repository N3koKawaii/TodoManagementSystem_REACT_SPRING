import { Component } from 'react';
import './App.css';
import FirstComponent from './components/learning-example/FirstComponent';
import SecondComponent from './components/learning-example/SecondComponent';
import LearningJavaScript from './components/learning-example/LearningJavaScript';

function App() {
  return (
    <div className="App">
      My Todo Application
      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent/>
      <FourthComponent/>
      <LearningJavaScript/>
    </div>
  );
}

class ThirdComponent extends Component{
  render(){
    return (
      <div className='ThirdComponent'>ThirdComponent</div>
    );
  }
}

class FourthComponent extends Component{
  render(){
    return (
      <div className='FourthComponent'>FourthComponent</div>
    );
  }
}

export default App;

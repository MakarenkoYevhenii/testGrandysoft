import { Component, useState } from "react";
import style from "./App.module.css"

import CanvasComponent from './CanvasComponent/CanvasComponent';
import ButtonComponent from './share/ButtonnComponent/ButtonComponent';

class App extends Component {
  state={
    clearCanvas:false
  }

   ButtonClearCanvas=()=>{
  return this.state.clearCanvas=!this.state.clearCanvas
  }
  render(){
  return (
    <div className={style.App}>
      <CanvasComponent clearCanvas={this.state.clearCanvas} ></CanvasComponent>
      
    </div>
  );}
}

export default App;

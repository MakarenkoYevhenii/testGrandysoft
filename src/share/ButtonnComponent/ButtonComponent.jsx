
import { Component } from "react";
import style from "./buttonComponent.module.css"
class ButtonComponent extends Component {

    render() {
    return (
      <>
      <button onClick={()=>this.props.onClick()} className={style.button}>collapse lines</button>
      </>
    );
  }
}

export default ButtonComponent;

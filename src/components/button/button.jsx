import React from "react";
import BtnStyle from "./button.module.scss";

export class Button extends React.Component {
  render() {
    return (
      <div className={BtnStyle.btnContainer} style={{ backgroundColor: `${this.props.bgcolor}` }}>
        <button className={BtnStyle[this.props.buttonClassName]}>{this.props.buttonText}</button>
        {this.props.url && <img src={this.props.url} alt="img" />}
      </div>
    );
  }
}

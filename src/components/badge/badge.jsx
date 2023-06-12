import React from "react";
import badgeSCSS from "./badge.module.scss";

export class Badge extends React.Component {
  render() {
    return (
      <div className={badgeSCSS.badge} style={{ backgroundColor: `${this.props.color}`, fontWeight: `${this.props.fweight}` }}>
        <img src={this.props.url} alt="badge" />
        <p>{this.props.text}</p>
      </div>
    );
  }
}

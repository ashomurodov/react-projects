import React from "react";
import "./card.scss";

export class Card extends React.Component {
  render() {
    return (
      <div className={`card__container ${this.props.cardContainerColor}`}>
        <div className="card__type">
          <p className="type__name">{this.props.cardType}</p>
          {this.props.isHaveBadge ? <span className="badge">POPULAR</span> : <div></div>}
        </div>
        <div className="card__price">
          <p>
            <span className="price">${this.props.price}/</span>
            month
          </p>
        </div>
        <p className="description">Good for small business launching their products less then once a year</p>
        <ul className="checkList">
          <li className={this.props.isAviable ? "active" : ""}></li>
          <li className={this.props.isAviable ? "active" : ""}></li>
          <li className={this.props.isAviable ? "active" : ""}></li>
          <li className={this.props.isAviable ? "active" : ""}></li>
        </ul>
        <button className="btn" style={{ backgroundColor: this.props.btnBgColor }}>
          Start Free Trial
        </button>
      </div>
    );
  }
}

import React from "react";
import categorySCSS from "./category.module.scss";

export class CategoryItem extends React.Component {
  render() {
    return (
      <div className={categorySCSS.itemContainer} style={{ background: `${this.props.gradient}` }}>
        <img src={this.props.itemImg} alt="" />
        <p>{this.props.itemText}</p>
      </div>
    );
  }
}

import React from "react";
import { Badge } from "../badge/badge";
import BadgeClock from "../../assets/timer.png";
import BadgeKnife from "../../assets/ForkKnife.png";
import recipeSCSS from "./recipes.module.scss";

export class RecipeItem extends React.Component {
  render() {
    return (
      <div className={recipeSCSS.recipeItem__container}>
        <img src={this.props.url} alt="recipe" className={recipeSCSS.recipeImg} />
        <div className={recipeSCSS.recipeText}>
          <h3>{this.props.text}</h3>
          <div className={recipeSCSS.badge__container}>
            <Badge text="30 minutes" url={BadgeClock} color="#00000008" />
            <Badge text={this.props.badgeText} url={BadgeKnife} color="#00000008" />
          </div>
        </div>
      </div>
    );
  }
}

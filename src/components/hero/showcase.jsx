import React from "react";
import { Badge } from "../badge/badge";
import { Button } from "../button/button";
import heroSCSS from "./hero.module.scss";
import likeCircle from "../../assets/likeBadge.png";
import img from "../../assets/textBook.png";
import knifeImg from "../../assets/ForkKnife.png";
import timerImg from "../../assets/timer.png";
import playerImg from "../../assets/PlayCircle.png";
import person from "../../assets/man.png";

export class Showcase extends React.Component {
  render() {
    return (
      <div className={heroSCSS.showcase}>
        <div className={heroSCSS.showcase__left}>
          <Badge url={img} text="Hot Recipes" color="#fff" fweight="700" />
          <h1>Spicy delicious chicken wings</h1>
          <p className={heroSCSS.description}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqut enim ad minim
          </p>
          <div className={heroSCSS.badgeContainer}>
            <Badge url={timerImg} text="30 Minutes" color="#0000000D" fweight="500" />
            <Badge url={knifeImg} text="Chicken" color="#0000000D" fweight="500" />
          </div>
          <div className={heroSCSS.showcase__bottom}>
            <div className={heroSCSS.person_container}>
              <img src={person} alt="person" className={heroSCSS.circleImg} />
              <div className="person_text">
                <p>Michael Jordan</p>
                <p>11 June 2023</p>
              </div>
            </div>
            <Button buttonClassName="btn" buttonText="View Recipes" bgcolor="#000" url={playerImg} />
          </div>
        </div>
        <div className={heroSCSS.showcase__right}></div>
        <img src={likeCircle} alt="like" className={heroSCSS.likeBadge} />
      </div>
    );
  }
}

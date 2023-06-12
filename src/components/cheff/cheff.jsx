import React from "react";
import { Button } from "../button/button";
import cheffSCSS from "./cheff.module.scss";
import cheffImg from "../../assets/cheff.png";

export class Cheff extends React.Component {
  render() {
    return (
      <div className={cheffSCSS.cheff__container}>
        <div className={cheffSCSS.cheff__left}>
          <h2>Everyone can be a chef in their own kitchen</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqut enim ad minim
          </p>
          <Button bgcolor="#000" buttonText="Learn More" buttonClassName="btn" />
        </div>
        <div className="cheff__right">
          <img src={cheffImg} alt="cheff" />
        </div>
      </div>
    );
  }
}

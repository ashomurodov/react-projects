import React from "react";
import twitterPNG from "../../assets/003-twitter.png";
import facebookPNG from "../../assets/001-facebook.png";
import instagramPNG from "../../assets/004-instagram.png";
import logo from "../../assets/Foodieland..png";
import heroSCSS from "./hero.module.scss";

export class Navbar extends React.Component {
  render() {
    return (
      <nav className={heroSCSS.navbar}>
        <img src={logo} alt="" className="logo" />
        <ul className={heroSCSS.menus}>
          <li className={heroSCSS.menus__item}>
            <a href="google.com">Home</a>
          </li>
          <li className={heroSCSS.menus__item}>
            <a href="google.com">Recipes</a>
          </li>
          <li className={heroSCSS.menus__item}>
            <a href="google.com">Blog</a>
          </li>
          <li className={heroSCSS.menus__item}>
            <a href="google.com">Contact</a>
          </li>
          <li className={heroSCSS.menus__item}>
            <a href="google.com">About us</a>
          </li>
        </ul>
        <div className={heroSCSS.social__links}>
          <a href="facebook.com">
            <img src={facebookPNG} alt="facebook link" />
          </a>
          <a href="twitter.com">
            <img src={twitterPNG} alt="twitter link" />
          </a>
          <a href="instagram.com">
            <img src={instagramPNG} alt="instagram link" />
          </a>
        </div>
      </nav>
    );
  }
}

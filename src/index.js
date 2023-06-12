import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import App from "./app";
/***
 * packages
 * utils
 * components
 * assets (images/videos/css/sass)
 *
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);

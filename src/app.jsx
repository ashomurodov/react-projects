import React from "react";
import { Navbar } from "./components/hero/navbar";
import { Showcase } from "./components/hero/showcase";
import { Category } from "./components/category/category";
import { Recipes } from "./components/recipes/recipes";
import { Cheff } from "./components/cheff/cheff";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Showcase />
      </>
    );
  }
}

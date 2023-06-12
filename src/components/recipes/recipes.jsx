import React from "react";
import recipesSCSS from "./recipes.module.scss";
import { RecipeItem } from "./recipeItem";
import recipeImg from "../../assets/burgerImg.png";
import recipeImg2 from "../../assets/meatImg.png";
import recipeImg3 from "../../assets/pancake.png";
import recipeImg4 from "../../assets/salad.png";
import recipeImg5 from "../../assets/creamCheese.png";
import recipeImg6 from "../../assets/bluebarry.png";
import recipeImg7 from "../../assets/rice.png";
import recipeImg8 from "../../assets/pasta.png";

export class Recipes extends React.Component {
  render() {
    return (
      <div className={recipesSCSS.recipe__container}>
        <div className={recipesSCSS.recipes__title}>
          <h2>Simple and tasty recipes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqut enim ad minim
          </p>
        </div>

        <div className={recipesSCSS.recipesItem__container}>
          <RecipeItem url={recipeImg} text="Big and Juicy Wagyu Beef Cheeseburger" badgeText="Snack" />
          <RecipeItem url={recipeImg2} text="Fresh Lime Roasted Salmon with Ginger " badgeText="Fish" />
          <RecipeItem url={recipeImg3} text="Strawberry Oatmeal Pancake with" badgeText="Breakfast" />
          <RecipeItem url={recipeImg4} text="Fresh and Healthy Mixed Mayonnaise Salad" badgeText="Healthy" />
          <RecipeItem url={recipeImg5} text="Chicken Meatballs with Cream Cheese" badgeText="Meat" />
          <RecipeItem url={recipeImg2} text="Fruity Pancake with Orange & Blueberry" badgeText="Sweet" />
          <RecipeItem url={recipeImg7} text="The Best Easy One Pot Chicken and Rice" badgeText="Snack" />
          <RecipeItem
            url={recipeImg8}
            text="The Creamiest Creamy Chicken and Bacon Pasta"
            badgeText="Noodles"
          />
          <RecipeItem url={recipeImg6} text="Big and Juicy Wagyu Beef Cheeseburger" badgeText="Snack" />
        </div>
      </div>
    );
  }
}

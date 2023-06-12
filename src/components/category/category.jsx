import React from "react";
import { Button } from "../button/button";
import categorySCSS from "./category.module.scss";
import { CategoryItem } from "./categoryItem";
import itemImg1 from "../../assets/breakfast.png";
import itemImg2 from "../../assets/vegan.png";
import itemImg3 from "../../assets/meat.png";
import itemImg4 from "../../assets/dessert.png";
import itemImg5 from "../../assets/lunch.png";
import itemImg6 from "../../assets/chocolate.png";

export class Category extends React.Component {
  render() {
    return (
      <div className={categorySCSS.category__container}>
        <div className={categorySCSS.category__title}>
          <h2>Categories</h2>
          <Button buttonClassName="btn_light" bgcolor="#E7FAFE" buttonText="View All Categories" />
        </div>
        <div className={categorySCSS.categories}>
          <CategoryItem
            itemText="Breakfast"
            itemImg={itemImg1}
            gradient="linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%)"
          />
          <CategoryItem
            itemText="Vegan"
            itemImg={itemImg2}
            gradient="linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)"
          />
          <CategoryItem
            itemText="Meat"
            itemImg={itemImg3}
            gradient="linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%)"
          />
          <CategoryItem
            itemText="Dessert"
            itemImg={itemImg4}
            gradient="linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)"
          />
          <CategoryItem
            itemText="Lunch"
            itemImg={itemImg5}
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)"
          />
          <CategoryItem
            itemText="Chocolate"
            itemImg={itemImg6}
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)"
          />
        </div>
      </div>
    );
  }
}

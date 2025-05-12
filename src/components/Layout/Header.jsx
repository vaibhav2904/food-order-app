import React from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

export const Header = (props) => {
  return (
    <>
      <header className="fixed top-0 left-0 z-10 flex h-20 w-full items-center justify-between bg-[#8a2b06] px-[10%] py-0 text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="z-0 h-100 w-full truncate">
        <img
          src={mealsImage}
          alt="The table full of food"
          className="h-full w-full object-cover"
        />
      </div>
    </>
  );
};

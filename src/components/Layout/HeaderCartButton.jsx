import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { CartContext } from "../../store/CartContext";
const HeaderCartButton = (props) => {
  const [cartButtonHighlight, setCartButtonHighlight] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const noOfCartItems = cartCtx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${cartButtonHighlight ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) return;
    setCartButtonHighlight(true);

    const timer = setTimeout(() => {
      setCartButtonHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

import React from "react";
import classes from "./Input.module.css";
import { forwardRef } from "react";
export const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

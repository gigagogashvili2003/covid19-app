import React from "react";
import classes from "./List.module.css";

function List({ children }) {
  return <div className={classes.list}>{children}</div>;
}

export default List;

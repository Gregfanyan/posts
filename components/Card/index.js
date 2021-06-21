import React from "react";

import classes from "./Card.module.css";

const Card = React.forwardRef(({ children, href, onClick }, ref) => {
  return (
    <a className={classes.container} ref={ref} href={href} onClick={onClick}>
      {children}
    </a>
  );
});

export default Card;

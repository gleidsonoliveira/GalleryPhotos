import React, { Fragment } from "react";

import "./Styles.css";

const Overlay = ({ children, handleDismiss }) => {
  return (
    <Fragment>
      <div onClick={handleDismiss} className="overlay">
        {children}
      </div>
    </Fragment>
  );
};

export default Overlay;

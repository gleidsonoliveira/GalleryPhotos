import React, { Fragment } from "react";

import Overlay from "./Overlay";

import "./Styles.css";

const Modal = ({
    children,
    opened = false,
    title,
    message,
    image,
    handleDismiss = () => {
        return false;
    }
}) => {
    return (
        <Fragment>
            {opened && (
                <Fragment>
                    <Overlay handleDismiss={handleDismiss} />
                    <div className="modal">
                        <div className="header">
                            <div className="title">{title}</div>
                            <div className="closeIcon" onClick={handleDismiss}>
                                CLOSE
              </div>
                        </div>
                        <div className="body">
                            <img src={image} alt="" width="250px" />
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Modal;

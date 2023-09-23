import React from "react";
import { ReactComponent as Error } from "assets/triangle-exclamation-solid.svg";
import { MODAL } from "constants";

const ErrorModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <Error className="icon" />
        <p>{MODAL?.message}</p>
        <button onClick={onClose}>{MODAL?.buttonLabel}</button>
      </div>
    </div>
  );
};

export default ErrorModal;

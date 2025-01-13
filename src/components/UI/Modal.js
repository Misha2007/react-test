import React, { useRef, useEffect } from "react";

const Modal = (props) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (props.isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }

    return () => {
      dialog.close();
    };
  }, [props.isOpen]);

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="cart">{props.children}</div>
    </dialog>
  );
};

export default Modal;

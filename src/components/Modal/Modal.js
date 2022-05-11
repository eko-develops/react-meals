import ReactDOM from "react-dom";
import Card from "../UI/Card/Card";
import style from "./Modal.module.css";

const Overlay = ({ cartOpen, setCartOpen }) => {
  const overlayClasses = cartOpen
    ? `${style.overlay} ${style.modalFadeOpen}`
    : `${style.overlay} ${style.modalFadeClose}`;

  return (
    <div onClick={() => setCartOpen(false)} className={overlayClasses}></div>
  );
};

const ModalContents = ({ children, cartOpen }) => {
  const modalClasses = cartOpen
    ? `${style.modal} ${style.modalFadeOpen}`
    : `${style.modal} ${style.modalFadeClose}`;

  return (
    <Card className={modalClasses}>
      <div className={style.content}>{children}</div>
    </Card>
  );
};

const overlayElement = document.getElementById("overlay");

const Modal = ({ children, cartOpen, setCartOpen }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay setCartOpen={setCartOpen} cartOpen={cartOpen} />,
        overlayElement
      )}
      {ReactDOM.createPortal(
        <ModalContents cartOpen={cartOpen}>{children}</ModalContents>,
        overlayElement
      )}
    </>
  );
};

export default Modal;

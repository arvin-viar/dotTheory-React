import ReactDOM from "react-dom";

import "./modal.scss";

const Modal = ({children}) => (
  ReactDOM.createPortal(
    children,
    document.getElementById('my-portal')
  )
);

export default Modal;

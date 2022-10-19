import React, { useState } from "react";

import Modal from "../../Modals";
import "./portal.scss";

const Portals = () => {
  const [isModal, setIsModal] = useState(false);

  const handleOpenModal = () => {
    setIsModal(true);
  }

  const handleCloseModal = () => {
    setIsModal(false);
  }

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <h1 className="content-header__title">
          Portals
        </h1>
      </div>

      <div className="portal">
        <button
          className="portal__open-modal-btn"
          onClick={handleOpenModal}
        >
          Open Modal
        </button>
      </div>

      {isModal && (
        <Modal>
          <div className="modal">
            This is the Modal Window
            <button onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Portals;

import React, { useState } from "react";
import "./Modal.css";

function Modal({ isOpen, closeModal, content }) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  console.log(isOpen);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    closeModal();
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Abrir Modal</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            {content}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;

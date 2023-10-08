import React from "react";
import "./Modal.css"; // Estilo CSS para o modal

function Modal({
  isOpen,
  onClose,
  title,
  description,
  temperature,
  mass,
  gravity,
  distance,
  touristText,
  touristImage,
}) {
  const url = "https://photojournal.jpl.nasa.gov/target/" + title; // URL para o NASA Photo Journal

  const isVideo = touristImage.toLowerCase().endsWith(".mp4");

  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal">
        <h1 className="modal-title">{title}</h1>
        <p className="modal-text">{description}</p>

        <h1 className="modal-subtitle">Informations for your trip:</h1>
        <div className="modal-content">
          <h2 className="modal-text">Temperature: </h2>
          <h2 className="modal-infos">{temperature}</h2>
        </div>
        <div className="modal-content">
          <h2 className="modal-text">Mass: </h2>
          <h2 className="modal-infos">{mass}</h2>
        </div>
        <div className="modal-content">
          <h2 className="modal-text">Gravity: </h2>
          <h2 className="modal-infos">{gravity}</h2>
        </div>
        <div className="modal-content">
          <h2 className="modal-text">Distance from Earth: </h2>
          <h2 className="modal-infos">{distance}</h2>
        </div>
        <div className="modal-content">
          <h2 className="modal-text">Tourist Attractions: </h2>
          <h2 className="modal-infos">{touristText}</h2>
          {isVideo ? (
            <video
              controls
              autoPlay
              loop
              src={touristImage}
              alt="Tourist Attraction Video"
              className="tourist-video"
            />
          ) : (
            <img src={touristImage} alt="Tourist Attraction Image" />
          )}
        </div>

        <p className="modal-footer-text">
          You can find images of the {title}'s locations at any time at:
          <a about="blank_" href={url}>
            NASA Photo Journal
          </a>
        </p>
        <button onClick={onClose} className="animated-button">
          Back to explorer
        </button>
      </div>
    </div>
  ) : null;
}

export default Modal;

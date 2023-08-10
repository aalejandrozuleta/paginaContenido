import React from "react";

const ModalTrailer = ({ trailerUrl, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <video controls autoPlay style={{ maxWidth: "100%" }}>
            <source src={trailerUrl} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTrailer;

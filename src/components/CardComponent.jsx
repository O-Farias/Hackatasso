import React from "react";

function CardComponent({ title, description, buttonText, onClick }) {
  return (
    <div className="plan-card">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <button onClick={onClick} className="btn btn-primary choose-plan-button">
        {buttonText}
      </button>
    </div>
  );
}

export default CardComponent;

import React from "react";

function CardComponent({ title, description, buttonText, onClick }) {
  return (
    <div className="item-card">
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <button onClick={onClick} className="btn">
        {buttonText}
      </button>
    </div>
  );
}

export default CardComponent;

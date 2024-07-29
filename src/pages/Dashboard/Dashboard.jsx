import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { FaPrint, FaShoppingCart } from "react-icons/fa";

// Função que renderiza o componente Dashboard
function Dashboard() {
  const [isHoverPrint, setIsHoverPrint] = useState(false);
  const [isHoverShop, setIsHoverShop] = useState(false);
  const navigate = useNavigate();

  // Função que redireciona para a loja
  const handleShopClick = () => {
    navigate("/shop");
  };

  return (
    <div className="dashboard-container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px" }}>
        <div className="card-body text-center">
          <h2 className="card-title">Olá, João!</h2>
          <p className="card-text">O que você deseja fazer?</p>
          <div className="action-buttons">
            <button
              className="btn w-100 my-2"
              style={{
                backgroundColor: isHoverPrint ? "#6a0dad" : "transparent",
                borderColor: "#6a0dad",
                color: isHoverPrint ? "white" : "#6a0dad",
              }}
              onMouseEnter={() => setIsHoverPrint(true)}
              onMouseLeave={() => setIsHoverPrint(false)}
              onClick={() => navigate("/treinos")}
            >
              <FaPrint style={{ marginRight: "8px" }} /> Imprimir meu treino
            </button>
            <button
              className="btn w-100 my-2"
              style={{
                backgroundColor: isHoverShop ? "#6a0dad" : "transparent",
                borderColor: "#6a0dad",
                color: isHoverShop ? "white" : "#6a0dad",
              }}
              onMouseEnter={() => setIsHoverShop(true)}
              onMouseLeave={() => setIsHoverShop(false)}
              onClick={handleShopClick}
            >
              <FaShoppingCart style={{ marginRight: "8px" }} /> Acessar loja
            </button>
          </div>
          <p className="mt-3">
            Precisa de ajuda? Procure alguém de nossa equipe.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

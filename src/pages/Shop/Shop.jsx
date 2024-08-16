import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Contratos from "../../components/Shop/Contratos";
import Produtos from "../../components/Shop/Produtos";
import Servicos from "../../components/Shop/Servicos";
import "./Shop.css";
import { FaCheckCircle } from "react-icons/fa";

function Shop() {
  const [selectedTab, setSelectedTab] = useState("contracts");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  // Função para lidar com o clique nos botões de abas
  const handlePlanSelection = (planName) => {
    setSelectedPlan(planName);
    setShowNotification(true);
  };

  // Define a contagem regressiva para 5 segundos quando o componente é montado e a limpa quando é desmontado
  useEffect(() => {
    if (showNotification) {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      if (countdown === 0) {
        navigate("/");
      }

      return () => clearInterval(interval);
    }
  }, [showNotification, countdown, navigate]);

  return (
    <div className="shop-container d-flex flex-column align-items-center justify-content-center vh-100">
      {showNotification ? (
        <div className="notification-container">
          <div className="notification">
            <FaCheckCircle className="notification-icon" />
            <h2>{selectedPlan} escolhido com sucesso!</h2>
            <p>Você será redirecionado para o início em: {countdown}</p>
            <p>
              <strong>Obrigado pela sua escolha!</strong>
            </p>
          </div>
        </div>
      ) : (
        <div className="card p-4 shadow shop-card">
          <div className="card-body">
            <h2 className="card-title">Loja</h2>
            <p>Escolha o produto ideal para você.</p>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    selectedTab === "contracts" ? "active" : ""
                  }`}
                  onClick={() => setSelectedTab("contracts")}
                >
                  Contratos
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    selectedTab === "products" ? "active" : ""
                  }`}
                  onClick={() => setSelectedTab("products")}
                >
                  Produtos
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    selectedTab === "services" ? "active" : ""
                  }`}
                  onClick={() => setSelectedTab("services")}
                >
                  Serviços
                </button>
              </li>
            </ul>
            <div className="tab-content mt-4">
              {selectedTab === "contracts" && (
                <Contratos handlePlanSelection={handlePlanSelection} />
              )}
              {selectedTab === "products" && <Produtos />}
              {selectedTab === "services" && <Servicos />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";
import { FaSearch, FaCheckCircle } from "react-icons/fa";

function Shop() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  // Função para lidar com a seleção de planos e notificção
  const handlePlanSelection = (planName) => {
    setSelectedPlan(planName);
    setShowNotification(true);
  };

  // Redireciona automaticamente para a tela de inicio
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
                <a className="nav-link active" href="#contracts">
                  Contratos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Produtos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Serviços
                </a>
              </li>
            </ul>
            <div id="contracts" className="tab-content mt-4">
              <div className="tab-pane active">
                <div className="search-bar mb-3 position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar contrato"
                  />
                  <FaSearch className="search-icon" />
                </div>
                <div className="plan-card">
                  <h5 className="card-title">Musculação mensal</h5>
                  <p className="card-text">
                    Duração: 1 mês <br /> Tx. adesão: R$ 50,00 <br /> Preço: R$
                    1.500,00
                  </p>
                  <button
                    onClick={() => handlePlanSelection("Musculação mensal")}
                    className="btn btn-primary choose-plan-button"
                  >
                    Escolher plano
                  </button>
                </div>
                <div className="plan-card">
                  <h5 className="card-title">Musculação semestral</h5>
                  <p className="card-text">
                    Duração: 6 meses <br /> Tx. adesão: Grátis <br /> Preço: R$
                    1.500,00
                  </p>
                  <button
                    onClick={() => handlePlanSelection("Musculação semestral")}
                    className="btn btn-primary choose-plan-button"
                  >
                    Escolher plano
                  </button>
                </div>
              </div>
              <div id="products" className="tab-pane fade">
                Produtos conteúdo aqui...
              </div>
              <div id="services" className="tab-pane fade">
                Serviços conteúdo aqui...
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;

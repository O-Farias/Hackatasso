import React from "react";
import "./Shop.css";
import { FaSearch } from "react-icons/fa";

function Shop() {
  return (
    <div className="shop-container d-flex flex-column align-items-center justify-content-center vh-100">
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
                <a href="#" className="btn btn-primary choose-plan-button">
                  Escolher plano
                </a>
              </div>
              <div className="plan-card">
                <h5 className="card-title">Musculação semestral</h5>
                <p className="card-text">
                  Duração: 6 meses <br /> Tx. adesão: Grátis <br /> Preço: R$
                  1.500,00
                </p>
                <a href="#" className="btn btn-primary choose-plan-button">
                  Escolher plano
                </a>
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
    </div>
  );
}

export default Shop;

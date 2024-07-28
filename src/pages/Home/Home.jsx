import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

// Função que renderiza o componente Home
function Home() {
  const navigate = useNavigate();

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // lógica para validar o CPF
    navigate("/dashboard");
  };

  return (
    <div className="home-container d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ maxWidth: "400px" }}>
        <div className="card-body text-center">
          <h2 className="card-title">Next Fit GYM</h2>
          <p className="card-text">O próximo nível da sua vida fitness</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="cpf" className="form-label">
                Informe seu CPF para continuar
              </label>
              <input
                type="text"
                className="form-control"
                id="cpf"
                placeholder="000.000.000-00"
              />
            </div>
            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: "#6a0dad",
                borderColor: "#6a0dad",
                color: "white",
              }}
            >
              Acessar
            </button>
          </form>
          <p className="mt-3">
            Precisa de ajuda? Procure alguém de nossa equipe.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

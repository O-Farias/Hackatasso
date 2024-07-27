import React from "react";
import "./Treinos.css";

function Treinos() {
  return (
    <div className="treinos-container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px" }}>
        <div className="card-body text-center">
          <h2 className="card-title">Imprimir meu treino</h2>
          <p className="card-text">Selecione o treino que deseja imprimir.</p>

          <div className="mb-3">
            <h5>Treino do dia</h5>
            <button className="btn btn-outline-primary w-100 my-2">
              Treino C <span className="float-end">➔</span>
            </button>
          </div>

          <div className="mb-3">
            <h5>Outros treinos</h5>
            <button className="btn btn-outline-primary w-100 my-2">
              Treino A <span className="float-end">➔</span>
            </button>
            <button className="btn btn-outline-primary w-100 my-2">
              Treino B <span className="float-end">➔</span>
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

export default Treinos;

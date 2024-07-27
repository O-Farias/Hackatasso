// src/pages/Treinos/Treinos.jsx
import React, { useState } from "react";
import { treinosData } from "../../mockData";
import "./Treinos.css";

function Treinos() {
  const [selectedTreino, setSelectedTreino] = useState(null);

  const handleTreinoClick = (treino) => {
    setSelectedTreino(treino);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="treinos-container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px" }}>
        {selectedTreino ? (
          <div className="card-body text-center">
            <h2 className="card-title">Imprimir meu treino</h2>
            <p>Data: {treinosData[selectedTreino].data}</p>
            <p>Aluno: {treinosData[selectedTreino].aluno}</p>
            <p>Último treino: {treinosData[selectedTreino].ultimoTreino}</p>
            <h4>Exercícios ({selectedTreino})</h4>
            <ul>
              {treinosData[selectedTreino].exercicios.map(
                (exercicio, index) => (
                  <li key={index}>
                    <strong>{exercicio.nome}</strong> - S: {exercicio.series} R:{" "}
                    {exercicio.repeticoes} C: {exercicio.carga} D:{" "}
                    {exercicio.descanso}
                  </li>
                )
              )}
            </ul>
            <p>Responsável: {treinosData[selectedTreino].responsavel}</p>
            <button
              onClick={handlePrint}
              className="btn w-100 mt-3"
              style={{
                backgroundColor: "#6a0dad",
                borderColor: "#6a0dad",
                color: "white",
              }}
              onMouseEnter={(e) => (
                (e.target.style.backgroundColor = "#5c009e"),
                (e.target.style.borderColor = "#5c009e")
              )}
              onMouseLeave={(e) => (
                (e.target.style.backgroundColor = "#6a0dad"),
                (e.target.style.borderColor = "#6a0dad")
              )}
            >
              Imprimir
            </button>
          </div>
        ) : (
          <div className="card-body text-center">
            <h2 className="card-title">
              Selecione o treino que deseja imprimir
            </h2>
            <div className="mb-3">
              <h5>Treino do dia</h5>
              <button
                className="btn w-100 my-2"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#6a0dad",
                  color: "#6a0dad",
                }}
                onMouseEnter={(e) => (
                  (e.target.style.backgroundColor = "#6a0dad"),
                  (e.target.style.color = "white")
                )}
                onMouseLeave={(e) => (
                  (e.target.style.backgroundColor = "transparent"),
                  (e.target.style.color = "#6a0dad")
                )}
                onClick={() => handleTreinoClick("Treino C")}
              >
                Treino C <span className="float-end">➔</span>
              </button>
            </div>
            <div className="mb-3">
              <h5>Outros treinos</h5>
              <button
                className="btn w-100 my-2"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#6a0dad",
                  color: "#6a0dad",
                }}
                onMouseEnter={(e) => (
                  (e.target.style.backgroundColor = "#6a0dad"),
                  (e.target.style.color = "white")
                )}
                onMouseLeave={(e) => (
                  (e.target.style.backgroundColor = "transparent"),
                  (e.target.style.color = "#6a0dad")
                )}
                onClick={() => handleTreinoClick("Treino A")}
              >
                Treino A <span className="float-end">➔</span>
              </button>
              <button
                className="btn w-100 my-2"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#6a0dad",
                  color: "#6a0dad",
                }}
                onMouseEnter={(e) => (
                  (e.target.style.backgroundColor = "#6a0dad"),
                  (e.target.style.color = "white")
                )}
                onMouseLeave={(e) => (
                  (e.target.style.backgroundColor = "transparent"),
                  (e.target.style.color = "#6a0dad")
                )}
                onClick={() => handleTreinoClick("Treino B")}
              >
                Treino B <span className="float-end">➔</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Treinos;

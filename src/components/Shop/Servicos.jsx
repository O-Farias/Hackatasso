import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import CardComponent from "../CardComponent";
import "../../pages/Shop/Shop.css";

function Servicos() {
  const servicosData = [
    {
      nome: "Avaliação Física",
      descricao:
        "Avaliação completa de composição corporal e condicionamento físico.",
      preco: "R$ 100,00",
    },
    {
      nome: "Personal Trainer",
      descricao: "Sessões personalizadas com um treinador especializado.",
      preco: "R$ 150,00 / hora",
    },
    {
      nome: "Consultoria Nutricional",
      descricao:
        "Plano alimentar personalizado para seus objetivos de fitness.",
      preco: "R$ 200,00",
    },
  ];

  return (
    <div>
      <SearchBar placeholder="Buscar serviço" className="search-bar" />
      <div className="items-container">
        {servicosData.map((servico, index) => (
          <CardComponent
            key={index}
            title={servico.nome}
            description={`${servico.descricao}<br />Preço: ${servico.preco}`}
            buttonText="Agendar Serviço"
            onClick={() => {
              /* Lógica para agendar serviço */
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Servicos;

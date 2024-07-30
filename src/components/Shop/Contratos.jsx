import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import CardComponent from "../CardComponent";
import "../../pages/Shop/Shop.css";

function Contratos({ handlePlanSelection }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Lógica de filtragem de contratos com base em searchTerm
  };

  return (
    <div>
      <SearchBar
        placeholder="Buscar contrato"
        onSearch={handleSearch}
        className="search-bar"
      />
      <div className="items-container">
        <CardComponent
          title="Musculação mensal"
          description="Duração: 1 mês <br />Tx. adesão: R$ 50,00<br />Preço: R$ 1.500,00"
          buttonText="Escolher plano"
          onClick={() => handlePlanSelection("Musculação mensal")}
        />
        <CardComponent
          title="Musculação semestral"
          description="Duração: 6 meses<br />Tx. adesão: Grátis<br />Preço: R$ 1.500,00"
          buttonText="Escolher plano"
          onClick={() => handlePlanSelection("Musculação semestral")}
        />
      </div>
    </div>
  );
}

export default Contratos;

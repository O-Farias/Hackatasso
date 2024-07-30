import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import CardComponent from "../CardComponent";
import "../../pages/Shop/Shop.css";

function Produtos() {
  const produtosData = [
    {
      nome: "Whey Protein",
      descricao: "Proteína de alta qualidade para ganho muscular.",
      preco: "R$ 150,00",
    },
    {
      nome: "Creatina",
      descricao: "Suplemento para aumento de força e performance.",
      preco: "R$ 100,00",
    },
    {
      nome: "Camiseta Esportiva",
      descricao: "Camiseta leve e confortável para treinos.",
      preco: "R$ 50,00",
    },
    {
      nome: "Tênis de Corrida",
      descricao: "Tênis confortável e durável para corridas.",
      preco: "R$ 250,00",
    },
  ];

  return (
    <div>
      <SearchBar placeholder="Buscar produto" className="search-bar" />
      <div className="items-container">
        {produtosData.map((produto, index) => (
          <CardComponent
            key={index}
            title={produto.nome}
            description={`${produto.descricao}<br />Preço: ${produto.preco}`}
            buttonText="Adicionar ao Carrinho"
            onClick={() => {
              /* Lógica para adicionar ao carrinho */
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Produtos;

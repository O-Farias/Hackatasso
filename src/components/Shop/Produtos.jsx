import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Produtos.css";

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
      <SearchBar placeholder="Buscar produto" />
      {produtosData.map((produto, index) => (
        <div className="produto-card" key={index}>
          <h5 className="card-title">{produto.nome}</h5>
          <p className="card-text">{produto.descricao}</p>
          <p className="card-text">Preço: {produto.preco}</p>
          <button className="btn btn-primary">Adicionar ao Carrinho</button>
        </div>
      ))}
    </div>
  );
}

export default Produtos;

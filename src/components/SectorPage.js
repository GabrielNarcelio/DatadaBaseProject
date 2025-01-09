import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SectorPage = () => {
  const { sectorName } = useParams(); // Pega o nome do setor da URL
  const navigate = useNavigate();

  // Conteúdos específicos para cada setor
  const sectorContent = {
    "Suporte Tecnico":
      "Bem-vindo à página de Suporte Técnico. Aqui você pode acessar os tickets e relatórios técnicos.",
    Comercial:
      "Bem-vindo à página Comercial. Aqui você pode acessar os relatórios de vendas e propostas.",
    Financeiro:
      "Bem-vindo à página Financeira. Aqui você pode acessar os relatórios financeiros e fluxo de caixa.",
  };

  return (
    <div className="sector-page">
      <h1>{sectorName}</h1>
      <p>{sectorContent[sectorName] || "Setor não encontrado."}</p>
      <button onClick={() => navigate("/dashboard")}>Voltar</button>
    </div>
  );
};

export default SectorPage;

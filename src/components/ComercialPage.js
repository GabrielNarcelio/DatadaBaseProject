import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * ComercialPage Component: Página personalizada para o setor Comercial
 */
const ComercialPage = () => {
  const navigate = useNavigate();

  return (
    <div className="sector-page">
      <h1>Comercial</h1>
      <p>Aqui você pode visualizar relatórios de vendas e propostas comerciais.</p>
      <ul>
        <li>Venda: Produto X - 100 unidades</li>
        <li>Proposta: Contrato com Empresa Y</li>
      </ul>
      <button onClick={() => navigate('/dashboard')}>Voltar</button>
    </div>
  );
};

export default ComercialPage;

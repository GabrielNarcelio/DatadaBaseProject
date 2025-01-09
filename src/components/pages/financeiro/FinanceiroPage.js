import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * FinanceiroPage Component: Página personalizada para o setor Financeiro
 */
const FinanceiroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="sector-page">
      <h1>Financeiro</h1>
      <p>Aqui você pode acessar relatórios financeiros e o fluxo de caixa.</p>
      <ul>
        <li>Relatório: Fechamento mensal</li>
        <li>Relatório: Despesas operacionais</li>
      </ul>
      <button onClick={() => navigate('/dashboard')}>Voltar</button>
    </div>
  );
};

export default FinanceiroPage;

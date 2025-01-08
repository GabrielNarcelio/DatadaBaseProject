import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * SuporteTecnicoPage Component: Página personalizada para o setor de Suporte Técnico
 */
const SuporteTecnicoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="sector-page">
      <h1>Suporte Técnico</h1>
      <p>Aqui você pode gerenciar tickets e visualizar relatórios técnicos.</p>
      <ul>
        <li>Ticket 1: Resolução de problemas de rede</li>
        <li>Ticket 2: Atualização de software</li>
      </ul>
      <button onClick={() => navigate('/dashboard')}>Voltar</button>
    </div>
  );
};

export default SuporteTecnicoPage;

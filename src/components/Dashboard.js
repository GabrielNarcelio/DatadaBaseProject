import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


//Dashboard Component: Exibe os setores disponíveis para o usuário logado

const Dashboard = () => {
  const { user, logout } = useAuth();  // Obtém dados do usuário e função de logout
  const navigate = useNavigate();

  if (!user) {
    navigate('/'); // Redireciona para o Login se o usuário não estiver autenticado
    return null;
  }


  /**
   * handleSectorClick: Navega para a rota do setor clicado
   * @param {string} route - Caminho da rota do setor
   */
  const handleSectorClick = (route) => {
    navigate(route);
  };
  

    /**
   * handleLogout: Faz logout e redireciona para o Login
   */
  const handleLogout = () => {
    logout();
    navigate('/');
  };





  
  return (
    <div className="dashboard-container">
      <h1>Bem-vindo, {user.username}</h1>
      <h2>Setores disponíveis:</h2>
      <div className="sector-buttons">
        {user.permissions.includes('Suporte Tecnico') && (
          <button onClick={() => handleSectorClick('/suporte-tecnico')}>
            Suporte Técnico
          </button>
        )}
        {user.permissions.includes('Comercial') && (
          <button onClick={() => handleSectorClick('/comercial')}>
            Comercial
          </button>
        )}
        {user.permissions.includes('Financeiro') && (
          <button onClick={() => handleSectorClick('/financeiro')}>
            Financeiro
          </button>
        )}
      </div>
      <button onClick={handleLogout} className="logout-button">
        Sair
      </button>
    </div>
  );
};
export default Dashboard;
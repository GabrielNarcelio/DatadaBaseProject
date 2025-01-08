// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * ProtectedRoute Component: Verifica se o usuário está autenticado antes de renderizar a rota.
 * @param {Object} props - As propriedades do componente.
 * @param {JSX.Element} props.children - Componente a ser renderizado caso o usuário esteja autenticado.
 * @returns {JSX.Element} - Componente ou redirecionamento.
 */
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Obtém o usuário autenticado do contexto

  // Se o usuário não estiver autenticado, redireciona para a página de login
  if (!user) {
    return <Navigate to="/" />;
  }

  // Caso esteja autenticado, renderiza os componentes filhos
  return children;
};

export default ProtectedRoute;
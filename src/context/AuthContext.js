import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Simulação de autenticação
    const users = {
      admin: { password: '1234', permissions: ['Suporte Tecnico', 'Financeiro', 'Comercial'] },
      suporte: { password: '1234', permissions: ['Suporte Tecnico'] },
      financeiro: { password: '1234', permissions: ['Financeiro'] },
      comercial: {password: '1234', permissions: ['Comercial']},
    };

    if (users[username] && users[username].password === password) {
      setUser({ username, permissions: users[username].permissions });
      return true;
    }

    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SectorPage from './components/SectorPage';
import SuporteTecnicoPage from './components/SuporteTecnicoPage';
import ComercialPage from './components/ComercialPage';
import FinanceiroPage from './components/FinanceiroPage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import './styles.css';











function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Página de Login */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          /> {/* Dashboard */}
          {/* Rotas específicas para cada setor */}
          <Route
            path="/suporte-tecnico"
            element={
              <ProtectedRoute>
                <SuporteTecnicoPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/comercial"
            element={
              <ProtectedRoute>
                <ComercialPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/financeiro"
            element={
              <ProtectedRoute>
                <FinanceiroPage />
              </ProtectedRoute>
            }
          />
              {/* Rotas dinâmicas para os setores */}
          <Route 
            path="/sector/:sectorName" 
            element={<SectorPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
























/**
 * App Component: Configura as rotas principais do aplicativo
 */

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Rota de Login */}
//           <Route path="/" element={<Login />} />

//           {/* Rota do Dashboard */}
//           <Route path="/dashboard" element={<Dashboard />} />

//           {/* Rotas específicas para cada setor */}
//           <Route path="/suporte-tecnico" element={<SuporteTecnicoPage />} />
//           <Route path="/comercial" element={<ComercialPage />} />
//           <Route path="/financeiro" element={<FinanceiroPage />} />

//           {/* Rotas dinâmicas para os setores */}
//           <Route path="/sector/:sectorName" element={<SectorPage />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;










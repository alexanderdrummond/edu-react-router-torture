import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './styles/main.scss';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ProtectedPage from './pages/ProtectedPage';
import Login from './pages/Login';
import Footer from './components/Footer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
        <Route 
          path="/protected" 
          element={isAuthenticated ? <ProtectedPage /> : <Navigate to="/login" replace />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<App />);

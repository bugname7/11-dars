import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Register from './pages/Register';
import ArticleList from './pages/ArticleList';

function App() {
  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  useEffect(() => {
    if (location.state?.token) {
      setToken(location.state.token);
    }
  }, [location.state?.token]);

  function PrivateRoute({ isAuth, children }) {
    return isAuth ? children : <Navigate to="/signin" replace />;
  }

  return (
    <Routes>
      <Route
        index
        element={
          <PrivateRoute isAuth={!!token}>
            <MainLayout>
              <Home />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/list"
        element={
          <PrivateRoute isAuth={!!token}>
            <MainLayout>
              <ArticleList />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route path="/signin" element={<AuthLayout><Login /></AuthLayout>} />
      <Route path="/signup" element={<AuthLayout><Register /></AuthLayout>} />
    </Routes>
  );
}

export default App;

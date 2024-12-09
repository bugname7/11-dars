import React, { useEffect, useState, createContext } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CountryInfo from "./pages/CountryInfo";

export const Theme = createContext(null);
export const Language = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("eng");
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    if (location.state?.token) {
      setToken(location.state.token);
    }
  }, [location.state]);

  function PrivateRoute({ children }) {
    if (!token) {
      navigate("/login");
      return null;
    }
    return children;
  }
  useEffect(() => {
    const body = document.body;
    if (theme == "light") {
      body.classList.remove("dark");
      body.classList.add("light");
    } else {
      body.classList.remove("light");
      body.classList.add("dark");
    }
  }, [theme]);

  return (
    <div>
      <Theme.Provider value={{ theme, setTheme }}>
        <Language.Provider value={{ language, setLanguage }}>
          <Routes>
            <Route
              index
              element={
                <PrivateRoute>
                  <MainLayout>
                    <Home />
                  </MainLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/about"
              element={
                <PrivateRoute>
                  <MainLayout>
                    <About />
                  </MainLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <AuthLayout>
                  <Login />
                </AuthLayout>
              }
            />
            <Route
              path="/register"
              element={
                <AuthLayout>
                  <Register />
                </AuthLayout>
              }
            />
            <Route
              path="/id"
              element={
                <AuthLayout>
                  <CountryInfo />
                </AuthLayout>
              }
            />
          </Routes>
        </Language.Provider>
      </Theme.Provider>
    </div>
  );
}

export default App;

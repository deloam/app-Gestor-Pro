import React from "react";
import { FaUserCircle } from "react-icons/fa"; // Importando o ícone de usuário
import { useNavigate } from "react-router-dom";
import "../Styles/Header.css"; // Importando o CSS do Header
import logoImage from "../assets/logo.png"; // Importe sua logo

const Header = ({ userType }) => {
  const navigate = useNavigate(); // Inicialize o hook

  const handleLogout = () => {
    navigate("/"); // Navega para a rota raiz (login)
  };

  return (
    <header className="header">
      <div className="welcome">
        <FaUserCircle
          className="user-icon"
          onClick={handleLogout}
          style={{ cursor: "pointer" }} // Adiciona cursor pointer ao ícone
        />
        <span>Bem-vindo {userType}</span>
      </div>
      <div className="app-title">
        <img src={logoImage} alt="Gestor Pro Logo" className="header-logo" />
        <div className="app-name">
          <span className="gestor">Gestor</span>
          <span className="pro">Pro</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

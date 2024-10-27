import React from "react";
import { FaUserCircle } from "react-icons/fa"; // Importando o ícone de usuário
import "../Styles/Header.css"; // Importando o CSS do Header

const Header = ({ userType }) => {
  return (
    <header className="header">
      <div className="welcome">
        <FaUserCircle className="user-icon" /> {/* Usando o ícone de usuário */}
        <span>Bem-vindo {userType}</span>
      </div>
      <h1 className="app-name">Gestor Pro</h1>
    </header>
  );
};

export default Header;

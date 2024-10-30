import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaPaperPlane, FaHistory } from "react-icons/fa"; // Importando os ícones
import "../Styles/TechnicianHome.css";

const TechnicianHome = () => {
  const navigate = useNavigate();

  return (
    <div className="technician-home">
      <div className="button-container">
        <button
          className="highlighted-button"
          onClick={() => navigate("/open-calls")}
        >
          <FaEye className="button-icon" />
          Visualizar Chamados Abertos
        </button>
        <button
          className="normal-button"
          onClick={() => navigate("/send-proposals")}
        >
          <FaPaperPlane className="button-icon" />
          Enviar Propostas
        </button>
        <button
          className="normal-button"
          onClick={() => navigate("/service-history")}
        >
          <FaHistory className="button-icon" />
          Histórico de Serviços
        </button>
      </div>
    </div>
  );
};

export default TechnicianHome;

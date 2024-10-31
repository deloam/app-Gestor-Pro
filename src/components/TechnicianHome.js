import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaPaperPlane, FaHistory } from "react-icons/fa"; // Importando os ícones
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsCashCoin } from "react-icons/bs";
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
          onClick={() => navigate("/send-proposal")}
        >
          <FaPaperPlane className="button-icon" />
          Enviar Propostas
        </button>
        <button className="normal-button" onClick={() => navigate("/saque")}>
          <BiMoneyWithdraw className="button-icon" />
          Saques
        </button>
        <button
          className="normal-button"
          onClick={() => navigate("/historico-financeiro")}
        >
          <BsCashCoin className="button-icon" />
          Histórico de Pagamento
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

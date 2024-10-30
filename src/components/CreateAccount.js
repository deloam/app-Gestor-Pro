import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserTie, FaBuilding } from "react-icons/fa";
import "../Styles/CreateAccount.css";

const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="create-account-container">
      <div className="cards-container">
        <div
          className="account-card"
          //technician-registration
          onClick={() => navigate("/technician-registration")}
        >
          <FaUserTie className="account-icon" />
          <h2>Técnico</h2>
          <p>Cadastre-se como técnico para oferecer seus serviços</p>
        </div>

        <div
          className="account-card"
          onClick={() => alert("Registro de instituição em desenvolvimento")}
        >
          <FaBuilding className="account-icon" />
          <h2>Instituição Pública</h2>
          <p>Cadastre sua instituição para solicitar serviços</p>
        </div>
      </div>

      <button className="back-button" onClick={() => navigate("/")}>
        Voltar
      </button>
    </div>
  );
};

export default CreateAccount;

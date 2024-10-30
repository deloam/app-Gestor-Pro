import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import {
  PiCellSignalLowFill,
  PiCellSignalMediumFill,
  PiCellSignalFullFill,
} from "react-icons/pi";
import "../Styles/RequestService.css"; // Importando o CSS
import BottomMenuInstitution from "./BottomMenuinstitution"; // Importando o BottomMenu

function RequestService() {
  const navigate = useNavigate(); // Hook para navegação
  const [equipamento, setEquipamento] = useState("");
  const [descricao, setDescricao] = useState("");
  const [urgencia, setUrgencia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar a solicitação de serviço
    console.log("Solicitação de serviço enviada:", {
      equipamento,
      descricao,
      urgencia,
    });
    // Limpar os campos após o envio
    setEquipamento("");
    setDescricao("");
    setUrgencia("");
  };

  return (
    <div className="request-service">
      <h1>Solicitar Serviço</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="equipamento">Equipamento</label>
          <select
            id="equipamento"
            value={equipamento}
            onChange={(e) => setEquipamento(e.target.value)}
            required
          >
            <option value="" disabled>
              Selecione o Equipamento
            </option>
            <option value="Gerador de Energia">Gerador de Energia</option>
            <option value="Ar Condicionado">Ar Condicionado</option>
            <option value="Computador">Computador</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="descricao">Descrição do Problema</label>
          <textarea
            id="descricao"
            placeholder="Descreva o problema"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Urgência</label>
          <div className="urgency-options">
            <div
              className={`urgency-option ${
                urgencia === "Baixa" ? "selected" : ""
              }`}
              onClick={() => setUrgencia("Baixa")}
            >
              <PiCellSignalLowFill size={30} color="green" />
              <span>Baixa</span>
            </div>
            <div
              className={`urgency-option ${
                urgencia === "Média" ? "selected" : ""
              }`}
              onClick={() => setUrgencia("Média")}
            >
              <PiCellSignalMediumFill size={30} color="orange" />
              <span>Média</span>
            </div>
            <div
              className={`urgency-option ${
                urgencia === "Alta" ? "selected" : ""
              }`}
              onClick={() => setUrgencia("Alta")}
            >
              <PiCellSignalFullFill size={30} color="red" />
              <span>Alta</span>
            </div>
          </div>
        </div>

        <button className="submit-btn" type="submit">
          Solicitar Orçamento
        </button>
      </form>
      <button
        className="back-btn"
        onClick={() => navigate("/institution")} // Navega para a tela anterior
        style={{
          margin: "10px 0",
          backgroundColor: "#0057f9",
          color: "#fff",
          padding: "10px",
          width: "50%",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }} // Estilo do botão de voltar
      >
        Voltar
      </button>
      <div style={{ marginBottom: "80px" }} /> {/* Espaço para o BottomMenu */}
      <BottomMenuInstitution /> {/* Adicionando o BottomMenu */}
    </div>
  );
}

export default RequestService;

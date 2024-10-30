import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/OpenCalls.css";
import BottomMenuInstitution from "./BottomMenuinstitution";

const OpenCalls = () => {
  const navigate = useNavigate();

  // Dados de exemplo dos chamados
  const calls = [
    {
      id: 1,
      organization: "Escola Anisio Texeira",
      problem: "Ar condicionado não refrigera",
      equipment: "Ar Condicionado Split 12000 BTUs",
      location: "Sala do Diretor - 2º andar",
      urgency: "Alta",
    },
    {
      id: 2,
      organization: "Escola Estadual Paulo Freire",
      problem: "Instalação",
      equipment: "Ar Condicionado Split 18000 BTUs",
      location: "Quadra - Térreo",
      urgency: "Média",
    },
    {
      id: 3,
      organization: "Universidade Publica",
      problem: "Manutenção",
      equipment: "Ar Condicionado 12000 BTUs",
      location: "Área de estudos - 1º andar",
      urgency: "Baixa",
    },
    {
      id: 4,
      organization: "Escola Infantil Rosa Linda",
      problem: "Ar Condicionado sem gás",
      equipment: "Ar Condicionado 12000 BTUs",
      location: "Sala de Cinema - Área interna",
      urgency: "Alta",
    },
  ];

  const handleSendProposal = (callId) => {
    // Aqui você implementará a navegação para a tela de envio de proposta
    alert(`Enviar proposta para chamado ${callId}`);
    // navigate(`/send-proposal/${callId}`);
  };

  return (
    <div className="open-calls-container">
      <h2>Chamados Abertos</h2>
      <div className="calls-list">
        {calls.map((call) => (
          <div key={call.id} className="call-card">
            <div className="organization-name">{call.organization}</div>
            <div className="call-info">
              <strong>Problema:</strong> {call.problem}
            </div>
            <div className="call-info">
              <strong>Equipamento:</strong> {call.equipment}
            </div>
            <div className="call-info">
              <strong>Localização:</strong> {call.location}
            </div>
            <div className="call-info">
              <strong>Urgência:</strong>{" "}
              <span
                style={{
                  color:
                    call.urgency === "Alta"
                      ? "#ff0000"
                      : call.urgency === "Média"
                      ? "#ffa500"
                      : "#009c3b",
                }}
              >
                {call.urgency}
              </span>
            </div>
            <button
              className="send-proposal-btn"
              onClick={() => handleSendProposal(call.id)}
            >
              Enviar Proposta
            </button>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate("/technician")}>
        Voltar
      </button>
      <div style={{ marginBottom: "80px" }} /> {/* Espaço para o BottomMenu */}
      <BottomMenuInstitution />
    </div>
  );
};

export default OpenCalls;

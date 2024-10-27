import React from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import "../Styles/ProposalView.css"; // Importando o CSS
import BottomMenu from "./BottomMenu";

const proposals = [
  {
    id: 1,
    tecnico: "Técnico A",
    valor: "R$ 500,00",
    avaliacao: "⭐⭐⭐⭐",
    tempoResposta: "2 horas",
    cor: "green", // Cor para indicar a avaliação
  },
  {
    id: 2,
    tecnico: "Técnico B",
    valor: "R$ 700,00",
    avaliacao: "⭐⭐⭐⭐⭐",
    tempoResposta: "3 horas",
    cor: "orange", // Cor para indicar a avaliação
  },
];

function ProposalView() {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <div className="proposal-view-container">
      <h1>Visualização de Propostas</h1>
      <div className="proposal-list">
        {proposals.map((proposal) => (
          <div key={proposal.id} className="proposal-card">
            <h3 style={{ color: proposal.cor }}>{proposal.tecnico}</h3>
            <p>
              <strong>Valor:</strong> {proposal.valor}
            </p>
            <p>
              <strong>Avaliação:</strong> {proposal.avaliacao}
            </p>
            <p>
              <strong>Tempo de Resposta:</strong> {proposal.tempoResposta}
            </p>
            <button className="select-btn">Selecionar Técnico</button>
          </div>
        ))}
      </div>
      <button
        className="cancel-btn"
        onClick={() => navigate("/institution")} // Navega para a tela anterior
      >
        Voltar
      </button>
      <div style={{ marginBottom: "80px" }} /> {/* Espaço para o BottomMenu */}
      <BottomMenu /> {/* Adicionando o BottomMenu */}
    </div>
  );
}

export default ProposalView;

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/sendProposal.css";
import BottomMenuTechnician from "./BottomMenuTechnician";
import Modal from "./Modal";

const SendProposal = () => {
  const navigate = useNavigate();
  const { callId } = useParams();
  const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal

  // Simulando dados do chamado selecionado
  const callDetails = {
    id: callId,
    organization: "Escola Anisio Texeira",
    problem: "Ar condicionado não refrigera",
    equipment: "Ar Condicionado Split 12000 BTUs",
    location: "Sala de aula - 2º andar",
    urgency: "Alta",
  };

  const [formData, setFormData] = useState({
    value: "",
    estimatedTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "value") {
      // Remove caracteres não numéricos e converte para número
      const numericValue = value.replace(/\D/g, "");
      // Formata o valor como moeda
      const formattedValue = (Number(numericValue) / 100).toFixed(2);
      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementará a lógica para enviar a proposta
    console.log("Proposta enviada:", formData);
    setShowModal(true); // Mostra o modal ao invés do alert
  };
  const handleModalClose = () => {
    setShowModal(false);
    navigate("/technician");
  };

  const getUrgencyClass = (urgency) => {
    switch (urgency.toLowerCase()) {
      case "alta":
        return "urgency-high";
      case "média":
        return "urgency-medium";
      case "baixa":
        return "urgency-low";
      default:
        return "";
    }
  };

  return (
    <div className="send-proposal-container">
      <div className="proposal-card">
        <div className="call-details">
          <div className="organization-name">{callDetails.organization}</div>
          <div className="detail-item">
            <strong>Problema:</strong> {callDetails.problem}
          </div>
          <div className="detail-item">
            <strong>Equipamento:</strong> {callDetails.equipment}
          </div>
          <div className="detail-item">
            <strong>Localização:</strong> {callDetails.location}
          </div>
          <div className="detail-item">
            <strong>Urgência:</strong>{" "}
            <span
              className={`urgency-tag ${getUrgencyClass(callDetails.urgency)}`}
            >
              {callDetails.urgency}
            </span>
          </div>
        </div>

        <form className="proposal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="value">Valor da Proposta</label>
            <div className="currency-input">
              <span className="currency-symbol">R$</span>
              <input
                className="preco"
                type="text"
                id="value"
                name="value"
                value={formData.value}
                onChange={handleInputChange}
                placeholder="0,00"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="estimatedTime">Tempo Estimado para Conclusão</label>
            <input
              type="text"
              id="estimatedTime"
              name="estimatedTime"
              value={formData.estimatedTime}
              onChange={handleInputChange}
              placeholder="Ex: 2 dias úteis"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Enviar Proposta
          </button>
        </form>
      </div>
      <button className="back-button" onClick={() => navigate("/technician")}>
        Voltar
      </button>
      <Modal
        isOpen={showModal}
        message="Proposta enviada com sucesso!"
        onClose={handleModalClose}
      />
      <BottomMenuTechnician />
    </div>
  );
};

export default SendProposal;

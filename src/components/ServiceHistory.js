import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/ServiceHistory.css";
import BottomMenuTechnician from "./BottomMenuTechnician";

const ServiceHistory = () => {
  const navigate = useNavigate();

  // Dados de exemplo dos serviços
  const services = [
    {
      id: 1,
      institution: "Escola Anisio Texeira",
      equipment: "Ar Condicionado Split 12000 BTUs",
      service: "Manutenção preventiva e limpeza",
      date: "15/09/2024",
      value: "R$ 500,00",
      status: "Concluído",
    },
    {
      id: 2,
      institution: "Escola Paulo Freire",
      equipment: "Ar Condicionado Split 24000 BTUs",
      service: "Reposição de gás",
      date: "01/11/2024",
      value: "R$ 400,00",
      status: "Em andamento",
    },
    {
      id: 3,
      institution: "Biblioteca Municipal",
      equipment: "Ar Condicionado Split 24000 BTUs",
      service: "Substituição de componentes",
      date: "01/08/2024",
      value: "R$ 800,00",
      status: "Concluído",
    },
    {
      id: 4,
      institution: "Escola Militar",
      equipment: "Ar Condicionado 18000 BTUs",
      service: "Troca do capacitor",
      date: "25/02/2024",
      value: "R$ 350,00",
      status: "Concluído",
    },
  ];

  const getStatusClass = (status) => {
    return status === "Concluído" ? "status-completed" : "status-in-progress";
  };

  return (
    <div className="service-history-container">
      <h2>Histórico de Serviços</h2>
      <div className="history-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="institution-name">{service.institution}</div>
            <div className="service-info">
              <strong>Equipamento:</strong> {service.equipment}
            </div>
            <div className="service-info">
              <strong>Serviço:</strong> {service.service}
            </div>
            <div className="service-info">
              <strong>Data:</strong> {service.date}
            </div>
            <div className="service-info">
              <strong>Valor:</strong> {service.value}
            </div>
            <div className="service-info">
              <strong>Status:</strong>{" "}
              <span className={`status-tag ${getStatusClass(service.status)}`}>
                {service.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate("/technician")}>
        Voltar
      </button>
      <div style={{ marginBottom: "15vh" }} /> {/* Espaço para o BottomMenu */}
      <BottomMenuTechnician />
    </div>
  );
};

export default ServiceHistory;

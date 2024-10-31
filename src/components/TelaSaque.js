import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BsWallet2,
  BsCalendar,
  BsCashStack,
  BsCheckCircleFill,
  BsClockHistory,
} from "react-icons/bs";
import Header from "./Header";
import BottomMenuTechnician from "./BottomMenuTechnician";

const TelaSaque = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // Dados fictícios
  const saldoDisponivel = 3550.0;

  const historicoSaques = [
    {
      id: 1,
      data: "2024-03-15",
      valor: 1200.0,
      status: "Concluído",
      servicoRealizado: "Manutenção Ar Condicionado",
    },
    {
      id: 2,
      data: "2024-03-01",
      valor: 850.0,
      status: "Concluído",
      servicoRealizado: "Reparo Bebedouro Industrial",
    },
    {
      id: 3,
      data: "2024-02-15",
      valor: 1500.0,
      status: "Concluído",
      servicoRealizado: "Instalação Sistema de Refrigeração",
    },
  ];

  const handleSaque = () => {
    setShowModal(true);
  };

  const confirmarSaque = () => {
    alert(
      "Saque realizado com sucesso! O valor será depositado em sua conta em até 24 horas."
    );
    setShowModal(false);
  };

  return (
    <div>
      <Header userType="Técnico" />
      <div style={styles.container}>
        <div style={styles.saqueContainer}>
          {/* Card de Saldo Disponível */}
          <div style={styles.saldoCard}>
            <div style={styles.saldoHeader}>
              <BsWallet2 size={30} color="#009c3b" />
              <div style={styles.saldoTexto}>
                <h3>Saldo Disponível para Saque</h3>
                <div style={styles.valorDisponivel}>
                  R$ {saldoDisponivel.toFixed(2)}
                </div>
              </div>
            </div>
            <div style={styles.notificacao}>
              <BsCheckCircleFill style={styles.notificacaoIcon} />
              Valor liberado para saque!
            </div>
            <button style={styles.saqueButton} onClick={handleSaque}>
              <BsCashStack style={styles.buttonIcon} />
              Sacar Pagamento
            </button>
          </div>
          {/* Histórico de Saques */}
          <div style={styles.historicoContainer}>
            <div style={styles.historicoHeader}>
              <BsClockHistory size={24} />
              <h3>Histórico de Saques</h3>
            </div>

            {historicoSaques.map((saque) => (
              <div key={saque.id} style={styles.saqueCard}>
                <div style={styles.saqueInfo}>
                  <div style={styles.saqueHeader}>
                    <span style={styles.servicoRealizado}>
                      {saque.servicoRealizado}
                    </span>
                    <span style={styles.saqueStatus}>{saque.status}</span>
                  </div>
                  <div style={styles.saqueDetalhes}>
                    <div style={styles.detalheItem}>
                      <BsCalendar style={styles.detalheIcon} />
                      {new Date(saque.data).toLocaleDateString()}
                    </div>
                    <div style={styles.saqueValor}>
                      R$ {saque.valor.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="back-button"
            onClick={() => navigate("/technician")}
          >
            Voltar
          </button>
          <div style={{ marginBottom: "9vh" }} />{" "}
          {/* Espaço para o BottomMenu */}
          <BottomMenuTechnician />
        </div>

        {/* Modal de Confirmação */}
        {showModal && (
          <div style={styles.modalOverlay}>
            <div style={styles.modal}>
              <h3 style={styles.modalTitle}>Confirmar Saque</h3>
              <p style={styles.modalText}>
                Você está realizando um saque de:
                <span style={styles.modalValor}>
                  R$ {saldoDisponivel.toFixed(2)}
                </span>
              </p>
              <p style={styles.modalInfo}>
                O valor será depositado na conta cadastrada em até 24 horas
                úteis.
              </p>
              <div style={styles.modalButtons}>
                <button style={styles.confirmarButton} onClick={confirmarSaque}>
                  Confirmar Saque
                </button>
                <button
                  style={styles.cancelarButton}
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#ffcc29",
    minHeight: "100vh",
  },
  saqueContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  saldoCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  saldoHeader: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "15px",
  },
  saldoTexto: {
    flex: 1,
  },
  valorDisponivel: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#009c3b",
    marginTop: "5px",
  },
  notificacao: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#e8f5e9",
    color: "#388e3c",
    padding: "10px 15px",
    borderRadius: "5px",
    marginBottom: "20px",
  },
  notificacaoIcon: {
    color: "#388e3c",
  },
  saqueButton: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#009c3b",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  buttonIcon: {
    fontSize: "20px",
  },
  historicoContainer: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  historicoHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
    color: "#333",
  },
  saqueCard: {
    borderBottom: "1px solid #eee",
    paddingBottom: "15px",
    marginBottom: "15px",
  },
  saqueInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  saqueHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  servicoRealizado: {
    fontWeight: "500",
    color: "#333",
  },
  saqueStatus: {
    color: "#388e3c",
    fontSize: "14px",
  },
  saqueDetalhes: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detalheItem: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    color: "#666",
    fontSize: "14px",
  },
  detalheIcon: {
    fontSize: "14px",
  },
  saqueValor: {
    fontWeight: "bold",
    color: "#333",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    width: "90%",
    maxWidth: "400px",
  },
  modalTitle: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  modalText: {
    marginBottom: "10px",
    textAlign: "center",
  },
  modalValor: {
    display: "block",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#009c3b",
    margin: "10px 0",
  },
  modalInfo: {
    fontSize: "14px",
    color: "#666",
    textAlign: "center",
    marginBottom: "20px",
  },
  modalButtons: {
    display: "flex",
    gap: "10px",
  },
  confirmarButton: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#009c3b",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  cancelarButton: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default TelaSaque;

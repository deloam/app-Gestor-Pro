import React from "react";
import { useNavigate } from "react-router-dom";
import { BsCashCoin, BsClockHistory, BsFileText } from "react-icons/bs";
import Header from "./Header";
import BottomMenuInstitution from "./BottomMenuinstitution";

const Payments = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header userType="Instituição" />
      <div style={styles.container}>
        <div style={styles.menu}>
          <button
            className=""
            style={styles.card1}
            onClick={() => navigate("/recurso-antecipado")}
          >
            <BsCashCoin style={styles.icon1} />
            <span style={styles.cardTitle1}>Solicitar Recurso</span>
            <span style={styles.cardDescription1}>
              Solicite antecipação de recursos para pagamento do Técnico
            </span>
          </button>

          <button
            style={styles.card}
            onClick={() => navigate("/boletos-pendentes")}
          >
            <BsFileText style={styles.icon} />
            <span style={styles.cardTitle}>Boletos Pendentes</span>
            <span style={styles.cardDescription}>
              Visualize e pague seus boletos em aberto
            </span>
          </button>

          <button
            style={styles.card}
            onClick={() => navigate("/historico-financeiro")}
          >
            <BsClockHistory style={styles.icon} />
            <span style={styles.cardTitle}>Histórico Financeiro</span>
            <span style={styles.cardDescription}>
              Acompanhe todo seu histórico de transações
            </span>
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px 0",
          }}
        >
          <button
            className="back-btn"
            onClick={() => navigate("/institution")} // Navega para a tela anterior
            style={{
              width: "50%",
              margin: "10px 0",
              backgroundColor: "#0057f9",
              color: "#fff",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }} // Estilo do botão de voltar
          >
            Voltar
          </button>
        </div>
      </div>
      <div style={{ marginBottom: "5vh" }} /> {/* Espaço para o BottomMenu */}
      <BottomMenuInstitution /> {/* Adicionando o BottomMenu */}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#ffcc29",
    minHeight: "100vh",
  },
  menu: {
    display: "grid",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  card: {
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "20px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    },
  },
  card1: {
    backgroundColor: "#4CAF50",
    border: "none",
    borderRadius: "10px",
    padding: "20px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    },
  },
  icon: {
    fontSize: "40px",
    color: "#009c3b",
    marginBottom: "15px",
  },
  icon1: {
    fontSize: "40px",
    color: "#fff",
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  cardTitle1: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.4",
  },
  cardDescription1: {
    fontSize: "14px",
    color: "#fff",
    lineHeight: "1.4",
  },
};

export default Payments;

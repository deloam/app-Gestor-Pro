import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Importando useNavigate e useLocation
import { FaPlus, FaTools, FaHistory, FaTable, FaEye } from "react-icons/fa"; // Importando ícones
import { BsCashCoin } from "react-icons/bs";

const BottomMenuInstitution = () => {
  const navigate = useNavigate(); // Hook para navegação
  const location = useLocation(); // Hook para obter a localização atual

  return (
    <div style={styles.menu}>
      {/* Condicional para não mostrar o botão de cadastrar equipamento na tela de cadastro */}
      {location.pathname !== "/register-equipment" && (
        <button
          onClick={() => navigate("/register-equipment")}
          style={styles.button}
        >
          <FaPlus style={styles.icon} />
          <span style={styles.text}>Cadastrar</span>
        </button>
      )}
      {location.pathname !== "/request-service" && (
        <button
          onClick={() => navigate("/request-service")}
          style={styles.button}
        >
          <FaTools style={styles.icon} />
          <span style={styles.text}>Solicitar Serviço</span>
        </button>
      )}
      {location.pathname !== "/equipment-history" && (
        <button
          onClick={() => navigate("/equipment-history")}
          style={styles.button}
        >
          <FaHistory style={styles.icon} />
          <span style={styles.text}>Histórico</span>
        </button>
      )}
      <button onClick={() => navigate("/reports")} style={styles.button}>
        <BsCashCoin style={styles.icon} />
        <span style={styles.text}>Pagamentos</span>
      </button>
      {location.pathname !== "/price-table" && (
        <button onClick={() => navigate("/price-table")} style={styles.button}>
          <FaTable style={styles.icon} />
          <span style={styles.text}>Preços</span>
        </button>
      )}
      {location.pathname !== "/proposal-view" && (
        <button
          onClick={() => navigate("/proposal-view")}
          style={styles.button}
        >
          <FaEye style={styles.icon} />
          <span style={styles.text}>Ver Propostas</span>
        </button>
      )}
    </div>
  );
};

const styles = {
  menu: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#0057f9", // Cor de fundo do menu
    padding: "10px 0",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  button: {
    backgroundColor: "#fff", // Fundo branco para o card
    border: "1px solid #ccc", // Borda do card
    borderRadius: "10px", // Bordas arredondadas
    width: "60px", // Largura fixa
    height: "60px", // Altura fixa
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    color: "#009c3b", // Cor do texto
    textAlign: "center",
    padding: "5px",
  },
  icon: {
    fontSize: "1.5em", // Tamanho do ícone
  },
  text: {
    fontSize: "0.5em", // Tamanho do texto ajustável
    lineHeight: "1.2em", // Ajusta a altura da linha
    marginTop: "2px", // Espaçamento entre o ícone e o texto
  },
};

export default BottomMenuInstitution;

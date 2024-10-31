import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Importando useNavigate e useLocation
import { FaEye, FaPaperPlane, FaHistory } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi"; // Importando os ícones
import { BsCashCoin } from "react-icons/bs";

const BottomMenuTechnician = () => {
  const navigate = useNavigate(); // Hook para navegação
  const location = useLocation(); // Hook para obter a localização atual

  return (
    //visualizar chamados - ok
    // enviar proposta - ok
    // saques - ok
    // historico de pagamentos - ok
    // historico de servicos - ok
    <div style={styles.menu}>
      {/* Condicional para não mostrar o botão de cadastrar equipamento na tela de cadastro */}
      {location.pathname !== "/open-calls" && (
        <button onClick={() => navigate("/open-calls")} style={styles.button}>
          <FaEye style={styles.icon} />
          <span style={styles.text}>Visualizar chamados</span>
        </button>
      )}
      {location.pathname !== "/send-proposal" && (
        <button
          onClick={() => navigate("/send-proposal")}
          style={styles.button}
        >
          <FaPaperPlane style={styles.icon} />
          <span style={styles.text}>Enviar Proposta</span>
        </button>
      )}
      {location.pathname !== "/saque" && (
        <button onClick={() => navigate("/saque")} style={styles.button}>
          <BiMoneyWithdraw style={styles.icon} />
          <span style={styles.text}>Saques</span>
        </button>
      )}
      {location.pathname !== "/historico-financeiro" && (
        <button
          onClick={() => navigate("/historico-financeiro")}
          style={styles.button}
        >
          <BsCashCoin style={styles.icon} />
          <span style={styles.text}>Pagamentos</span>
        </button>
      )}
      {location.pathname !== "/service-history" && (
        <button
          onClick={() => navigate("/service-history")}
          style={styles.button}
        >
          <FaHistory style={styles.icon} />
          <span style={styles.text}>Histórico</span>
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

export default BottomMenuTechnician;

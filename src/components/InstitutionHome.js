import React from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import {
  FaPlus,
  FaTools,
  FaHistory,
  FaFileAlt,
  FaTable,
  FaEye,
} from "react-icons/fa"; // Importando ícones
import Header from "./Header"; // Importando o componente Header

const InstitutionHome = () => {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <div>
      <Header userType="Instituição" />
      <div style={styles.container}>
        <div style={styles.menu}>
          <button
            style={styles.highlightedButton}
            onClick={() => navigate("/register-equipment")} // Navegação para a tela de cadastro
          >
            <FaPlus style={styles.icon} />
            Cadastrar Equipamento
          </button>
          <button
            style={styles.button}
            onClick={() => navigate("/request-service")} // Navegação para a tela de solicitar serviço
          >
            <FaTools style={styles.icon} />
            Solicitar Serviço
          </button>
          <button
            style={styles.button}
            onClick={() => navigate("/equipment-history")} // Navegação para a tela de histórico de equipamentos
          >
            <FaHistory style={styles.icon} />
            Histórico de Equipamentos
          </button>
          <button style={styles.button}>
            <FaFileAlt style={styles.icon} />
            Relatórios
          </button>
          <button
            style={styles.button}
            onClick={() => navigate("/price-table")}
          >
            <FaTable style={styles.icon} />
            Tabela de Preços Sugestivos
          </button>
          <button
            style={styles.button}
            onClick={() => navigate("/proposal-view")} // Navegação para a tela de visualizar serviço
          >
            <FaEye style={styles.icon} />
            Visualizar Proposta
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#ffcc29", // Amarelo da bandeira do Brasil
    paddingTop: "2vh", // Espaço para o header fixo
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  highlightedButton: {
    backgroundColor: "#009c3b", // Cor de destaque
    color: "#fff",
    padding: "2vh 2vw", // Espaçamento interno responsivo
    border: "none",
    borderRadius: "5px",
    fontSize: "6vw", // Tamanho da fonte responsivo
    marginBottom: "2vh",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column", // Coloca o texto abaixo do ícone
    alignItems: "center", // Centraliza o conteúdo
    width: "80vw", // Largura responsiva
    height: "20vh", // Altura responsiva
  },
  button: {
    backgroundColor: "#fff", // Fundo branco para os outros botões
    color: "#009c3b", // Cor do texto
    padding: "2vh 2vw", // Espaçamento interno responsivo
    border: "none",
    borderRadius: "5px",
    fontSize: "6vw", // Tamanho da fonte responsivo
    marginBottom: "2vh",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column", // Coloca o texto abaixo do ícone
    alignItems: "center", // Centraliza o conteúdo
    width: "80vw", // Largura responsiva
    height: "20vh", // Altura responsiva
  },
  icon: {
    fontSize: "15vw", // Tamanho do ícone responsivo
    marginBottom: "5px", // Espaçamento entre o ícone e o texto
  },
};

export default InstitutionHome;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BsCalendar,
  BsCash,
  BsCheckCircle,
  BsPercent,
  BsClock,
  BsFileText,
  BsPerson,
} from "react-icons/bs";
import Header from "./Header";

const HistoricoFinanceiro = () => {
  const navigate = useNavigate();
  const [filtroAtivo, setFiltroAtivo] = useState("todos"); // todos, orgao, tecnico

  // Dados fictícios de transações
  const transacoes = [
    {
      id: 1,
      data: "2024-03-15",
      tipo: "antecipacao",
      valor: 1200.0,
      taxa: 60.0, // 5%
      status: "concluido",
      tecnico: "João Silva",
      descricao: "Manutenção Ar Condicionado",
      pagador: "orgao",
    },
    {
      id: 2,
      data: "2024-03-10",
      tipo: "regular",
      valor: 2500.0,
      taxa: 0,
      status: "concluido",
      tecnico: "Maria Santos",
      descricao: "Instalação Sistema de Refrigeração",
      pagador: "tecnico",
    },
    {
      id: 3,
      data: "2024-03-05",
      tipo: "antecipacao",
      valor: 800.0,
      taxa: 40.0, // 5%
      status: "processando",
      tecnico: "Pedro Oliveira",
      descricao: "Reparo Bebedouro",
      pagador: "orgao",
    },
    {
      id: 4,
      data: "2024-03-01",
      tipo: "regular",
      valor: 1500.0,
      taxa: 0,
      status: "concluido",
      tecnico: "Ana Costa",
      descricao: "Manutenção Preventiva",
      pagador: "tecnico",
    },
  ];

  const transacoesFiltradas = transacoes.filter((transacao) => {
    if (filtroAtivo === "todos") return true;
    return transacao.pagador === filtroAtivo;
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case "concluido":
        return styles.statusConcluido;
      case "processando":
        return styles.statusProcessando;
      default:
        return {};
    }
  };

  return (
    <div>
      <Header userType="Instituição" />
      <div style={styles.container}>
        <h2 style={styles.title}>Histórico Financeiro</h2>

        <div style={styles.filtros}>
          <button
            style={{
              ...styles.filtroButton,
              ...(filtroAtivo === "todos" ? styles.filtroAtivo : {}),
            }}
            onClick={() => setFiltroAtivo("todos")}
          >
            Todos
          </button>
          <button
            style={{
              ...styles.filtroButton,
              ...(filtroAtivo === "orgao" ? styles.filtroAtivo : {}),
            }}
            onClick={() => setFiltroAtivo("orgao")}
          >
            Órgão Público
          </button>
          <button
            style={{
              ...styles.filtroButton,
              ...(filtroAtivo === "tecnico" ? styles.filtroAtivo : {}),
            }}
            onClick={() => setFiltroAtivo("tecnico")}
          >
            Técnico
          </button>
        </div>

        <div style={styles.historicoContainer}>
          {transacoesFiltradas.map((transacao) => (
            <div key={transacao.id} style={styles.transacaoCard}>
              <div style={styles.transacaoHeader}>
                <div style={styles.descricao}>{transacao.descricao}</div>
                <div
                  style={{
                    ...styles.status,
                    ...getStatusStyle(transacao.status),
                  }}
                >
                  {transacao.status === "concluido"
                    ? "Concluído"
                    : "Processando"}
                </div>
              </div>

              <div style={styles.transacaoGrid}>
                <div style={styles.gridLabel}>
                  <BsCalendar style={styles.icon} />
                  Data:
                </div>
                <div style={styles.gridValue}>
                  {new Date(transacao.data).toLocaleDateString()}
                </div>

                <div style={styles.gridLabel}>
                  <BsPerson style={styles.icon} />
                  Técnico:
                </div>
                <div style={styles.gridValue}>{transacao.tecnico}</div>

                <div style={styles.gridLabel}>
                  <BsFileText style={styles.icon} />
                  Tipo:
                </div>
                <div style={styles.gridValue}>
                  {transacao.tipo === "antecipacao" ? "Antecipação" : "Regular"}
                </div>

                <div style={styles.gridLabel}>
                  <BsCash style={styles.icon} />
                  Valor:
                </div>
                <div style={styles.gridValue}>
                  R$ {transacao.valor.toFixed(2)}
                </div>

                {transacao.taxa > 0 && (
                  <>
                    <div style={styles.gridLabel}>
                      <BsPercent style={styles.icon} />
                      Taxa (5%):
                    </div>
                    <div style={styles.gridValue}>
                      R$ {transacao.taxa.toFixed(2)}
                    </div>
                  </>
                )}

                <div style={styles.gridLabel}>
                  <BsClock style={styles.icon} />
                  Total:
                </div>
                <div style={styles.gridValue}>
                  R$ {(transacao.valor + transacao.taxa).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button style={styles.voltarButton} onClick={() => navigate(-1)}>
          Voltar
        </button>
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
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  filtros: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  filtroButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#fff",
    color: "#333",
    fontWeight: "500",
    transition: "all 0.3s ease",
  },
  filtroAtivo: {
    backgroundColor: "#009c3b",
    color: "#fff",
  },
  historicoContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  transacaoCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  transacaoHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
    borderBottom: "1px solid #eee",
    paddingBottom: "10px",
  },
  descricao: {
    fontWeight: "bold",
    color: "#333",
    fontSize: "16px",
  },
  status: {
    padding: "5px 10px",
    borderRadius: "15px",
    fontWeight: "bold",
    fontSize: "14px",
  },
  statusConcluido: {
    backgroundColor: "#e8f5e9",
    color: "#388e3c",
  },
  statusProcessando: {
    backgroundColor: "#fff3e0",
    color: "#f57c00",
  },
  transacaoGrid: {
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    gap: "10px",
  },
  gridLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#666",
    fontWeight: "500",
  },
  gridValue: {
    color: "#333",
  },
  icon: {
    color: "#009c3b",
    fontSize: "16px",
  },
  voltarButton: {
    width: "100%",
    maxWidth: "800px",
    padding: "15px",
    backgroundColor: "#0057f9",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "20px",
    display: "block",
    margin: "20px auto 0",
  },
};

export default HistoricoFinanceiro;

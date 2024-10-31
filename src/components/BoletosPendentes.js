import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFileText, BsCalendar, BsClock, BsCashCoin } from "react-icons/bs";
import Header from "./Header";

const BoletosPendentes = () => {
  const navigate = useNavigate();

  // Taxa definida como variável
  const TAXA_PERCENTUAL = 5;
  const TAXA_DECIMAL = TAXA_PERCENTUAL / 100;

  // Função para calcular dias restantes
  const calcularDiasRestantes = (dataVencimento) => {
    const hoje = new Date();
    const vencimento = new Date(dataVencimento);
    const diferenca = vencimento - hoje;
    const dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
    return dias;
  };

  // Dados fictícios dos boletos
  const boletos = [
    {
      id: 1,
      descricao: "Serviço de Manutenção - Ar Condicionado",
      valor: 1200.0,
      dataVencimento: "2024-10-29",
      codigo: "34191.79001 01043.510047 91020.150008 3 94690026000",
    },
    {
      id: 2,
      descricao: "Instalação - Sistema de Refrigeração",
      valor: 2500.0,
      dataVencimento: "2024-11-28",
      codigo: "34191.79001 01043.510047 91020.150008 3 94690026000",
    },
    {
      id: 3,
      descricao: "Manutenção Preventiva - Bebedouro",
      valor: 800.0,
      dataVencimento: "2024-11-10",
      codigo: "34191.79001 01043.510047 91020.150008 3 94690026000",
    },
    {
      id: 4,
      descricao: "Reparo - Ar Condicionado Split",
      valor: 1500.0,
      dataVencimento: "2024-11-05",
      codigo: "34191.79001 01043.510047 91020.150008 3 94690026000",
    },
  ].sort((a, b) => new Date(a.dataVencimento) - new Date(b.dataVencimento));

  return (
    <div>
      <Header userType="Instituição" />
      <div style={styles.container}>
        <h2 style={styles.title}>Boletos Pendentes</h2>

        <div style={styles.boletosContainer}>
          {boletos.map((boleto) => {
            const diasRestantes = calcularDiasRestantes(boleto.dataVencimento);
            const statusStyle =
              diasRestantes < 3
                ? styles.urgente
                : diasRestantes < 7
                ? styles.atencao
                : styles.normal;

            const taxa = boleto.valor * TAXA_DECIMAL;
            const total = boleto.valor + taxa;

            return (
              <div key={boleto.id} style={styles.boletoCard}>
                <div style={styles.boletoHeader}>
                  <div style={styles.descricao}>{boleto.descricao}</div>
                  <div style={{ ...styles.diasRestantes, ...statusStyle }}>
                    {diasRestantes} dias restantes
                  </div>
                </div>

                <div style={styles.boletoGrid}>
                  <div style={styles.gridLabel}>
                    <BsCashCoin style={styles.icon} />
                    Valor:
                  </div>
                  <div style={styles.gridValue}>
                    R$ {boleto.valor.toFixed(2)}
                  </div>

                  <div style={styles.gridLabel}>
                    <BsFileText style={styles.icon} />
                    Taxa ({TAXA_PERCENTUAL}%):
                  </div>
                  <div style={styles.gridValue}>R$ {taxa.toFixed(2)}</div>

                  <div style={styles.gridLabel}>
                    <BsCalendar style={styles.icon} />
                    Vencimento:
                  </div>
                  <div style={styles.gridValue}>
                    {new Date(boleto.dataVencimento).toLocaleDateString()}
                  </div>

                  <div style={styles.gridLabel}>
                    <BsClock style={styles.icon} />
                    Total:
                  </div>
                  <div style={styles.gridValue}>R$ {total.toFixed(2)}</div>
                </div>

                <div style={styles.boletoActions}>
                  <button
                    style={styles.visualizarButton}
                    onClick={() =>
                      window.alert(`Visualizar boleto: ${boleto.codigo}`)
                    }
                  >
                    Visualizar Boleto
                  </button>
                  <button
                    style={styles.copiarButton}
                    onClick={() => {
                      navigator.clipboard.writeText(boleto.codigo);
                      window.alert("Código copiado!");
                    }}
                  >
                    Copiar Código
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button
          style={styles.voltarButton}
          onClick={() => navigate("/pagamentos")}
        >
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
  boletosContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  boletoCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  boletoHeader: {
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
  diasRestantes: {
    padding: "5px 10px",
    borderRadius: "15px",
    fontWeight: "bold",
    fontSize: "14px",
  },
  urgente: {
    backgroundColor: "#ffebee",
    color: "#d32f2f",
  },
  atencao: {
    backgroundColor: "#fff3e0",
    color: "#f57c00",
  },
  normal: {
    backgroundColor: "#e8f5e9",
    color: "#388e3c",
  },
  boletoGrid: {
    display: "grid",
    gridTemplateColumns: "45vw 1fr",
    gap: "5px",
    rowGap: "3.5vh",
    marginBottom: "15px",
  },
  gridLabel: {
    display: "flex",
    fontSize: "5vw",
    alignItems: "center",
    fontWeight: "bold",
    gap: "8px",
    color: "#666",
  },
  gridValue: {
    color: "#333",
  },
  icon: {
    color: "#009c3b",
    fontSize: "16px",
  },
  boletoActions: {
    display: "flex",
    gap: "10px",
    marginTop: "15px",
    borderTop: "1px solid #eee",
    paddingTop: "15px",
  },
  visualizarButton: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#009c3b",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  copiarButton: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#0057f9",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
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

export default BoletosPendentes;

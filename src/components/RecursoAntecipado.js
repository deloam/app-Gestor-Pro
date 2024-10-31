import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BsCalendar,
  BsPerson,
  BsTools,
  BsExclamationCircle,
} from "react-icons/bs";
import Header from "./Header";

const RecursoAntecipado = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedServico, setSelectedServico] = useState(null);

  // Dados fictícios
  const servicosConcluidos = [
    {
      id: 1,
      tecnico: "João Silva",
      data: "15/03/2024",
      valor: 1200.0,
      equipamento: "Ar Condicionado Split 12000 BTUs",
      problema: "Compressor com defeito",
    },
    {
      id: 2,
      tecnico: "Maria Santos",
      data: "16/03/2024",
      valor: 850.0,
      equipamento: "Bebedouro Industrial",
      problema: "Vazamento na tubulação",
    },
    {
      id: 3,
      tecnico: "Pedro Oliveira",
      data: "17/03/2024",
      valor: 1500.0,
      equipamento: "Sistema de Refrigeração",
      problema: "Manutenção preventiva",
    },
    {
      id: 4,
      tecnico: "Ana Costa",
      data: "18/03/2024",
      valor: 950.0,
      equipamento: "Ar Condicionado Split 9000 BTUs",
      problema: "Troca de capacitor",
    },
  ];

  const taxaAntecipacao = 0.05; // 5%
  const handlePagarAntecipado = (servico) => {
    setSelectedServico(servico);
    setShowModal(true);
  };
  const handleVisualizarBoleto = () => {
    // Implementar lógica para visualizar boleto
    alert("Funcionalidade de visualização do boleto será implementada");
    setShowModal(false);
  };

  return (
    <div>
      <Header userType="Instituição" />
      <div style={styles.container}>
        <h2 style={styles.title}>Recurso Antecipado</h2>

        <div style={styles.servicosContainer}>
          {servicosConcluidos.map((servico) => {
            return (
              <div key={servico.id} style={styles.servicoCard}>
                <div style={styles.servicoGrid}>
                  {/* Linha 1 */}
                  <div style={styles.gridLabel}>
                    <BsPerson style={styles.icon} />
                    Técnico:
                  </div>
                  <div style={styles.gridValue}>{servico.tecnico}</div>

                  {/* Linha 2 */}
                  <div style={styles.gridLabel}>
                    <BsCalendar style={styles.icon} />
                    Data:
                  </div>
                  <div style={styles.gridValue}>{servico.data}</div>

                  {/* Linha 3 */}
                  <div style={styles.gridLabel}>
                    <BsTools style={styles.icon} />
                    Aparelho:
                  </div>
                  <div style={styles.gridValue}>{servico.equipamento}</div>

                  {/* Linha 4 */}
                  <div style={styles.gridLabel}>
                    <BsExclamationCircle style={styles.icon} />
                    Problema:
                  </div>
                  <div style={styles.gridValue}>{servico.problema}</div>
                  {/* Valores - ocupando duas colunas */}
                  <div style={styles.valoresContainer}>
                    <div style={styles.valorItem}>
                      Valor: R$ {servico.valor.toFixed(2)}
                    </div>
                    <div style={styles.valorItem}>
                      Taxa (5%): R${" "}
                      {(servico.valor * taxaAntecipacao).toFixed(2)}
                    </div>
                    <div style={styles.valorTotal}>
                      Total: R${" "}
                      {(
                        servico.valor +
                        servico.valor * taxaAntecipacao
                      ).toFixed(2)}
                    </div>
                  </div>

                  {/* Botão - ocupando duas colunas */}
                  <button
                    style={styles.pagarButton}
                    onClick={() => handlePagarAntecipado(servico)}
                  >
                    Pagar Antecipado
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {showModal && selectedServico && (
          <div style={styles.modal}>
            <div style={styles.modalContent}>
              <h3 style={styles.modalTitle}>Revisão do Pagamento</h3>
              <div style={styles.modalInfo}>
                <p>Técnico: {selectedServico.tecnico}</p>
                <p>Valor Original: R$ {selectedServico.valor.toFixed(2)}</p>
                <p>
                  Taxa de Antecipação (5%): R${" "}
                  {(selectedServico.valor * taxaAntecipacao).toFixed(2)}
                </p>
                <p style={styles.modalTotal}>
                  Valor Final: R${" "}
                  {(
                    selectedServico.valor +
                    selectedServico.valor * taxaAntecipacao
                  ).toFixed(2)}
                </p>
              </div>
              <div style={styles.modalButtons}>
                <button
                  style={styles.visualizarBoletoButton}
                  onClick={handleVisualizarBoleto}
                >
                  Visualizar Boleto
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
    borderRadius: "10px",
  },
  title: {
    fontSize: "4vh",
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  subtitle: {
    color: "#333",
    marginBottom: "15px",
  },
  servicosContainer: {
    marginBottom: "30px",
  },
  servicoCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "15px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    width: "86vw",
  },
  servicoInfo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  icon: {
    marginRight: "1vh",
    color: "#009c3b",
  },
  label: {
    fontWeight: "bold",
    marginRight: "1vw",
    color: "#666",
  },
  value: {
    color: "#333",
  },
  button: {
    width: "50%",
    padding: "15px",
    backgroundColor: "#0057f9",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "20px",
  },

  valorTotal: {
    fontSize: "3vh",
    fontWeight: "bold",
    color: "#009c3b",
    marginTop: "5px",
  },
  modal: {
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
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    width: "90%",
    maxWidth: "500px",
  },
  modalTitle: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  modalInfo: {
    marginBottom: "20px",
  },
  modalTotal: {
    fontWeight: "bold",
    color: "#009c3b",
    fontSize: "18px",
    marginTop: "10px",
  },
  modalButtons: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  visualizarBoletoButton: {
    backgroundColor: "#0057f9",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    flex: 1,
  },
  cancelarButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    flex: 1,
  },
  voltarButton: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#0057f9",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "20px",
  },
  servicoGrid: {
    display: "grid",
    gridTemplateColumns: "40vw 1fr",
    gap: "1px",
    rowGap: "3vh" /* espaçamento apenas para baixo */,
    alignItems: "center",
  },
  gridLabel: {
    display: "flex",
    alignItems: "center",
    color: "#666",
    fontWeight: "bold",
  },
  gridValue: {
    color: "#333",
    fontSize: "2.5vh",
  },
  valoresContainer: {
    gridColumn: "1 / -1",
    display: "flex",
    flexDirection: "column",
    gap: "1px",
    borderTop: "1px solid #eee",
    borderBottom: "1px solid #eee",
    padding: "15px 0",
    marginTop: "10px",
  },
  valorItem: {
    color: "#666",
    fontSize: "14px",
  },

  pagarButton: {
    gridColumn: "1 / -1",
    backgroundColor: "#009c3b",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "12px",
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%",
    marginTop: "10px",
  },
};

export default RecursoAntecipado;

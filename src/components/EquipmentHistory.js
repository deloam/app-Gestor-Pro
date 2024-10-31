import { useNavigate } from "react-router-dom"; // Importando useNavigate
import BottomMenuInstitution from "./BottomMenuinstitution"; // Importando o BottomMenu
import "../Styles/EquipmentHistory.css";

const equipmentData = [
  {
    id: 1,
    nome: "Ar Condicionado 15000 BTUS",
    marca: "Marca A",
    modelo: "Modelo X",
    potencia: "5 kW",
    localizacao: "Departamento de Energia",
    tensao: "220V",
    observacoes: "Equipamento em bom estado.",
  },
  {
    id: 2,
    nome: "Ar Condicionado",
    marca: "Marca B",
    modelo: "Modelo Y",
    potencia: "2 kW",
    localizacao: "Sala de Reuniões",
    tensao: "110V",
    observacoes: "Manutenção realizada em janeiro.",
  },
  {
    id: 3,
    nome: "Ar Condicionado 28000 BTUS",
    marca: "Marca C",
    modelo: "Modelo Z",
    potencia: "500W",
    localizacao: "Escritório",
    tensao: "110V",
    observacoes: "Substituído em março.",
  },
];

function EquipmentHistory() {
  const navigate = useNavigate(); // Hook para navegação

  const renderMobileView = (equipment) => (
    <div key={equipment.id} className="equipment-card">
      <h3>{equipment.nome}</h3>
      <p>
        <strong>Marca:</strong> {equipment.marca}
      </p>
      <p>
        <strong>Modelo:</strong> {equipment.modelo}
      </p>
      <p>
        <strong>Potência:</strong> {equipment.potencia}
      </p>
      <p>
        <strong>Localização:</strong> {equipment.localizacao}
      </p>
      <p>
        <strong>Tensão:</strong> {equipment.tensao}
      </p>
      <p>
        <strong>Observações:</strong> {equipment.observacoes}
      </p>
    </div>
  );
  return (
    <div className="equipment-history-mobile">
      <h1>Histórico de Equipamentos</h1>
      <div className="equipment-list">
        {equipmentData.map(renderMobileView)}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
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
      <div style={{ marginBottom: "80px" }} /> {/* Espaço para o BottomMenu */}
      <BottomMenuInstitution /> {/* Adicionando o BottomMenu */}
    </div>
  );
}

export default EquipmentHistory;

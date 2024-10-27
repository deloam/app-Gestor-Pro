import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./components/Login";
import InstitutionHome from "./components/InstitutionHome";
import TechnicianHome from "./components/TechnicianHome";
import RegisterEquipment from "./components/RegisterEquipment"; // Importando o novo componente
import RequestService from "./components/RequestService"; // Importando o RequestService
import EquipmentHistory from "./components/EquipmentHistory"; // Importando o EquipmentHistory
import Header from "./components/Header"; // Importando o Header
import ProposalView from "./components/ProposalView"; // Importando o ProposalView
import PriceTable from "./components/PriceTable"; // Importando o PriceTable

function App() {
  const location = useLocation(); // Hook para obter a localização atual

  return (
    <div style={styles.container}>
      {location.pathname !== "/" && <Header userType="Usuário" />}{" "}
      {/* Renderiza o Header apenas se não estiver na página de login */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/institution" element={<InstitutionHome />} />
        <Route path="/technician" element={<TechnicianHome />} />
        <Route
          path="/register-equipment"
          element={<RegisterEquipment />}
        />{" "}
        {/* Nova rota */}
        <Route path="/request-service" element={<RequestService />} />{" "}
        {/* Rota para solicitar serviço */}
        <Route path="/equipment-history" element={<EquipmentHistory />} />{" "}
        {/* Rota para histórico de equipamentos */}
        <Route path="/proposal-view" element={<ProposalView />} />{" "}
        {/* Rota para visualizar propostas */}
        <Route path="/price-table" element={<PriceTable />} />{" "}
        {/* Rota para tabela de preços */}
      </Routes>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#009c3b", // Verde da bandeira do Brasil
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    paddingTop: "80px", // Adiciona espaço para o header fixo
  },
};

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

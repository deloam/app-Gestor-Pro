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
import CreateAccount from "./components/CreateAccount";
import TechnicianRegistration from "./components/TechnicianRegistration";
import OpenCalls from "./components/OpenCalls";
import SendProposal from "./components/SendProposal";
import ServiceHistory from "./components/ServiceHistory";
import Payments from "./components/Payments";
import RecursoAntecipado from "./components/RecursoAntecipado";
import BoletosPendentes from "./components/BoletosPendentes";
import HistoricoFinanceiro from "./components/HistoricoFinanceiro";
import TelaSaque from "./components/TelaSaque";

// Adicione a nova rota dentro do componente Routes

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
        <Route path="/register-equipment" element={<RegisterEquipment />} />
        <Route path="/request-service" element={<RequestService />} />{" "}
        <Route path="/equipment-history" element={<EquipmentHistory />} />{" "}
        <Route path="/proposal-view" element={<ProposalView />} />{" "}
        <Route path="/price-table" element={<PriceTable />} />{" "}
        <Route path="/create-account" element={<CreateAccount />} />
        <Route
          path="/technician-registration"
          element={<TechnicianRegistration />}
        />
        <Route path="/open-calls" element={<OpenCalls />} />
        <Route path="/send-proposal" element={<SendProposal />} />
        <Route path="/service-history" element={<ServiceHistory />} />
        <Route path="/pagamentos" element={<Payments />} />
        <Route path="/recurso-antecipado" element={<RecursoAntecipado />} />
        <Route path="/boletos-pendentes" element={<BoletosPendentes />} />
        <Route path="/historico-financeiro" element={<HistoricoFinanceiro />} />
        <Route path="/saque" element={<TelaSaque />} />
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

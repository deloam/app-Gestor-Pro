import React from "react";
import Header from "./Header"; // Corrigido para importar o componente Header

const TechnicianHome = () => {
  return (
    <div>
      <Header userType="Técnico" />
      <div style={styles.container}>
        <h1>Bem-vindo ao Técnico</h1>
        <p>Esta é a página do Técnico.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#ffcc29", // Amarelo da bandeira do Brasil
  },
};

export default TechnicianHome;

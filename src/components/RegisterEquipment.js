import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import BottomMenu from "./BottomMenu"; // Importando o BottomMenu

const RegisterEquipment = () => {
  const navigate = useNavigate(); // Hook para navegação
  const [equipmentName, setEquipmentName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [power, setPower] = useState("");
  const [location, setLocation] = useState("");
  const [voltage, setVoltage] = useState("");
  const [observations, setObservations] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar os dados
    console.log({
      equipmentName,
      brand,
      model,
      power,
      location,
      voltage,
      observations,
    });
    // Limpar os campos após o envio
    setEquipmentName("");
    setBrand("");
    setModel("");
    setPower("");
    setLocation("");
    setVoltage("");
    setObservations("");
  };

  return (
    <div style={styles.container}>
      <h1>Cadastro de Equipamento</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Nome do Equipamento"
          value={equipmentName}
          onChange={(e) => setEquipmentName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Marca, Modelo, Potência"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Localização (endereço ou departamento)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Tensão"
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
          required
          style={styles.input}
        />
        <textarea
          placeholder="Observações"
          value={observations}
          onChange={(e) => setObservations(e.target.value)}
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>
          Salvar
        </button>
        <button
          type="button"
          onClick={() => navigate("/institution")} // Navega para a tela anterior
          style={{ ...styles.button, backgroundColor: "#0057f9", width: "50%" }} // Estilo do botão de voltar
        >
          Voltar
        </button>
      </form>
      <div style={{ marginBottom: "80px" }} /> {/* Espaço para o BottomMenu */}
      <BottomMenu /> {/* Adicionando o BottomMenu */}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#ffcc29",
    width: "80vw",
    borderRadius: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: "40px",
    margin: "10px 0",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    margin: "10px 0",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    height: "40px",
    margin: "10px 0",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
  },
};

export default RegisterEquipment;

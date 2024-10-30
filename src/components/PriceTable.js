import React from "react";
import BottomMenuInstitution from "./BottomMenuinstitution"; // Importando o BottomMenu
import "../Styles/PriceTable.css"; // Importando o CSS
import { useNavigate } from "react-router-dom"; // Importando useNavigate

const PriceTable = () => {
  const navigate = useNavigate(); // Hook para navegação
  const priceList = [
    {
      category: "Manutenção de Ar-Condicionado",
      items: [
        { service: "Limpeza básica", price: "R$ 250,00" },
        { service: "Manutenção preventiva", price: "R$ 200,00" },
        { service: "Recarga de gás", price: "R$ 250,00" },
      ],
    },
    {
      category: "Troca de Peça",
      items: [
        { service: "Troca de capacitor", price: "R$ 100,00" },
        { service: "Substituição de compressor", price: "R$ 800,00" },
        { service: "Troca de placa eletrônica", price: "R$ 350,00" },
      ],
    },
    {
      category: "Instalação",
      items: [
        {
          service: "Instalação de ar-condicionado split 12000 BTUs",
          price: "R$ 600,00",
        },
        {
          service: "Instalação de ar-condicionado split 22000 BTUs",
          price: "R$ 950,00",
        },
        {
          service: "Instalação de ar-condicionado split 24000 BTUs",
          price: "R$ 1100,00",
        },
      ],
    },
  ];

  return (
    <div className="price-table">
      <h2>Tabela de Preços Sugestivos</h2>
      {priceList.map((category, index) => (
        <div key={index} className="category">
          <h3>{category.category}</h3>
          <table>
            <thead>
              <tr>
                <th>Serviço</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              {category.items.map((item, itemIndex) => (
                <tr key={itemIndex}>
                  <td>{item.service}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
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
};

export default PriceTable;

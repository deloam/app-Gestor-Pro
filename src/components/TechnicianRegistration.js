import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/TechnicianRegistration.css";

const TechnicianRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    document: "",
    address: "",
    certifications: "",
  });

  const [files, setFiles] = useState({
    addressProof: null,
    certificationsDoc: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0];
    if (file) {
      setFiles((prev) => ({
        ...prev,
        [fileType]: file,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementará a lógica para enviar os dados para o backend
    console.log("Dados do formulário:", formData);
    console.log("Arquivos:", files);
    alert("Cadastro enviado com sucesso!");
    navigate("/");
  };

  return (
    <div className="technician-registration">
      <h2>Cadastro de Técnico</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Nome Completo</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="document">RG/CPF</label>
          <input
            type="text"
            id="document"
            name="document"
            value={formData.document}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Endereço Completo</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <input
            type="file"
            id="addressProof"
            className="file-input"
            onChange={(e) => handleFileChange(e, "addressProof")}
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <label htmlFor="addressProof" className="file-label2">
            Anexar Comprovante de Endereço
          </label>
          {files.addressProof && (
            <div className="file-name">{files.addressProof.name}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="certifications">Certificações</label>
          <textarea
            id="certifications"
            name="certifications"
            value={formData.certifications}
            onChange={handleInputChange}
            required
          />
          <input
            type="file"
            id="certificationsDoc"
            className="file-input"
            onChange={(e) => handleFileChange(e, "certificationsDoc")}
            accept=".pdf,.jpg,.jpeg,.png"
            multiple
          />
          <label htmlFor="certificationsDoc" className="file-label2">
            Anexar Certificações
          </label>
          {files.certificationsDoc && (
            <div className="file-name">{files.certificationsDoc.name}</div>
          )}
        </div>

        <button type="submit" className="submit-button">
          Enviar Documentação
        </button>
      </form>

      <button
        className="back-button"
        onClick={() => navigate("/create-account")}
      >
        Voltar
      </button>
    </div>
  );
};

export default TechnicianRegistration;

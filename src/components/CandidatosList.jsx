import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CandidatosList.css"; 
import CadastrarCandidato from "./CadastroDeCandidatos";
import { Link } from "react-router-dom";


const CandidatosList = () => {
  const [candidatos, setCandidatos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/api/candidatos/mostrar")
      .then(response => {
        setCandidatos(response.data.content);
      })
      .catch(error => {
        console.error("Erro ao buscar candidatos:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="titulo">Lista de Candidatos</h1>
      {candidatos.map(candidato => (
        <div key={candidato.id} className="card">
          <h2>{candidato.nome}</h2>
          <p><strong>Idade:</strong> {candidato.idade}</p>
          <p><strong>Nível:</strong> {candidato.nivel}</p>
          <p><strong>Proeficiências:</strong> {candidato.proeficiencias.join(", ")}</p>
        </div>
      ))}
      <Link to="/cadastrar">
  <button>Cadastrar Novo</button>
</Link>
    </div>
  );
};

export default CandidatosList;

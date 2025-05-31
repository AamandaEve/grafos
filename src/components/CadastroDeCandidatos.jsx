import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CadastrarCandidato(){
    const [nome, setNome] = useState("");
    const [proeficiencias, setProeficiencias] = useState("");
    const [idade, setIdade] = useState("");
    const [nivel, setNivel] = useState("ESTAGIO");
    const navigate = useNavigate();

    function cadastrar(e){
        e.preventDefault();


        const novoCandidato = {
            nome: nome,
            proeficiencias: proeficiencias.split(", ").map(item => item.trim()),
            idade: parseInt(idade),
            nivel: nivel
        };

        axios.post("http://localhost:8081/api/candidatos/cadastrar", novoCandidato)
            .then(() => {
            alert("Candidato cadastrado com sucesso!");
            navigate("/");  // volta para a lista
        })
        .catch(error => {
            console.error("Erro ao cadastrar:", error);
            alert("Erro ao cadastrar candidato.");
        });
    }
    


return (
    <div>
      <h1>Cadastrar Candidato</h1>
      <form onSubmit={cadastrar}>
        <input 
          type="text" 
          placeholder="Nome" 
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <br />
        <input 
          type="text" 
          placeholder="Proficiências (separadas por vírgula)"
          value={proeficiencias}
          onChange={(e) => setProeficiencias(e.target.value)}
          required
        />
        <br />
        <input 
          type="number" 
          placeholder="Idade" 
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          required
        />
        <br />
        <select 
          value={nivel}
          onChange={(e) => setNivel(e.target.value)}
        >
          <option value="ESTAGIO">Estágio</option>
          <option value="JUNIOR">Júnior</option>
          <option value="PLENO">Pleno</option>
          <option value="SENIOR">Sênior</option>
        </select>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )

}
export default CadastrarCandidato;
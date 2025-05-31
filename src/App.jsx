import React from "react";
import { Routes, Route } from "react-router-dom";
import CandidatosList from "./components/CandidatosList";
import CadastrarCandidato from "./components/CadastroDeCandidatos";
function App() {
  return (
    <Routes>
      <Route path="/" element={<CandidatosList />} />
      <Route path="/cadastrar" element={<CadastrarCandidato />} />
    </Routes>
  );
}

export default App;

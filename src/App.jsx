import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Header from "./components/Header"; 
import Projeto from "./components/Projeto";
import Objetivo from "./components/Objetivo"
import Pecas from "./components/Pecas";
import Contato from "./components/Contato";
import Integrantes from "./components/Integrantes";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center bg-gray-100 text-gray-900">
    
        <Header />
        
        <main className="w-full max-w-4xl mx-auto py-12 px-6">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/quem-somos" element={<Sobre />} />
          </Routes>
          <Routes>
            <Route path="/projeto" element={<Projeto />} />
          </Routes>
          <Routes>
            <Route path="/objetivo" element={<Objetivo />} />
          </Routes>
          <Routes>
            <Route path="/pecas" element={<Pecas />} />
          </Routes>
          <Routes>
            <Route path="/contato" element={<Contato />} />
          </Routes>
          <Routes>
            <Route path="/integrantes" element={<Integrantes />} />
          </Routes>
          
          
        </main>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.svg';


function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-teal-400 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-24" />
        </div>
        <div className="space-x-6 text-white text-xs font-medium">
          <Link to="/home" className="hover:underline text-xl">Home</Link>
          <Link to="/quem-somos" className="hover:underline text-xl">Sobre Nós</Link>
          <Link to="/projeto" className="hover:underline text-xl">Projeto</Link>
          <Link to="/objetivo" className="hover:underline text-xl">Objetivo</Link>
          
        </div>
        <button className="bg-white text-teal-600 py-1 px-4 rounded-full hover:bg-gray-200 shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm">
            <Link to="/contato" className="hover text-xl">Contato</Link>
        </button>
      </nav>
    </header>
  );
}

export default Header;

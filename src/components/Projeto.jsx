import React from 'react';
import { useNavigate } from 'react-router-dom'; // Supondo que você esteja usando React Router

const Projeto = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/pecas'); // Caminho para a página de peças
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-8">
      <h1 className="text-4xl font-bold mb-4">Projeto</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl text-center">
        <h2 className="text-2xl font-bold mb-2">O que é?</h2>
        <p className="text-gray-700 mb-6">
          Nosso projeto de TCC é uma solução inovadora para auxiliar pessoas com deficiência visual na sua locomoção diária. Utilizando a plataforma Arduíno, desenvolvemos um dispositivo portátil que combina sensores ultrassônicos e um aplicativo móvel para proporcionar maior segurança e autonomia.
        </p>
        
        <h2 className="text-2xl font-bold mb-2">Como funciona?</h2>
        <p className="text-gray-700 mb-4">
          <strong>Sensores Ultrassônicos:</strong> O dispositivo é equipado com sensores ultrassônicos que detectam obstáculos à frente do usuário. Quando um obstáculo é identificado, um alarme sonoro é emitido, alertando o usuário sobre a presença do objeto.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Aplicativo Móvel:</strong> Em caso de queda ou colisão, o dispositivo envia um alerta automático para um aplicativo conectado, que notifica um cuidador ou familiar, garantindo que ajuda possa ser providenciada rapidamente.
        </p>
        
        <button
          onClick={handleNavigate}
          className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
        >
          PEÇAS
        </button>
      </div>
    </div>
  );
};

export default Projeto;
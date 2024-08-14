import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Projeto = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/pecas'); 
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-12 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl text-left">
        <h1 className="text-blue-400 text-5xl font-bold mb-8">Projeto</h1>
        
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">O que é?</h2>
          <p className="text-gray-700 text-xl mb-8">
            Nosso projeto de TCC é uma solução inovadora para auxiliar pessoas com deficiência visual na sua locomoção diária. Utilizando a plataforma Arduino, desenvolvemos um dispositivo portátil que combina sensores ultrassônicos e um aplicativo móvel para proporcionar maior segurança e autonomia.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">Como funciona?</h2>
          <p className="text-gray-700 text-xl mb-6">
            <strong>Sensores Ultrassônicos:</strong> O dispositivo é equipado com sensores ultrassônicos que detectam obstáculos à frente do usuário. Quando um obstáculo é identificado, um alarme sonoro é emitido, alertando o usuário sobre a presença do objeto.
          </p>
          <p className="text-gray-700 text-xl mb-8">
            <strong>Aplicativo Móvel:</strong> Em caso de queda ou colisão, o dispositivo envia um alerta automático para um aplicativo conectado, que notifica um cuidador ou familiar, garantindo que ajuda possa ser providenciada rapidamente.
          </p>
        </div>
        
        <button
          onClick={handleNavigate}
          className="bg-gray-800 text-white text-lg px-8 py-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
        >
          PEÇAS
        </button>
      </div>
    </div>
  );
};

export default Projeto;

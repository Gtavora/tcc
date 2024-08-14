import React from 'react';
import { Link } from 'react-router-dom'; // Utilize React Router para navegação

const Sobre = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6 bg-gray-100 min-h-screen">
      <div className="max-w-2xl text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sobre Nós</h2>
        <p className="text-gray-700">
          Somos um grupo de estudantes apaixonados por tecnologia e inovação, dedicados a desenvolver soluções que melhoram a qualidade de vida das pessoas. Nosso projeto de TCC tem como objetivo principal ajudar pessoas com deficiência visual a se locomoverem com mais segurança e independência.
        </p>
      </div>

      <div className="max-w-2xl text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Nossa Visão</h2>
        <p className="text-gray-700">
          Visamos um futuro onde todas as pessoas com deficiência visual possam se sentir seguras e confiantes ao se movimentar, sem depender constantemente da ajuda de terceiros. Queremos ser pioneiros em soluções tecnológicas que proporcionem mais liberdade e conforto para esse público.
        </p>
      </div>

      <Link to="/integrantes">
        <button className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition duration-300">
          INTEGRANTES
        </button>
      </Link>
    </div>
  );
};

export default Sobre;
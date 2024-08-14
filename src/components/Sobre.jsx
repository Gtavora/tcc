import React from 'react';
import { Link } from 'react-router-dom'; 

const Sobre = () => {
  return (
    <div>
      	
      <header className="bg-white w-full shadow-lg  ">
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl justify-content mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl text-blue-400 text-6xl font-bold mb-6">Sobre Nós</h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text">
            Somos um grupo de estudantes apaixonados por tecnologia e inovação, dedicados a desenvolver soluções que melhoram a qualidade de vida das pessoas. Nosso projeto de TCC tem como objetivo principal ajudar pessoas com deficiência visual a se locomoverem com mais segurança e independência.
          </p>
        </div>

        <div className="max-w-3xl justify-content mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl text-blue-400 text-6xl font-bold mb-6">Nossa Visão</h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Visamos um futuro onde todas as pessoas com deficiência visual possam se sentir seguras e confiantes ao se movimentar, sem depender constantemente da ajuda de terceiros. Queremos ser pioneiros em soluções tecnológicas que proporcionem mais liberdade e conforto para esse público.
          </p>
        </div>

        <div className="text-center">
          <Link to="/integrantes">
            <button className="bg-gray-700 text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition duration-300 text-lg md:text-xl">
              INTEGRANTES
            </button>
          </Link>
        </div>
      </main>
      </header>
    </div>
    
  );
};

export default Sobre;
import React from 'react';

const Contato = () => {
  return (
    <div className="flex flex-col items-center bg-blue-100 min-h-screen py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Lugar onde sua opinião sempre será bem-vinda!
      </h1>
      
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full flex flex-col lg:flex-row justify-between">
        {/* Texto e Redes Sociais */}
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 text-center lg:text-left">
          <p className="text-gray-700 mb-4">
            Estamos ansiosos para ouvir sua opinião sobre nosso trabalho. Suas sugestões e comentários são muito importantes para nós. Por favor, compartilhe conosco suas ideias, pontos a melhorar e quaisquer outras observações.
          </p>
          <p className="text-gray-700 font-bold mb-6">
            Siga-nos nas redes sociais para não perder nenhuma novidade. Prometemos que você não vai se arrepender!
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="#facebook" className="text-blue-900 text-3xl hover:text-blue-700">
              {/* Ícone do Facebook */}
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#whatsapp" className="text-blue-900 text-3xl hover:text-blue-700">
              {/* Ícone do WhatsApp */}
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#instagram" className="text-blue-900 text-3xl hover:text-blue-700">
              {/* Ícone do Instagram */}
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Formulário de Contato */}
        <div className="lg:w-1/2 bg-blue-50 p-6 rounded-lg shadow-inner">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="nome">
                Insira seu nome:
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md"
                type="text"
                id="nome"
                placeholder="Insira seu nome"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Insira seu e-mail:
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md"
                type="email"
                id="email"
                placeholder="Insira seu e-mail"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="mensagem">
                Insira sua mensagem:
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md"
                id="mensagem"
                rows="5"
                placeholder="Insira sua mensagem"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white p-3 rounded-md hover:bg-gray-700 transition duration-300"
            >
              Enviar mensagem
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Lembre-se: ajudar aqueles que precisam não só transforma suas vidas, mas também enriquece a nossa com propósito e compaixão.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contato;
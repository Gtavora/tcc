import React from 'react';

function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      

      <main className="container mx-auto py-12 px-6">
        <section id="objetivo" className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Objetivo</h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Nossa missão é criar uma ferramenta acessível e eficiente que utilize tecnologia avançada
            para fornecer suporte em tempo real para deficientes visuais. Acreditamos que a tecnologia
            pode ser um grande aliado na inclusão social e na promoção de uma vida mais autônoma e digna
            para todos.
          </p>
        </section>

        <section id="objetivosProjeto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Objetivos do Projeto</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
            <li>
              <strong>Aumentar a Autonomia:</strong> Permitir que pessoas com deficiência visual se movimentem
              com maior independência e confiança.
            </li>
            <li>
              <strong>Melhorar a Segurança:</strong> Reduzir o risco de acidentes e colisões, proporcionando
              uma navegação mais segura em diversos ambientes através das novas tecnologias.
            </li>
            <li>
              <strong>Facilitar a Integração Social:</strong> Contribuir para a inclusão social de pessoas
              com deficiência visual, possibilitando uma participação mais ativa em atividades cotidianas.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
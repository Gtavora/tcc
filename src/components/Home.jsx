import React from "react";

function Home() {
  return (
    <div className="bg-gray min-h-screen flex flex-col items-center">
      <header className="bg-white w-full shadow-lg">
        <div className="container mx-auto p-8">
          <h1 className="text-blue-400 text-6xl font-bold">VisionTech</h1>
          <p className="text-gray-600 text-2xl mt-4">
            Visando um Mundo Melhor através da Tecnologia.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-12 py-16 flex-1">
        <section className="my-12">
          <blockquote className="text-gray-500 italic border-l-4 border-blue-600 pl-8 text-lg">
            "No mundo contemporâneo, muitas falhas na inclusão social são evidentes, especialmente para aqueles que possuem alguma deficiência, incluindo os portadores de deficiência visual. Dados científicos indicam que muitos desses indivíduos contam com o auxílio da bengala, ou até mesmo nenhum auxílio. Diante disso, torna-se evidente a necessidade de integrar a tecnologia ao cotidiano dos cegos por meio do Arduino, a fim de desenvolver projetos assistivos."
          </blockquote>
        </section>

        <section className="my-12">
          <h2 className="text-4xl font-bold text-blue-400">
            Diferenciais do Projeto
          </h2>
          <ul className="list-disc ml-8 mt-10 space-y-4">
            <li>
              <strong>Tecnologia de Detecção Avançada:</strong> Utiliza sensores
              ultrassônicos de alta precisão para detectar objetos à frente do
              usuário, independentemente das condições de iluminação.
            </li>
            <li>
              <strong>Alertas Multissensoriais:</strong> Oferece feedback
              através de vibração e alertas sonoros, garantindo que o usuário
              perceba os obstáculos em qualquer ambiente.
            </li>
            <li>
              <strong>Design Ergonomicamente Planejado:</strong> Compacto e leve, o dispositivo é fácil de usar e pode ser integrado a bengalas ou outros acessórios utilizados por pessoas com deficiência visual.
            </li>
            <li>
              <strong>Fácil de Usar:</strong> Interface intuitiva que permite ao
              usuário operar o dispositivo com facilidade, sem necessidade de
              treinamento complexo.
            </li>
            <li>
              <strong>Bateria de Longa Duração:</strong> Equipado com uma
              bateria eficiente que garante o funcionamento contínuo do dispositivo
              por longos períodos, reduzindo a necessidade de recargas frequentes.
            </li>
          </ul>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-blue-400">Público Alvo</h2>
          <ul className="list-disc ml-8 mt-6 space-y-4">
            <li>Pessoas com deficiência visual total ou parcial.</li>
            <li>
              Idosos com problemas de visão que necessitam de apoio adicional
              para mobilidade segura.
            </li>
            <li>
              Instituições e organizações que oferecem suporte a pessoas com
              deficiência visual.
            </li>
          </ul>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-blue-400">Nossas Referências</h2>
          <ul className="list-disc ml-8 mt-6 space-y-4">
            <li><a href="https://www.uned.es/universidad/dam/facultades/industriales/RBIM/V24N1Abril2020/V24N12020-A07.pdf" className="text-blue-500 underline">Referência 1</a></li>
            <li><a href="https://refaqi.faqi.edu.br/index.php/refaqi/article/view/88" className="text-blue-500 underline">Referência 2</a></li>
            <li><a href="https://www.proquest.com/openview/ce26cc6d0b491de3b56eb6126f2e0d8f/1?pq-origsite=gscholar&cbl=2026368&diss=y" className="text-blue-500 underline">Referência 3</a></li>
          </ul>
        </section>
      </main>

      <footer className="bg-white w-full shadow-lg mt-12">
        <div className="container mx-auto p-8 text-center">
          <p className="text-gray-600">&copy; 2024 VisionTech. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
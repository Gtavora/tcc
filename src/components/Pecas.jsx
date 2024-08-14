import React from 'react';

const Pecas = () => {
  const items = [
    {
      title: 'Sensor ultrassônico',
      description:
        'Um sensor ultrassônico emite ondas sonoras de alta frequência para detectar a presença ou medir a distância de objetos com base no tempo de retorno do eco.',
      price: 'R$ 11,00',
      imageAlt: 'Imagem do sensor ultrassônico',
      imageSrc: '/* Coloque o caminho da imagem do Sensor ultrassônico aqui */',
    },
    {
      title: 'Placa Arduino',
      description:
        'Uma plataforma de prototipagem eletrônica de código aberto, utilizada para criar projetos interativos e controlar dispositivos através de entradas e saídas digitais e analógicas.',
      price: 'R$ 40,00',
      imageAlt: 'Imagem da Placa Arduino',
      imageSrc: '/* Coloque o caminho da imagem da Placa Arduino aqui */',
    },
    {
      title: 'Protoboard',
      description:
        'Uma placa de circuito perfurada com contatos metálicos que permite a montagem temporária de circuitos eletrônicos experimentais sem a necessidade de soldagem.',
      price: 'R$ 25,00',
      imageAlt: 'Imagem do Protoboard',
      imageSrc: '/* Coloque o caminho da imagem do Protoboard aqui */',
    },
    {
      title: 'Buzzer',
      description:
        'Um buzzer é um dispositivo eletrônico que emite sons audíveis, usado para alertas e notificações. Existem buzzers piezoelétricos e eletromecânicos, amplamente usados em alarmes e indicadores.',
      price: 'R$ 4,00',
      imageAlt: 'Imagem do Buzzer',
      imageSrc: '/* Coloque o caminho da imagem do Buzzer aqui */',
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen py-12 bg-gray-100">
      <h1 className="text-blue-400 text-5xl font-bold mb-8">Peças</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-blue-400">{item.title}</h2>
            <p className="text-gray-700 text-xl mb-4">{item.description}</p>
            <p className="text-lg font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pecas;

import React from 'react';

const Integrantes = () => {
  const students = [
    {
      name: 'Matheus Melo',
      age: 17,
      school: 'Aluno do Colégio UNASP',
      image: 'URL_DA_IMAGEM_MATHEUS', // Substitua pela URL da imagem
      linkedin: 'URL_DO_LINKEDIN_MATHEUS', // Substitua pela URL do LinkedIn
      instagram: 'URL_DO_INSTAGRAM_MATHEUS', // Substitua pela URL do Instagram
    },
    {
      name: 'Guilherme Távora',
      age: 17,
      school: 'Aluno do Colégio UNASP',
      image: 'URL_DA_IMAGEM_GUILHERME', // Substitua pela URL da imagem
      linkedin: 'URL_DO_LINKEDIN_GUILHERME', // Substitua pela URL do LinkedIn
      instagram: 'URL_DO_INSTAGRAM_GUILHERME', // Substitua pela URL do Instagram
    },
    {
      name: 'Kauã Ramos',
      age: 18,
      school: 'Aluno do Colégio UNASP',
      image: 'URL_DA_IMAGEM_KAUÃ', // Substitua pela URL da imagem
      linkedin: 'URL_DO_LINKEDIN_KAUÃ', // Substitua pela URL do LinkedIn
      instagram: 'URL_DO_INSTAGRAM_KAUÃ', // Substitua pela URL do Instagram
    },
  ];

  return (
    <div className="flex justify-center items-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold">{student.name}</h2>
            <p className="text-gray-600">Idade: {student.age} anos</p>
            <p className="text-gray-800 font-semibold">{student.school}</p>
            <div className="mt-4">
              <a
                href={student.linkedin}
                className="text-blue-500 hover:text-blue-700 mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={student.instagram}
                className="text-pink-500 hover:text-pink-700 mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrantes;
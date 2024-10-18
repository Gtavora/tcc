import React from 'react';

import Gui from '../assets/Gui.svg'
import Kz from '../assets/kaua.svg'
import Tet from '../assets/Tt.svg'

const Integrantes = () => {
  const students = [
    {
      name: 'Matheus Melo',
      age: 17,
      school: 'Aluno do Colégio UNASP',
      image:  Kz,
      linkedin: '',
      instagram: '',
    },
    {
      name: 'Guilherme Távora',
      age: 17,
      school: 'Aluno do Colégio UNASP',
      image: Gui,
      linkedin: '', 
      instagram: '', 
    },
    {
      name: 'Kauã Ramos',
      age: 18,
      school: 'Aluno do Colégio UNASP',
      image: Tet, 
      linkedin: '', 
      instagram: '', 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
     
      <header className="text-blue-400 font-bold mb-6 text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Integrantes</h1>
      </header>

      <main className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-bold">{student.name}</h2>
              <p className="text-gray-600">Idade: {student.age} anos</p>
              <p className="text-gray-800 font-semibold">{student.school}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href={student.linkedin}
                  className="text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
                <a
                  href={student.instagram}
                  className="text-pink-500 hover:text-pink-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Integrantes;

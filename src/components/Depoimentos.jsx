import React from "react";

export default function Depoimentos() {
  const feedbacks = [
    {
      nome: "Maria",
      texto: "Minha peça ficou incrível! É como vestir uma parte da minha história.",
    },
    {
      nome: "João",
      texto: "Nunca pensei que uma roupa pudesse ter tanto significado. Amei!",
    },
    {
      nome: "Ana",
      texto: "O atendimento foi especial do começo ao fim. Minha peça é única!",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto mt-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-right">
        O que nossos clientes dizem
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {feedbacks.map((f, i) => (
          <div
            key={i}
            className="bg-gray-900/70 p-6 rounded-xl shadow-lg"
            data-aos="fade-up"
            data-aos-delay={i * 200}
          >
            <p className="italic mb-4">“{f.texto}”</p>
            <h4 className="font-semibold text-pink-300">— {f.nome}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

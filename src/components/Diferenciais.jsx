import React from "react";

export default function Diferenciais() {
  const items = [
    {
      titulo: "Artesanal",
      descricao: "Peças únicas, feitas à mão com atenção a cada detalhe.",
    },
    {
      titulo: "Personalizada",
      descricao: "Você participa do processo criativo, tornando a peça só sua.",
    },
    {
      titulo: "Com significado",
      descricao: "Nossas roupas carregam histórias e sentimentos.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-20 px-6 grid md:grid-cols-3 gap-8 text-center">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-gray-800/60 p-6 rounded-xl shadow-lg"
          data-aos="flip-left"
          data-aos-delay={i * 200}
        >
          <h3 className="text-2xl font-semibold mb-4">{item.titulo}</h3>
          <p className="text-gray-300">{item.descricao}</p>
        </div>
      ))}
    </section>
  );
}

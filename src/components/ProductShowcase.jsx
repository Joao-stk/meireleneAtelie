// src/components/ProductShowcase.jsx
import React from "react";

export default function ProductShowcase({ produtos }) {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
        Nossas Criações
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {produtos.map((produto, i) => (
          <div
            key={produto.id}
            className="bg-gray-800 bg-opacity-80 p-6 rounded-lg text-center shadow-lg"
            data-aos="zoom-in"
            data-aos-delay={i * 200}
          >
            <h3 className="text-xl font-semibold mb-2">{produto.nome}</h3>
            <p className="text-gray-300">{produto.preco}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

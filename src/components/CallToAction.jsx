// src/components/CallToAction.jsx
import React from "react";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-purple-800 to-pink-600 text-white py-16 px-4 text-center rounded-lg max-w-4xl mx-auto mb-12">
      <h2 className="text-3xl font-bold mb-4" data-aos="fade-down">
        Quer uma peça única feita só para você?
      </h2>
      <p className="text-lg mb-6" data-aos="fade-up">
        Entre em contato e transforme suas memórias em uma vestimenta
        personalizada e artesanal que vai carregar sentimento em cada detalhe.
      </p>
      <button
        className="px-6 py-3 bg-white text-purple-900 font-bold rounded-lg shadow hover:bg-gray-200 transition"
        data-aos="zoom-in"
      >
        Fale Conosco
      </button>
    </section>
  );
}

// src/components/AboutSection.jsx
import React from "react";

export default function AboutSection() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6" data-aos="fade-right">
        Muito além da moda
      </h2>
      <p className="text-lg text-gray-200" data-aos="fade-left">
        Criamos vestimentas personalizadas e artesanais, pensadas para
        representar sua história, seus sentimentos e momentos especiais.
        <br />
        Não é apenas roupa: é um pedaço da sua memória transformado em arte.
      </p>
    </section>
  );
}

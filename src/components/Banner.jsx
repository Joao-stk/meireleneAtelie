import React from "react";

export default function Banner({ overlayOpacity = 0.2 }) {
  return (
    <div
      className="relative w-full flex flex-col items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1603251579431-80414004f6f1?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay leve */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      ></div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">
          Vestimentas Artesanais com História
        </h1>
        <p className="text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
          Cada peça é feita à mão para carregar memórias e emoções únicas.
        </p>
      </div>
    </div>
  );
}

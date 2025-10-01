import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Loader from "../components/Loader";
import IntroSection from "../components/IntroSection";
import Diferenciais from "../components/Diferenciais";
import Depoimentos from "../components/Depoimentos";
import AOS from "aos";
import "aos/dist/aos.css";
import imgHistoria from "../assets/historiaecuidado.jpeg";
import imgPersonalizado from "../assets/personalizado.jpeg";
import imgSentimental from "../assets/sentimental.jpeg";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="relative text-gray-800 bg-rose-50 overflow-hidden">
      {/* Banner Hero */}
      <Banner />

      {/* Seções com imagens animadas */}
      <section className="max-w-6xl mx-auto my-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div data-aos="fade-right">
          <h2 className="text-5xl font-bold mb-4 text-[#654321]">História e Cuidado</h2>
          <p className="text-gray-800">
            Cada peça é feita artesanalmente, carregando memórias e carinho em cada detalhe.
          </p>
        </div>
        <div data-aos="fade-left">
          <img
            src={imgHistoria}
            alt="Artesanal"
            className="rounded-xl shadow-lg w-full max-h-[400px] object-cover"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div data-aos="fade-right" className="order-2 md:order-1">
          <img
            src={imgPersonalizado}
            alt="Detalhes"
            className="rounded-xl shadow-lg w-full max-h-[400px] object-cover"
          />
        </div>
        <div data-aos="fade-left" className="order-1 md:order-2">
          <h2 className="text-5xl font-bold mb-4 text-[#654321]">Design Personalizado</h2>
          <p className="text-gray-700">
            Confeccionamos peças únicas de acordo com o gosto e estilo de cada cliente.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div data-aos="fade-right">
          <h2 className="text-5xl font-bold mb-4 text-[#654321]">Peças com Valor Sentimental</h2>
          <p className="text-gray-700">
            Mais do que roupas, cada peça conta uma história e se torna inesquecível.
          </p>
        </div>
        <div data-aos="fade-left">
          <img
            src={imgSentimental}
            alt="Sentimental"
            className="rounded-xl shadow-lg w-full max-h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Seções extras */}
      <IntroSection />
      <Diferenciais />
      <Depoimentos />
    </div>
  );
}

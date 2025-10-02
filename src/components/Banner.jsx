import React from "react";
import banner from "../assets/banner.jpeg";

export default function Banner() {
  return (
    <div
      className="relative w-full max-w-screen overflow-hidden h-screen md:h-[80vh] min-h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Gradiente Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#654321]/40 via-[#545454]/30 to-transparent"></div>
    </div>
  );
}

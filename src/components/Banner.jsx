import React from "react";
import banner from "../assets/banner.jpeg";

export default function Banner() {
  return (
    <div
      className="
        relative w-full overflow-hidden 
        h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] 
        bg-cover bg-center
      "
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Gradiente Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/40 via-transparent to-[#000000]/30"></div>
    </div>
  );
}

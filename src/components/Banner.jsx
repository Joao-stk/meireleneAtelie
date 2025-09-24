import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <section class="relative w-full">
      <header class="relative">
        {/*-- BG Image */}
        <img src="https://www.designboom.com/wp-content/uploads/2020/09/patricia-bustos-studio-minimal-fantasy-madrid-designboom-01.jpg" alt="" class="absolute -z-10 inline-block h-full w-full object-cover" />
        {/* Container */}
        <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* Heading Content */}
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="mb-6 pb-4 text-4xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-6xl">Transformamos memórias em arte sustentável, criando peças únicas que contam histórias.</h1>
            <p class="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">Roupas sob medida, feitas para você!</p>
            <Link to="/contact"class="inline-block rounded-full bg-yellow-950 px-8 py-4 text-center font-bold text-rose-50 transition hover:border-black hover:bg-yellow-900)">Fale Conosco</Link>
          </div>
          {/* Logo Cloud */}
          <div class="mx-auto mt-16 grid max-w-[1040px] grid-cols-2">
            <div class="mx-auto">
              <a href="https://www.instagram.com/p/DBzx11YRLQX/?img_index=1" target="_blank" rel="noopener noreferrer">
              <img src="https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Emblem.png" alt="" class="inline-block h-28 w-auto -mt-5" />
              </a>
            </div>
            <div class="mx-auto">
              <a href="https://www.instagram.com/meireleneatelie" target="_blank" class="inline-block">
                <img src="https://www.pngplay.com/wp-content/uploads/12/Instagram-Logo-No-Background.png" alt="Instagram" class="inline-block h-20 w-auto" />
              </a>

            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

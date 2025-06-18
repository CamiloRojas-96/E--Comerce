"use client";
import Image from "next/image";

const bgImage = "/Pokemon Images/sv08-banner.png";

export default function HeroBanner() {
  return (
    <section className="w-full h-[340px] md:h-[420px] flex flex-col md:flex-row items-center justify-between rounded-lg shadow-lg overflow-hidden mb-8 bg-light">
      <div className="flex-1 flex flex-col items-start justify-center h-full px-6 md:px-10 py-8 md:py-0 max-w-xl bg-[rgba(234,239,239,0.92)] md:bg-transparent z-10">
        <div className="bg-[rgba(234,239,239,0.92)] md:bg-transparent rounded-xl p-4 md:p-0 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-blue mb-4 drop-shadow-lg">
            ¡Descubre lo mejor de Pokémon TCG!
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-medium-blue font-semibold mb-6 drop-shadow">
            Productos exclusivos, lanzamientos y colecciones para tu mazo.
          </p>
          <a href="/productos" className="bg-primary text-light px-6 py-3 rounded-lg font-bold text-base md:text-lg shadow hover:bg-medium-blue hover:text-dark-blue transition">
            Ver colección
          </a>
        </div>
      </div>
      <div className="flex-1 h-full w-full flex items-center justify-center relative">
        <Image src={bgImage} alt="Banner BG" fill priority quality={100} className="object-contain object-center w-full h-full" />
      </div>
    </section>
  );
}

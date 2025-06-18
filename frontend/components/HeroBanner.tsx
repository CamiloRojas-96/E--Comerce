"use client";
import Image from "next/image";

const bgImage = "/Pokemon Images/sv08-banner.png";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[340px] md:h-[420px] flex items-center justify-center rounded-lg shadow-lg overflow-hidden mb-8">
      <Image src={bgImage} alt="Banner BG" fill priority quality={100} className="object-cover object-center absolute inset-0 z-0 opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/80 via-[#1BA1F1]/60 to-[#01FF04]/40 z-10" />
      <div className="relative z-20 flex flex-col items-start justify-center h-full px-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          ¡Descubre lo mejor de Pokémon TCG!
        </h1>
        <p className="text-lg md:text-xl text-[#01FF04] font-semibold mb-6 drop-shadow">
          Productos exclusivos, lanzamientos y colecciones para tu mazo.
        </p>
        <a href="/productos" className="bg-[#01FF04] text-[#111111] px-8 py-3 rounded-lg font-bold text-lg shadow hover:bg-[#1BA1F1] hover:text-white transition">
          Ver colección
        </a>
      </div>
    </section>
  );
}

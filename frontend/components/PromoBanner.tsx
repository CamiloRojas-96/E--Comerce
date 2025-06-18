"use client";
import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-center justify-between bg-mint rounded-lg shadow-lg mb-10 overflow-visible">
      <div className="flex-1 p-8 z-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-dark-blue mb-2 drop-shadow-lg">
          The Cards Everybody Wants
        </h2>
        <p className="text-lg text-medium-blue font-semibold mb-4">
          Encuentra las cartas más buscadas y productos exclusivos de Pokémon TCG.
        </p>
        <a
          href="/productos"
          className="bg-dark-blue text-light px-6 py-2 rounded font-bold shadow hover:bg-primary hover:text-dark-blue transition"
        >
          Ver más
        </a>
      </div>
      <div className="flex-1 flex items-center justify-center p-6 relative min-h-[200px] z-20">
        <div className="relative w-full h-60 md:w-[600px] md:h-72 mx-auto">
          <Image
            src="/Pokemon Images/sv10-featured-expansion.png"
            alt="Promo Card"
            fill
            className="object-contain rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

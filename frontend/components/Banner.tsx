"use client";

import React from "react";

const Banner: React.FC = () => (
  <section className="w-full bg-[#01FF04] text-[#111111] py-10 px-4 flex flex-col items-center justify-center shadow-lg mb-8 rounded-lg">
    <h1 className="text-4xl font-extrabold mb-2 drop-shadow-lg">¡Bienvenido a tu E-Commerce!</h1>
    <p className="text-lg font-semibold mb-4">Descubre los mejores productos y ofertas exclusivas.</p>
    <button className="bg-[#111111] text-[#01FF04] px-6 py-2 rounded font-bold shadow hover:bg-[#1BA1F1] hover:text-white transition">Ver catálogo</button>
  </section>
);

export default Banner;

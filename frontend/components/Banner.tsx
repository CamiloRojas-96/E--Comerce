"use client";

import React from "react";

const Banner: React.FC = () => (
  <section className="w-full bg-medium-blue text-dark-blue py-10 px-4 flex flex-col items-center justify-center shadow-lg mb-8 rounded-lg">
    <h1 className="text-4xl font-extrabold mb-2 drop-shadow-lg text-dark-blue">¡Bienvenido a tu E-Commerce!</h1>
    <p className="text-lg font-semibold mb-4 text-dark-blue">Descubre los mejores productos y ofertas exclusivas.</p>
    <button className="bg-dark-blue text-light px-6 py-2 rounded font-bold shadow hover:bg-primary hover:text-dark-blue transition">Ver catálogo</button>
  </section>
);

export default Banner;

"use client";

import React from "react";

const Navbar: React.FC = () => (
  <nav className="w-full bg-[#111111] text-[#01FF04] flex items-center justify-between px-8 py-4 shadow-lg border-b border-[#01FF04]">
    <div className="text-2xl font-extrabold tracking-wide">TCG Shop</div>
    <ul className="flex gap-8 font-semibold">
      <li className="hover:text-[#1BA1F1] cursor-pointer transition">Productos</li>
      <li className="hover:text-[#1BA1F1] cursor-pointer transition">Contacto</li>
    </ul>
    <button className="bg-[#01FF04] text-[#111111] px-4 py-2 rounded font-bold shadow hover:bg-[#1BA1F1] hover:text-white transition">Login</button>
  </nav>
);

export default Navbar;

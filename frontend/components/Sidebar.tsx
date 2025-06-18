"use client";

import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => (
  <aside className="bg-[#18181b] text-[#FDFDFD] w-64 min-h-screen p-6 shadow-lg border-r border-[#01FF04] flex flex-col gap-6 max-md:w-full max-md:flex-row max-md:items-center max-md:justify-center max-md:fixed max-md:top-0 max-md:left-0 max-md:z-40 max-md:h-16">
    <div className="text-2xl font-bold text-[#01FF04] mb-4 max-md:mb-0 max-md:mr-8">Menú</div>
    <nav className="flex flex-col gap-4 max-md:flex-row max-md:gap-8">
      <Link href="/productos" className="hover:text-[#01FF04] transition font-semibold">Productos</Link>
      <Link href="/ordenes" className="hover:text-[#01FF04] transition font-semibold">Órdenes</Link>
      <Link href="/configuracion" className="hover:text-[#1BA1F1] transition font-semibold">Configuración</Link>
    </nav>
  </aside>
);

export default Sidebar;

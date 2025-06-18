"use client";

import React, { useState } from "react";
import Link from "next/link";

const menuOptions = [
  {
    label: "Productos",
    href: "/productos",
    description: "Gestiona y explora el catálogo de productos.",
    // icon: <svg>...</svg>
  },
  {
    label: "Órdenes",
    href: "/ordenes",
    description: "Consulta y administra las órdenes de compra.",
    // icon: <svg>...</svg>
  },
  {
    label: "Configuración",
    href: "/configuracion",
    description: "Ajusta las preferencias de tu tienda.",
    // icon: <svg>...</svg>
  },
];

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-light border-b border-mint px-4 py-2 flex items-center justify-between shadow-md relative z-50">
      <div className="text-2xl font-extrabold text-dark-blue tracking-wide">Menú</div>
      <nav className="relative">
        <button
          className="px-4 py-2 rounded-lg bg-mint text-dark-blue font-semibold shadow border border-mint hover:bg-medium-blue hover:text-light transition flex items-center gap-2"
          onClick={() => setOpen((v) => !v)}
        >
          Opciones
          <span className={`ml-2 transition-transform ${open ? "rotate-180" : "rotate-0"}`}>▼</span>
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-[340px] bg-light rounded-xl shadow-xl border border-mint p-4 flex flex-col gap-4 animate-fade-in z-50">
            {menuOptions.map((opt) => (
              <Link
                key={opt.label}
                href={opt.href}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-mint transition group"
                onClick={() => setOpen(false)}
              >
                {/* <span>{opt.icon}</span> */}
                <div>
                  <div className="font-bold text-dark-blue group-hover:text-medium-blue text-lg">{opt.label}</div>
                  <div className="text-sm text-medium-blue group-hover:text-dark-blue">{opt.description}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Sidebar;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Productos", href: "/productos" },
  { label: "Clientes", href: "/clientes" },
  { label: "Precios", href: "/precios" },
  { label: "Contenido", href: "/contenido" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-light flex items-center justify-between px-8 py-3 shadow-none">
      <div className="flex items-center gap-3">
        <Image src="/game.png" alt="Logo" width={36} height={36} className="rounded-full" />
        <span className="text-2xl font-extrabold tracking-wide text-dark-blue">TCG Shop</span>
      </div>
      <ul className="flex gap-6 font-semibold text-dark-blue text-base">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="hover:text-medium-blue transition px-2 py-1 rounded focus:outline-none focus:bg-mint"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-3 items-center">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={28}
            height={28}
            className="hover:opacity-80 transition"
          />
        </a>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
        >
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            width={28}
            height={28}
            className="hover:opacity-80 transition"
          />
        </a>
        <Link
          href="/login"
          className="text-dark-blue font-semibold hover:text-medium-blue transition px-3 py-1 rounded"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="bg-dark-blue text-light px-4 py-2 rounded-lg font-bold shadow hover:bg-medium-blue hover:text-dark-blue transition"
        >
          Get started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

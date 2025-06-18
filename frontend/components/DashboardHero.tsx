"use client";
import React, { useState } from "react";

const heroSlides = [
	{
		title: "¡Nuevas Cartas TCG 2025!",
		description:
			"Descubre la última colección de cartas exclusivas y mejora tu mazo con lo mejor del año.",
		image: "/public/globe.svg",
		cta: "Ver colección",
		link: "/productos",
	},
	{
		title: "Promoción de Verano",
		description:
			"Aprovecha descuentos de hasta 30% en productos seleccionados. Solo por tiempo limitado.",
		image: "/public/vercel.svg",
		cta: "Ver ofertas",
		link: "/productos",
	},
	{
		title: "Top Ventas",
		description:
			"Explora los productos más vendidos y encuentra lo que todos quieren para sus partidas.",
		image: "/public/window.svg",
		cta: "Ver top ventas",
		link: "/productos",
	},
];

const DashboardHero = () => {
	const [current, setCurrent] = useState(0);

	const nextSlide = () =>
		setCurrent((prev) => (prev + 1) % heroSlides.length);
	const prevSlide = () =>
		setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

	const slide = heroSlides[current];

	return (
		<section className="relative w-full bg-medium-blue text-dark-blue rounded-lg shadow-lg mb-10 flex flex-col md:flex-row items-center overflow-hidden">
			<div className="flex-1 p-8">
				<h2 className="text-3xl md:text-4xl font-extrabold mb-2 drop-shadow-lg text-dark-blue">
					{slide.title}
				</h2>
				<p className="text-lg font-semibold mb-4 text-dark-blue">{slide.description}</p>
				<a
					href={slide.link}
					className="inline-block bg-dark-blue text-light px-6 py-2 rounded font-bold shadow hover:bg-primary hover:text-dark-blue transition"
				>
					{slide.cta}
				</a>
			</div>
			<div className="flex-1 flex items-center justify-center p-8">
				<img
					src={slide.image}
					alt={slide.title}
					className="w-48 h-48 object-contain"
				/>
			</div>
			<button
				onClick={prevSlide}
				className="absolute left-2 top-1/2 -translate-y-1/2 bg-dark-blue text-light rounded-full p-2 shadow hover:bg-primary transition"
			>
				&#8592;
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-2 top-1/2 -translate-y-1/2 bg-dark-blue text-light rounded-full p-2 shadow hover:bg-primary transition"
			>
				&#8594;
			</button>
		</section>
	);
};

export default DashboardHero;

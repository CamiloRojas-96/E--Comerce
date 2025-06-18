import React from "react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className="bg-light text-dark-blue rounded-lg shadow-md p-4 flex flex-col items-center border border-mint w-full max-w-xs mx-auto sm:max-w-none sm:w-auto">
      <img src={image} alt={name} className="w-24 h-24 sm:w-32 sm:h-32 object-cover mb-4 rounded bg-mint border border-light" />
      <h2 className="text-base sm:text-lg font-semibold mb-2 text-medium-blue text-center break-words">{name}</h2>
      <p className="text-dark-blue font-bold mb-2 text-sm sm:text-base">${price.toFixed(2)}</p>
      <button className="bg-primary text-light px-3 py-2 sm:px-4 sm:py-2 rounded hover:bg-medium-blue hover:text-dark-blue transition font-semibold shadow border border-primary w-full">Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;

import React from "react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className="bg-[#18181b] text-[#FDFDFD] rounded-lg shadow-md p-4 flex flex-col items-center border border-[#01FF04]">
      <img src={image} alt={name} className="w-32 h-32 object-cover mb-4 rounded bg-[#111111] border border-[#FDFDFD]" />
      <h2 className="text-lg font-semibold mb-2 text-[#01FF04]">{name}</h2>
      <p className="text-[#FDFDFD] font-bold mb-2">${price.toFixed(2)}</p>
      <button className="bg-[#01FF04] text-[#111111] px-4 py-2 rounded hover:bg-[#1BA1F1] transition font-semibold shadow border border-[#01FF04]">Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;

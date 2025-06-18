"use client";

import Image from "next/image";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import api from "../utils/api";
import { useEffect, useState } from "react";

interface Product {
  _id?: string;
  name: string;
  description?: string;
  image?: string;
  category: string;
  set: string;
  edition?: string;
  language?: string;
  price: number;
  stock: number;
  condition?: string;
  releaseDate?: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  const fetchProducts = () => {
    setLoading(true);
    api.get<Product[]>("/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar productos");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = () => {
    setEditing(null);
    setShowForm(true);
  };

  const handleEdit = (product: Product) => {
    setEditing(product);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    await api.delete(`/products/${id}`);
    fetchProducts();
  };

  const handleFormSubmit = async (data: { name: string; price: number; image: string; _id?: string }) => {
    if (data._id) {
      await api.put(`/products/${data._id}`, data);
    } else {
      await api.post("/products", data);
    }
    setShowForm(false);
    fetchProducts();
  };

  if (loading) return <main className="p-8 text-center">Cargando productos...</main>;
  if (error) return <main className="p-8 text-center text-red-600">{error}</main>;

  return (
    <main className="min-h-screen bg-[#111111] text-[#FDFDFD] p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#01FF04] drop-shadow-lg">
        Catálogo de Productos
      </h1>
      <div className="mb-4 text-center">
        <button
          onClick={handleAdd}
          className="bg-[#01FF04] text-[#111111] px-4 py-2 rounded hover:bg-[#1BA1F1] transition font-semibold shadow border border-[#01FF04]"
        >
          Agregar Producto
        </button>
      </div>
      {showForm && (
        <ProductForm
          initialData={editing || undefined}
          onSubmit={handleFormSubmit}
          onCancel={() => setShowForm(false)}
        />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {products.map((product) => (
          <div key={product._id} className="relative">
            <ProductCard
              {...product}
              image={product.image || ""}
            />
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => handleEdit(product)}
                className="bg-[#FDFDFD] text-[#111111] px-2 py-1 rounded font-semibold shadow border border-[#01FF04] hover:bg-[#01FF04] hover:text-[#111111]"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(product._id!)}
                className="bg-[#01FF04] text-[#111111] px-2 py-1 rounded font-semibold shadow border border-[#01FF04] hover:bg-[#1BA1F1]"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

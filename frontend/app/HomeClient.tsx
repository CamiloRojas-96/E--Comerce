"use client";

import Image from "next/image";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import api from "../utils/api";
import { useEffect, useState } from "react";
import HeroBanner from "../components/HeroBanner";
import PromoBanner from "../components/PromoBanner";
import SearchBar from "../components/SearchBar";

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

const HomeClient = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

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

  const handleFormSubmit = async (data: Product) => {
    if (data._id) {
      await api.put(`/products/${data._id}`, data);
    } else {
      await api.post("/products", data);
    }
    setShowForm(false);
    fetchProducts();
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    (product.set && product.set.toLowerCase().includes(search.toLowerCase())) ||
    (product.category && product.category.toLowerCase().includes(search.toLowerCase()))
  );

  if (loading) return <main className="p-8 text-center">Cargando productos...</main>;
  if (error) return <main className="p-8 text-center text-red-600">{error}</main>;

  return (
    <main className="min-h-screen bg-[#111111] text-[#FDFDFD] p-0">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 p-4 md:p-8 w-full">
          <div className="w-full flex justify-center mb-[-32px] z-30 relative">
            <SearchBar onSearch={setSearch} />
          </div>
          <HeroBanner />
          <PromoBanner />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
            {filteredProducts.map((product) => (
              <div key={product._id} className="relative">
                <ProductCard {...product} image={product.image || ""} />
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
        </div>
      </div>
    </main>
  );
};

export default HomeClient;

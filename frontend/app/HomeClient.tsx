"use client";

import Image from "next/image";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
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
      <div className="flex flex-col">
        <div className="flex-1 p-2 sm:p-4 md:p-8 w-full">
          <div className="w-full flex justify-center mb-[-32px] z-30 relative">
            <SearchBar onSearch={setSearch} />
          </div>
          <HeroBanner />
          <PromoBanner />
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-dark-blue text-center">Catálogo de Productos</h1>
          <p className="mb-6 sm:mb-8 text-center text-medium-blue text-base sm:text-lg">Explora y administra los productos de tu tienda</p>
          <div className="mb-4 text-center">
            <button
              onClick={handleAdd}
              className="bg-primary text-dark-blue px-4 sm:px-6 py-2 rounded-lg hover:bg-medium-blue hover:text-light transition font-semibold shadow border border-mint"
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
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto w-full">
            {filteredProducts.map((product) => (
              <div key={product._id} className="relative group">
                <ProductCard {...product} image={product.image || ""} />
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-light text-dark-blue px-2 py-1 rounded font-semibold shadow border border-mint hover:bg-mint hover:text-dark-blue transition text-xs sm:text-sm"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(product._id!)}
                    className="bg-mint text-dark-blue px-2 py-1 rounded font-semibold shadow border border-mint hover:bg-medium-blue hover:text-light transition text-xs sm:text-sm"
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

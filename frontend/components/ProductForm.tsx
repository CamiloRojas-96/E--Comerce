import React, { useState, useEffect } from "react";

interface ProductFormProps {
  initialData?: {
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
  };
  onSubmit: (data: any) => void;
  onCancel?: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ initialData, onSubmit, onCancel }) => {
  const [form, setForm] = useState({
    name: initialData?.name || "",
    description: initialData?.description || "",
    image: initialData?.image || "",
    category: initialData?.category || "",
    set: initialData?.set || "",
    edition: initialData?.edition || "",
    language: initialData?.language || "Español",
    price: initialData?.price || 0,
    stock: initialData?.stock || 0,
    condition: initialData?.condition || "new",
    releaseDate: initialData?.releaseDate ? initialData.releaseDate.substring(0,10) : ""
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        description: initialData.description || "",
        image: initialData.image || "",
        category: initialData.category || "",
        set: initialData.set || "",
        edition: initialData.edition || "",
        language: initialData.language || "Español",
        price: initialData.price || 0,
        stock: initialData.stock || 0,
        condition: initialData.condition || "new",
        releaseDate: initialData.releaseDate ? initialData.releaseDate.substring(0,10) : ""
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...form, price: Number(form.price), stock: Number(form.stock), _id: initialData?._id });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#111111] text-[#FDFDFD] p-4 rounded shadow mb-6 max-w-md mx-auto border border-[#FDFDFD]">
      <h2 className="text-2xl font-bold mb-4 text-[#01FF04]">{initialData ? "Editar" : "Agregar"} Producto</h2>
      <div className="mb-2">
        <label className="block mb-1">Nombre</label>
        <input className="w-full border rounded px-2 py-1" name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Descripción</label>
        <textarea className="w-full border rounded px-2 py-1" name="description" value={form.description} onChange={handleChange} />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Imagen (URL)</label>
        <input className="w-full border rounded px-2 py-1" name="image" value={form.image} onChange={handleChange} />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Categoría</label>
        <input className="w-full border rounded px-2 py-1" name="category" value={form.category} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Set</label>
        <input className="w-full border rounded px-2 py-1" name="set" value={form.set} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Edición</label>
        <input className="w-full border rounded px-2 py-1" name="edition" value={form.edition} onChange={handleChange} />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Idioma</label>
        <input className="w-full border rounded px-2 py-1" name="language" value={form.language} onChange={handleChange} />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Precio</label>
        <input type="number" className="w-full border rounded px-2 py-1" name="price" value={form.price} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Stock</label>
        <input type="number" className="w-full border rounded px-2 py-1" name="stock" value={form.stock} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Condición</label>
        <select className="w-full border rounded px-2 py-1" name="condition" value={form.condition} onChange={handleChange}>
          <option value="new">Nuevo</option>
          <option value="used">Usado</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block mb-1">Fecha de lanzamiento</label>
        <input type="date" className="w-full border rounded px-2 py-1" name="releaseDate" value={form.releaseDate} onChange={handleChange} />
      </div>
      <div className="flex gap-2 mt-4">
        <button type="submit" className="bg-[#01FF04] text-[#111111] px-4 py-2 rounded hover:bg-[#1BA1F1] transition font-semibold shadow">
          {initialData ? "Actualizar" : "Agregar"}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="bg-[#FDFDFD] text-[#111111] px-4 py-2 rounded font-semibold shadow border border-[#111111]">Cancelar</button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;

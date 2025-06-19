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
    <form onSubmit={handleSubmit} className="bg-light text-dark-blue p-4 sm:p-6 rounded-xl shadow mb-6 w-full max-w-md mx-auto border border-mint">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-medium-blue">{initialData ? "Edit" : "Add"} Product</h2>
      <div className="mb-2">
        <label className="block mb-1">Name</label>
        <input className="w-full border border-mint rounded px-2 py-1 bg-light text-dark-blue" name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Description</label>
        <textarea className="w-full border border-mint rounded px-2 py-1 bg-light text-dark-blue" name="description" value={form.description} onChange={handleChange} />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Image (URL)</label>
        <input className="w-full border border-mint rounded px-2 py-1 bg-light text-dark-blue" name="image" value={form.image} onChange={handleChange} />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Category</label>
        <input className="w-full border border-mint rounded px-2 py-1 bg-light text-dark-blue" name="category" value={form.category} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Set</label>
        <input className="w-full border border-mint rounded px-2 py-1 bg-light text-dark-blue" name="set" value={form.set} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Edition</label>
        <input className="w-full border border-mint rounded px-2 py-1 bg-light text-dark-blue" name="edition" value={form.edition} onChange={handleChange} />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Language</label>
        <input className="w-full border border-mint rounded px-2 py-1 bg-light text-dark-blue" name="language" value={form.language} onChange={handleChange} />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Price</label>
        <input type="number" className="w-full border border-mint rounded px-2 py-1 bg-light text-dark-blue" name="price" value={form.price} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Stock</label>
        <input type="number" className="w-full border border-mint rounded px-2 py-1 bg-light text-dark-blue" name="stock" value={form.stock} onChange={handleChange} required />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Condition</label>
        <select className="w-full border border-mint rounded px-2 py-1 bg-light text-dark-blue" name="condition" value={form.condition} onChange={handleChange}>
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block mb-1">Release Date</label>
        <input type="date" className="w-full border border-mint rounded px-2 py-1 bg-light text-dark-blue" name="releaseDate" value={form.releaseDate} onChange={handleChange} />
      </div>
      <div className="flex gap-2 mt-4">
        <button type="submit" className="bg-primary text-dark-blue px-4 py-2 rounded-lg hover:bg-medium-blue hover:text-light transition font-semibold shadow border border-mint">
          {initialData ? "Update" : "Add"}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="bg-light text-dark-blue px-4 py-2 rounded-lg font-semibold shadow border border-mint hover:bg-mint hover:text-dark-blue transition">Cancel</button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;

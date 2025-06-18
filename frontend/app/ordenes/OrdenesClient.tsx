"use client";
import { useEffect, useState } from "react";
import api from "../../utils/api";

interface Order {
  _id: string;
  user: string;
  products: any[];
  total: number;
  status: string;
}

export default function OrdenesClient() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/orders")
      .then(res => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar órdenes");
        setLoading(false);
      });
  }, []);

  if (loading) return <main className="p-8 text-center">Cargando órdenes...</main>;
  if (error) return <main className="p-8 text-center text-red-600">{error}</main>;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-[#01FF04]">Órdenes</h1>
      {orders.length === 0 ? (
        <p className="text-center text-[#1BA1F1]">No hay órdenes disponibles.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map(order => (
            <li key={order._id} className="bg-[#18181b] text-[#FDFDFD] p-4 rounded shadow border border-[#01FF04]">
              <div><b>ID:</b> {order._id}</div>
              <div><b>Usuario:</b> {typeof order.user === "object" && order.user !== null ? (order.user.name || order.user.email || order.user._id || "No disponible") : order.user}</div>
              <div><b>Total:</b> {typeof order.total === "number" ? `$${order.total.toFixed(2)}` : "No disponible"}</div>
              <div><b>Estado:</b> {order.status}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

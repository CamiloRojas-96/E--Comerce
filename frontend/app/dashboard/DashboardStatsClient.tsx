"use client";
import { useEffect, useState } from "react";
import api from "../../utils/api";

export default function DashboardStatsClient() {
  const [stats, setStats] = useState({ productos: 0, ordenes: 0, usuarios: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get("/products"),
      api.get("/orders"),
      api.get("/users")
    ]).then(([prod, ord, usr]) => {
      setStats({
        productos: Array.isArray(prod.data) ? prod.data.length : 0,
        ordenes: Array.isArray(ord.data) ? ord.data.length : 0,
        usuarios: Array.isArray(usr.data) ? usr.data.length : 0
      });
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div className="bg-[#18181b] border border-[#01FF04] rounded-lg p-6 shadow flex flex-col items-center animate-pulse h-24" />
      <div className="bg-[#18181b] border border-[#01FF04] rounded-lg p-6 shadow flex flex-col items-center animate-pulse h-24" />
      <div className="bg-[#18181b] border border-[#01FF04] rounded-lg p-6 shadow flex flex-col items-center animate-pulse h-24" />
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div className="bg-[#18181b] border border-[#01FF04] rounded-lg p-6 shadow flex flex-col items-center">
        <span className="text-2xl font-bold text-[#01FF04] mb-2">{stats.productos}</span>
        <span className="text-lg font-semibold">Productos</span>
      </div>
      <div className="bg-[#18181b] border border-[#01FF04] rounded-lg p-6 shadow flex flex-col items-center">
        <span className="text-2xl font-bold text-[#1BA1F1] mb-2">{stats.ordenes}</span>
        <span className="text-lg font-semibold">Órdenes</span>
      </div>
      <div className="bg-[#18181b] border border-[#01FF04] rounded-lg p-6 shadow flex flex-col items-center">
        <span className="text-2xl font-bold text-[#FDFDFD] mb-2">{stats.usuarios}</span>
        <span className="text-lg font-semibold">Usuarios</span>
      </div>
    </div>
  );
}

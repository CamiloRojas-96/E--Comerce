import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import DashboardHero from "../../components/DashboardHero";
import DashboardStatsClient from "./DashboardStatsClient";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex bg-[#111111] text-[#FDFDFD]">
      <Sidebar />
      <main className="flex-1 p-8">
        <DashboardHero />
        <h1 className="text-4xl font-extrabold mb-6 text-[#01FF04] drop-shadow-lg">
          Dashboard
        </h1>
        <DashboardStatsClient />
        <section className="bg-[#18181b] border border-[#01FF04] rounded-lg p-6 shadow mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#01FF04]">
            Resumen de actividad
          </h2>
          <ul className="list-disc pl-6 text-[#FDFDFD]">
            <li>Última orden creada hace 2 horas</li>
            <li>
              Producto más vendido:{" "}
              <span className="text-[#1BA1F1]">Producto X</span>
            </li>
            <li>
              Usuario más activo:{" "}
              <span className="text-[#01FF04]">usuario@email.com</span>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

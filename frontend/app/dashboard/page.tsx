import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import DashboardHero from "../../components/DashboardHero";
import DashboardStatsClient from "./DashboardStatsClient";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex bg-[#111111] text-[#FDFDFD]">
      <Sidebar />
      <main className="flex-1 p-8 text-center text-[#01FF04]">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>Bienvenido al panel principal del e-commerce.</p>
      </main>
      <Footer />
    </div>
  );
}

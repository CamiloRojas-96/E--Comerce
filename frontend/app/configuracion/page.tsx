import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

export default function ConfiguracionPage() {
  return (
    <div className="min-h-screen flex bg-[#111111] text-[#FDFDFD]">
      <Sidebar />
      <main className="flex-1 p-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-[#01FF04]">Configuración</h1>
        <p>Configuraciones próximamente.</p>
      </main>
      <Footer />
    </div>
  );
}

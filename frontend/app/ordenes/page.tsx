import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import OrdenesClient from "./OrdenesClient";

export default function OrdenesPage() {
  return (
    <div className="min-h-screen flex bg-[#111111] text-[#FDFDFD]">
      <Sidebar />
      <main className="flex-1 p-8">
        <OrdenesClient />
      </main>
      <Footer />
    </div>
  );
}

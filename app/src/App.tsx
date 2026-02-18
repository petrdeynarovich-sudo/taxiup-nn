import { useMemo, useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";

import { Header } from "./components/Header";
import { DriverView } from "./components/DriverView";
import { FleetView } from "./components/FleetView";
import { Footer } from "./components/Footer";
import { LeadModal } from "./components/LeadModal";
import { Seo } from "./components/Seo";

function DriverRoute({ onOpenLeadModal }: { onOpenLeadModal: () => void }) {
  return (
    <>
      <Seo
        title="TaxiUp — ремонт и обслуживание такси"
        description="Ремонт, обслуживание и подготовка автомобилей такси. Помогаем водителям и таксопаркам держать машины в порядке и быстрее выходить на линию."
        path="/"
      />
      <DriverView onOpenLeadModal={onOpenLeadModal} />
    </>
  );
}

function ParkRoute({ onOpenLeadModal }: { onOpenLeadModal: () => void }) {
  return (
    <>
      <Seo
        title="TaxiUp для таксопарков — обслуживание и ремонт"
        description="Сервис для таксопарков: плановое ТО, ремонт, диагностика, помощь с подготовкой авто под требования агрегаторов."
        path="/park"
      />
      <FleetView onOpenLeadModal={onOpenLeadModal} />
    </>
  );
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const mode = useMemo<"driver" | "fleet">(
    () => (location.pathname.startsWith("/park") ? "fleet" : "driver"),
    [location.pathname]
  );

  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const setMode = (m: "driver" | "fleet") => {
    navigate(m === "driver" ? "/" : "/park");
  };

  const openLeadModal = () => setIsLeadModalOpen(true);

  return (
    <div className="min-h-screen font-sans selection:bg-yellow-400 selection:text-black">
      <Toaster position="top-center" richColors />
      <Header mode={mode} setMode={setMode} onOpenLeadModal={openLeadModal} />

      <main>
        <Routes>
          <Route path="/" element={<DriverRoute onOpenLeadModal={openLeadModal} />} />
          <Route path="/park" element={<ParkRoute onOpenLeadModal={openLeadModal} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      <LeadModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} />
    </div>
  );
}

import { Seo } from "./components/Seo";
import React, { useState } from 'react';
import { Header } from './components/Header';
import { DriverView } from './components/DriverView';
import { FleetView } from './components/FleetView';
import { Footer } from './components/Footer';
import { Toaster } from "sonner";
import { LeadModal } from './components/LeadModal';

function App() {
  return <div style={{ padding: 40, color: "white" }}>APP OK</div>;


  const [mode, setMode] = useState<'driver' | 'fleet'>('driver');
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const openLeadModal = () => setIsLeadModalOpen(true);

  // ✅ ВСТАВЬ ВОТ ЗДЕСЬ (перед return)
  const isPark = mode === "fleet";

  const title = isPark
    ? "TaxiUp — услуги для таксопарков в Нижнем Новгороде"
    : "TaxiUp — подготовка авто под такси, ремонт и дооснащение в Нижнем Новгороде";

  const description = isPark
    ? "Обслуживание автопарков: кузовной ремонт, химчистка, дооснащение под требования агрегаторов. Быстрые сроки."
    : "Подготовим авто под Комфорт/Комфорт+: ремонт, детейлинг, химчистка, дооснащение. Заявка — и перезвоним.";

  const path = isPark ? "/park" : "/";

  const [mode, setMode] = useState<'driver' | 'fleet'>('driver');
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const openLeadModal = () => setIsLeadModalOpen(true);

  return (
    <div className="min-h-screen font-sans selection:bg-yellow-400 selection:text-black">
      <Toaster position="top-center" richColors />
      <Header mode={mode} setMode={setMode} onOpenLeadModal={openLeadModal} />
      
      <main>
        {mode === 'driver' ? (
          <DriverView onOpenLeadModal={openLeadModal} />
        ) : (
          <FleetView onOpenLeadModal={openLeadModal} />
        )}
      </main>

      <Footer />
      
      <LeadModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)} 
      />
    </div>
  );
}

export default App;

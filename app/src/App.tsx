import React, { useState } from 'react';
import { Header } from './components/Header';
import { DriverView } from './components/DriverView';
import { FleetView } from './components/FleetView';
import { Footer } from './components/Footer';
import { Toaster } from "sonner@2.0.3";
import { LeadModal } from './components/LeadModal';

function App() {
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

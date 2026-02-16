import React from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  mode: 'driver' | 'fleet';
  setMode: (mode: 'driver' | 'fleet') => void;
  onOpenLeadModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ mode, setMode, onOpenLeadModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = mode === 'driver' ? [
    { id: 'how-it-works', label: 'Как это работает' },
    { id: 'calculator', label: 'Калькулятор' },
    { id: 'packages', label: 'Пакеты' },
    { id: 'services', label: 'Все услуги' },
    { id: 'faq', label: 'FAQ' },
  ] : [
    { id: 'solutions', label: 'Решение' },
    { id: 'packages', label: 'Пакеты' },
    { id: 'services', label: 'Услуги' },
    { id: 'cases', label: 'Кейсы' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-yellow-500/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center -skew-x-12">
            <span className="text-black font-black text-xl skew-x-12">L</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-xl leading-none tracking-tighter uppercase">LevelUp <span className="text-yellow-400">Taxi</span></h1>
            {mode === 'fleet' ? (
               <p className="text-yellow-400 text-[10px] leading-none tracking-wide font-bold uppercase mt-1">Парковый сервис</p>
            ) : (
               <p className="text-zinc-400 text-[10px] leading-none tracking-wide">Нижний Новгород</p>
            )}
          </div>
        </div>

        {/* Center Menu - Desktop */}
        <nav className="hidden xl:flex items-center gap-6">
          {menuItems.map((item) => (
             <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className="text-zinc-300 hover:text-white text-sm font-medium transition-colors"
             >
                {item.label}
             </button>
          ))}
        </nav>

        {/* Right Side - Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Mode Toggle */}
          <div className="flex bg-zinc-900 rounded-full p-1 border border-zinc-800">
            <button
              onClick={() => setMode('driver')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                mode === 'driver'
                  ? 'bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Я Водитель
            </button>
            <button
              onClick={() => setMode('fleet')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                mode === 'fleet'
                  ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Я Таксопарк
            </button>
          </div>

          <div className="flex flex-col items-end">
            <a href="tel:+79101441159" className="text-white font-bold text-sm hover:text-yellow-400 transition-colors flex items-center gap-2">
              <Phone className="w-3 h-3 text-yellow-400" />
              +7 (910) 144-11-59
            </a>
            <div className="flex gap-3 text-[10px] text-zinc-400">
              <a href="#" className="hover:text-white underline decoration-dashed">WhatsApp</a>
              <a href="#" className="hover:text-white underline decoration-dashed">Telegram</a>
            </div>
          </div>
          <button 
            onClick={onOpenLeadModal}
            className={`px-5 py-2.5 rounded font-bold uppercase text-xs tracking-wider animate-pulse transition-colors ${
               mode === 'fleet' 
               ? 'bg-yellow-400 hover:bg-yellow-300 text-black border border-yellow-500' 
               : 'bg-red-600 hover:bg-red-500 text-white'
            }`}
          >
            {mode === 'fleet' ? 'Запросить КП' : 'Записаться'}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-zinc-950 border-b border-zinc-800 p-4 absolute w-full top-20 left-0 max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top-10 duration-200">
          <div className="flex flex-col gap-4">
             <div className="flex bg-zinc-900 rounded-lg p-1 border border-zinc-800 w-full">
              <button
                onClick={() => { setMode('driver'); setIsMobileMenuOpen(false); }}
                className={`flex-1 py-3 rounded-md text-sm font-bold transition-all ${
                  mode === 'driver' ? 'bg-yellow-400 text-black' : 'text-zinc-400'
                }`}
              >
                Я Водитель
              </button>
              <button
                onClick={() => { setMode('fleet'); setIsMobileMenuOpen(false); }}
                className={`flex-1 py-3 rounded-md text-sm font-bold transition-all ${
                  mode === 'fleet' ? 'bg-white text-black' : 'text-zinc-400'
                }`}
              >
                Я Таксопарк
              </button>
            </div>
            
            <nav className="flex flex-col gap-3 py-4 border-b border-zinc-800">
               {menuItems.map((item) => (
                  <button 
                     key={item.id}
                     onClick={() => scrollToSection(item.id)} 
                     className="text-left text-zinc-300 font-medium p-2 hover:bg-zinc-900 rounded"
                  >
                     {item.label}
                  </button>
               ))}
            </nav>

            <div className="flex flex-col gap-2 items-center pt-2">
               <a href="tel:+79101441159" className="text-white font-bold text-xl">+7 (910) 144-11-59</a>
               <div className="flex gap-4 text-sm text-zinc-400">
                  <a href="#" className="hover:text-white">WhatsApp</a>
                  <a href="#" className="hover:text-white">Telegram</a>
               </div>
            </div>

            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenLeadModal();
              }}
              className={`w-full py-4 rounded font-bold uppercase active:scale-95 transition-transform ${
                 mode === 'fleet' 
                 ? 'bg-yellow-400 text-black' 
                 : 'bg-red-600 text-white'
              }`}
            >
              {mode === 'fleet' ? 'Запросить КП' : 'Записаться на аудит'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

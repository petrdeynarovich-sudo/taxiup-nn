import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="bg-zinc-900 h-64 rounded-xl relative overflow-hidden flex items-center justify-center border border-zinc-800 group">
             {/* Abstract Map UI */}
             <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center" />
             <div className="relative z-10 flex flex-col items-center gap-2">
                <MapPin className="text-yellow-400 w-10 h-10 drop-shadow-[0_4px_10px_rgba(250,204,21,0.5)] animate-bounce" />
                <p className="font-bold text-lg">г. Нижний Новгород, ул. Федосеенко, д. 51</p>
                <p className="text-zinc-500 text-sm">Режим работы: 08:00 - 20:00 (Пн-Пт)</p>
             </div>
             <a 
               href="https://yandex.ru/maps/-/CPUCQE3C" 
               target="_blank" 
               rel="noopener noreferrer"
               className="absolute bottom-4 right-4 bg-white text-black text-xs font-bold px-3 py-2 rounded shadow hover:bg-yellow-400 transition-colors"
             >
               Открыть в Навигаторе
             </a>
          </div>

          {/* Contacts & CTA */}
          <div className="flex flex-col justify-center">
             <h3 className="text-2xl font-black uppercase mb-6">Не теряй деньги. <br/><span className="text-yellow-400">Запишись на осмотр.</span></h3>
             
             <div className="space-y-6">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                      <Phone className="text-white" />
                   </div>
                   <div>
                      <p className="text-zinc-500 text-xs uppercase">Ежедневно 08:00 - 20:00</p>
                      <p className="text-xl font-bold">+7 (910) 144-11-59</p>
                   </div>
                </div>

                <div className="flex gap-4">
                   <button className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                      <MessageCircle className="w-5 h-5" /> WhatsApp
                   </button>
                   <a 
                      href="https://t.me/PetrDejnar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#0088cc] hover:bg-[#0077b5] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
                   >
                      Telegram
                   </a>
                </div>
             </div>
             
             <div className="mt-12 pt-8 border-t border-zinc-900 flex justify-between items-center text-xs text-zinc-600">
                <p>© 2026 LevelUp Taxi Service</p>
                <p>Политика конфиденциальности</p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

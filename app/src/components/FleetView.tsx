import React, { useState } from 'react';
import { 
  TrendingUp, Users, Car, CheckCircle2, ArrowRight, ShieldCheck, 
  Clock, AlertTriangle, FileText, MapPin, Phone, Download, Check
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Use the image found from Unsplash
const IMG_FLEET_HERO = "https://images.unsplash.com/photo-1691840204491-f5c608613b68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGF1dG8lMjBzZXJ2aWNlJTIwY2VudGVyJTIwbW9kZXJuJTIwd29ya3Nob3AlMjBtZWNoYW5pYyUyMGNhcnN8ZW58MXx8fHwxNzcxMjcyODI1fDA&ixlib=rb-4.1.0&q=80&w=1080";

interface FleetViewProps {
  onOpenLeadModal: () => void;
}

export const FleetView: React.FC<FleetViewProps> = ({ onOpenLeadModal }) => {
  const [carsCount, setCarsCount] = useState('');
  const [phone, setPhone] = useState('');

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenLeadModal();
  };

  return (
    <div className="bg-white text-zinc-900 pt-20 font-sans">
      
      {/* 2. Hero Section */}
      <section className="relative min-h-[600px] lg:h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback src={IMG_FLEET_HERO} className="w-full h-full object-cover" alt="Fleet Service Center" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white flex items-center h-full">
          <div className="max-w-2xl">
             <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 font-bold px-3 py-1 mb-6 text-xs uppercase tracking-wider rounded">
                <MapPin className="w-3 h-3" /> Нижний Новгород, ул. Федосеенко, 51
             </div>
             <h1 className="text-4xl lg:text-6xl font-black uppercase leading-[0.9] mb-6 tracking-tight">
               Держим ваш парк <br/><span className="text-yellow-400">в Комфорте</span>. <br/>Без простоев.
             </h1>
             <p className="text-lg lg:text-xl text-zinc-300 mb-10 max-w-xl leading-relaxed">
               Комплексная подготовка и удержание машин в тарифах Яндекс Go. Один сервис заменяет малярку, детейлинг и техцентр.
             </p>
             
             {/* Hero Form */}
             <form onSubmit={handleHeroSubmit} className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm max-w-md">
                <h3 className="font-bold text-white mb-4 uppercase text-sm tracking-wide">Бесплатный аудит парка</h3>
                <div className="flex flex-col gap-3">
                   <input 
                      type="number" 
                      placeholder="Количество машин в парке" 
                      value={carsCount}
                      onChange={(e) => setCarsCount(e.target.value)}
                      className="w-full bg-zinc-900/80 border border-zinc-700 rounded px-4 py-3 text-white placeholder:text-zinc-500 text-sm focus:border-yellow-400 outline-none transition-colors"
                   />
                   <input 
                      type="tel" 
                      placeholder="Ваш телефон" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-zinc-900/80 border border-zinc-700 rounded px-4 py-3 text-white placeholder:text-zinc-500 text-sm focus:border-yellow-400 outline-none transition-colors"
                   />
                   <button type="submit" className="bg-yellow-400 hover:bg-yellow-300 text-black font-black uppercase py-3 rounded text-sm transition-colors mt-1">
                      Получить расчет
                   </button>
                </div>
             </form>
          </div>
        </div>
      </section>

      {/* 3. Pain Points (Where fleets lose money) */}
      <section id="solutions" className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                 <h2 className="text-3xl lg:text-4xl font-black uppercase text-zinc-900 leading-none">Где парки <br/><span className="text-red-600">теряют деньги?</span></h2>
              </div>
              <p className="text-zinc-500 max-w-md text-sm leading-relaxed">
                 Мы проанализировали работу 50+ таксопарков Нижнего Новгорода и выделили 4 главные проблемы, которые съедают вашу маржу.
              </p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-lg transition-shadow group">
                 <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                    <Clock className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                 </div>
                 <h3 className="font-bold text-lg mb-3">Простои</h3>
                 <p className="text-zinc-500 text-sm leading-relaxed">Машина стоит в очереди на кузовщину — вы теряете <span className="font-bold text-zinc-900">2000-3000₽</span> выручки в день.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-lg transition-shadow group">
                 <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                    <TrendingUp className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                 </div>
                 <h3 className="font-bold text-lg mb-3">Потеря тарифа</h3>
                 <p className="text-zinc-500 text-sm leading-relaxed">Замечание по кондею или вмятине — машина слетает в <span className="font-bold text-zinc-900">Эконом</span>, водитель уходит.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-lg transition-shadow group">
                 <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                    <MapPin className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                 </div>
                 <h3 className="font-bold text-lg mb-3">Логистический ад</h3>
                 <p className="text-zinc-500 text-sm leading-relaxed">Гнать машину в три разных места (мойка, малярка, сервис) — расход бензина и времени механика.</p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-lg transition-shadow group">
                 <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                    <FileText className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                 </div>
                 <h3 className="font-bold text-lg mb-3">Непрозрачность</h3>
                 <p className="text-zinc-500 text-sm leading-relaxed">Нет фотоотчетов — нет понимания, за что оплачен счет. Мы даем <span className="font-bold text-zinc-900">полный отчет</span>.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Packages B2B */}
      <section id="packages" className="py-20 bg-zinc-900 text-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Для бизнеса</span>
              <h2 className="text-3xl lg:text-4xl font-black uppercase mt-2">Пакетные решения</h2>
           </div>

           <div className="grid lg:grid-cols-3 gap-8">
              {/* Package 1 */}
              <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-2xl hover:border-yellow-400 transition-colors relative flex flex-col">
                 <div className="mb-6">
                    <h3 className="text-2xl font-black uppercase mb-2">Массовый Upgrade</h3>
                    <p className="text-zinc-400 text-sm">Подгот��вка парка к сезону или переходу в Комфорт+</p>
                 </div>
                 <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-yellow-400 shrink-0"/> От 5 автомобилей</li>
                    <li className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-yellow-400 shrink-0"/> Полная проверка по классификатору</li>
                    <li className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-yellow-400 shrink-0"/> PDR и полировка оптом</li>
                    <li className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-yellow-400 shrink-0"/> Скидка за объем до 20%</li>
                 </ul>
                 <button onClick={onOpenLeadModal} className="w-full bg-white text-black font-black uppercase py-4 rounded text-sm hover:bg-zinc-200 transition-colors">
                    Обсудить объем
                 </button>
              </div>

              {/* Package 2 (Highlighted) */}
              <div className="bg-zinc-900 border-2 border-yellow-400 p-8 rounded-2xl relative shadow-[0_0_40px_rgba(250,204,21,0.1)] lg:-translate-y-4 flex flex-col">
                 <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-black px-4 py-1.5 rounded-bl-lg uppercase tracking-wider">
                    Популярно
                 </div>
                 <div className="mb-6">
                    <h3 className="text-2xl font-black uppercase mb-2 text-yellow-400">Абонентка: Стандарт</h3>
                    <p className="text-zinc-400 text-sm">Машины всегда «в идеале» без головной боли</p>
                 </div>
                 <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-yellow-400 shrink-0"/> Еженедельный осмотр парка</li>
                    <li className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-yellow-400 shrink-0"/> Устранение мелких вмятин (PDR)</li>
                    <li className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-yellow-400 shrink-0"/> Химчистка по графику</li>
                    <li className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-yellow-400 shrink-0"/> Приоритетная запись</li>
                 </ul>
                 <button onClick={onOpenLeadModal} className="w-full bg-yellow-400 text-black font-black uppercase py-4 rounded text-sm hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/20">
                    Запросить КП
                 </button>
              </div>

              {/* Package 3 */}
              <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-2xl hover:border-red-500 transition-colors relative flex flex-col">
                 <div className="mb-6">
                    <h3 className="text-2xl font-black uppercase mb-2">SLA: Срочный возврат</h3>
                    <p className="text-zinc-400 text-sm">Для машин с блокировкой</p>
                 </div>
                 <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-red-500 shrink-0"/> Реакция за 30 минут</li>
                    <li className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-red-500 shrink-0"/> Ремонт за 2-6 часов</li>
                    <li className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-red-500 shrink-0"/> Работа в ночную смену</li>
                    <li className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-red-500 shrink-0"/> Гарантия прохождения фотоконтроля</li>
                 </ul>
                 <button onClick={onOpenLeadModal} className="w-full bg-transparent border border-zinc-600 text-white font-black uppercase py-4 rounded text-sm hover:border-white transition-colors">
                    Узнать условия SLA
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Services List */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-zinc-100 pb-8">
              <div>
                 <h2 className="text-3xl font-black uppercase text-zinc-900">Все услуги под ключ</h2>
              </div>
              <button 
                onClick={onOpenLeadModal}
                className="flex items-center gap-2 text-zinc-900 font-bold border-b-2 border-yellow-400 pb-1 hover:text-yellow-600 transition-colors"
              >
                 <Download className="w-4 h-4" /> Скачать прайс-лист для юрлиц
              </button>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              <div>
                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><Car className="text-yellow-400"/> Кузовной ремонт</h4>
                 <ul className="space-y-2 text-sm text-zinc-600">
                    <li>PDR (без покраски)</li>
                    <li>Локальная покраска</li>
                    <li>Полировка</li>
                    <li>Замена стекол</li>
                 </ul>
              </div>
              <div>
                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><Users className="text-yellow-400"/> Салон и чистота</h4>
                 <ul className="space-y-2 text-sm text-zinc-600">
                    <li>Детейлинг химчистка</li>
                    <li>Озонация (запахи)</li>
                    <li>Ремонт обивки</li>
                    <li>Перетяжка руля</li>
                 </ul>
              </div>
              <div>
                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><AlertTriangle className="text-yellow-400"/> Техничка</h4>
                 <ul className="space-y-2 text-sm text-zinc-600">
                    <li>Ремонт климата/кондея</li>
                    <li>Ходовая часть</li>
                    <li>Замена масел/фильтров</li>
                    <li>Тормозная система</li>
                 </ul>
              </div>
              <div>
                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><ShieldCheck className="text-yellow-400"/> Дооснащение</h4>
                 <ul className="space-y-2 text-sm text-zinc-600">
                    <li>Установка ГБО</li>
                    <li>Защитные сетки</li>
                    <li>Бронирование фар</li>
                    <li>Чехлы и ковры</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Footer CTA / Map Info */}
      <section className="bg-zinc-100 py-20 border-t border-zinc-200">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-black uppercase mb-6">Готовы обсудить сотрудничество?</h2>
            <p className="text-zinc-500 mb-8 max-w-2xl mx-auto">
               Приезжайте к нам на базу. Покажем, как мы работаем, угостим кофе и сделаем бесплатный аудит одной вашей машины.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg font-bold mb-8">
               <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
                  <MapPin className="text-yellow-400" /> Нижний Новгород, ул. Федосеенко, 51
               </div>
               <a href="tel:+79101441159" className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <Phone className="text-yellow-400" /> +7 (910) 144-11-59
               </a>
            </div>
            <button 
               onClick={onOpenLeadModal}
               className="bg-zinc-900 text-white font-black uppercase px-10 py-5 rounded hover:bg-zinc-800 transition-colors shadow-xl"
            >
               Назначить встречу
            </button>
         </div>
      </section>

    </div>
  );
};

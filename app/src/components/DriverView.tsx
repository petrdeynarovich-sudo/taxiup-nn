import React, { useState } from 'react';
import { 
  CheckCircle2, Calculator, Wrench, Coins, 
  CheckSquare, DollarSign, Car, Sparkles, Thermometer, 
  Zap, Package, TrendingUp, Users, ChevronDown, ChevronUp, CreditCard, Banknote
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import IMG_SHINY from "figma:asset/7ac22dd9318f522f534d0198f82280205c0ff55a.png";

// Images
const IMG_DAMAGED = "https://images.unsplash.com/photo-1738346229456-3718abb7da96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYW1hZ2VkJTIwY2FyJTIwZGVudCUyMGZlbmRlcnxlbnwxfHx8fDE3NzEwMTA2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_BEFORE = "https://images.unsplash.com/photo-1619642737579-a7474bee1044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const IMG_AFTER = "https://images.unsplash.com/photo-1770388314018-fd9e2e52dc47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";

interface DriverViewProps {
  onOpenLeadModal: () => void;
}

export const DriverView: React.FC<DriverViewProps> = ({ onOpenLeadModal }) => {
  const [days, setDays] = useState(22);
  
  // Calculator Logic
  const lossPerDay = 1500;
  const monthlyLoss = days * lossPerDay;
  const yearlyLoss = monthlyLoss * 12;

  return (
    <div className="bg-zinc-950 text-white pt-20">
      
      {/* 2. Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center border-b border-zinc-800 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback src={IMG_SHINY} className="w-full h-full object-cover object-right opacity-100" alt="Hero Background" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-black uppercase italic leading-none mb-6 text-white drop-shadow-2xl">
              Начни работать в «Комфорте» <span className="text-yellow-400 block mt-2">и перестань терять до 60 000 ₽ в месяц</span>
            </h1>
            <p className="text-xl lg:text-2xl text-zinc-300 mb-8 border-l-4 border-yellow-400 leading-relaxed pl-[24px] pr-[0px] py-[0px]">Профессиональная подготовка и ремонт авто под стандарты Яндекс 2026. Устраняем вмятины, заправляем кондиционеры, чистим салон.</p>

            <button 
              onClick={onOpenLeadModal}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-black uppercase text-lg px-10 py-5 rounded-lg shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_50px_rgba(250,204,21,0.5)] transition-all transform hover:-translate-y-1 mb-4"
            >
              Записаться на ремонт
            </button>
            <p className="text-zinc-500 text-sm font-medium">Принимаем оплату картой, наличными или в рассрочку через таксометр</p>
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section id="how-it-works" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black uppercase mb-12 text-center">ТВОЙ ПРОСТОЙ ПУТЬ К ПОВЫШЕНИЮ ДОХОДА</h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-1 bg-gradient-to-r from-zinc-800 via-yellow-400/50 to-zinc-800 z-0" />

            <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl relative z-10 text-center group hover:border-yellow-400 transition-colors">
               <div className="w-24 h-24 bg-zinc-900 rounded-full border-4 border-zinc-800 flex items-center justify-center mx-auto mb-6 group-hover:border-yellow-400 transition-colors">
                  <CheckSquare className="w-10 h-10 text-yellow-400" />
               </div>
               <h3 className="text-xl font-bold mb-4">1. Бесплатная проверка</h3>
               <p className="text-zinc-400 text-sm">Приезжаешь на 15 минут. Проверяем авто по классификатору Яндекса. Говорим честно: пройдет или нет.</p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl relative z-10 text-center group hover:border-yellow-400 transition-colors">
               <div className="w-24 h-24 bg-zinc-900 rounded-full border-4 border-zinc-800 flex items-center justify-center mx-auto mb-6 group-hover:border-yellow-400 transition-colors">
                  <Wrench className="w-10 h-10 text-yellow-400" />
               </div>
               <h3 className="text-xl font-bold mb-4">2. Ремонт</h3>
               <p className="text-zinc-400 text-sm">Устраняем вмятины, красим, чистим салон. Выбираешь удобный способ оплаты (сразу или частями).</p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl relative z-10 text-center group hover:border-yellow-400 transition-colors">
               <div className="w-24 h-24 bg-zinc-900 rounded-full border-4 border-zinc-800 flex items-center justify-center mx-auto mb-6 group-hover:border-yellow-400 transition-colors">
                  <DollarSign className="w-10 h-10 text-yellow-400" />
               </div>
               <h3 className="text-xl font-bold mb-4">3. Доступ к тарифам</h3>
               <p className="text-zinc-400 text-sm">Машина проходит фотоконтроль. Ты зарабатываешь в Комфорте.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Calculator - Loss Counter */}
      <section id="calculator" className="py-20 bg-zinc-950 border-y border-zinc-900">
        <div className="container mx-auto px-4">
           <div className="grid xl:grid-cols-2 gap-16 items-center">
              
              {/* Left: Text */}
              <div>
                 <div className="inline-block bg-red-600 text-white font-bold px-3 py-1 text-sm uppercase mb-6 rounded">Счетчик твоих потерь</div>
                 <h2 className="text-4xl lg:text-5xl font-black uppercase mb-6 leading-tight">Хватит работать <span className="text-red-600">в минус!</span></h2>
                 <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                    Пока ты возишь «Эконом» на битой машине без кондея, твои деньги уходят другим водителям.
                 </p>
                 <div className="bg-zinc-900 p-6 rounded-xl border-l-4 border-yellow-400">
                    <p className="font-bold text-white text-lg mb-2">Это стоимость двух новых айфонов</p>
                    <p className="text-zinc-400">или семейного отдыха, которую ты просто даришь агрегатору за год.</p>
                 </div>
              </div>

              {/* Right: Calculator */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[50px] rounded-full pointer-events-none" />
                 
                 <div className="mb-8">
                   <label className="flex justify-between text-sm font-bold text-zinc-400 mb-4">
                      <span>Сколько дней в месяц ты работаешь?</span> 
                      <span className="text-white text-lg bg-zinc-800 px-3 py-1 rounded">{days}</span>
                   </label>
                   <input 
                     type="range" 
                     min="1" 
                     max="30" 
                     value={days} 
                     onChange={(e) => setDays(Number(e.target.value))} 
                     className="w-full accent-red-600 h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                   />
                 </div>

                 <div className="space-y-6 text-center">
                    <div>
                       <p className="text-zinc-400 text-sm uppercase tracking-wider mb-2">Ты теряешь каждый месяц</p>
                       <p className="text-5xl lg:text-6xl font-black text-red-600 tabular-nums">-{monthlyLoss.toLocaleString()} ₽</p>
                    </div>
                    <div className="pt-6 border-t border-zinc-800">
                       <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Потери за год</p>
                       <p className="text-2xl font-bold text-white tabular-nums">-{yearlyLoss.toLocaleString()} ₽</p>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* 5. Packages (Reused) */}
      <section id="packages" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black uppercase mb-12 text-center">Готовые пакеты <span className="text-zinc-500 text-lg normal-case font-medium block mt-2">Быстрое решение «Под ключ»</span></h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Start in Comfort */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:scale-105 transition-transform duration-300 flex flex-col">
               <h3 className="text-2xl font-black mb-1 text-white uppercase">Старт в Комфорт</h3>
               <p className="text-zinc-500 text-sm mb-6 font-medium">Быстрый проход фотоконтроля</p>
               
               <ul className="space-y-4 mb-8 text-zinc-300 text-sm flex-grow">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-zinc-600 shrink-0"/> PDR-ремонт (устранение вмятин)</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-zinc-600 shrink-0"/> Полировка фар</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-zinc-600 shrink-0"/> Заправка кондиционера</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-zinc-600 shrink-0"/> Помощь с фотоконтролем</li>
               </ul>
               
               <button 
                 onClick={onOpenLeadModal}
                 className="w-full border border-zinc-600 text-zinc-300 hover:bg-white hover:text-black hover:border-white font-bold py-3 rounded-lg text-sm transition-all uppercase tracking-wide"
               >
                 Выбрать пакет
               </button>
            </div>

            {/* Card 2: Rating 5.0 (Accent) */}
            <div className="bg-zinc-900 border-2 border-yellow-400 rounded-xl p-8 relative shadow-[0_0_20px_rgba(250,204,21,0.15)] hover:scale-105 transition-transform duration-300 flex flex-col z-10 md:-translate-y-4">
               <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-black px-4 py-1.5 rounded-bl-lg uppercase tracking-wider">
                  Выбор водителей
               </div>
               
               <h3 className="text-2xl font-black mb-1 text-white uppercase text-yellow-400">Рейтинг 5.0</h3>
               <p className="text-zinc-400 text-sm mb-6 font-medium">Высокие оценки и чаевые</p>
               
               <ul className="space-y-4 mb-8 text-white text-sm font-medium flex-grow">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0"/> Полный ремонт кузова + локальная покраска</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0"/> Химчистка салона + озонирование</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0"/> Чистка радиаторов + антибактериалка</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0"/> Фиксация ремней + замена ламп</li>
               </ul>
               
               <button 
                 onClick={onOpenLeadModal}
                 className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black py-4 rounded-lg text-sm transition-all uppercase tracking-wide shadow-lg hover:shadow-yellow-400/50"
               >
                 Выбрать пакет
               </button>
            </div>

            {/* Card 3: Constructor */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:scale-105 transition-transform duration-300 flex flex-col">
               <h3 className="text-2xl font-black mb-1 text-white uppercase">Конструктор</h3>
               <p className="text-zinc-500 text-sm mb-6 font-medium">Выбирай сам, что тебе нужно</p>
               
               <div className="flex-grow mb-8">
                 <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
                   Любые услуги из нашего прайса: от химчистки до ремонта ходовой.
                 </p>
                 <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700/50">
                    <p className="text-xs text-zinc-400 font-bold mb-1 uppercase text-yellow-400/80">Бонус</p>
                    <p className="text-sm text-white">При заказе от 3-х услуг — диагностика или озонирование в подарок.</p>
                 </div>
               </div>
               
               <button 
                 onClick={onOpenLeadModal}
                 className="w-full border border-zinc-600 text-zinc-300 hover:bg-white hover:text-black hover:border-white font-bold py-3 rounded-lg text-sm transition-all uppercase tracking-wide"
               >
                 Собрать свой пакет
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Payment Conditions (New Block) */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-black uppercase mb-12 text-center">Способы оплаты и условия</h2>
           
           <div className="grid md:grid-cols-3 gap-6">
              {/* Option 1: Standard */}
              <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-xl relative hover:border-green-500 transition-colors">
                 <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <Banknote className="text-green-500" />
                 </div>
                 <h3 className="text-xl font-bold mb-4">Наличный и безналичный</h3>
                 <ul className="space-y-3 text-zinc-400 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> Оплата по факту выполненных работ.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> <span className="text-white font-bold">Скидка 5%</span> при полной оплате в день обращения.</li>
                 </ul>
              </div>

              {/* Option 2: Staged */}
              <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-xl relative hover:border-blue-500 transition-colors">
                 <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <CreditCard className="text-blue-500" />
                 </div>
                 <h3 className="text-xl font-bold mb-4">Поэтапная оплата</h3>
                 <ul className="space-y-3 text-zinc-400 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0"/> Сначала делаем кондей и салон — платишь за них.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0"/> Потом кузов и покраску — платишь за второй этап.</li>
                 </ul>
              </div>

              {/* Option 3: Installment */}
              <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-xl relative hover:border-yellow-400 transition-colors">
                 <div className="bg-yellow-400/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <Coins className="text-yellow-400" />
                 </div>
                 <h3 className="text-xl font-bold mb-4">Рассрочка «Из прибыли»</h3>
                 <p className="text-xs text-zinc-500 mb-4">Для тех, кому нужно быстро в линию</p>
                 <ul className="space-y-3 text-zinc-400 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0"/> Чиним сейчас — платишь потом с повышенного дохода.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0"/> Доступно для водителей парков-партнеров.</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* 6.5. High Impact CTA (New Block) */}
      <section className="bg-yellow-400 py-16">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-5xl font-black text-black uppercase mb-6 leading-tight">
             Хватит терять до 1 500 ₽ за смену на Экономе!
           </h2>
           <p className="text-black/80 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
             Запишись на бесплатный аудит сегодня и начни зарабатывать в Комфорте уже завтра. <br className="hidden md:block"/> Места на ремонт в рассрочку ограничены.
           </p>
           <button 
             onClick={onOpenLeadModal}
             className="bg-black text-white hover:bg-zinc-800 font-black uppercase text-xl px-12 py-6 rounded-lg shadow-2xl hover:scale-105 transition-all animate-pulse"
           >
             ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ АУДИТ
           </button>
        </div>
      </section>

      {/* 7. All Services (STO) */}
      <section id="services" className="py-20 bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-4">
           <div className="mb-12">
             <h2 className="text-3xl font-black uppercase mb-2">Полный спектр услуг для авто</h2>
             <p className="text-zinc-400 text-lg">Выполняем любые работы, даже если вам не нужно в Комфорт</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-yellow-400/50 transition-colors group">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="bg-yellow-400/10 p-3 rounded-lg text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors"><Car /></div>
                    <h4 className="font-bold text-lg">Кузовной ремонт</h4>
                 </div>
                 <ul className="space-y-2 text-zinc-400 text-sm pl-2 border-l border-zinc-800">
                    <li className="hover:text-white transition-colors cursor-default">Устранение вмятин (PDR)</li>
                    <li className="hover:text-white transition-colors cursor-default">Локальная покраска</li>
                    <li className="hover:text-white transition-colors cursor-default">Полировка фар и кузова</li>
                    <li className="hover:text-white transition-colors cursor-default">Замена стекол</li>
                 </ul>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-purple-400/50 transition-colors group">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-400/10 p-3 rounded-lg text-purple-400 group-hover:bg-purple-400 group-hover:text-black transition-colors"><Sparkles /></div>
                    <h4 className="font-bold text-lg">Салон / Химчистка</h4>
                 </div>
                 <ul className="space-y-2 text-zinc-400 text-sm pl-2 border-l border-zinc-800">
                    <li className="hover:text-white transition-colors cursor-default">Полная химчистка</li>
                    <li className="hover:text-white transition-colors cursor-default">Озонирование (запахи)</li>
                    <li className="hover:text-white transition-colors cursor-default">Ремонт обивки сидений</li>
                    <li className="hover:text-white transition-colors cursor-default">Перетяжка руля</li>
                 </ul>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-blue-400/50 transition-colors group">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-400/10 p-3 rounded-lg text-blue-400 group-hover:bg-blue-400 group-hover:text-black transition-colors"><Thermometer /></div>
                    <h4 className="font-bold text-lg">Система охлаждения</h4>
                 </div>
                 <ul className="space-y-2 text-zinc-400 text-sm pl-2 border-l border-zinc-800">
                    <li className="hover:text-white transition-colors cursor-default">Заправка кондиционера</li>
                    <li className="hover:text-white transition-colors cursor-default">Чистка радиаторов</li>
                    <li className="hover:text-white transition-colors cursor-default">Ремонт компрессора</li>
                    <li className="hover:text-white transition-colors cursor-default">Антибактериальная обработка</li>
                 </ul>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-orange-400/50 transition-colors group">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-400/10 p-3 rounded-lg text-orange-400 group-hover:bg-orange-400 group-hover:text-black transition-colors"><Zap /></div>
                    <h4 className="font-bold text-lg">Электрика</h4>
                 </div>
                 <ul className="space-y-2 text-zinc-400 text-sm pl-2 border-l border-zinc-800">
                    <li className="hover:text-white transition-colors cursor-default">Диагностика ошибок</li>
                    <li className="hover:text-white transition-colors cursor-default">Ремонт освещения</li>
                    <li className="hover:text-white transition-colors cursor-default">Установка парктроников</li>
                    <li className="hover:text-white transition-colors cursor-default">Ремонт стеклоподъемников</li>
                 </ul>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-green-400/50 transition-colors group">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-400/10 p-3 rounded-lg text-green-400 group-hover:bg-green-400 group-hover:text-black transition-colors"><Wrench /></div>
                    <h4 className="font-bold text-lg">Тех. обслуживание</h4>
                 </div>
                 <ul className="space-y-2 text-zinc-400 text-sm pl-2 border-l border-zinc-800">
                    <li className="hover:text-white transition-colors cursor-default">Замена масла и фильтров</li>
                    <li className="hover:text-white transition-colors cursor-default">Замена колодок</li>
                    <li className="hover:text-white transition-colors cursor-default">Ремонт подвески</li>
                    <li className="hover:text-white transition-colors cursor-default">Плановое ТО</li>
                 </ul>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-white/50 transition-colors group">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="bg-zinc-800 p-3 rounded-lg text-white group-hover:bg-white group-hover:text-black transition-colors"><Package /></div>
                    <h4 className="font-bold text-lg">Дооборудование</h4>
                 </div>
                 <ul className="space-y-2 text-zinc-400 text-sm pl-2 border-l border-zinc-800">
                    <li className="hover:text-white transition-colors cursor-default">Установка чехлов</li>
                    <li className="hover:text-white transition-colors cursor-default">Установка ГБО</li>
                    <li className="hover:text-white transition-colors cursor-default">Защитные сетки</li>
                    <li className="hover:text-white transition-colors cursor-default">Шумоизоляция</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* 8. Cases Section */}
      <section className="py-20 bg-zinc-900 overflow-hidden">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-black uppercase mb-12">Результаты (До/После)</h2>
           
           <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                 <div className="absolute inset-0 flex">
                   <div className="w-1/2 relative border-r border-white/20">
                     <ImageWithFallback src={IMG_BEFORE} className="w-full h-full object-cover filter grayscale contrast-125" alt="Before" />
                     <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Было: Помято</div>
                   </div>
                   <div className="w-1/2 relative">
                     <ImageWithFallback src={IMG_AFTER} className="w-full h-full object-cover" alt="After" />
                     <div className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">Стало: Идеально</div>
                   </div>
                 </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                 <p className="text-xl font-bold mb-4">Ремонт вышел в 15 000 ₽.</p>
                 <p className="text-zinc-400 leading-relaxed mb-6">Водитель отбил эту сумму за <span className="text-white font-bold">12 смен</span> на разнице тарифов. <br/>Теперь работает в плюс каждый день.</p>
                 <button className="self-start text-yellow-400 font-bold border-b border-yellow-400 pb-1 hover:text-white hover:border-white transition-colors">
                    Показать еще кейсы
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section id="faq" className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4 max-w-3xl">
           <h2 className="text-3xl font-black uppercase mb-12 text-center">Частые вопросы</h2>
           <div className="space-y-4">
              <FaqItem 
                 question="Обязательно ли брать рассрочку?" 
                 answer="Нет, 80% наших клиентов оплачивают работу сразу на месте. Рассрочка — это лишь дополнительная опция для тех, кому нужно срочно выйти в линию, а бюджет «на нуле». Мы подберем тот вариант, который выгоден тебе."
              />
              <FaqItem 
                 question="Могу ли я работать в Комфорте с моей машиной?" 
                 answer="Это зависит от марки, модели и года выпуска. Мы проверяем это по официальному классификатору Яндекса. Если машина проходит по этим параметрам, но не проходит по состоянию (вмятины, сколы) — мы это исправим."
              />
              <FaqItem 
                 question="А если Яндекс не пустит после ремонта?" 
                 answer="Мы гарантируем прохождение фотоконтроля. Перед началом работ мы проводим полный осмотр. Если мы беремся за работу, значит, мы уверены в результате. Если вдруг возникнут проблемы — доработаем за свой счет."
              />
              <FaqItem 
                 question="Сколько времени занимает ремонт?" 
                 answer="Зависит от сложности. Локальная покраска или PDR (удаление вмятин) занимают от 3 часов. Полный комплекс 'под ключ' обычно занимает 1-2 дня."
              />
           </div>
        </div>
      </section>
    </div>
  );
};

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
         <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
         >
            <span className="font-bold text-white pr-8">{question}</span>
            {isOpen ? <ChevronUp className="text-yellow-400 flex-shrink-0" /> : <ChevronDown className="text-zinc-500 flex-shrink-0" />}
         </button>
         {isOpen && (
            <div className="p-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/50 mt-2">
               {answer}
            </div>
         )}
      </div>
   );
}

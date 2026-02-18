import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, title = "Оставь заявку на аудит" }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+7 (');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: boolean; phone?: boolean }>({});
  const [okMsg, setOkMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [hp, setHp] = useState('');




  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    
    // Ensure it starts with 7
    if (value.length > 0 && value[0] !== '7') {
      value = '7' + value;
    }
    
    // Limit length
    if (value.length > 11) value = value.slice(0, 11);

    // Format
    let formatted = '+7 (';
    if (value.length > 1) formatted += value.slice(1, 4);
    if (value.length >= 4) formatted += ') ' + value.slice(4, 7);
    if (value.length >= 7) formatted += '-' + value.slice(7, 9);
    if (value.length >= 9) formatted += '-' + value.slice(9, 11);

    setPhone(formatted);
    if (errors.phone) setErrors(prev => ({ ...prev, phone: false }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { name?: boolean; phone?: boolean } = {};
    if (!name.trim()) newErrors.name = true;
    if (phone.length < 18) newErrors.phone = true; // +7 (XXX) XXX-XX-XX is 18 chars

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Пожалуйста, заполните обязательные поля');
      return;
    }

    

    setLoading(true);
setErrMsg('');
setOkMsg('');

try {
  const segment = window.location.pathname.includes('park') ? 'park' : 'driver';

  const r = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name.trim(),
      phone: phone.trim(),
      segment,
      source: window.location.href,
      message: `Email: ${email || '—'}`,
      hp: hp
    }),
  });

  const data = await r.json().catch(() => ({}));

  if (!r.ok || !data?.ok) {
    setErrMsg(data?.error || 'Ошибка отправки');
    toast.error(data?.error || 'Ошибка отправки');
    return;
  }

  setOkMsg('Заявка отправлена! Мы скоро свяжемся.');
  toast.success('Спасибо! Заявка отправлена.');
  onClose();

  // Reset form
  setName('');
  setPhone('+7 (');
  setEmail('');
} catch (e) {
  setErrMsg('Ошибка сети. Попробуйте ещё раз.');
  toast.error('Ошибка сети. Попробуйте ещё раз.');
} finally {
  setLoading(false);
}

  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-800"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-black uppercase mb-2 text-white">{title}</h2>
        <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
          Мы перезвоним в течение 15 минут, чтобы рассчитать стоимость ремонта и условия рассрочки.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-zinc-500 uppercase ml-1">Имя *</label>
            <input
              type="text"
              placeholder="Введите ваше имя"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors(prev => ({ ...prev, name: false }));
              }}
              className={`w-full bg-zinc-950 border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-yellow-400'} rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-colors`}
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-zinc-500 uppercase ml-1">Телефон *</label>
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={handlePhoneChange}
              className={`w-full bg-zinc-950 border ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-yellow-400'} rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-colors`}
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-zinc-500 uppercase ml-1">E-mail</label>
            <input
              type="email"
              placeholder="Ваша почта (для получения сметы)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 focus:border-yellow-400 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition-colors"
            />
          </div>

           <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black uppercase text-lg py-4 rounded-lg mt-4 shadow-lg hover:shadow-yellow-400/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
           >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Отправить заявку'}
           </button>
           <div style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}>
           <label>Не заполнять</label>
           <input
           name="hp"
           value={hp}
           onChange={(e) => setHp(e.target.value)}
           autoComplete="off"
           tabIndex={-1}
           />
           </div>

        </form>
      </div>
    </div>
  );
};

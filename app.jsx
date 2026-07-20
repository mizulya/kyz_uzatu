import React, { useState, useEffect } from 'react';

const DEFAULT_EVENT_DATE = '2026-09-19T18:00:00';

export default function App() {
  const [invitationConfig] = useState({
    brideName: 'Меруерт',
    eventDate: DEFAULT_EVENT_DATE,
  });

  const [guestName, setGuestName] = useState('');
  const [guestWish, setGuestWish] = useState('');
  const [isGeneratingWish, setIsGeneratingWish] = useState(false);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = +new Date(invitationConfig.eventDate) - +new Date();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [invitationConfig.eventDate]);

  const generateAIWish = async () => {
    setIsGeneratingWish(true);
    setTimeout(() => {
      setGuestWish("Ақ жол болсын! Меруерт, шаңырағың шаттыққа толсын!");
      setIsGeneratingWish(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-4xl font-bold text-center text-[#D4AF37] italic">Қыз Ұзату</h1>
        <h2 className="text-2xl text-center font-semibold text-[#8C6239]">{invitationConfig.brideName}</h2>
        
        <div className="text-center p-6 bg-white rounded-2xl shadow-xl border border-[#EACFA3]">
          <h3 className="text-lg font-bold mb-4 text-[#4A3B32]">Тойға дейін қалды:</h3>
          <div className="flex justify-center gap-6 text-[#D4AF37] text-xl font-bold">
            <div className="flex flex-col"><span>{timeLeft.days}</span><span className="text-xs text-gray-400">күн</span></div>
            <div className="flex flex-col"><span>{timeLeft.hours}</span><span className="text-xs text-gray-400">сағ</span></div>
            <div className="flex flex-col"><span>{timeLeft.minutes}</span><span className="text-xs text-gray-400">мин</span></div>
          </div>
        </div>

        {!rsvpSubmitted ? (
          <div className="bg-white p-8 rounded-2xl shadow-xl space-y-4 border border-[#EACFA3]">
            <input 
              className="w-full p-4 border border-[#EACFA3] rounded-lg bg-[#FDF6EE]" 
              placeholder="Аты-жөніңіз" 
              onChange={(e) => setGuestName(e.target.value)} 
            />
            <textarea 
              className="w-full p-4 border border-[#EACFA3] rounded-lg bg-[#FDF6EE] h-32" 
              placeholder="Тілегіңіз..." 
              value={guestWish} 
              onChange={(e) => setGuestWish(e.target.value)} 
            />
            <button 
              type="button" 
              onClick={generateAIWish} 
              className="w-full text-sm text-[#D4AF37] font-semibold flex items-center justify-center gap-2 hover:underline"
            >
              {isGeneratingWish ? "Жазылуда..." : "✨ AI-мен тілек жазу"}
            </button>
            <button 
              onClick={() => setRsvpSubmitted(true)} 
              className="w-full p-4 bg-[#D4AF37] text-white rounded-xl font-bold shadow-md hover:bg-[#B8962D] transition-all"
            >
              Жауапты жіберу
            </button>
          </div>
        ) : (
          <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
            <p className="text-[#D4AF37] text-xl font-bold">Рақмет, {guestName}! Жауабыңыз қабылданды.</p>
          </div>
        )}
      </div>
    </div>
  );
}

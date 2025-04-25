import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

const LimitedOfferBanner = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState(getRemainingTime(deadline));

  function getRemainingTime(deadlineStr) {
    const total = new Date(deadlineStr).getTime() - new Date().getTime();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = getRemainingTime(deadline);
      if (updated.total <= 0) clearInterval(interval);
      setTimeLeft(updated);
    }, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  const formatNumber = (n) => n.toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-r from-amber-700 to-rose-700 text-white text-xl md:text-xl py-3 px-4 text-center flex justify-center items-center gap-3 font-semibold">
      <span className='animate-pulse'>🔥 OFERTA LIMITADA EN LA COMPRA DE TU PRIMER MES, EL SEGUNDO ES GRATIS </span>
      <Clock size={18} className="animate-pulse" />
      <span>
        {timeLeft.days}d {formatNumber(timeLeft.hours)}h:{formatNumber(timeLeft.minutes)}m:{formatNumber(timeLeft.seconds)}s
      </span>
    </div>
  );
};

export default LimitedOfferBanner;

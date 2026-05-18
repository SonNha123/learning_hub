import React from 'react';
import { 
  Home, 
  BookOpen, 
  Archive,
  Trophy,
  User
} from 'lucide-react';

export default function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-[400px]">
      <div className="bg-slate-950/80 backdrop-blur-md border border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.3)] rounded-2xl flex items-center justify-around h-16 p-2">
        <NavButton icon={<Home size={22} />} active />
        <NavButton icon={<BookOpen size={22} />} />
        <NavButton icon={<Archive size={22} />} />
        <NavButton icon={<Trophy size={22} />} />
        <NavButton icon={<User size={22} />} />
      </div>
    </div>
  );
}

function NavButton({ icon, active = false }: { icon: React.ReactNode, active?: boolean }) {
  return (
    <button className={`p-3 rounded-xl transition-all duration-300 ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_4px_12px_rgba(59,130,246,0.15)]' : 'text-slate-500 hover:text-slate-300'}`}>
      {icon}
    </button>
  );
}

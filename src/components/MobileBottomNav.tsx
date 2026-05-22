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
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
      <div className="bg-white/90 backdrop-blur-2xl border-t border-slate-200/50 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] flex items-center justify-around h-14 px-2 safe-area-pb">
        <NavButton icon={<Home size={20} />} label="Trang chủ" active />
        <NavButton icon={<BookOpen size={20} />} label="Học tập" />
        <NavButton icon={<Archive size={20} />} label="Tài liệu" />
        <NavButton icon={<Trophy size={20} />} label="Thành tích" />
        <NavButton icon={<User size={20} />} label="Tài khoản" />
      </div>
    </div>
  );
}

function NavButton({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${active
        ? 'text-[#1877F2]'
        : 'text-slate-500 hover:text-slate-800'
      }`}>
      {icon}
      <span className="text-[9px] font-bold">{label}</span>
    </button>
  );
}

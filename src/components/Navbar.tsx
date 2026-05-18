import React from 'react';
import { 
  BookOpen, 
  Archive, 
  Trophy, 
  Layout, 
  Bell, 
  Menu,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1877F2] rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-black text-lg italic">U</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold tracking-wider text-xs text-white">UNIVISION</span>
            <span className="text-[8px] text-slate-400 tracking-[0.2em] font-medium">GLOBAL</span>
          </div>
        </div>

        {/* Desktop Nav in center */}
        <div className="hidden lg:flex items-center gap-2 bg-slate-900/60 border border-slate-800/50 px-2 py-1 rounded-full">
          <NavLink icon={<BookOpen size={13} />} label="Lộ trình học tập" active />
          <NavLink icon={<Archive size={13} />} label="Kho tài liệu" />
          <NavLink icon={<Trophy size={13} />} label="Thành tích" />
          <NavLink icon={<Layout size={13} />} label="Bảng xếp hạng" />
          <NavLink icon={<Bell size={13} />} label="Thông báo" badge={3} />
        </div>

        {/* User profile on right */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2.5 cursor-pointer group">
            {/* Avatar on Left */}
            <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-800 shadow-sm group-hover:border-[#1877F2] transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" 
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text on Right */}
            <div className="text-left flex flex-col leading-tight">
              <span className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">Nguyễn Văn A</span>
              <span className="text-[9px] text-slate-400 font-medium">Thành viên</span>
            </div>
            <ChevronDown size={12} className="text-slate-400 group-hover:text-slate-200 transition-colors" />
          </div>

          <button 
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950 border-b border-slate-800/80 overflow-hidden"
          >
            <div className="flex flex-col p-3 gap-1.5">
              <MobileNavLink icon={<BookOpen size={18} />} label="Lộ trình học tập" active />
              <MobileNavLink icon={<Archive size={18} />} label="Kho tài liệu" />
              <MobileNavLink icon={<Trophy size={18} />} label="Thành tích" />
              <MobileNavLink icon={<Layout size={18} />} label="Bảng xếp hạng" />
              <MobileNavLink icon={<Bell size={18} />} label="Thông báo" badge={3} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

interface NavLinkProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
}

function NavLink({ icon, label, active = false, badge }: NavLinkProps) {
  return (
    <a 
      href="#" 
      className={`relative flex items-center gap-1.5 text-xs font-semibold transition-all px-4 py-1.5 rounded-full ${
        active 
          ? 'bg-[#1877F2] text-white shadow-[0_3px_10px_rgba(24,119,242,0.25)]' 
          : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
      }`}
    >
      {icon}
      <span>{label}</span>
      {badge && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[8px] font-bold text-white shadow-sm">
          {badge}
        </span>
      )}
    </a>
  );
}

function MobileNavLink({ icon, label, active = false, badge }: NavLinkProps) {
  return (
    <a 
      href="#" 
      className={`flex items-center justify-between p-2.5 rounded-lg transition-colors ${
        active 
          ? 'bg-[#1877F2]/10 text-blue-400 font-bold border border-[#1877F2]/20' 
          : 'hover:bg-slate-900 text-slate-400 hover:text-white font-medium'
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      {badge && (
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
          {badge}
        </span>
      )}
    </a>
  );
}

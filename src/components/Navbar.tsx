import React from 'react';
import { 
  Bell, 
  Search,
  Box,
  Brain,
  TrendingUp,
  Target,
  Heart,
  Menu,
  X,
  BookOpen,
  Archive,
  Trophy,
  Award,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CategoryItem {
  id: string;
  label: string;
  shortLabel: string;
  videoCount: number;
  icon: React.ReactNode;
  iconColor: string;
  circleBg: string;
  circleGlow: string;
  activeClass: string;
  hoverClass: string;
}

const categories: CategoryItem[] = [
  {
    id: 'module-1',
    label: 'HƯỚNG DẪN CÁC THAO TÁC',
    shortLabel: 'Thao tác',
    videoCount: 1,
    icon: <Box size={20} strokeWidth={2.2} />,
    iconColor: 'text-blue-500',
    circleBg: 'bg-gradient-to-br from-blue-400/20 to-blue-600/10 border-blue-400/40',
    circleGlow: 'shadow-[0_0_16px_rgba(59,130,246,0.15)]',
    activeClass: 'bg-[#1877F2] text-white shadow-[0_2px_12px_rgba(59,130,246,0.35)] border-blue-400/30',
    hoverClass: 'hover:bg-blue-500/10 hover:text-blue-600',
  },
  {
    id: 'module-2',
    label: 'TƯ DUY ĐỘT PHÁ THÀNH CÔNG',
    shortLabel: 'Tư duy đột phá',
    videoCount: 5,
    icon: <Brain size={20} strokeWidth={2.2} />,
    iconColor: 'text-purple-500',
    circleBg: 'bg-gradient-to-br from-purple-400/20 to-purple-600/10 border-purple-400/40',
    circleGlow: 'shadow-[0_0_16px_rgba(139,92,246,0.15)]',
    activeClass: 'bg-purple-600 text-white shadow-[0_2px_12px_rgba(139,92,246,0.35)] border-purple-400/30',
    hoverClass: 'hover:bg-purple-500/10 hover:text-purple-600',
  },
  {
    id: 'module-3',
    label: 'CÔNG THỨC VÀ PHƯƠNG PHÁP THÀNH CÔNG',
    shortLabel: 'Công thức & PP',
    videoCount: 7,
    icon: <TrendingUp size={20} strokeWidth={2.2} />,
    iconColor: 'text-cyan-600',
    circleBg: 'bg-gradient-to-br from-cyan-400/20 to-cyan-600/10 border-cyan-400/40',
    circleGlow: 'shadow-[0_0_16px_rgba(6,182,212,0.15)]',
    activeClass: 'bg-cyan-600 text-white shadow-[0_2px_12px_rgba(6,182,212,0.35)] border-cyan-400/30',
    hoverClass: 'hover:bg-cyan-500/10 hover:text-cyan-600',
  },
  {
    id: 'module-4',
    label: 'KỸ NĂNG THÀNH CÔNG',
    shortLabel: 'Kỹ năng',
    videoCount: 7,
    icon: <Target size={20} strokeWidth={2.2} />,
    iconColor: 'text-orange-500',
    circleBg: 'bg-gradient-to-br from-orange-400/20 to-orange-600/10 border-orange-400/40',
    circleGlow: 'shadow-[0_0_16px_rgba(245,158,11,0.15)]',
    activeClass: 'bg-orange-600 text-white shadow-[0_2px_12px_rgba(245,158,11,0.35)] border-orange-400/30',
    hoverClass: 'hover:bg-orange-500/10 hover:text-orange-600',
  },
  {
    id: 'module-5',
    label: 'PHÁT TRIỂN BẢN THÂN',
    shortLabel: 'Bản thân',
    videoCount: 3,
    icon: <Heart size={20} strokeWidth={2.2} />,
    iconColor: 'text-pink-500',
    circleBg: 'bg-gradient-to-br from-pink-400/20 to-pink-600/10 border-pink-400/40',
    circleGlow: 'shadow-[0_0_16px_rgba(236,72,153,0.15)]',
    activeClass: 'bg-pink-600 text-white shadow-[0_2px_12px_rgba(236,72,153,0.35)] border-pink-400/30',
    hoverClass: 'hover:bg-pink-500/10 hover:text-pink-600',
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('module-1');
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleScrollToModule = (id: string) => {
    setMobileOpen(false);
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // Compact navbar offset
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleScrollToRoadmap = () => {
    setActiveTab('module-1');
    const el = document.getElementById('modules-section');
    if (el) {
      const yOffset = -85;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const moduleIds = ['module-1', 'module-2', 'module-3', 'module-4', 'module-5'];
      const scrollPosition = window.scrollY + 120; // Offset for better accuracy

      for (const id of moduleIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* ── Compact Header (Single Row) ── */}
      <div className="bg-white/80 backdrop-blur-2xl border-b border-slate-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          
          {/* Logo (Left) */}
          <div className="flex items-center gap-2.5 flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/images/logoheader.png" alt="Univision Global" className="w-50 h-50" />
          </div>

          {/* Premium Capsule Navigation (Center - Desktop Only) */}
          <div className="hidden md:flex items-center bg-slate-100/70 border border-slate-200/80 rounded-full p-1 backdrop-blur-xl shadow-inner max-w-3xl mx-auto gap-1">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleScrollToModule(cat.id)}
                  className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-black transition-all duration-300 cursor-pointer border border-transparent ${
                    isActive
                      ? cat.activeClass
                      : `text-slate-500 ${cat.hoverClass}`
                  }`}
                >
                  <span className={isActive ? 'text-white' : cat.iconColor}>
                    {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 14 })}
                  </span>
                  <span>{cat.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* User Profile & Actions (Right) */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Mobile hamburger toggle */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer rounded-xl hover:bg-slate-100 ml-1"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Drawer Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-[290px] bg-white/95 backdrop-blur-2xl border-l border-slate-200/60 z-50 flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-slate-100">
                <button onClick={() => setMobileOpen(false)} className="ml-auto p-1.5 rounded-lg flex hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer">
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Nav Options (Quick access corresponding to capsule) */}
              <div className="px-4 py-3 bg-slate-50/50 border-b border-slate-100 grid grid-cols-2 gap-1.5 text-center">
                <button 
                  onClick={() => { setMobileOpen(false); showToast('Kho tài liệu đang được đồng bộ!'); }}
                  className="p-2.5 rounded-xl bg-white border border-slate-200/60 text-slate-700 hover:text-slate-900 text-[11px] font-bold flex flex-col items-center gap-1 active:scale-95 transition-transform shadow-sm"
                >
                  <Archive size={16} className="text-blue-500" />
                  <span>Kho tài liệu</span>
                </button>
                <button 
                  onClick={() => { setMobileOpen(false); showToast('Bảng xếp hạng đang cập nhật!'); }}
                  className="p-2.5 rounded-xl bg-white border border-slate-200/60 text-slate-700 hover:text-slate-900 text-[11px] font-bold flex flex-col items-center gap-1 active:scale-95 transition-transform shadow-sm"
                >
                  <Award size={16} className="text-amber-500" />
                  <span>Xếp hạng</span>
                </button>
              </div>

              {/* Drawer Category Modules Links */}
              <div className="flex-1 px-4 py-4 space-y-1.5 overflow-y-auto">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2 mb-2">Các Chuyên Đề Học Tập</div>
                {categories.map((cat, idx) => (
                  <button
                    key={cat.id}
                    onClick={() => handleScrollToModule(cat.id)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200 cursor-pointer group active:scale-[0.97] text-left"
                  >
                    <div className={`w-9 h-9 rounded-full border-2 ${cat.circleBg} ${cat.circleGlow} flex items-center justify-center ${cat.iconColor} flex-shrink-0 group-hover:scale-105 transition-transform`}>
                      {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 16 })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-black text-slate-700 leading-tight group-hover:text-[#1877F2] transition-colors">
                        {idx + 1}. {cat.label.replace(/\n/g, ' ')}
                      </div>
                      <div className="text-[9px] font-bold text-slate-400 mt-0.5">
                        {cat.videoCount} bài học
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Interactive Premium Glassmorphism Floating Toast ── */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex items-center gap-2.5 min-w-[280px]"
          >
            <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 flex-shrink-0">
              <Sparkles size={12} className="animate-pulse" />
            </div>
            <span className="text-xs font-black text-slate-800 text-left">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

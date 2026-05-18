import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  LayoutDashboard
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Statistics() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 bg-transparent">
      <div className="grid lg:grid-cols-[1fr_350px] gap-8">
        {/* Left: Next up / Keep learning banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#1877F2] via-[#2563EB] to-[#1877F2] rounded-3xl p-8 relative overflow-hidden group cursor-pointer shadow-[0_12px_36px_rgba(24,119,242,0.2)]"
        >
          <div className="absolute top-0 right-0 p-8 text-white/10 group-hover:text-white/15 transition-colors">
            <Trophy size={120} />
          </div>
          
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-extrabold w-fit">
              <Trophy size={14} />
              KIÊN TRÌ HỌC MỖI NGÀY
            </div>
            
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">Thay đổi tương lai!</h2>
              <p className="text-blue-50/90 max-w-md font-semibold text-sm">Hành trình ngàn dặm bắt đầu từ một bước chân. Bạn đã hoàn thành 60% lộ trình tuần này.</p>
            </div>

            <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#1877F2] hover:bg-slate-50 font-extrabold text-xs shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group">
              Tiếp tục học ngay
              <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.div>

        {/* Right: Personal Stats Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 space-y-8 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-white text-[15px]">Tiến độ của bạn</h3>
            <LayoutDashboard size={20} className="text-slate-400" />
          </div>

          {/* Circle Progress */}
          <div className="flex items-center gap-6">
             <div className="relative w-20 h-20 flex items-center justify-center">
                 <svg className="w-full h-full transform -rotate-90">
                    <circle 
                     cx="40" cy="40" r="34" 
                     fill="transparent" 
                     stroke="rgba(255,255,255,0.06)" 
                     strokeWidth="8"
                    />
                    <circle 
                     cx="40" cy="40" r="34" 
                     fill="transparent" 
                     stroke="url(#gradient)" 
                     strokeWidth="8" 
                     strokeDasharray={213.6} 
                     strokeDashoffset={213.6 * (1 - 0.32)}
                     strokeLinecap="round"
                    />
                    <defs>
                       <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1877F2" />
                          <stop offset="100%" stopColor="#58CC02" />
                       </linearGradient>
                    </defs>
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-lg font-extrabold text-white">32%</span>
                 </div>
             </div>
             <div className="space-y-1">
                <div className="text-sm font-extrabold text-slate-100">Khởi động hoàn tất</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Tiếp theo: Tuần 2</div>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800/80 space-y-2 shadow-sm">
               <div className="flex items-center gap-2 text-[#1877F2]">
                  <CheckCircle2 size={16} />
                  <span className="text-[10px] font-extrabold uppercase">Hoàn thành</span>
               </div>
               <div className="text-xl font-extrabold text-white">12/20</div>
               <div className="text-[10px] text-slate-400 font-bold">Bài học video</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800/80 space-y-2 shadow-sm">
               <div className="flex items-center gap-2 text-[#58CC02]">
                  <Clock size={16} />
                  <span className="text-[10px] font-extrabold uppercase">Thời gian</span>
               </div>
               <div className="text-xl font-extrabold text-white">14h 25m</div>
               <div className="text-[10px] text-slate-400 font-bold">Tổng thời gian học</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Trophy(props: any) {
  return (
    <svg 
      {...props}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

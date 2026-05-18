import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-transparent">
      {/* Light Sky Ambient Effects */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/20 rounded-full animate-ping duration-1000" />
      <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-green-400/30 rounded-full" />
      <div className="absolute top-32 left-1/3 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-pulse" />
      <div className="absolute top-12 right-1/4 w-2 h-2 bg-yellow-400/30 rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <h1 className="text-3xl md:text-[44px] font-extrabold text-white leading-tight tracking-tight">
                Lộ trình học tập & phát triển <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400 ">
                  dành cho thành viên Univision
                </span>
              </h1>
              <div className="text-sm md:text-base text-slate-300 font-semibold leading-relaxed">
                <p>Lộ trình rõ ràng – học đúng thứ, làm đúng việc</p>
                <p>và phát triển bền vững theo từng bước.</p>
              </div>
            </div>

            <div>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#1877F2] via-[#166FE5] to-[#1877F2] hover:from-[#166FE5] hover:to-[#1565D8] text-white font-bold text-xl shadow-[0_4px_14px_rgba(24,119,242,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group">
                Bắt đầu học tập ngay
                <Play size={10} fill="currentColor" className="ml-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Cinematic Mountain with Roadmap Path */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[300px] md:h-[350px] w-full rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] bg-slate-900/60 backdrop-blur-md border border-slate-800/80"
          >
            {/* Background Image: Majestic Mountain Silhouette under sunny blue sky */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=600&fit=crop')] bg-cover bg-center opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1527] via-[#0d1527]/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1527]/70 via-transparent to-transparent" />

            {/* Glowing SVG Path Overlay */}
            <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="glowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1877F2" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#58CC02" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Glowing Roadmap Line */}
              <path
                d="M 120 320 Q 200 300 250 240 T 380 140 T 430 45"
                fill="none"
                stroke="url(#glowGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                className="opacity-40"
                filter="url(#glow)"
              />
              <path
                d="M 120 320 Q 200 300 250 240 T 380 140 T 430 45"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="5 4"
                className="opacity-95"
              />

              {/* Nodes representing steps */}
              {/* Node 1 */}
              <g className="cursor-pointer">
                <circle cx="120" cy="320" r="10" fill="#1877F2" fillOpacity="0.2" className="animate-pulse" />
                <circle cx="120" cy="320" r="5" fill="#1877F2" />
                <circle cx="120" cy="320" r="2.5" fill="#fff" />
              </g>
              {/* Node 2 */}
              <g className="cursor-pointer">
                <circle cx="190" cy="290" r="8" fill="#1877F2" fillOpacity="0.3" />
                <circle cx="190" cy="290" r="4" fill="#1877F2" />
              </g>
              {/* Node 3 */}
              <g className="cursor-pointer">
                <circle cx="265" cy="225" r="8" fill="#58CC02" fillOpacity="0.3" />
                <circle cx="265" cy="225" r="4" fill="#58CC02" />
              </g>
              {/* Node 4 */}
              <g className="cursor-pointer">
                <circle cx="330" cy="170" r="8" fill="#FFC800" fillOpacity="0.3" />
                <circle cx="330" cy="170" r="4" fill="#FFC800" />
              </g>
              {/* Node 5 */}
              <g className="cursor-pointer">
                <circle cx="380" cy="140" r="8" fill="#58CC02" fillOpacity="0.3" />
                <circle cx="380" cy="140" r="4" fill="#58CC02" />
              </g>
              {/* Node 6 */}
              <g className="cursor-pointer">
                <circle cx="435" cy="90" r="10" fill="#FFC800" fillOpacity="0.2" className="animate-pulse" />
                <circle cx="435" cy="90" r="5" fill="#FFC800" />
                <circle cx="435" cy="90" r="2" fill="#fff" />
              </g>

              {/* Flagpole at the summit (430, 45) */}
              <line x1="430" y1="45" x2="430" y2="25" stroke="#E11D48" strokeWidth="2" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

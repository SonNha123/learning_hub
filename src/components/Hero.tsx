import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-8 overflow-hidden bg-transparent">
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/5 rounded-full filter blur-[80px] animate-pulse" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-500/5 rounded-full filter blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(24,119,242,0.12)] border border-blue-100/80 bg-white"
        >
          {/* ── MOBILE: ảnh full width phía trên, chữ phía dưới ── */}
          {/* ── DESKTOP: chữ trái, ảnh phải ── */}
          <div className="flex flex-col md:flex-row md:items-center md:min-h-[260px]">

            {/* MOBILE: ảnh hiện trên cùng, fade bottom */}
            <div className="relative block md:hidden w-full h-48 overflow-hidden">
              <img
                src="/images/banner.png"
                alt="Univision Global"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              {/* Fade xuống dưới để blend với phần chữ */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
            </div>

            {/* Text content */}
            <div className="flex flex-col gap-3 px-6 pt-2 pb-7 md:px-12 md:py-8 md:flex-[0_0_52%] z-10">
              <div className="inline-flex w-fit items-center border border-blue-400/50 rounded-full px-3 py-1">
                <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                  Học tập để tạo nên thành công
                </span>
              </div>

              <h1 className="text-[20px] md:text-[26px] font-extrabold text-blue-950 leading-snug">
                Giáo dục tài chính toàn diện<br />
                dành cho thành viên<br />
                <span className="text-blue-600">Univision Global</span>
              </h1>

              <p className="text-[12px] text-slate-600 leading-relaxed max-w-[300px]">
                Lộ trình học tập giúp phát triển tư duy, kỹ năng và phương pháp để xây dựng kết quả bền vững cùng hệ sinh thái Univision Global.
              </p>

              <button
                onClick={() => {
                  const el = document.getElementById('modules-section');
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="mt-1 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold rounded-xl px-5 py-[10px] w-fit shadow-lg shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Bắt đầu học tập ngay
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* DESKTOP: ảnh bên phải, fade trái */}
            <div className="relative hidden md:block flex-1 self-stretch overflow-hidden">
              <img
                src="/images/banner.png"
                alt="Univision Global Financial Education Banner"
                className="w-full h-full object-cover object-left"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LearningModules from './components/LearningModules';
import Statistics from './components/Statistics';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';

export default function App() {
   return (
      <div className="min-h-screen selection:bg-primary selection:text-white">
         <Navbar />
         <main>
            <Hero />
            {/* Mobile quick action / next lesson (visible only on mobile) */}
            <div className="md:hidden px-4 mb-8">
               <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                        <span className="font-extrabold text-sm">32%</span>
                     </div>
                     <div>
                        <div className="text-xs font-extrabold text-slate-100">TUẦN 2</div>
                        <div className="text-[10px] text-slate-400 font-semibold">Tiến độ hiện tại</div>
                     </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-4 py-2 rounded-xl text-xs shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-200">
                     Học tiếp
                  </button>
               </div>
            </div>

            <section id="roadmap" className="relative">
               <LearningModules />
            </section>

            <Statistics />
         </main>

         <Footer />
         <MobileBottomNav />

         {/* Decorative page glow */}
         <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px]"></div>
         </div>
      </div>
   );
}

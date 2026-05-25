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

export default function App() {
   return (
      <div className="min-h-screen selection:bg-primary selection:text-white">
         <Navbar />
         <main>
            <Hero />

            <section id="roadmap" className="relative">
               <LearningModules />
            </section>

            <Statistics />
         </main>

         <Footer />
         
         {/* Decorative page glow */}
         <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px]"></div>
         </div>
      </div>
   );
}

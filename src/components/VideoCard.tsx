import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';

interface VideoCardProps {
    index: number;
    title: string;
    duration: string;
    thumbnail: string;
    description: string;
    color: 'purple' | 'blue' | 'green' | 'orange' | 'cyan' | 'violet';
    key?: number | string;
}

export default function VideoCard({ index, title, duration, thumbnail, description, color }: VideoCardProps) {
    const colorMap = {
        purple: {
            badge: 'bg-[#8B5CF6] text-white',
            border: 'border-purple-500/15',
            glow: 'hover:border-purple-400 hover:shadow-[0_8px_24px_rgba(139,92,246,0.08)]',
            playBg: 'bg-purple-500/20 group-hover:bg-purple-500/40',
        },
        blue: {
            badge: 'bg-[#3B82F6] text-white',
            border: 'border-blue-500/15',
            glow: 'hover:border-blue-400 hover:shadow-[0_8px_24px_rgba(59,130,246,0.08)]',
            playBg: 'bg-blue-500/20 group-hover:bg-blue-500/40',
        },
        green: {
            badge: 'bg-[#10B981] text-white',
            border: 'border-emerald-500/15',
            glow: 'hover:border-emerald-400 hover:shadow-[0_8px_24px_rgba(16,185,129,0.08)]',
            playBg: 'bg-emerald-500/20 group-hover:bg-emerald-500/40',
        },
        orange: {
            badge: 'bg-[#F59E0B] text-white',
            border: 'border-amber-500/15',
            glow: 'hover:border-amber-400 hover:shadow-[0_8px_24px_rgba(245,158,11,0.08)]',
            playBg: 'bg-amber-500/20 group-hover:bg-amber-500/40',
        },
        cyan: {
            badge: 'bg-[#06B6D4] text-white',
            border: 'border-cyan-500/15',
            glow: 'hover:border-cyan-400 hover:shadow-[0_8px_24px_rgba(6,182,212,0.08)]',
            playBg: 'bg-cyan-500/20 group-hover:bg-cyan-500/40',
        },
        violet: {
            badge: 'bg-[#A855F7] text-white',
            border: 'border-fuchsia-500/15',
            glow: 'hover:border-fuchsia-400 hover:shadow-[0_8px_24px_rgba(168,85,247,0.08)]',
            playBg: 'bg-fuchsia-500/20 group-hover:bg-fuchsia-500/40',
        }
    };

    const currentStyles = colorMap[color] || colorMap.purple;

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group relative flex flex-col bg-white backdrop-blur-md border ${currentStyles.border} rounded-xl overflow-hidden transition-all duration-300 ${currentStyles.glow} cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.02)] w-[160px] sm:w-[180px] flex-shrink-0 snap-start`}
        >
            {/* Top: Video Thumbnail */}
            <div className="relative aspect-[16/10] w-full bg-slate-100 border-b border-slate-100">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300" />

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-8 h-8 ${currentStyles.playBg} backdrop-blur-[2px] rounded-full flex items-center justify-center border border-white/40 transform scale-90 group-hover:scale-105 transition-all duration-300 shadow-md`}>
                        <Play fill="white" stroke="none" size={12} className="ml-[2px]" />
                    </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 bg-black/70 backdrop-blur-sm rounded text-[9px] font-semibold text-white/95 leading-none">
                    {duration}
                </div>
            </div>

            {/* Bottom: Text Content */}
            <div className="p-3 flex-1 flex flex-col gap-1.5">
                <h3 className="font-black text-slate-800 text-[11px] leading-tight line-clamp-3 group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>
                <p className="text-slate-600 font-medium text-[9px] leading-normal line-clamp-2 mt-auto">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

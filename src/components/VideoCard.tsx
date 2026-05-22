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
            className={`group relative flex flex-col bg-white backdrop-blur-md border ${currentStyles.border} rounded-2xl overflow-hidden transition-all duration-300 ${currentStyles.glow} cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] w-[280px] sm:w-[calc((100%-16px)/2)] md:w-[calc((100%-32px)/3)] lg:w-[calc((100%-48px)/4)] flex-shrink-0 snap-start`}
        >
            {/* Top: Video Thumbnail */}
            <div className="relative aspect-[16/10] w-full bg-slate-100 border-b border-slate-100 overflow-hidden">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-all duration-300" />

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-11 h-11 ${currentStyles.playBg} backdrop-blur-[3px] rounded-full flex items-center justify-center border-2 border-white/40 transform scale-95 group-hover:scale-105 transition-all duration-300 shadow-lg`}>
                        <Play fill="white" stroke="none" size={16} className="ml-[2px]" />
                    </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2.5 right-2.5 px-2 py-1 bg-black/75 backdrop-blur-sm rounded-lg text-[10px] font-semibold text-white/95 shadow-md">
                    {duration}
                </div>
            </div>

            {/* Bottom: Text Content */}
            <div className="p-4 md:p-5 flex-1 flex flex-col gap-2">
                <h3 className="font-extrabold text-slate-800 text-xs md:text-sm leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>
                <p className="text-slate-500 font-medium text-[11px] md:text-xs leading-relaxed line-clamp-2">
                    {description}
                </p>

                {/* Micro-metadata indicators */}
                <div className="mt-auto pt-3 border-t border-slate-100/80 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                        <span className={`w-1.5 h-1.5 rounded-full ${
                            color === 'blue' ? 'bg-blue-500' :
                            color === 'purple' ? 'bg-purple-500' :
                            color === 'green' ? 'bg-emerald-500' :
                            color === 'orange' ? 'bg-amber-500' :
                            color === 'cyan' ? 'bg-cyan-500' : 'bg-fuchsia-500'
                        }`} />
                        Độ dài: {duration}
                    </div>
                    <div className="flex items-center gap-1 text-[9px] md:text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100/50">
                        HD
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

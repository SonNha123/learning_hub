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
}

export default function VideoCard({ index, title, duration, thumbnail, description, color }: VideoCardProps) {
      // Map color key to tailwind color classes for the badge and glowing effects
    const colorMap = {
        purple: {
            badge: 'bg-[#8B5CF6] text-white',
            border: 'border-purple-500/30',
            glow: 'hover:border-purple-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]',
            playBg: 'bg-purple-500/20 group-hover:bg-purple-500/40',
        },
        blue: {
            badge: 'bg-[#3B82F6] text-white',
            border: 'border-blue-500/30',
            glow: 'hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]',
            playBg: 'bg-blue-500/20 group-hover:bg-blue-500/40',
        },
        green: {
            badge: 'bg-[#10B981] text-white',
            border: 'border-emerald-500/30',
            glow: 'hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]',
            playBg: 'bg-emerald-500/20 group-hover:bg-emerald-500/40',
        },
        orange: {
            badge: 'bg-[#F59E0B] text-white',
            border: 'border-amber-500/30',
            glow: 'hover:border-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]',
            playBg: 'bg-amber-500/20 group-hover:bg-amber-500/40',
        },
        cyan: {
            badge: 'bg-[#06B6D4] text-white',
            border: 'border-cyan-500/30',
            glow: 'hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]',
            playBg: 'bg-cyan-500/20 group-hover:bg-cyan-500/40',
        },
        violet: {
            badge: 'bg-[#A855F7] text-white',
            border: 'border-fuchsia-500/30',
            glow: 'hover:border-fuchsia-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]',
            playBg: 'bg-fuchsia-500/20 group-hover:bg-fuchsia-500/40',
        }
    };

    const currentStyles = colorMap[color] || colorMap.purple;

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group relative flex flex-row-reverse lg:flex-row justify-between items-stretch bg-slate-900/60 backdrop-blur-sm border-2 ${currentStyles.border} rounded-xl p-3 gap-3.5 transition-all duration-300 ${currentStyles.glow} cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.2)]`}
        >
            {/* Left side: Badge & Text */}
            <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                    {/* Badge */}
                    <div className={`w-6 h-6 ${currentStyles.badge} rounded flex items-center justify-center font-extrabold text-[11px] leading-none shadow-sm`}>
                        {index}
                    </div>

                    {/* Title */}
                    <h3 className="font-extrabold text-slate-100 text-xs md:text-[13px] leading-tight mt-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                        {title}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-slate-400 font-medium text-[10px] md:text-[10.5px] leading-normal line-clamp-2 mt-1">
                    {description}
                </p>
            </div>

            {/* Right side: Video Thumbnail */}
            <div className="w-[100px] sm:w-[120px] aspect-[4/3] relative rounded-lg overflow-hidden flex-shrink-0 bg-slate-950 border border-slate-800/80">
                {/* Thumbnail Image */}
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />

                {/* Subtle Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />

                {/* Play Icon in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-8 h-8 ${currentStyles.playBg} backdrop-blur-[2px] rounded-full flex items-center justify-center border border-white/30 transform scale-95 group-hover:scale-105 transition-all duration-300 shadow-md`}>
                        <Play fill="white" stroke="none" size={12} className="ml-[2px]" />
                    </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-1 right-1 px-1 py-0.5 bg-black/75 backdrop-blur-sm rounded text-[8px] font-medium text-white/95 leading-none">
                    {duration}
                </div>
            </div>
        </motion.div>
    );
}

import React from 'react';
import { Play, Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';

interface VideoCardProps {
    index: number;
    title: string;
    duration: string;
    thumbnail: string;
    description: string;
    color: 'purple' | 'blue' | 'green' | 'orange' | 'cyan' | 'violet';
    key?: number | string;
    videoUrl?: string;
    onPlay?: (videoUrl?: string, title?: string) => void;
}

const getYoutubeThumbnail = (url?: string) => {
    if (!url) return '';
    let videoId = '';
    if (url.includes('youtube.com/embed/')) {
        videoId = url.split('youtube.com/embed/')[1]?.split('?')[0];
    } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('youtube.com/watch')) {
        try {
            const urlParams = new URLSearchParams(url.split('?')[1]);
            videoId = urlParams.get('v') || '';
        } catch (e) {
            // Fallback
        }
    }
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
};

const getYoutubeId = (url?: string) => {
    if (!url) return '';
    let videoId = '';
    if (url.includes('youtube.com/embed/')) {
        videoId = url.split('youtube.com/embed/')[1]?.split('?')[0];
    } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('youtube.com/watch')) {
        try {
            const urlParams = new URLSearchParams(url.split('?')[1]);
            videoId = urlParams.get('v') || '';
        } catch (e) {}
    }
    return videoId;
};

const formatSeconds = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    if (hours > 0) {
        return `${hours}:${paddedMinutes}:${paddedSeconds}`;
    }
    return `${minutes}:${paddedSeconds}`;
};

export default function VideoCard({ index, title, duration, thumbnail, description, color, videoUrl, onPlay }: VideoCardProps) {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [durationState, setDurationState] = React.useState<string>(duration);

    React.useEffect(() => {
        const videoId = getYoutubeId(videoUrl);
        if (!videoId) return;

        // Load YouTube IFrame API if not already loaded
        if (!(window as any).YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
            if (!existingScript) {
                const firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
            }
        }

        const fetchDuration = () => {
            const tempDiv = document.createElement('div');
            tempDiv.style.position = 'absolute';
            tempDiv.style.width = '0px';
            tempDiv.style.height = '0px';
            tempDiv.style.opacity = '0';
            tempDiv.style.pointerEvents = 'none';
            document.body.appendChild(tempDiv);

            try {
                new (window as any).YT.Player(tempDiv, {
                    videoId: videoId,
                    playerVars: {
                        mute: 1,
                        autoplay: 0,
                    },
                    events: {
                        onReady: (event: any) => {
                            const secs = event.target.getDuration();
                            if (secs > 0) {
                                setDurationState(formatSeconds(secs));
                            }
                            try {
                                event.target.destroy();
                            } catch (err) {}
                            tempDiv.remove();
                        },
                        onError: () => {
                            tempDiv.remove();
                        }
                    }
                });
            } catch (err) {
                tempDiv.remove();
            }
        };

        // Poll for window.YT and window.YT.Player
        let pollInterval: any;
        if ((window as any).YT && (window as any).YT.Player) {
            fetchDuration();
        } else {
            pollInterval = setInterval(() => {
                if ((window as any).YT && (window as any).YT.Player) {
                    fetchDuration();
                    clearInterval(pollInterval);
                }
            }, 100);
        }

        return () => {
            if (pollInterval) clearInterval(pollInterval);
        };
    }, [videoUrl]);

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
    const displayThumbnail = getYoutubeThumbnail(videoUrl) || thumbnail;

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group relative flex flex-col bg-white backdrop-blur-md border ${currentStyles.border} rounded-2xl overflow-hidden transition-all duration-300 ${currentStyles.glow} cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] w-[calc((100%-(-20px))/2)] sm:w-[calc((100%-4px)/2)] md:w-[calc((100%-16px)/3)] lg:w-[calc((100%-36px)/4)] flex-shrink-0 snap-start`}
            onClick={() => {
                if (videoUrl && !isPlaying) {
                    setIsPlaying(true);
                } else if (!videoUrl) {
                    onPlay?.(videoUrl, title);
                }
            }}
        >
            {/* Top: Video Thumbnail */}
            <div className="relative aspect-[16/10] w-full bg-slate-100 border-b border-slate-100 overflow-hidden">
                {isPlaying && videoUrl ? (
                    <div className="absolute inset-0 w-full h-full bg-black">
                        <iframe
                            src={videoUrl.includes('?') ? `${videoUrl}&autoplay=1` : `${videoUrl}?autoplay=1`}
                            title={title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full border-none"
                        />
                        {/* Floating Expand/Maximize button in playing state */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onPlay?.(videoUrl, title);
                            }}
                            className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white hover:text-white transition-all cursor-pointer border-none shadow-md z-10 flex items-center justify-center"
                            title="Xem phóng to"
                        >
                            <Maximize2 size={12} />
                        </button>
                    </div>
                ) : (
                    <>
                        <img
                            src={displayThumbnail}
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
                        <div className="absolute bottom-2.5 right-2.5 px-2 py-1 bg-black/75 backdrop-blur-sm rounded-lg text-[9px] sm:text-[10px] font-semibold text-white/95 shadow-md">
                            {durationState}
                        </div>
                    </>
                )}
            </div>

            {/* Bottom: Text Content */}
            <div className="p-3 sm:p-4 md:p-5 flex-1 flex flex-col gap-1.5 sm:gap-2">
                <h3 className="font-extrabold text-slate-800 text-xs md:text-sm leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>
                <p className="text-slate-500 font-medium text-[10px] sm:text-[11px] md:text-xs leading-relaxed line-clamp-2">
                    {description}
                </p>

                {/* Micro-metadata indicators */}
                <div className="mt-auto pt-2.5 border-t border-slate-100/80 flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-bold text-slate-500 flex-shrink-0">
                        <span className={`w-1.5 h-1.5 rounded-full ${
                            color === 'blue' ? 'bg-blue-500' :
                            color === 'purple' ? 'bg-purple-500' :
                            color === 'green' ? 'bg-emerald-500' :
                            color === 'orange' ? 'bg-amber-500' :
                            color === 'cyan' ? 'bg-cyan-500' : 'bg-fuchsia-500'
                        }`} />
                        Độ dài: {durationState}
                    </div>
                    {videoUrl ? (
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                onPlay?.(videoUrl, title);
                            }}
                            className="flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[10px] font-bold text-[#1877F2] hover:text-white bg-[#1877F2]/10 hover:bg-[#1877F2] px-1.5 sm:px-2 py-0.5 rounded-md border border-[#1877F2]/20 hover:border-transparent transition-all duration-200 cursor-pointer shadow-sm active:scale-95 flex-shrink-0"
                        >
                            Phóng to
                        </button>
                    ) : (
                        <div className="flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded-md border border-emerald-100/50 flex-shrink-0">
                            HD
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

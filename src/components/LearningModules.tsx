import React from 'react';
import {
  Rocket,
  Zap,
  TrendingUp,
  Users,
  Gem,
  BrainCircuit
} from 'lucide-react';
import VideoCard from './VideoCard';

interface ModuleProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  color: 'purple' | 'blue' | 'green' | 'orange' | 'cyan' | 'violet';
  borderColor: string;
  borderStyle: string;
  lessons: {
    id: number;
    title: string;
    duration: string;
    thumbnail: string;
    description: string;
  }[];
}

export default function LearningModules() {
  const modules: ModuleProps[] = [
    {
      title: "Khởi động",
      subtitle: "Tạo nền tảng & đạt kết quả đầu tiên",
      icon: <Rocket size={18} className="text-[#a78bfa]" />,
      iconBg: "bg-[#8B5CF6]/10 shadow-[0_0_15px_rgba(139,92,246,0.15)]",
      color: "purple",
      borderColor: "border-l-[#8B5CF6]",
      borderStyle: "border-purple-500/30 hover:border-purple-500/80 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]",
      lessons: [
        { id: 1, title: "Công thức 2 tháng đạt GSKD", duration: "18:45", thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop", description: "Hiểu rõ cách tạo kết quả đầu tiên trong 60 ngày" },
        { id: 2, title: "Kỹ năng thiết lập mục tiêu", duration: "14:32", thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop", description: "Xác định mục tiêu rõ ràng theo ngày - tuần - tháng" },
        { id: 3, title: "Kỹ năng xử lý từ chối", duration: "16:20", thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop", description: "Biến từ chối thành cơ hội và tiến gần hơn đến thành công" },
      ]
    },
    {
      title: "Hành động",
      subtitle: "Bắt đầu làm đúng quy trình",
      icon: <Zap size={18} className="text-[#60a5fa]" />,
      iconBg: "bg-[#3B82F6]/10 shadow-[0_0_15px_rgba(59,130,246,0.15)]",
      color: "blue",
      borderColor: "border-l-[#3B82F6]",
      borderStyle: "border-blue-500/30 hover:border-blue-500/80 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]",
      lessons: [
        { id: 4, title: "Con đường thành công", duration: "17:15", thumbnail: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=300&fit=crop", description: "Hiểu quy trình làm việc đúng để đạt kết quả" },
        { id: 5, title: "Tư duy khởi nghiệp", duration: "15:48", thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop", description: "Xây mindset đúng để đi đường dài" },
        { id: 6, title: "Quản lý thời gian", duration: "16:35", thumbnail: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=400&h=300&fit=crop", description: "Tối ưu 24h mỗi ngày để có kết quả vượt trội" },
      ]
    },
    {
      title: "Tăng tốc",
      subtitle: "Tối ưu & phát triển nhanh",
      icon: <TrendingUp size={18} className="text-[#34d399]" />,
      iconBg: "bg-[#10B981]/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
      color: "green",
      borderColor: "border-l-[#10B981]",
      borderStyle: "border-emerald-500/30 hover:border-emerald-500/80 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]",
      lessons: [
        { id: 7, title: "Công thức 4 tháng QLKD", duration: "19:21", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop", description: "Lộ trình lên cấp quản lý hiệu quả" },
        { id: 8, title: "Công thức 6 tháng PPKD", duration: "18:50", thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop", description: "Bắt đầu xây dựng hệ thống và phát triển đội nhóm" },
        { id: 9, title: "Công thức 9 tháng TTKD", duration: "20:10", thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop", description: "Mở rộng quy mô và phát triển tổ chức" },
      ]
    },
    {
      title: "Xây đội nhóm",
      subtitle: "Nhân bản & mở rộng hệ thống",
      icon: <Users size={18} className="text-[#fbbf24]" />,
      iconBg: "bg-[#F59E0B]/10 shadow-[0_0_15px_rgba(245,158,11,0.15)]",
      color: "orange",
      borderColor: "border-l-[#F59E0B]",
      borderStyle: "border-amber-500/30 hover:border-amber-500/80 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]",
      lessons: [
        { id: 10, title: "Quản lý đội nhóm F1-F2", duration: "17:40", thumbnail: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=400&h=300&fit=crop", description: "Xây nền tảng đội nhóm vững chắc" },
        { id: 11, title: "Kỹ năng lãnh đạo", duration: "16:28", thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop", description: "Dẫn dắt đội nhóm phát triển và bứt phá" },
        { id: 12, title: "Tư duy đòn bẩy", duration: "15:44", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop", description: "Nhân bản hệ thống để tăng trưởng vượt bậc" },
      ]
    },
    {
      title: "Nâng cấp bền vững",
      subtitle: "Giữ và phát triển dài hạn",
      icon: <Gem size={18} className="text-[#22d3ee]" />,
      iconBg: "bg-[#06B6D4]/10 shadow-[0_0_15px_rgba(6,182,212,0.15)]",
      color: "cyan",
      borderColor: "border-l-[#06B6D4]",
      borderStyle: "border-cyan-500/30 hover:border-cyan-500/80 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]",
      lessons: [
        { id: 13, title: "12 tháng đạt GĐKC", duration: "17:40", thumbnail: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop", description: "Đặt quỹ xe - Bước đầu tự do tài chính" },
        { id: 14, title: "18 tháng đạt GĐKD", duration: "19:05", thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop", description: "Đặt quỹ nhà - Tài sản và cuộc sống ổn định" },
        { id: 15, title: "24 tháng tự do tài chính", duration: "20:12", thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop", description: "Chủ động thời gian - Tự do địa lý - Cuộc sống mơ ước" },
      ]
    },
    {
      title: "Tư duy cao cấp",
      subtitle: "Khác biệt để bứt phá",
      icon: <BrainCircuit size={18} className="text-[#c084fc]" />,
      iconBg: "bg-[#A855F7]/10 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
      color: "violet",
      borderColor: "border-l-[#A855F7]",
      borderStyle: "border-fuchsia-500/30 hover:border-fuchsia-500/80 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]",
      lessons: [
        { id: 16, title: "Quản lý tài chính", duration: "16:45", thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop", description: "Giữ và nhân tiền một cách thông minh" },
        { id: 17, title: "Đạo đức & quy định", duration: "15:30", thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop", description: "Làm đúng để đi lâu dài và bền vững" },
        { id: 18, title: "Trẻ - Khỏe - Đẹp - Tài chính", duration: "17:50", thumbnail: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop", description: "Phát triển toàn diện để hạnh phúc bền vững" },
      ]
    },
  ];

  const [activeStage, setActiveStage] = React.useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-transparent">
      {/* Mobile/Tablet Layout (< lg) */}
      <div className="lg:hidden mb-6">
        {/* Horizontal scrollable tab selector */}
        <div className="flex flex-row overflow-x-auto gap-2.5 pb-3 scrollbar-none snap-x -mx-4 px-4">
          {modules.map((module, idx) => {
            const isActive = activeStage === idx;
            const themeColors = {
              purple: "bg-[#8B5CF6] text-white border-[#8B5CF6]",
              blue: "bg-[#3B82F6] text-white border-[#3B82F6]",
              green: "bg-[#10B981] text-white border-[#10B981]",
              orange: "bg-[#F59E0B] text-white border-[#F59E0B]",
              cyan: "bg-[#06B6D4] text-white border-[#06B6D4]",
              violet: "bg-[#A855F7] text-white border-[#A855F7]"
            };
            const activeClass = themeColors[module.color] || themeColors.purple;

            return (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`snap-start px-4 py-2 rounded-full font-extrabold text-xs whitespace-nowrap border-2 transition-all duration-200 flex-shrink-0 ${
                  isActive 
                    ? `${activeClass} shadow-lg shadow-blue-500/10` 
                    : "bg-slate-900/60 backdrop-blur-sm text-slate-400 border-slate-800/80 hover:border-slate-700 hover:text-white"
                }`}
              >
                {module.title}
              </button>
            );
          })}
        </div>

        {/* Active Stage Header */}
        <div className="mt-2.5">
          <div className={`flex flex-row items-center gap-3.5 p-4 rounded-xl bg-slate-900/60 backdrop-blur-sm border-2 ${modules[activeStage].borderColor} border-l-[6px] shadow-[0_4px_12px_rgba(0,0,0,0.2)]`}>
            <div className={`w-10 h-10 ${modules[activeStage].iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
              {modules[activeStage].icon}
            </div>
            <div className="flex flex-col leading-snug">
              <span className="font-extrabold text-slate-100 text-sm">{modules[activeStage].title}</span>
              <span className="text-[10px] text-slate-400 mt-0.5">{modules[activeStage].subtitle}</span>
            </div>
          </div>
        </div>

        {/* Active Stage Lessons List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-3.5">
          {modules[activeStage].lessons.map((lesson) => (
            <VideoCard
              key={lesson.id}
              index={lesson.id}
              title={lesson.title}
              duration={lesson.duration}
              thumbnail={lesson.thumbnail}
              description={lesson.description}
              color={modules[activeStage].color}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid Layout (>= lg) */}
      <div className="hidden lg:flex flex-col gap-3.5">
        {modules.map((module, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[240px_1fr_1fr_1fr] gap-3.5 items-stretch"
          >
            {/* Stage Sidebar Card */}
            <div className={`flex flex-row items-center gap-3.5 p-4 rounded-xl bg-slate-900/60 backdrop-blur-sm border-2 ${module.borderColor} border-l-[6px] shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-all duration-300 ${module.borderStyle} cursor-pointer`}>
              {/* Glowing Icon container */}
              <div className={`w-10 h-10 ${module.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                {module.icon}
              </div>

              {/* Stage Text */}
              <div className="flex flex-col leading-snug">
                <span className="font-extrabold text-slate-100 text-sm md:text-[15px]">{module.title}</span>
                <span className="text-[10px] md:text-[10.5px] text-slate-400 leading-normal mt-0.5">{module.subtitle}</span>
              </div>
            </div>

            {/* Lessons Grid (Columns 2, 3, 4) */}
            {module.lessons.map((lesson) => ( 
              <VideoCard
                key={lesson.id}
                index={lesson.id}
                title={lesson.title}
                duration={lesson.duration}
                thumbnail={lesson.thumbnail}
                description={lesson.description}
                color={module.color}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

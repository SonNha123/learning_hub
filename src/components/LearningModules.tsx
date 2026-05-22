import React from 'react';
import {
  Box,
  Brain,
  TrendingUp,
  Target,
  Heart,
  ChevronRight,
  Play
} from 'lucide-react';
import { motion } from 'motion/react';
import VideoCard from './VideoCard';

interface Lesson {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  description: string;
}

interface ModuleProps {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  titleColor: string;
  iconBg: string;
  iconColor: string;
  color: 'purple' | 'blue' | 'green' | 'orange' | 'cyan' | 'violet';
  lessons: Lesson[];
}

export default function LearningModules() {
  const modules: ModuleProps[] = [
    {
      id: "module-1",
      title: "HƯỚNG DẪN CÁC THAO TÁC",
      subtitle: "Hướng dẫn các thao tác cơ bản trên nền tảng",
      titleColor: "text-blue-600",
      icon: <Box size={18} />,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      color: "blue",
      lessons: [
        {
          id: 1,
          title: "Hướng dẫn các bước thao tác nạp, chuyển, rút, mua hàng và các tính năng của trang thành viên",
          duration: "18:20",
          thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop",
          description: "Tìm hiểu toàn bộ thao tác cốt lõi để bắt đầu hành trình của bạn hiệu quả và tối ưu nhất."
        }
      ]
    },
    {
      id: "module-2",
      title: "TƯ DUY ĐỘT PHÁ THÀNH CÔNG",
      subtitle: "Khởi tạo khát vọng và xây mindset của người chiến thắng",
      titleColor: "text-purple-600",
      icon: <Brain size={18} />,
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400",
      color: "purple",
      lessons: [
        { id: 1, title: "Định hướng tinh thần khởi nghiệp, quốc gia khởi nghiệp và phong cách sống người thành công", duration: "16:45", thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=450&fit=crop", description: "Mở khóa tiềm năng tư duy vượt trội để dẫn đầu trong mọi lĩnh vực." },
        { id: 2, title: "Con đường đi đến thành công (hướng dẫn các bước làm việc)", duration: "15:30", thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=450&fit=crop", description: "Định hình ước mơ và thiết lập bản đồ tầm nhìn dài hạn cho tương lai." },
        { id: 3, title: "Tư duy đòn bẩy trong kinh doanh và cuộc sống", duration: "17:20", thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop", description: "Xây dựng thái độ tích cực trước khó khăn và thử thách lớn." },
        { id: 4, title: "Tư duy ngược của người thành công", duration: "14:10", thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop", description: "Phá bỏ niềm tin giới hạn để bứt phá đạt mục tiêu vượt mong đợi." },
        { id: 5, title: "Quyết tâm đi đến cùng mục tiêu", duration: "16:50", thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop", description: "Chiến thuật duy trì động lực bền bỉ hành động mỗi ngày." },
      ]
    },
    {
      id: "module-3",
      title: "CÔNG THỨC VÀ PHƯƠNG PHÁP THÀNH CÔNG",
      subtitle: "Quy trình bài bản xây dựng hệ thống bền vững",
      titleColor: "text-cyan-600",
      icon: <TrendingUp size={18} />,
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-400",
      color: "cyan",
      lessons: [
        { id: 1, title: "Công thức và phương pháp 06 tháng lên đỉnh", duration: "17:05", thumbnail: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=450&fit=crop", description: "Nắm vững công thức vàng nhân bản mô hình kinh doanh tự vận hành." },
        { id: 2, title: "Công thức và phương pháp 2 hàng đạt GSKD", duration: "17:45", thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=450&fit=crop", description: "Quản trị tệp khách hàng tiềm năng một cách khoa học và tối ưu." },
        { id: 3, title: "Công thức và phương pháp 4 hàng đạt GLKD", duration: "18:15", thumbnail: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=600&h=450&fit=crop", description: "Bí quyết khơi gợi nhu cầu và thiết lập cuộc hẹn thành công cao." },
        { id: 4, title: "Công thức và phương pháp 6 hàng đạt PPKD", duration: "18:35", thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=450&fit=crop", description: "Trình bày kế hoạch cuốn hút, đánh trúng tâm lý đối tác tiềm năng." },
        { id: 5, title: "Bám sát và hỗ trợ thành viên mới", duration: "18:05", thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=450&fit=crop", description: "Quy trình dẫn dắt và kích hoạt năng lực hành động cho người mới." },
        { id: 6, title: "Nhân bản quy trình cho đội nhóm", duration: "14:50", thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=450&fit=crop", description: "Chuyển giao công nghệ và xây dựng đội ngũ kế cận xuất sắc." },
        { id: 7, title: "Công thức và phương pháp 9 tháng đạt TTKD", duration: "19:12", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop", description: "Gia tăng tỷ lệ chuyển đổi khách hàng qua từng điểm chạm." },
      ]
    },
    {
      id: "module-4",
      title: "KỸ NĂNG THÀNH CÔNG",
      subtitle: "Trang bị bộ kỹ năng mềm đỉnh cao",
      titleColor: "text-orange-600",
      icon: <Target size={18} />,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-400",
      color: "orange",
      lessons: [
        { id: 1, title: "Công thức và phương pháp 06 tháng lên đỉnh.", duration: "19:26", thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=450&fit=crop", description: "Làm chủ sân khấu, tự tin chia sẻ và truyền cảm hứng mạnh mẽ." },
        { id: 2, title: "Kỹ năng thiết lập mục tiêu và kế hoạch làm việc ngày, tuần, tháng.", duration: "16:40", thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=450&fit=crop", description: "Phương pháp hóa giải mọi lời từ chối để chốt hợp đồng dễ dàng." },
        { id: 3, title: "Kỹ năng quản lý và làm việc với group đội 1 và 2", duration: "15:10", thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=450&fit=crop", description: "Định vị bản thân xuất sắc trên mạng xã hội và ngoài đời thực." },
        { id: 4, title: "Kỹ năng quản lý và làm việc với các thành viên cấp GSKD trở lên trong nhóm", duration: "16:25", thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=450&fit=crop", description: "Thấu hiểu mong muốn đối tác qua nghệ thuật lắng nghe chủ động." },
        { id: 5, title: "Giải quyết xung đột trong đội nhóm", duration: "14:25", thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=450&fit=crop", description: "Xây dựng văn hóa thấu hiểu, giải quyết mâu thuẫn nội bộ êm đẹp." },
        { id: 6, title: "Lập kế hoạch và quản trị mục tiêu", duration: "16:10", thumbnail: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=600&h=450&fit=crop", description: "Thiết lập kế hoạch chi tiết giúp hiện thực hóa mọi mục tiêu đặt ra." },
        { id: 7, title: "Kỹ năng đào tạo và chuyển giao", duration: "18:35", thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=450&fit=crop", description: "Phương pháp sư phạm thực chiến giúp chuyển hóa kiến thức nhanh." },
      ]
    },
    {
      id: "module-5",
      title: "PHÁT TRIỂN BẢN THÂN",
      subtitle: "Nâng tầm tư duy, quản trị cảm xúc & thói quen tốt",
      titleColor: "text-violet-600",
      icon: <Heart size={18} />,
      iconBg: "bg-[#ec4899]/10",
      iconColor: "text-pink-400",
      color: "violet",
      lessons: [
        { id: 1, title: "Đạo nhân tâm (bảo hiếu Cha Mẹ, sống tốt với mọi người xung quanh và trách nhiệm với xã hội)", duration: "17:40", thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=450&fit=crop", description: "Luôn duy trì năng lượng đỉnh cao và thái độ tự tin, tích cực." },
        { id: 2, title: "Trí khoẻ đẹp và tài chính, thịnh vượng cùng công ty", duration: "16:30", thumbnail: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=600&h=450&fit=crop", description: "Phương pháp tiếp thu tri thức nhân loại và nâng cấp tư duy liên tục." },
        { id: 3, title: "Đạo đức và luật lệ nghiêm nghị và chế tài của công ty đối với các trường hợp vi phạm", duration: "15:45", thumbnail: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=450&fit=crop", description: "Rèn luyện kỷ luật bản thân và xây dựng bộ thói quen cốt lõi." },
      ]
    }
  ];

  return (
    <div id="modules-section" className="max-w-7xl mx-auto px-4 py-8 bg-transparent">
      {/* Vertical Sections List */}
      <div className="space-y-10">
        {modules.map((module, idx) => {
          const isSection1 = idx === 0;

          return (
            <div
              key={idx}
              id={module.id}
              className="scroll-mt-36 space-y-4 text-left"
            >
              {/* Section Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg ${module.iconBg} flex items-center justify-center ${module.iconColor} flex-shrink-0`}>
                    {module.icon}
                  </div>
                  <h2 className={`font-black text-sm md:text-base tracking-tight leading-none uppercase ${module.titleColor}`}>
                    {idx + 1}. {module.title}
                  </h2>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 group cursor-pointer flex-shrink-0">
                  <span className="text-[11px] font-bold text-slate-500">
                    {module.lessons.length} video
                  </span>
                  <ChevronRight size={14} className="text-slate-500 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Custom Layout for Section 1 */}
              {isSection1 ? (
                <div className="w-full">
                  {module.lessons.map((lesson) => (
                    <motion.div
                      key={lesson.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="group relative grid md:grid-cols-[1fr_1.2fr] bg-white hover:bg-slate-50/50 backdrop-blur-md border border-slate-200/85 hover:border-blue-500/40 rounded-2xl overflow-hidden p-4 md:p-5 gap-5 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(24,119,242,0.06)] cursor-pointer"
                    >
                      {/* Left: Video Thumbnail */}
                      <div className="relative aspect-[16/10] md:aspect-auto md:h-full w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 flex-shrink-0 min-h-[180px]">
                        <img
                          src={lesson.thumbnail}
                          alt={lesson.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-all duration-300" />

                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-blue-500/20 group-hover:bg-blue-500/40 backdrop-blur-[3px] border-2 border-white/40 flex items-center justify-center shadow-lg transform scale-95 group-hover:scale-105 transition-all duration-300">
                            <Play fill="white" stroke="none" size={20} className="ml-1" />
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute bottom-2.5 right-2.5 px-2 py-1 bg-black/75 backdrop-blur-sm rounded-lg text-xs font-semibold text-white/95 shadow-md">
                          {lesson.duration}
                        </div>
                      </div>

                      {/* Right: Text Content */}
                      <div className="flex flex-col justify-center py-1">
                        <div className="space-y-3">
                          <h3 className="font-black text-slate-800 text-base md:text-lg leading-snug group-hover:text-blue-600 transition-colors">
                            {lesson.title}
                          </h3>

                          <p className="text-slate-600 font-medium text-xs leading-relaxed">
                            {lesson.description}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center gap-3">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 bg-slate-100/65 px-2.5 py-1.5 rounded-lg border border-slate-200/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            Độ dài: {lesson.duration} phút
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 bg-slate-100/65 px-2.5 py-1.5 rounded-lg border border-slate-200/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Chất lượng HD
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                /* Other Sections: Horizontal scrollable row of vertical cards */
                <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-none snap-x -mx-4 px-4">
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
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

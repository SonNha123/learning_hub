import React from 'react';
import { motion } from 'motion/react';

export default function Statistics() {
  const benefits = [
    {
      title: "Lộ trình bài bản",
      description: "Nội dung được xây dựng logic, dễ hiểu, dễ áp dụng theo từng cấp độ phát triển.",
      // Book / open book icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#1877F2]">
          <path d="M2 6c0 0 2-1 5-1s5 2 5 2V20c0 0-2-1-5-1s-5 1-5 1V6z" />
          <path d="M12 7c0 0 2-2 5-2s5 1 5 1v14c0 0-2-1-5-1s-5 2-5 2" />
        </svg>
      ),
    },
    {
      title: "Kiến thức thực tiễn",
      description: "Giúp bạn phát triển tư duy, trang bị kỹ năng thực chiến và phương pháp thành công bền vững.",
      // Target / bullseye icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#1877F2]">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
      ),
    },
    {
      title: "Giá trị bền vững",
      description: "Ứng dụng hiệu quả trực tiếp vào công việc và cuộc sống hàng ngày.",
      // Star outline icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#1877F2]">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-[22px] border border-[#d9e2f2] bg-[#f7f9ff] shadow-sm"
      >
        <div className="flex flex-col md:flex-row">

          <div className="flex flex-col md:flex-row items-center gap-6 px-8 py-8 md:px-12 md:py-10 text-center md:text-left">

            {/* LEFT LOGO */}
            <div className="relative w-[92px] h-[92px] flex-shrink-0">
              {/* Outer */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#ffe07a] to-[#d7a600] p-[4px] shadow-md">
                <div className="w-full h-full rounded-full bg-[#10245c] flex flex-col items-center justify-center">
                  <span className="text-white text-[34px] font-black italic leading-none">
                    U
                  </span>

                  <span className="text-[6px] tracking-[0.22em] text-yellow-300 font-bold uppercase mt-1">
                    Univision
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex-1">
              <h2 className="text-[28px] leading-[1.25] font-black text-[#18243d] max-w-[720px]">
                Học đầy đủ – Hiểu toàn diện –{" "}
                <span className="text-[#1877F2]">
                  Ứng dụng hiệu quả
                </span>
              </h2>

              <p className="mt-4 text-[15px] leading-[1.8] text-[#667085] max-w-[620px] font-medium">
                Hoàn thành lộ trình học tập để nắm vững kiến thức,
                phát triển bản thân và đạt được thành công bền vững
                cùng Univision Global.
              </p>
            </div>

          </div>

          {/* RIGHT BENEFITS */}
          <div className="md:w-[340px] border-l border-[#dbe4f3] flex flex-col">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex gap-4 px-7 py-5 ${index !== benefits.length - 1
                    ? "border-b border-[#dbe4f3]"
                    : ""
                  }`}
              >
                <div className="mt-1 flex-shrink-0 text-[#1877F2]">
                  {benefit.icon}
                </div>

                <div>
                  <h3 className="text-[18px] font-extrabold text-[#1d2939] leading-tight">
                    {benefit.title}
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.7] text-[#667085]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
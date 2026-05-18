import React from 'react';
import { 
  Facebook, 
  Youtube, 
  Instagram, 
  Twitter 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 pt-20 pb-28 md:pb-12 bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1877F2] rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-black text-lg italic">U</span>
              </div>
              <span className="font-extrabold tracking-wider text-sm text-white">UNIVISION GLOBAL</span>
            </div>
            <p className="text-slate-400 text-sm font-semibold leading-relaxed">
              Nền tảng học tập dành riêng cho thành viên thuộc hệ sinh thái UnionTek. Một hành trình bứt phá và thành công bền vững.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
            </div>
          </div>

          <div>
             <h4 className="font-extrabold mb-6 text-white text-sm uppercase tracking-wider">Liên kết</h4>
             <ul className="space-y-4 text-sm text-slate-400 font-semibold">
               <li><a href="#" className="hover:text-blue-400 transition-colors">Về Univision</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Lộ trình học tập</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Đối tác chiến lược</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Cộng đồng</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-extrabold mb-6 text-white text-sm uppercase tracking-wider">Tài nguyên</h4>
             <ul className="space-y-4 text-sm text-slate-400 font-semibold">
               <li><a href="#" className="hover:text-blue-400 transition-colors">Kho tài liệu</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Blog chia sẻ</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Hỗ trợ kỹ thuật</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Sự kiện</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-extrabold mb-6 text-white text-sm uppercase tracking-wider">Liên hệ</h4>
             <ul className="space-y-4 text-sm text-slate-400 font-semibold">
               <li className="flex flex-col">
                 <span className="text-slate-400 text-xs font-semibold">Email:</span>
                 <span className="text-slate-200 font-bold">contact@univision.global</span>
               </li>
               <li className="flex flex-col">
                 <span className="text-slate-400 text-xs font-semibold">Hotline:</span>
                 <span className="text-slate-200 font-bold">(84) 123 456 789</span>
               </li>
               <li className="flex flex-col">
                 <span className="text-slate-400 text-xs font-semibold">Địa chỉ:</span>
                 <span className="text-slate-200 font-bold">Quận 1, TP. Hồ Chí Minh, Việt Nam</span>
               </li>
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">
          <p>© 2024 Univision Global. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all shadow-sm">
      {icon}
    </a>
  );
}

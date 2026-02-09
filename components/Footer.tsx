import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 text-sm">
      {/* Top Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold uppercase tracking-wider">CÔNG TY TNHH TƯ VẤN VÀ ĐỊNH GIÁ CHÂU THÀNH</h3>
            <p className="leading-relaxed text-gray-300">
              CHAU THANH CONSULTING AND APPRAISAL COMPANY LIMITED — <span className="font-semibold text-[#D97706]">CTAPPRAISAL</span>
            </p>
            <p className="leading-relaxed text-gray-400">
              Đối tác tin cậy hàng đầu trong lĩnh vực Thẩm định giá và Tư vấn đầu tư. Cam kết <span className="text-[#D97706] font-semibold">Chính xác - Khách quan - Hiệu quả</span>.
            </p>
            <div className="pt-4 space-y-3">
               <p className="flex items-start gap-3">
                 <MapPin size={18} className="text-[#D97706] mt-0.5 shrink-0" />
                 <span>41 Trần Nhân Tôn, Quận 5 , Thành phố Hồ Chí Minh, Việt Nam</span>
               </p>
               <p className="flex items-center gap-3">
                 <Phone size={18} className="text-[#D97706] shrink-0" />
                 <span><a href="tel:0938300096" className="hover:text-white"> 0938.300.096</a> <br /> (Chủ tịch kiêm Tổng giám đốc : Nguyễn Nhân Quyền) <a href="tel:0909300096" className="hover:text-white"></a></span>
               </p>
               <p className="flex items-center gap-3">
                 <Mail size={18} className="text-[#D97706] shrink-0" />
                 <span><a href="mailto:info@chau-thanh.com.vn" className="hover:text-white">info@chau-thanh.com.vn</a></span>
               </p>
               <p className="flex items-center gap-3">
                 <span className="text-[#D97706] font-semibold">Website:</span>
                 <a href="https://www.chau-thanh.com.vn" className="hover:text-white">www.chau-thanh.com.vn</a>
               </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wide">Liên kết</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-[#D97706] transition flex items-center gap-2"><ArrowRight size={14}/> Trang chủ</Link></li>
              <li><Link href="/about" className="hover:text-[#D97706] transition flex items-center gap-2"><ArrowRight size={14}/> Giới thiệu</Link></li>
              <li><Link href="/services" className="hover:text-[#D97706] transition flex items-center gap-2"><ArrowRight size={14}/> Dịch vụ</Link></li>
              <li><Link href="/news" className="hover:text-[#D97706] transition flex items-center gap-2"><ArrowRight size={14}/> Tin tức</Link></li>
              <li><Link href="/contact" className="hover:text-[#D97706] transition flex items-center gap-2"><ArrowRight size={14}/> Liên hệ</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wide">Dịch vụ chính</h3>
            <ul className="space-y-3">
              <li className="hover:text-[#D97706] cursor-pointer">Thẩm định Bất động sản</li>
              <li className="hover:text-[#D97706] cursor-pointer">Thẩm định Máy móc thiết bị</li>
              <li className="hover:text-[#D97706] cursor-pointer">Xác định giá trị Doanh nghiệp</li>
              <li className="hover:text-[#D97706] cursor-pointer">Tư vấn Dự án đầu tư</li>
              <li className="hover:text-[#D97706] cursor-pointer">Bán đấu giá tài sản</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wide">Đăng ký nhận tin</h3>
            <p className="mb-4 text-gray-400">Nhận thông tin thị trường và báo giá mới nhất.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email của bạn" className="bg-[#1E293B] border border-gray-700 rounded px-3 py-2 w-full focus:outline-none focus:border-[#D97706]" />
              <button className="bg-[#D97706] text-white px-3 py-2 rounded hover:bg-orange-600 transition">Gửi</button>
            </div>
            <div className="mt-6 flex gap-4">
              <a href="#" className="p-2 bg-[#1E293B] rounded hover:bg-[#D97706] transition"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-[#1E293B] rounded hover:bg-[#D97706] transition"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-[#020617] py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Chau Thanh Valuation. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <span>Mã số thuế (MST): <span className="font-semibold text-white">0315094259</span></span>
            <a href="/privacy" className="hover:text-white">Chính sách bảo mật</a>
            <a href="/terms" className="hover:text-white">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

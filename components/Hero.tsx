import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0F172A] text-sm font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Đối tác tin cậy hàng đầu
          </div>
          
          <h1 className="text-[#D97706] md:text-6xl font-bold text-[#0F172A] leading-tight">
            Chính Xác <br/>
            Khách Quan <br/>
            <span className="text-[#D97706]">Hiệu Quả</span>
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-lg">
            Hệ thống thẩm định giá quy mô lớn với mạng lưới chi nhánh rộng khắp (TP.HCM, Tây Ninh, Vĩnh Long, An Giang...). Cam kết hỗ trợ nhanh chóng cho mọi nhu cầu định giá.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/services" className="px-8 py-3 bg-[#D97706] text-white rounded font-semibold hover:bg-orange-700 transition flex items-center justify-center gap-2">
              Dịch vụ của chúng tôi <ArrowRight size={18} />
            </Link>
            <Link href="/about" className="px-8 py-3 border border-gray-300 bg-white text-gray-700 rounded font-semibold hover:bg-gray-50 transition">
              Về Châu Thành
            </Link>
          </div>

          <div className="pt-8 flex items-center gap-6 text-sm text-gray-500 font-medium">
             <div className="flex items-center gap-2">
               <CheckCircle2 size={16} className="text-[#D97706]" /> 8+ Năm kinh nghiệm
             </div>
             <div className="flex items-center gap-2">
               <CheckCircle2 size={16} className="text-[#D97706]" /> Mạng lưới rộng khắp
             </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#0F172A] to-blue-900">
          <img 
            src="/img/anh1.png" 
            alt="Hồ sơ thẩm định giá"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
          />
          
          {/* Card nổi trang trí */}
          <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg max-w-[200px] z-10">
            <p className="text-[#0F172A] font-bold text-2xl">2.500+</p>
            <p className="text-gray-500 text-sm">Hồ sơ đã thẩm định</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
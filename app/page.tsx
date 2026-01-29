import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Branches from "../components/Branches";
import Footer from "../components/Footer";
import Link from "next/link";
import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Branches />

      {/* Trust & Stats Section */}
    
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Tại sao chọn Châu Thành?</h2>
            <div className="w-20 h-1 bg-[#D97706] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle2 className="w-12 h-12" />,
                title: 'Chính xác',
                desc: 'Kết quả định giá đạt tiêu chuẩn cao nhất',
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: 'Uy tín',
                desc: 'Được cấp có thẩm quyền công nhận',
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Chuyên gia',
                desc: 'Đội ngũ thẩm định viên giàu kinh nghiệm',
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: 'Hiệu quả',
                desc: 'Phục vụ nhanh chóng và hiệu quả',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg text-center border border-gray-200 hover:border-[#D97706] hover:shadow-lg transition-all group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#D97706] rounded-lg mb-4 group-hover:from-[#D97706] group-hover:to-orange-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

 <section className="py-20 bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-[#D97706] mb-2">8+</div>
              <p className="text-lg text-gray-300">Năm kinh nghiệm</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#D97706] mb-2">50+</div>
              <p className="text-lg text-gray-300">Nhân viên</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#D97706] mb-2">5</div>
              <p className="text-lg text-gray-300">Chi nhánh hoạt động</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#D97706] mb-2">1000+</div>
              <p className="text-lg text-gray-300">Khách hàng tin tưởng</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-6">
            Cần tư vấn hoặc định giá?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Liên hệ với Châu Thành ngay để nhận tư vấn từ các chuyên gia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#D97706] text-white rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Liên hệ ngay
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 border-2 border-[#0F172A] text-[#0F172A] rounded-lg font-semibold hover:bg-[#0F172A] hover:text-white transition"
            >
              Xem dịch vụ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
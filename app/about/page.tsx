import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, Award, Zap, FileText } from 'lucide-react';
import Link from "next/link";

export default function About() {
  const coreValues = [
    {
      id: 1,
      icon: <CheckCircle2 className="w-12 h-12" />,
      title: "Chính trực",
      description: "Cam kết độc lập, khách quan và tuân thủ các quy chuẩn pháp luật trong mọi công việc",
    },
    {
      id: 2,
      icon: <Award className="w-12 h-12" />,
      title: "Chuyên nghiệp",
      description: "Đội ngũ chuyên gia có kinh nghiệm sâu, được đào tạo bài bản và cập nhật kiến thức",
    },
    {
      id: 3,
      icon: <Zap className="w-12 h-12" />,
      title: "Hiệu quả",
      description: "Cung cấp giải pháp nhanh chóng, chính xác, đáp ứng nhu cầu khách hàng tối đa",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Header / Banner */}
      <section className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Về Chúng Tôi</h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-300">
            <Link href="/" className="hover:text-[#D97706] transition">Trang chủ</Link>
            <span className="text-[#D97706]">/</span>
            <span className="text-[#D97706]">Giới thiệu</span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-6">
              Lịch sử hình thành & Phát triển
            </h2>
            <div className="w-20 h-1 bg-[#D97706] mb-8"></div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <span className="font-bold text-[#0F172A]">Châu Thành Valuation</span> được thành lập vào năm <span className="font-semibold">2018</span>, 
                khởi đầu như một công ty tư vấn nhỏ với tầm nhìn cung cấp dịch vụ thẩm định giá chất lượng cao.
              </p>

              <p className="text-lg">
                Từ những năm đầu với đội ngũ hạn chế, chúng tôi đã phát triển thành một tổ chức lớn 
                với mạng lưới chi nhánh rộng khắp các tỉnh thành trọng điểm phía Nam Việt Nam. 
                Sự tăng trưởng này đến từ sự tin tưởng của khách hàng và cam kết không ngừng cải tiến chất lượng dịch vụ.
              </p>

              <p className="text-lg">
                Dưới sự lãnh đạo của <span className="font-semibold text-[#D97706]">Ông Nguyễn Nhân Quyền</span>, 
                Châu Thành Valuation không ngừng mở rộng thị trường, nâng cao năng lực chuyên môn, 
                và xây dựng uy tín trong ngành thẩm định giá Việt Nam.
              </p>

              <p className="text-lg">
                Ngày nay, chúng tôi tự hào là một trong những công ty thẩm định giá uy tín nhất, 
                với đội ngũ chuyên gia dày dạn kinh nghiệm, hệ thống quy trình khoa học, 
                và cam kết phục vụ khách hàng với tiêu chuẩn quốc tế.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0F172A] text-center mb-6">
            Giá trị Cốt lõi
          </h2>
          <div className="w-20 h-1 bg-[#D97706] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.id}
                className="group bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#D97706] transition-all duration-300 text-center shadow-sm hover:shadow-lg"
              >
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-lg mb-6 text-white group-hover:from-[#D97706] group-hover:to-orange-600 transition-all duration-300">
                  {value.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-[#D97706] transition-colors duration-300">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Profile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white rounded-lg p-12">
            <div className="flex items-center gap-4 mb-8">
              <FileText className="w-10 h-10 text-[#D97706]" />
              <h2 className="text-3xl font-bold">Thông tin Pháp lý</h2>
            </div>

            <div className="space-y-6 text-gray-200">
              <div className="border-b border-gray-700 pb-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Tên Doanh nghiệp</p>
                <p className="text-lg font-semibold">Công ty TNHH Tư vấn và Định giá Châu Thành</p>
              </div>

              <div className="border-b border-gray-700 pb-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Mã số Thuế</p>
                <p className="text-2xl font-bold text-[#D97706]">0315094259</p>
              </div>

              <div className="border-b border-gray-700 pb-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Ngày Thành lập</p>
                <p className="text-lg font-semibold">04/06/2018</p>
              </div>

              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Trụ sở Chính</p>
                <p className="text-lg">41 Trần Nhân Tôn, Quận 5, TP.HCM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Cần tư vấn hoặc thẩm định giá?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay để nhận tư vấn miễn phí từ các chuyên gia của Châu Thành.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#D97706] text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Liên hệ Ngay
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

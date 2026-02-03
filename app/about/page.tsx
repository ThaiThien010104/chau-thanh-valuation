import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, ShieldCheck, Database, FileCheck } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const coreValues = [
    {
      id: 1,
      icon: <Users className="w-12 h-12" />,
      title: "Khách hàng là trọng tâm",
      description: "Chúng tôi luôn đặt nhu cầu và lợi ích của khách hàng lên hàng đầu trong mọi hoạt động",
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Bảo mật tuyệt đối thông tin",
      description: "Cam kết bảo vệ tuyệt đối thông tin và dữ liệu của khách hàng với các biện pháp an ninh cao nhất",
    },
    {
      id: 3,
      icon: <Database className="w-12 h-12" />,
      title: "Cơ sở dữ liệu thị trường toàn diện",
      description: "Sở hữu cơ sở dữ liệu thị trường rộng khắp, được cập nhật liên tục để đảm bảo độ chính xác cao nhất",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Header / Banner */}
      <section className="bg-gradient-to-r from-[#003366] to-[#004d99] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Về Châu Thành</h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-300">
            <Link href="/" className="hover:text-[#FF9900] transition">Trang chủ</Link>
            <span className="text-[#FF9900]">/</span>
            <span className="text-[#FF9900]">Giới thiệu</span>
          </div>
        </div>
      </section>

      {/* About Us Section - Two Column Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/img/team-professional.png"
                alt="Đội ngũ Châu Thành Valuation"
                fill
                className="object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-8 left-8 bg-[#003366] text-white px-6 py-4 rounded-lg shadow-xl">
                <p className="text-sm uppercase tracking-wider mb-1 text-[#FF9900]">Thành lập năm</p>
                <p className="text-4xl font-bold">2018</p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              {/* Slogan */}
              <div className="mb-8">
                <p className="text-[#FF9900] font-bold text-xl mb-2 tracking-wide">THE VALUE</p>
                <p className="text-2xl font-semibold text-[#003366]">Khẳng định giá trị của bạn.</p>
              </div>

              <h2 className="text-4xl font-bold text-[#003366] mb-6">
                Về Châu Thành
              </h2>
              <div className="w-65 h-1 bg-[#FF9900] mb-8"></div>

              {/* Introduction */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Công ty TNHH Tư vấn và Định giá Châu Thành được thành lập năm 2018. 
                Chúng tôi phấn đấu trở thành một trong những nhà cung cấp dịch vụ thẩm định giá hàng đầu tại Việt Nam 
                với phương châm <span className="font-bold text-[#003366]">&quot;Chất lượng vượt trội - Tốc độ ưu việt&quot;</span>.
              </p>

              {/* Legal Capacity */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg border-l-4 border-[#FF9900] mb-8">
                <div className="flex items-start gap-4">
                  <FileCheck className="w-8 h-8 text-[#003366] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#003366] mb-2">Năng lực pháp lý</p>
                    <p className="text-gray-700">
                      Thẩm định viên được Bộ Tài chính cấp chứng chỉ hành nghề 
                      <span className="font-semibold text-[#FF9900]"> (Số 339/TĐG)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link 
                href="/services"
                className="inline-flex items-center gap-2 bg-[#FF9900] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#cc7a00] transition shadow-lg"
              >
                Xem dịch vụ của chúng tôi
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#003366] text-center mb-6">
            Giá trị Cốt lõi
          </h2>
          <div className="w-60 h-1 bg-[#FF9900] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.id}
                className="group bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#FF9900] transition-all duration-300 text-center shadow-sm hover:shadow-lg"
              >
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#003366] to-[#004d99] rounded-lg mb-6 text-white group-hover:from-[#FF9900] group-hover:to-[#cc7a00] transition-all duration-300">
                  {value.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#003366] mb-4 group-hover:text-[#FF9900] transition-colors duration-300">
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
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#003366] to-[#004d99] text-white rounded-lg p-12 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <FileCheck className="w-10 h-10 text-[#FF9900]" />
              <h2 className="text-3xl font-bold">Thông tin Pháp lý</h2>
            </div>

            <div className="space-y-6 text-gray-200">
              <div className="border-b border-gray-700 pb-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Tên Doanh nghiệp</p>
                <p className="text-lg font-semibold">Công ty TNHH Tư vấn và Định giá Châu Thành</p>
                <p className="text-sm text-gray-400 mt-1">(CHAU THANH CONSULTING AND APPRAISAL COMPANY LIMITED - CTAPPRAISAL)</p>
              </div>

              <div className="border-b border-gray-700 pb-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Mã số Thuế</p>
                <p className="text-2xl font-bold text-[#FF9900]">0315094259</p>
              </div>

              <div className="border-b border-gray-700 pb-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Ngày Thành lập</p>
                <p className="text-lg font-semibold">04/06/2018</p>
              </div>

              <div className="border-b border-gray-700 pb-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Giấy phép hành nghề</p>
                <p className="text-lg font-semibold">Số 339/TĐG - Bộ Tài chính</p>
              </div>

              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Trụ sở Chính</p>
                <p className="text-lg">30/1F Ấp Đông, Xã Thới Tam Thôn, Huyện Hóc Môn, TP.HCM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-4">
            Cần tư vấn hoặc thẩm định giá?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay để nhận tư vấn miễn phí từ các chuyên gia của Châu Thành.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#FF9900] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#cc7a00] transition shadow-lg"
          >
            Liên hệ Ngay
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

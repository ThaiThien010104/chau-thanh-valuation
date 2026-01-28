import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, Truck, Briefcase, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const serviceCards = [
    {
      id: 1,
      title: 'Bất Động Sản',
      icon: <Home className="w-12 h-12" />,
      items: [
        'Nhà phố',
        'Biệt thự',
        'Đất đai',
        'Dự án khu dân cư',
        'Cao ốc văn phòng',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Động Sản',
      icon: <Truck className="w-12 h-12" />,
      items: [
        'Máy móc thiết bị',
        'Dây chuyền sản xuất',
        'Phương tiện vận tải',
        'Tàu thuyền',
        'Xe cơ giới',
      ],
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 3,
      title: 'Giá trị Doanh Nghiệp',
      icon: <Briefcase className="w-12 h-12" />,
      items: [
        'Xác định giá trị doanh nghiệp',
        'Cổ phần hóa',
        'Mua bán sáp nhập (M&A)',
        'Tài sản vô hình',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 4,
      title: 'Dự Án Đầu Tư',
      icon: <FileText className="w-12 h-12" />,
      items: [
        'Đấu giá tài sản',
        'Chứng minh tài chính',
        'Tư vấn dự án',
        'Thẩm định hiện trạng',
      ],
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Dịch vụ Thẩm định giá</h1>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-300">
            <Link href="/" className="hover:text-[#D97706] transition">
              Trang chủ
            </Link>
            <span className="text-[#D97706]">/</span>
            <span className="text-[#D97706]">Dịch vụ</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
              Giải pháp Thẩm định giá Toàn diện
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Châu Thành Valuation cung cấp các dịch vụ thẩm định giá chuyên nghiệp, 
              tuân thủ <span className="font-semibold text-[#D97706]">Tiêu chuẩn Thẩm định giá Việt Nam</span> và 
              các chuẩn mực quốc tế. Với đội ngũ chuyên gia dày dạn kinh nghiệm, 
              chúng tôi đảm bảo độ chính xác, khách quan và hiệu quả trong mỗi dự án.
            </p>
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCards.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-[#D97706] hover:shadow-2xl transition-all duration-300"
              >
                {/* Header with Color */}
                <div
                  className={`bg-gradient-to-r ${service.color} text-white p-8 flex items-center gap-4`}
                >
                  <div className="flex-shrink-0 bg-white bg-opacity-20 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h4 className="text-sm uppercase tracking-widest font-semibold text-gray-500 mb-4">
                    Lĩnh vực chuyên môn
                  </h4>

                  {/* Service Items List */}
                  <ul className="space-y-3 mb-6">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[#D97706] font-bold mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <div className="pt-4 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[#D97706] font-semibold hover:gap-3 transition-all"
                    >
                      Tư vấn chi tiết
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-12">
            Quy trình Thẩm định giá
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Tiếp nhận', description: 'Tiếp nhận yêu cầu và thông tin chi tiết' },
              { step: '02', title: 'Khảo sát', description: 'Khảo sát và thu thập dữ liệu hiện trạng' },
              { step: '03', title: 'Phân tích', description: 'Phân tích và định giá theo tiêu chuẩn' },
              { step: '04', title: 'Báo cáo', description: 'Lập báo cáo chuyên nghiệp và bàn giao' },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white rounded-full font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2">{process.title}</h3>
                <p className="text-sm text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0F172A] text-center mb-12">
            Tại sao chọn Châu Thành?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Chuyên Gia Giàu Kinh Nghiệm',
                description: 'Đội ngũ thẩm định viên được đào tạo bài bản, có chứng chỉ quốc tế',
              },
              {
                title: 'Tiêu Chuẩn Quốc Tế',
                description: 'Tuân thủ Tiêu chuẩn Thẩm định giá Việt Nam và chuẩn mực quốc tế',
              },
              {
                title: 'Dịch Vụ Toàn Diện',
                description: 'Đáp ứng mọi nhu cầu thẩm định giá: BĐS, Động sản, Doanh nghiệp',
              },
              {
                title: 'Kết Quả Chính Xác',
                description: 'Kết quả được cấp có thẩm quyền thừa nhận và tin tưởng',
              },
              {
                title: 'Mạng Lưới Rộng',
                description: 'Hoạt động tại TP.HCM, Tây Ninh, Vĩnh Long, An Giang, Bình Dương',
              },
              {
                title: 'Hỗ Trợ Tư Vấn',
                description: 'Tư vấn miễn phí về giải pháp thẩm định giá phù hợp với nhu cầu',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#D97706] transition">
                <h3 className="font-bold text-[#0F172A] mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F172A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Bạn cần tư vấn hồ sơ gấp?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi ngay để nhận tư vấn miễn phí từ các chuyên gia của Châu Thành
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#D97706] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition transform hover:scale-105"
          >
            Liên hệ ngay
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

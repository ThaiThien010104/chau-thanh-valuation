import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, Truck, Briefcase, FileText, ArrowRight, ClipboardCheck, FileSearch, MapPin, MessageSquare, FileEdit, Send, Scale, DollarSign, TrendingUp, Layers, Target, Building2, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const serviceCards = [
    {
      id: 1,
      title: 'Bất Động Sản',
      icon: <img src="/img/batdongsan.png" alt="Bất Động Sản" className="w-15 h-15 object-cover" />,
      items: [
        'Nhà phố',
        'Biệt thự',
        'Đất đai',
        'Dự án khu dân cư',
        'Cao ốc văn phòng',
      ],
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      icon: <img src="/img/dongsan.png" alt="Động Sản" className="w-15 h-15 object-cover" />,
      title: 'Động Sản',
      items: [
        'Máy móc thiết bị',
        'Dây chuyền sản xuất',
        'Phương tiện vận tải',
        'Tàu thuyền',
        'Xe cơ giới',
      ],
      color: 'from-orange-400 to-orange-600',
    },
    {
      id: 3,
      title: 'Giá trị Doanh Nghiệp',
       icon: <img src="/img/giatridoanhnghiep.png" alt="Doanh Nghiệp" className="w-15 h-15 object-cover" />,
      items: [
        'Xác định giá trị doanh nghiệp',
        'Cổ phần hóa',
        'Mua bán sáp nhập (M&A)',
        'Tài sản vô hình',
      ],
      color: 'from-purple-400 to-purple-600',
    },
    {
      id: 4,
      title: 'Dự Án Đầu Tư',
      icon: <img src="/img/duandautu.png" alt="Dự Án Đầu Tư" className="w-15 h-15 object-cover" />,
      items: [
        'Đấu giá tài sản',
        'Chứng minh tài chính',
        'Tư vấn dự án',
        'Thẩm định hiện trạng',
      ],
      color: 'from-green-400 to-green-600',
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
                  <div className="flex-shrink-0 bg-opacity-20 p-3 rounded-lg">
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

      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003366] mb-4">
              Dự án Tiêu biểu
            </h2>
            <div className="w-20 h-1 bg-[#FF9900] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Châu Thành Valuation đã thẩm định giá cho nhiều dự án lớn tại Việt Nam, 
              từ bất động sản cao cấp đến hệ thống nhà máy công nghiệp
            </p>
          </div>

          {/* Real Estate Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#003366] mb-8 flex items-center gap-3">
              <Building2 className="w-8 h-8 text-[#FF9900]" />
              Bất Động Sản
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { id: 1, name: 'SJC Tower', location: 'TP.HCM', image: '/img/bds1.jpg' },
                { id: 2, name: 'Diamond Island Apartment', location: 'Đảo Kim Cương', image: '/img/bds2.jpeg' },
                { id: 3, name: 'Lim Tower', location: 'TP.HCM', image: '/img/bds3.png' },
                { id: 4, name: 'Cantavil An Phu', location: 'TP.HCM', image: '/img/bds4.jpg' },
                { id: 5, name: 'Diamond Bay Resort', location: 'Khánh Hòa', image: '/img/bds5.jpg' },
                { id: 6, name: 'Six Senses Hideaway Ninh Van Bay', location: 'Ninh Bình', image: '/img/bds6.jpg' },
              ].map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#FF9900]"
                >
                  {/* Image Container */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {project.image && !project.image.includes('real-estate') ? (
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#003366] to-[#004d99] opacity-10"></div>
                        <Building2 className="w-16 h-16 text-[#003366] opacity-50" />
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="font-bold text-[#003366] text-lg mb-2 group-hover:text-[#FF9900] transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-[#FF9900]" />
                      {project.location}
                    </p>
                    <div className="inline-block px-3 py-1 bg-blue-100 text-[#003366] text-xs font-semibold rounded-full">
                      Bất Động Sản
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industrial & Machinery Projects */}
          <div>
            <h3 className="text-2xl font-bold text-[#003366] mb-8 flex items-center gap-3">
              <Zap className="w-8 h-8 text-[#FF9900]" />
              Động Sản & Nhà Máy
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { id: 1, name: 'Saigon Factory Outlet Mall', location: 'TP.HCM', image: '/img/ds1.jpg' },
                { id: 2, name: 'Hệ thống dây chuyền nhà máy Gạch Tuynel', location: 'Bình Dương', image: '/img/ds2.jpg' },
                { id: 3, name: 'Máy móc thiết bị ngành Y tế & Dệt may', location: 'TPHCM', image: '/img/ds3.jpg' },
              ].map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#FF9900]"
                >
                  {/* Image Container */}
                  <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-200 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {project.image && !project.image.includes('industrial') ? (
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#003366] to-[#004d99] opacity-10"></div>
                        <Zap className="w-16 h-16 text-[#FF9900] opacity-50" />
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="font-bold text-[#003366] text-lg mb-2 group-hover:text-[#FF9900] transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-[#FF9900]" />
                      {project.location}
                    </p>
                    <div className="inline-block px-3 py-1 bg-orange-100 text-[#FF9900] text-xs font-semibold rounded-full">
                      Động Sản & Nhà Máy
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl border-2 border-[#003366] shadow-lg">
              <div className="text-4xl font-bold text-[#FF9900] mb-2">100+</div>
              <p className="text-gray-600 font-semibold">Dự án đã thẩm định</p>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-[#003366] shadow-lg">
              <div className="text-4xl font-bold text-[#FF9900] mb-2">50+</div>
              <p className="text-gray-600 font-semibold">Dự án bất động sản cao cấp</p>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-[#003366] shadow-lg">
              <div className="text-4xl font-bold text-[#FF9900] mb-2">30+</div>
              <p className="text-gray-600 font-semibold">Dự án động sản & nhà máy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valuation Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003366] mb-4">
              Quy trình Thẩm định giá
            </h2>
            <div className="w-20 h-1 bg-[#FF9900] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quy trình thẩm định giá chuyên nghiệp, tuân thủ tiêu chuẩn Việt Nam và quốc tế, 
              đảm bảo tính chính xác và khách quan cao nhất.
            </p>
          </div>

          {/* Desktop - Horizontal Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="grid grid-cols-6 gap-4 relative">
                {[
                  {
                    step: '01',
                    icon: <ClipboardCheck className="w-8 h-8" />,
                    title: 'Tiếp nhận yêu cầu',
                    titleEn: 'Receive Request',
                    description: 'Tiếp nhận thông tin và yêu cầu thẩm định từ khách hàng',
                  },
                  {
                    step: '02',
                    icon: <FileSearch className="w-8 h-8" />,
                    title: 'Phân tích sơ bộ & Lên kế hoạch',
                    titleEn: 'Preliminary Analysis & Planning',
                    description: 'Phân tích hồ sơ, phạm vi và lập kế hoạch triển khai',
                  },
                  {
                    step: '03',
                    icon: <MapPin className="w-8 h-8" />,
                    title: 'Triển khai thẩm định & Khảo sát thực tế',
                    titleEn: 'Site Survey & Valuation',
                    description: 'Khảo sát thực tế và thu thập dữ liệu tài sản',
                  },
                  {
                    step: '04',
                    icon: <MessageSquare className="w-8 h-8" />,
                    title: 'Lựa chọn phương pháp & Hội ý chuyên gia',
                    titleEn: 'Method Selection & Expert Consultation',
                    description: 'Chọn phương pháp phù hợp và hội ý chuyên gia',
                  },
                  {
                    step: '05',
                    icon: <FileEdit className="w-8 h-8" />,
                    title: 'Lên dự thảo & Kiểm soát chất lượng',
                    titleEn: 'Drafting & QC',
                    description: 'Lên dự thảo báo cáo và kiểm soát chất lượng',
                  },
                  {
                    step: '06',
                    icon: <Send className="w-8 h-8" />,
                    title: 'Phát hành chứng thư & Gửi khách hàng',
                    titleEn: 'Issue Certificate & Delivery',
                    description: 'Phát hành chứng thư và bàn giao cho khách hàng',
                  },
                ].map((process, index) => (
                  <div key={index} className="relative">
                    {/* Step Card */}
                    <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-[#003366] transition-all duration-300 p-6 text-center group hover:shadow-2xl">
                      {/* Step Number Badge */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#003366] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                        {process.step}
                      </div>

                      {/* Icon */}
                      <div className="mt-8 mb-4 inline-flex items-center justify-center w-16 h-16 bg-[#003366] text-white rounded-xl transition-all duration-300">
                        {process.icon}
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-[#003366] mb-1 text-base">
                        {process.title}
                      </h3>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">
                        {process.titleEn}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {process.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    {index < 5 && (
                      <div className="absolute top-1/2 -right-5 z-10 -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-[#003366]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile - Vertical Timeline */}
          <div className="lg:hidden space-y-6">
            {[
              {
                step: '01',
                icon: <ClipboardCheck className="w-8 h-8" />,
                title: 'Tiếp nhận yêu cầu',
                titleEn: 'Receive Request',
                description: 'Tiếp nhận thông tin và yêu cầu thẩm định từ khách hàng',
              },
              {
                step: '02',
                icon: <FileSearch className="w-8 h-8" />,
                title: 'Phân tích sơ bộ & Lên kế hoạch',
                titleEn: 'Preliminary Analysis & Planning',
                description: 'Phân tích hồ sơ, phạm vi và lập kế hoạch triển khai',
              },
              {
                step: '03',
                icon: <MapPin className="w-8 h-8" />,
                title: 'Triển khai thẩm định & Khảo sát thực tế',
                titleEn: 'Site Survey & Valuation',
                description: 'Khảo sát thực tế và thu thập dữ liệu tài sản',
              },
              {
                step: '04',
                icon: <MessageSquare className="w-8 h-8" />,
                title: 'Lựa chọn phương pháp & Hội ý chuyên gia',
                titleEn: 'Method Selection & Expert Consultation',
                description: 'Chọn phương pháp phù hợp và hội ý chuyên gia',
              },
              {
                step: '05',
                icon: <FileEdit className="w-8 h-8" />,
                title: 'Lên dự thảo & Kiểm soát chất lượng',
                titleEn: 'Drafting & QC',
                description: 'Lên dự thảo báo cáo và kiểm soát chất lượng',
              },
              {
                step: '06',
                icon: <Send className="w-8 h-8" />,
                title: 'Phát hành chứng thư & Gửi khách hàng',
                titleEn: 'Issue Certificate & Delivery',
                description: 'Phát hành chứng thư và bàn giao cho khách hàng',
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="flex gap-4">
                  {/* Left - Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#003366] text-white rounded-xl flex items-center justify-center shadow-lg">
                      {process.icon}
                    </div>
                    <div className="mt-2 text-center">
                      <span className="inline-block px-3 py-1 bg-[#003366] text-white text-sm font-bold rounded-full">
                        {process.step}
                      </span>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="flex-grow bg-white rounded-lg border-2 border-gray-200 p-4 shadow-sm hover:border-[#003366] hover:shadow-lg transition-all">
                    <h3 className="font-bold text-[#003366] mb-1">
                      {process.title}
                    </h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                      {process.titleEn}
                    </p>
                    <p className="text-sm text-gray-600">
                      {process.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < 5 && (
                  <div className="ml-8 h-6 w-1 bg-[#003366]"></div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-[#003366] to-[#004d99] text-white px-8 py-6 rounded-2xl shadow-xl">
              <p className="text-lg font-semibold mb-2">⏱️ Thời gian hoàn thành trung bình: 5-7 ngày làm việc</p>
              <p className="text-sm text-gray-300">* Tùy thuộc vào độ phức tạp của tài sản cần thẩm định</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valuation Methods Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#003366] mb-4">
              Các Phương Pháp Thẩm Định
            </h2>
            <div className="w-20 h-1 bg-[#FF9900] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Áp dụng linh hoạt phù hợp với <span className="font-semibold text-[#003366]">Hệ thống Tiêu chuẩn Thẩm định giá Việt Nam (TĐGVN)</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                id: 1,
                icon: <Scale className="w-8 h-8" />,
                title: 'Phương pháp So sánh',
                titleEn: 'Comparison Method',
                gradient: 'from-blue-500 to-blue-600',
              },
              {
                id: 2,
                icon: <DollarSign className="w-8 h-8" />,
                title: 'Phương pháp Chi phí',
                titleEn: 'Cost Method',
                gradient: 'from-green-500 to-green-600',
              },
              {
                id: 3,
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Phương pháp Thu nhập',
                titleEn: 'Income Method',
                gradient: 'from-purple-500 to-purple-600',
              },
              {
                id: 4,
                icon: <Layers className="w-8 h-8" />,
                title: 'Phương pháp Thặng dư',
                titleEn: 'Residual Method',
                gradient: 'from-orange-500 to-orange-600',
              },
              {
                id: 5,
                icon: <Target className="w-8 h-8" />,
                title: 'Phương pháp Lợi nhuận',
                titleEn: 'Profit Method',
                gradient: 'from-red-500 to-red-600',
              },
            ].map((method) => (
              <div
                key={method.id}
                className="group bg-white rounded-xl border-2 border-gray-200 hover:border-[#003366] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
              >
                {/* Icon Header */}
                <div className={`bg-gradient-to-br ${method.gradient} p-6 flex items-center justify-center`}>
                  <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <div className="mb-2 inline-flex items-center justify-center w-10 h-10 bg-[#003366] text-white rounded-full text-lg font-bold shadow-md">
                    {method.id}
                  </div>
                  <h3 className="font-bold text-[#003366] text-base mb-2 group-hover:text-[#FF9900] transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    {method.titleEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Standards Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-white border-2 border-[#003366] px-6 py-4 rounded-full shadow-lg">
              <div className="w-3 h-3 bg-[#00FF00] rounded-full animate-pulse"></div>
              <p className="text-sm font-semibold text-[#003366]">
                ✓ Tuân thủ đầy đủ Hệ thống Tiêu chuẩn Thẩm định giá Việt Nam
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
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
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-[#FF9900] transition-all hover:shadow-lg">
                <h3 className="font-bold text-[#003366] mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#003366] to-[#004d99] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Bạn cần tư vấn hồ sơ gấp?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi ngay để nhận tư vấn từ các chuyên gia của Châu Thành
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#FF9900] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#cc7a00] transition transform hover:scale-105 shadow-xl"
          >
            Liên hệ ngay
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

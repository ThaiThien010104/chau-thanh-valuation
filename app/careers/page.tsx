'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, TrendingUp, Heart, Briefcase, MapPin, Clock, ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Careers() {
  const benefits = [
    {
      id: 1,
      icon: <Users className="w-12 h-12" />,
      title: 'Môi trường chuyên nghiệp',
      description: 'Làm việc với những chuyên gia giàu kinh nghiệm trong ngành thẩm định giá',
    },
    {
      id: 2,
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Đào tạo chuyên sâu',
      description: 'Cơ hội học hỏi liên tục, cập nhật kiến thức và kỹ năng chuyên môn',
    },
    {
      id: 3,
      icon: <Heart className="w-12 h-12" />,
      title: 'Phúc lợi hấp dẫn',
      description: 'Lương, thưởng, bảo hiểm, và các quyền lợi xã hội đầy đủ',
    },
    {
      id: 4,
      icon: <Briefcase className="w-12 h-12" />,
      title: 'Cơ hội thăng tiến',
      description: 'Con đường sự nghiệp rõ ràng, phát triển kỹ năng và lãnh đạo',
    },
  ];

  const jobs = [
    {
      id: 1,
      title: 'Chuyên viên Thẩm định Bất động sản',
      location: 'TP.HCM',
      type: 'Full-time',
      description:
        'Tìm kiếm chuyên gia thẩm định bất động sản có chứng chỉ và kinh nghiệm từ 2 năm trở lên',
      requirements: [
        'Có chứng chỉ thẩm định viên',
        'Kinh nghiệm từ 2 năm',
        'Thành thạo các phương pháp định giá',
      ],
    },
    {
      id: 2,
      title: 'Cộng tác viên Kinh doanh',
      location: 'Tp.HCM',
      type: 'Part-time',
      description: 'Tìm cộng tác viên phát triển khách hàng mới tại khu vực TP.HCM',
      requirements: [
        'Kỹ năng giao tiếp tốt',
        'Có kinh nghiệm bán hàng/kinh doanh',
        'Thành thạo công nghệ',
      ],
    },
    {
      id: 3,
      title: 'Nhân viên Hành chính Nhân sự',
      location: 'Bình Dương',
      type: 'Full-time',
      description: 'Tuyển nhân viên HCNS hỗ trợ các hoạt động hành chính tại chi nhánh Bình Dương',
      requirements: [
        'Tốt nghiệp THPT trở lên',
        'Kỹ năng văn phòng tốt',
        'Có kinh nghiệm HCNS là lợi thế',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Header Banner */}
      <section className="relative bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-900"></div>
        </div>

        <div className="relative container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tuyển Dụng</h1>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-300">
            <Link href="/" className="hover:text-[#D97706] transition">
              Trang chủ
            </Link>
            <span className="text-[#D97706]">/</span>
            <span className="text-[#D97706]">Tuyển dụng</span>
          </div>

          {/* Intro Text */}
          <p className="mt-8 text-lg text-gray-200 max-w-2xl">
            Châu Thành đang tìm kiếm những tài năng yêu thích thẩm định giá để gia nhập đội ngũ của chúng tôi
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Tại sao chọn Châu Thành?</h2>
            <div className="w-20 h-1 bg-[#D97706] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-[#D97706] hover:shadow-lg transition-all group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#D97706] rounded-lg mb-6 group-hover:from-[#D97706] group-hover:to-orange-600 group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#D97706] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Vị trí đang tuyển</h2>
            <div className="w-20 h-1 bg-[#D97706] mx-auto"></div>
            <p className="mt-4 text-gray-600">
              Xem các vị trí tuyển dụng hiện có tại Châu Thành
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg border border-gray-200 p-8 hover:border-[#D97706] hover:shadow-xl transition-all group"
              >
                {/* Job Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-2 group-hover:text-[#D97706] transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-600">{job.description}</p>
                  </div>

                  <Link
                    href="/contact"
                    className="flex-shrink-0 px-6 py-3 bg-[#D97706] text-white rounded-lg font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    Xem chi tiết
                    <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Job Info */}
                <div className="flex flex-col sm:flex-row gap-6 pb-6 border-b border-gray-200 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <MapPin size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Địa điểm</p>
                      <p className="font-semibold text-[#0F172A]">{job.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Clock size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Loại hợp đồng</p>
                      <p className="font-semibold text-[#0F172A]">{job.type}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Briefcase size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Yêu cầu</p>
                      <p className="font-semibold text-[#0F172A]">{job.requirements.length} điều kiện</p>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="font-bold text-[#0F172A] mb-3">Yêu cầu:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">
                        <span className="text-[#D97706] font-bold mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Send CV */}
      <section className="py-20 bg-[#0F172A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Mail className="w-16 h-16 mx-auto mb-6 text-[#D97706]" />

            <h2 className="text-4xl font-bold mb-4">
              Bạn chưa tìm thấy vị trí phù hợp?
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Đừng bỏ lỡ cơ hội! Hãy gửi CV của bạn cho chúng tôi. Chúng tôi sẽ xem xét và liên hệ nếu có vị trí phù hợp.
            </p>

            <div className="bg-white rounded-lg p-8 text-center max-w-2xl mx-auto">
              <p className="text-gray-600 mb-2 font-semibold">Gửi CV của bạn đến:</p>
              <a
                href="mailto:tuyendung@chauthanh.vn"
                className="inline-flex items-center gap-2 text-2xl font-bold text-[#D97706] hover:text-orange-600 transition"
              >
                <Mail size={28} />
                tuyendung@chauthanh.vn
              </a>
              <p className="text-gray-500 text-sm mt-4">
                Vui lòng kèm theo thông tin chi tiết về kinh nghiệm và trình độ của bạn
              </p>
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {[
                { number: '50+', label: 'Nhân viên' },
                { number: '5', label: 'Chi nhánh' },
                { number: '100%', label: 'Chuyên nghiệp' },
              ].map((stat, index) => (
                <div key={index} className="p-6">
                  <div className="text-4xl font-bold text-[#D97706] mb-2">{stat.number}</div>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

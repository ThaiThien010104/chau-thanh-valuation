'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeft, ChevronRight, Calendar, Folder } from 'lucide-react';
import Link from 'next/link';

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);

  const newsItems = [
    {
      id: 1,
      title: 'Thị trường BĐS TP.HCM Quý 1/2026 - Dấu hiệu khởi sắc',
      date: '20/01/2026',
      category: 'Thị trường',
      excerpt: 'Theo báo cáo mới nhất từ Châu Thành Valuation, thị trường bất động sản TP.HCM đang cho thấy những dấu hiệu khởi sắc trong quý đầu năm 2026...',
    },
    {
      id: 2,
      title: 'Quy định mới về Thẩm định giá đất có hiệu lực từ tháng 2',
      date: '15/01/2026',
      category: 'Quy định',
      excerpt: 'Bộ Tài nguyên và Môi trường vừa công bố quy định mới về thẩm định giá đất, có hiệu lực từ ngày 1/2/2026. Các thẩm định viên cần chú ý...',
    },
    {
      id: 3,
      title: 'Châu Thành khai trương chi nhánh mới tại Bình Dương',
      date: '10/01/2026',
      category: 'Nội bộ',
      excerpt: 'Công ty TNHH Tư vấn và Định giá Châu Thành vừa khai trương chi nhánh mới tại Bình Dương, mở rộng mạng lưới phục vụ khách hàng...',
    },
    {
      id: 4,
      title: 'Xu hướng phát triển bất động sản công nghiệp năm 2026',
      date: '05/01/2026',
      category: 'Thị trường',
      excerpt: 'Bất động sản công nghiệp tiếp tục là lĩnh vực hút vốn đầu tư lớn trong năm 2026. Các khu công nghiệp tiếp tục mở rộng và nâng cấp...',
    },
    {
      id: 5,
      title: 'Hướng dẫn thẩm định giá máy móc thiết bị cũ',
      date: '28/12/2025',
      category: 'Tư vấn',
      excerpt: 'Châu Thành Valuation chia sẻ hướng dẫn chi tiết về cách thẩm định giá máy móc thiết bị cũ theo tiêu chuẩn quốc tế...',
    },
    {
      id: 6,
      title: 'M&A 2026: Cơ hội và thách thức trong định giá doanh nghiệp',
      date: '20/12/2025',
      category: 'Tư vấn',
      excerpt: 'Với nhiều thương vụ sáp nhập dự kiến diễn ra, định giá doanh nghiệp chính xác là yếu tố quyết định. Chuyên gia Châu Thành chia sẻ...',
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = newsItems.slice(startIndex, startIndex + itemsPerPage);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Thị trường': 'bg-blue-100 text-blue-700',
      'Quy định': 'bg-red-100 text-red-700',
      'Nội bộ': 'bg-green-100 text-green-700',
      'Tư vấn': 'bg-purple-100 text-purple-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tin tức & Sự kiện</h1>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-300">
            <Link href="/" className="hover:text-[#D97706] transition">
              Trang chủ
            </Link>
            <span className="text-[#D97706]">/</span>
            <span className="text-[#D97706]">Tin tức</span>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-2">
              Cập nhật tin tức mới nhất
            </h2>
            <p className="text-gray-600">
              Theo dõi những thông tin, thị trường, quy định và sự kiện mới nhất từ Châu Thành
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {paginatedItems.map((news) => (
              <div
                key={news.id}
                className="group rounded-lg overflow-hidden border border-gray-200 hover:border-[#D97706] hover:shadow-xl transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] to-blue-900 opacity-80 flex items-center justify-center text-white/20 text-4xl font-bold">
                    IMG
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`inline-block px-3 py-1 rounded text-xs font-semibold ${getCategoryColor(
                        news.category
                      )}`}
                    >
                      {news.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar size={14} />
                    <span>{news.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 line-clamp-2 group-hover:text-[#D97706] transition-colors">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={`/news/${news.id}`}
                    className="inline-flex items-center text-[#D97706] font-semibold text-sm hover:gap-2 transition-all group-hover:text-orange-600"
                  >
                    Đọc thêm
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 py-8">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                  currentPage === page
                    ? 'bg-[#D97706] text-white'
                    : 'border border-gray-300 text-[#0F172A] hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Muốn nhận thông tin mới nhất?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Đăng ký nhận thông báo về các tin tức, quy định, và sự kiện mới nhất từ Châu Thành Valuation
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent"
            />
            <button className="px-6 py-3 bg-[#D97706] text-white font-semibold rounded-lg hover:bg-orange-600 transition whitespace-nowrap">
              Đăng ký
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, Folder, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Mock data for news articles
const newsDatabase = [
  {
    id: '1',
    title: 'Thị trường BĐS TP.HCM Quý 1/2026 - Dấu hiệu khởi sắc',
    date: '20/01/2026',
    category: 'Thị trường',
    author: 'Nguyễn Nhân Quyền',
    content: `
      <p>Theo báo cáo mới nhất từ Châu Thành Valuation, thị trường bất động sản TP.HCM đang cho thấy những dấu hiệu khởi sắc trong quý đầu năm 2026. Với sự phục hồi của nền kinh tế, các dự án bất động sản tiếp tục thu hút sự quan tâm của các nhà đầu tư.</p>

      <h3>Tình hình chung của thị trường</h3>
      <p>Thị trường bất động sản TP.HCM trong quý I/2026 đã cho thấy những tín hiệu tích cực. Giá bán các căn hộ cao cấp tăng nhẹ so với quý trước, trong khi giá cho thuê vẫn duy trì ổn định. Nhu cầu từ phía người mua cũng có sự cải thiện đáng kể.</p>

      <p>Các dự án mới được khởi công với tốc độ nhanh hơn, đặc biệt ở các khu vực như Bình Thạnh, Quận 7, và Long Biên. Nhà đầu tư nước ngoài cũng bắt đầu quay trở lại thị trường sau thời gian dài rút lui.</p>

      <h3>Phân tích chi tiết theo phân khúc</h3>
      <p><strong>Căn hộ cao cấp:</strong> Phân khúc này tiếp tục là mục tiêu của các nhà đầu tư. Giá trung bình tăng từ 5-10% so với năm trước. Nhu cầu chủ yếu đến từ các nhà đầu tư muốn mua để cho thuê.</p>

      <p><strong>Nhà phố thương mại:</strong> Hoạt động khá sôi động với giá tăng trung bình 8-12%. Các nhà phố tại vị trí chiến lược gần các trung tâm thương mại được ưu tiên.</p>

      <p><strong>Đất nền:</strong> Giá đất nền tại các khu vực ngoại thành tiếp tục tăng do nhu cầu quy hoạch hạ tầng. Các vị trí gần tuyến metro được giao dịch với mức giá cao nhất.</p>

      <h3>Dự báo cho các quý tiếp theo</h3>
      <p>Châu Thành Valuation dự báo thị trường bất động sản TP.HCM sẽ tiếp tục duy trì động lực tăng trưởng trong các quý tiếp theo. Các yếu tố chính bao gồm:</p>

      <ul>
        <li>Dự kiến hoàn thành các dự án hạ tầng lớn</li>
        <li>Chính sách hỗ trợ tín dụng từ các ngân hàng</li>
        <li>Nhu cầu nhà ở từ lực lượng lao động trẻ tăng</li>
        <li>Sự gia tăng các dự án bất động sản bán lẻ (retail)</li>
      </ul>

      <p>Tuy nhiên, nhà đầu tư cần cẩn thận với các rủi ro tiềm ẩn như sự biến động của tỷ giá, chính sách tiền tệ có thể thay đổi, và sự cạnh tranh gia tăng giữa các dự án.</p>

      <p>Để có được quyết định đầu tư sáng suốt, các nhà đầu tư nên tham khảo ý kiến từ các chuyên gia định giá uy tín như Châu Thành Valuation.</p>
    `,
  },
  {
    id: '2',
    title: 'Quy định mới về Thẩm định giá đất có hiệu lực từ tháng 2',
    date: '15/01/2026',
    category: 'Quy định',
    author: 'Trần Minh Hải',
    content: `
      <p>Bộ Tài nguyên và Môi trường vừa công bố quy định mới về thẩm định giá đất, có hiệu lực từ ngày 1/2/2026. Đây là bản cập nhật quan trọng so với quy định hiện hành.</p>

      <h3>Những thay đổi chính</h3>
      <p>Quy định mới bao gồm các thay đổi quan trọng trong phương pháp thẩm định giá, tiêu chuẩn chất lượng, và quy trình cấp chứng chỉ cho thẩm định viên.</p>

      <h3>Ảnh hưởng đến các nhà đầu tư</h3>
      <p>Các nhà đầu tư bất động sản cần chuẩn bị cho các thay đổi này để đảm bảo tuân thủ quy định và tránh các rủi ro pháp lý.</p>

      <p>Châu Thành Valuation sẽ cập nhật toàn bộ quy trình thẩm định của mình theo quy định mới này.</p>
    `,
  },
  {
    id: '3',
    title: 'Châu Thành khai trương chi nhánh mới tại Bình Dương',
    date: '10/01/2026',
    category: 'Nội bộ',
    author: 'Lê Thị Thanh Hương',
    content: `
      <p>Công ty TNHH Tư vấn và Định giá Châu Thành vừa khai trương chi nhánh mới tại Bình Dương, mở rộng mạng lưới phục vụ khách hàng.</p>

      <h3>Về chi nhánh mới</h3>
      <p>Chi nhánh Bình Dương của Châu Thành được thành lập với mục đích phục vụ tốt hơn các khách hàng tại khu vực phía Đông của TP.HCM và các tỉnh lân cận.</p>

      <h3>Đội ngũ chuyên gia</h3>
      <p>Chi nhánh mới sẽ do các thẩm định viên giàu kinh nghiệm quản lý, sẵn sàng cung cấp các dịch vụ thẩm định giá chuyên nghiệp.</p>

      <p>Khai trương chi nhánh Bình Dương đánh dấu một bước phát triển quan trọng của Châu Thành trong việc mở rộng phạm vi hoạt động.</p>
    `,
  },
];

function getNewsDetail(id: string) {
  const article = newsDatabase.find((item) => item.id === id);
  return article || newsDatabase[0];
}

function getRelatedNews(currentId: string, limit: number = 3) {
  return newsDatabase.filter((item) => item.id != currentId).slice(0, limit);
}

export default function NewsDetail({ params }: { params: { id: string } }) {
  const article = getNewsDetail(params.id);
  const relatedNews = getRelatedNews(params.id);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-gray-300 mb-6">
            <Link href="/" className="hover:text-[#D97706] transition">
              Trang chủ
            </Link>
            <ChevronRight size={18} />
            <Link href="/news" className="hover:text-[#D97706] transition">
              Tin tức
            </Link>
            <ChevronRight size={18} />
            <span className="text-[#D97706] line-clamp-2">{article.title}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content - 70% */}
            <div className="lg:col-span-2">
              {/* Article Header */}
              <div className="mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
                  {article.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-col sm:flex-row gap-6 pb-6 border-b border-gray-300">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar size={18} className="text-[#D97706]" />
                    <span className="text-sm">{article.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Folder size={18} className="text-[#D97706]" />
                    <span className="text-sm font-semibold text-[#D97706]">
                      {article.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <User size={18} className="text-[#D97706]" />
                    <span className="text-sm">{article.author}</span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none text-gray-700">
                <article
                  className="space-y-6"
                  dangerouslySetInnerHTML={{
                    __html: article.content
                      .split('\n')
                      .map((line) => line.trim())
                      .filter((line) => line)
                      .join('\n'),
                  }}
                />
              </div>

              {/* Custom Styling for Article Content */}
              <style>{`
                article h3 {
                  font-size: 1.5rem;
                  font-weight: 700;
                  color: #0F172A;
                  margin-top: 1.5rem;
                  margin-bottom: 1rem;
                }
                article p {
                  line-height: 1.8;
                  margin-bottom: 1rem;
                }
                article ul {
                  list-style-type: disc;
                  padding-left: 1.5rem;
                  margin-bottom: 1rem;
                }
                article li {
                  margin-bottom: 0.5rem;
                  color: #4B5563;
                }
                article strong {
                  color: #0F172A;
                  font-weight: 600;
                }
              `}</style>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-300">
                <p className="text-gray-600 mb-4 font-semibold">Chia sẻ bài viết:</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm font-medium"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition text-sm font-medium"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition text-sm font-medium"
                  >
                    Copy Link
                  </a>
                </div>
              </div>
            </div>

            {/* Right Sidebar - 30% */}
            <div className="lg:col-span-1">
              {/* Related News */}
              <div className="sticky top-20">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-6 pb-3 border-b-2 border-[#D97706]">
                  Tin liên quan
                </h3>

                <div className="space-y-6">
                  {relatedNews.map((news) => (
                    <Link
                      key={news.id}
                      href={`/news/${news.id}`}
                      className="group block p-4 rounded-lg border border-gray-200 hover:border-[#D97706] hover:bg-gray-50 transition-all"
                    >
                      {/* Thumbnail Placeholder */}
                      <div className="mb-3 h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded flex items-center justify-center text-white/20 text-2xl font-bold">
                        IMG
                      </div>

                      {/* Title */}
                      <h4 className="font-bold text-[#0F172A] text-sm line-clamp-2 group-hover:text-[#D97706] transition-colors">
                        {news.title}
                      </h4>

                      {/* Date */}
                      <p className="text-xs text-gray-500 mt-2">{news.date}</p>
                    </Link>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href="/news"
                  className="block mt-8 w-full text-center bg-[#D97706] text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                >
                  Xem tất cả tin tức
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Cần tư vấn thêm thông tin?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Liên hệ với chuyên gia của Châu Thành để được tư vấn chi tiết hơn về các vấn đề liên quan
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#0F172A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition"
          >
            Liên hệ ngay
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

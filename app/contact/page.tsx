'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const services = [
    'Chọn dịch vụ',
    'Thẩm định Bất động sản',
    'Thẩm định Máy móc thiết bị',
    'Xác định Giá trị Doanh nghiệp',
    'Tư vấn Dự án đầu tư',
    'Bán đấu giá tài sản',
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Liên Hệ</h1>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-300">
            <Link href="/" className="hover:text-[#D97706] transition">
              Trang chủ
            </Link>
            <span className="text-[#D97706]">/</span>
            <span className="text-[#D97706]">Liên hệ</span>
          </div>
        </div>
      </section>

      {/* Main Content - 2 Column Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#0F172A] mb-2">
                  Thông tin liên hệ
                </h2>
                <div className="w-12 h-1 bg-[#D97706]"></div>
              </div>

              {/* Company Name */}
              <div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                  Công ty TNHH Tư vấn và Định giá Châu Thành
                </h3>
                <p className="text-gray-600">
                  Đối tác tin cậy trong lĩnh vực thẩm định giá và tư vấn đầu tư
                </p>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#D97706] text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-1">Địa chỉ</h4>
                  <p className="text-gray-600">
                    41 Trần Nhân Tôn, Phường 2, Quận 5, TP. Hồ Chí Minh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#D97706] text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-1">Hotline</h4>
                  <a
                    href="tel:02837109889"
                    className="text-gray-600 hover:text-[#D97706] transition font-medium"
                  >
                    028 3710 9889
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Thứ 2 - Thứ 6: 8:00 - 17:00</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#D97706] text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-1">Email</h4>
                  <a
                    href="mailto:thamdinhgiachauthanh@gmail.com"
                    className="text-gray-600 hover:text-[#D97706] transition font-medium break-all"
                  >
                    thamdinhgiachauthanh@gmail.com
                  </a>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8">
                <h4 className="font-semibold text-[#0F172A] mb-4">Bản đồ vị trí</h4>
                <div className="rounded-lg overflow-hidden h-64 border-2 border-gray-300 shadow-sm">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4859048485644!2d106.68392532346916!3d10.763300689364778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3d78b7d847%3A0xf1b7c8e9c8e9c8e9!2s41%20Tr%E1%BA%A7n%20Nh%C3%A2n%20T%C3%B4n%2C%20Qu%E1%BA%ADn%205%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1svi!2s!4v1706270400000"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#0F172A] mb-2">
                  Gửi yêu cầu tư vấn
                </h2>
                <div className="w-12 h-1 bg-[#D97706]"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-[#0F172A] mb-2"
                  >
                    Họ và Tên <span className="text-[#D97706]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#0F172A] mb-2"
                  >
                    Số điện thoại <span className="text-[#D97706]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition"
                    placeholder="0123 456 789"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#0F172A] mb-2"
                  >
                    Email <span className="text-[#D97706]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Service Needed */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-[#0F172A] mb-2"
                  >
                    Dịch vụ cần tư vấn <span className="text-[#D97706]">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition bg-white text-gray-700"
                  >
                    {services.map((service) => (
                      <option key={service} value={service === 'Chọn dịch vụ' ? '' : service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#0F172A] mb-2"
                  >
                    Nội dung <span className="text-[#D97706]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition resize-none"
                    placeholder="Vui lòng mô tả chi tiết yêu cầu của bạn..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#0F172A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition flex items-center justify-center gap-2 group"
                >
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition" />
                  Gửi yêu cầu
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded">
                    <p className="font-medium">✓ Cảm ơn bạn đã gửi yêu cầu!</p>
                    <p className="text-sm mt-1">
                      Chúng tôi sẽ liên hệ lại trong vòng 24 giờ.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-[#D97706] mb-2">28+</div>
              <p className="text-gray-700 font-semibold">Năm kinh nghiệm</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#D97706] mb-2">5</div>
              <p className="text-gray-700 font-semibold">Chi nhánh hoạt động</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#D97706] mb-2">1000+</div>
              <p className="text-gray-700 font-semibold">Khách hàng tin tưởng</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

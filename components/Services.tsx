import React from 'react';
import { Home, Truck, Briefcase, LineChart, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Thẩm định Bất Động Sản",
      icon: <Home size={40} strokeWidth={1.5} />,
      desc: "Định giá nhà phố, biệt thự, đất đai, các dự án khu dân cư và cao ốc văn phòng.",
    },
    {
      title: "Thẩm định Động Sản",
      icon: <Truck size={40} strokeWidth={1.5} />,
      desc: "Định giá máy móc thiết bị, dây chuyền sản xuất, phương tiện vận tải.",
    },
    {
      title: "Giá trị Doanh Nghiệp",
      icon: <Briefcase size={40} strokeWidth={1.5} />,
      desc: "Xác định giá trị thương hiệu, tài sản vô hình và mua bán sáp nhập (M&A).",
    },
    {
      title: "Dự Án Đầu Tư",
      icon: <LineChart size={40} strokeWidth={1.5} />,
      desc: "Tư vấn dự án đầu tư, nghiên cứu khả thi và đấu giá tài sản.",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Dịch vụ Thẩm định giá</h2>
          <div className="w-20 h-1 bg-[#D97706] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Cung cấp giải pháp định giá toàn diện với độ chính xác cao nhất cho đối tác và khách hàng.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div key={index} className="group bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#D97706] mb-6 shadow-sm group-hover:bg-[#D97706] group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">{item.title}</h3>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                {item.desc}
              </p>
              <a href="#" className="inline-flex items-center text-[#D97706] font-semibold text-sm group-hover:gap-2 transition-all">
                Xem chi tiết <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
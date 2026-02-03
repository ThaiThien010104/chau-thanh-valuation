import React from 'react';
import { Building2, Settings, Briefcase, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Schema from './Schema';
import {
  realEstateAppraisalService,
  machineryAppraisalService,
  businessValuationService,
} from '@/lib/schema';

const Services = () => {
  const services = [
    {
      title: "Thẩm định giá Bất Động Sản",
      icon: <Building2 size={40} strokeWidth={1.5} />,
      desc: "Nhà phố, biệt thự, căn hộ",
      details: [
        "Nhà phố, biệt thự, căn hộ",
        "Đất đai, dự án khu dân cư, cao ốc văn phòng",
        "Trung tâm thương mại, resort"
      ]
    },
    {
      title: "Thẩm định giá Động Sản",
      icon: <Settings size={40} strokeWidth={1.5} />,
      desc: "Máy móc thiết bị và phương tiện vận tải",
      details: [
        "Máy móc thiết bị y tế, bao bì, ngành gỗ, dệt",
        "Dây chuyền sản xuất, phương tiện vận tải, tàu thuyền"
      ]
    },
    {
      title: "Thẩm định giá Trị Doanh Nghiệp",
      icon: <Briefcase size={40} strokeWidth={1.5} />,
      desc: "Cổ phần hóa, M&A và tư vấn tài chính",
      details: [
        "Xác định giá trị doanh nghiệp phục vụ cổ phần hóa, mua bán, sáp nhập (M&A)",
        "Tư vấn tài chính doanh nghiệp"
      ]
    },
    {
      title: "Thẩm định giá Dự Án Đầu Tư",
      icon: <FileText size={40} strokeWidth={1.5} />,
      desc: "Tư vấn pháp lý và chứng minh năng lực",
      details: [
        "Tư vấn pháp lý dự án đầu tư",
        "Chứng minh năng lực tài chính"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Schema
        schema={[
          realEstateAppraisalService,
          machineryAppraisalService,
          businessValuationService,
        ]}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">Dịch vụ Thẩm định giá</h2>
          <div className="w-95 h-1 bg-[#FF9900] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Cung cấp giải pháp định giá toàn diện với độ chính xác cao nhất cho đối tác và khách hàng.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div key={index} className="group bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#FF9900] mb-6 shadow-sm group-hover:bg-[#003366] group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>
              <ul className="space-y-2 mb-6">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-500 text-xs flex items-start">
                    <span className="text-[#FF9900] mr-2 mt-0.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services" className="inline-flex items-center text-[#FF9900] font-semibold text-sm group-hover:gap-2 transition-all hover:text-[#003366]">
                Xem chi tiết <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
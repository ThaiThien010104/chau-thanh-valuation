import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const Branches = () => {
  const branches = [
    { city: "TP. Hồ Chí Minh", address: "41 Trần Nhật Tôn, Quận 5", active: true },
    { city: "Tây Ninh", address: "PG02-18, Vincom Shophouse Tây Ninh", active: true },
    { city: "Vĩnh Long", address: "Số 55E, Phạm Thái Bường, Phường 4", active: true },
    { city: "An Giang", address: "Lô L4-09, KĐT Golden City, Long Xuyên", active: true },
    { city: "Bình Dương", address: "Đang cập nhật địa chỉ mới", active: false },
  ];

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#0F172A]">Mạng lưới hoạt động</h2>
            <p className="text-gray-600">Phủ sóng rộng khắp các tỉnh thành trọng điểm phía Nam</p>
          </div>
          <button className="bg-[#D97706] px-6 py-3 rounded font-semibold text-white hover:bg-orange-600 transition">
            Liên hệ chi nhánh gần nhất
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-300 hover:border-[#D97706] hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 text-[#D97706] font-bold text-lg">
                  <MapPin size={20} /> {branch.city}
                </div>
                {branch.active && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Hoạt động</span>
                )}
              </div>
              <p className="text-gray-700 text-sm mb-4 h-10">{branch.address}</p>
              <div className="flex items-center gap-2 text-sm text-gray-600 border-t border-gray-300 pt-4">
                 <Phone size={14} /> <span>0938 300 096</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar - Thông tin liên hệ nhanh */}
      <div className="bg-[#0F172A] text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} /> 028 3710 9889</span>
            <span className="flex items-center gap-2"><Mail size={14} /> thamdinhgiachauthanh@gmail.com</span>
          </div>
          <div>
            <span>Mã số thuế: 0315094259</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
           <div className="w-10 h-10 bg-[#D97706] rounded flex items-center justify-center text-white font-bold text-xl">
             C
           </div>
           <div>
             <h1 className="text-xl font-bold text-[#0F172A] uppercase leading-none">Châu Thành</h1>
             <p className="text-xs text-1gray-500 font-medium tracking-wider">ĐỊNH GIÁ & TƯ VẤN</p>
           </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-[#D97706] transition-colors">Trang chủ</Link>
          <Link href="/about" className="hover:text-[#D97706] transition-colors">Giới thiệu</Link>
          <Link href="/services" className="hover:text-[#D97706] transition-colors">Dịch vụ</Link>
          <Link href="/news" className="hover:text-[#D97706] transition-colors">Tin tức</Link>
          <Link href="/contact" className="hover:text-[#D97706] transition-colors">Liên hệ</Link>
          <Link href="/careers" className="hover:text-[#D97706] transition-colors">Tuyển dụng</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-[#0F172A] text-white px-5 py-2.5 rounded hover:bg-[#D97706] transition-colors font-medium  ">
              Gửi yêu cầu
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button (Icon) */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 space-y-3 font-medium text-gray-700">
            <Link href="/" className="block py-2 px-3 hover:bg-gray-100 rounded hover:text-[#D97706] transition-colors">
              Trang chủ
            </Link>
            <Link href="/about" className="block py-2 px-3 hover:bg-gray-100 rounded hover:text-[#D97706] transition-colors">
              Giới thiệu
            </Link>
            <Link href="/services" className="block py-2 px-3 hover:bg-gray-100 rounded hover:text-[#D97706] transition-colors">
              Dịch vụ
            </Link>
            <Link href="/news" className="block py-2 px-3 hover:bg-gray-100 rounded hover:text-[#D97706] transition-colors">
              Tin tức
            </Link>
            <Link href="/contact" className="block py-2 px-3 hover:bg-gray-100 rounded hover:text-[#D97706] transition-colors">
              Liên hệ
            </Link>
            <Link href="/careers" className="block py-2 px-3 hover:bg-gray-100 rounded hover:text-[#D97706] transition-colors">
              Tuyển dụng
            </Link>
            <button className="w-full mt-4 bg-[#0F172A] text-white px-5 py-2.5 rounded hover:bg-[#D97706] transition-colors font-medium">
              Gửi yêu cầu
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
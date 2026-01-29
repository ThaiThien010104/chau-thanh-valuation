'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar - Thông tin liên hệ nhanh */}
      <div className="bg-[#003366] text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} /> 0938.300.096</span>
            <span className="flex items-center gap-2"><Mail size={14} /> info@chau-thanh.com.vn</span>
          </div>
          <div>
            <span>MST: 0315094259</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
           <img src="/img/logo.jpg" alt="logo" className='w-12 h-auto'/>
           <div>
             <h1 className="text-xl font-bold text-[#003366] uppercase leading-none">Châu Thành</h1>
             <p className="text-xs text-gray-600 font-medium tracking-wider">ĐỊNH GIÁ & TƯ VẤN</p>
           </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-[#FF9900] transition-colors">Trang chủ</Link>
          <Link href="/about" className="hover:text-[#FF9900] transition-colors">Giới thiệu</Link>
          <Link href="/services" className="hover:text-[#FF9900] transition-colors">Dịch vụ</Link>
          <Link href="/news" className="hover:text-[#FF9900] transition-colors">Tin tức</Link>
          <Link href="/contact" className="hover:text-[#FF9900] transition-colors">Liên hệ</Link>
          <Link href="/careers" className="hover:text-[#FF9900] transition-colors">Tuyển dụng</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-[#FF9900] text-white px-5 py-2.5 rounded hover:bg-[#cc7a00] transition-colors font-medium  ">
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
            <Link href="/" className="block py-2 px-3 hover:bg-gray-100 rounded hover:text-[#FF9900] transition-colors">
              Trang chủ
            </Link>
            <Link href="/about" className="block py-2 px-3 hover:bg-gray-100 rounded hover:text-[#FF9900] transition-colors">
              Giới thiệu
            </Link>
            <Link href="/services" className="block py-2 px-3 hover:bg-gray-100 rounded hover:text-[#FF9900] transition-colors">
              Dịch vụ
            </Link>
            <Link href="/news" className="block py-2 px-3 hover:bg-gray-100 rounded hover:text-[#FF9900] transition-colors">
              Tin tức
            </Link>
            <Link href="/contact" className="block py-2 px-3 hover:bg-gray-100 rounded hover:text-[#FF9900] transition-colors">
              Liên hệ
            </Link>
            <Link href="/careers" className="block py-2 px-3 hover:bg-gray-100 rounded hover:text-[#FF9900] transition-colors">
              Tuyển dụng
            </Link>
            <button className="w-full mt-4 bg-[#FF9900] text-white px-5 py-2.5 rounded hover:bg-[#cc7a00] transition-colors font-medium">
              Gửi yêu cầu
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
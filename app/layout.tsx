import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 1. Tiêu đề (Title): Cái dòng chữ xanh to đùng hiện trên Google
  title: {
    template: '%s | Định giá Châu Thành',
    default: 'Công ty TNHH Tư vấn và Định giá Châu Thành - Uy tín, Chính xác',
  },
  
  // 2. Mô tả (Description): Dòng chữ nhỏ màu xám bên dưới tiêu đề
  description: "Dịch vụ thẩm định giá bất động sản, máy móc thiết bị, dự án đầu tư uy tín. Công ty Châu Thành cam kết pháp lý rõ ràng, nhanh chóng.",
  
  // 3. Từ khóa (Keywords): Giúp Google phân loại (tuy giờ Google ít dùng cái này nhưng vẫn nên có)
  keywords: ['định giá châu thành', 'thẩm định giá', 'định giá nhà đất', 'thẩm định giá trị doanh nghiệp'],

  // 4. Open Graph (Để khi share link lên Facebook/Zalo nó hiện hình đẹp)
  openGraph: {
    title: 'Công ty Định giá Châu Thành',
    description: 'Dịch vụ thẩm định giá chuyên nghiệp hàng đầu.',
    url: 'https://chauthanh.vn',
    siteName: 'Định giá Châu Thành',
    images: [
      {
        url: '/img/anh-share-facebook.jpg', // Bạn nhớ tạo ảnh này
        width: 800,
        height: 600,
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

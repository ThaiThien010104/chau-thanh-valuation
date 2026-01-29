// JSON-LD Schema Markup for Chau Thanh Valuation

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Công ty TNHH Tư vấn và Định giá Châu Thành',
  description: 'Đối tác tin cậy trong lĩnh vực thẩm định giá và tư vấn đầu tư',
  url: 'https://chauthanh.vn',
  telephone: '+84283710889',
  email: 'thamdinhgiachauthanh@gmail.com',
  sameAs: [
    'https://www.facebook.com/chauthanh',
    'https://www.linkedin.com/company/chau-thanh-valuation',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '30/1F Ấp Đông, Thới Tam Thôn, Hóc Môn',
    addressLocality: 'TP.HCM',
    addressCountry: 'VN',
    postalCode: '700000',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 10.7633,
    longitude: 106.6839,
  },
  priceRange: '$$',
  image: 'https://chauthanh.vn/logo.png',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127',
    ratingCount: '127',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
};

export const realEstateAppraisalService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dịch vụ Thẩm định Bất Động Sản',
  description:
    'Định giá nhà phố, biệt thự, đất đai, các dự án khu dân cư và cao ốc văn phòng với tiêu chuẩn quốc tế',
  provider: {
    '@type': 'Organization',
    name: 'Công ty TNHH Tư vấn và Định giá Châu Thành',
    url: 'https://chauthanh.vn',
  },
  areaServed: {
    '@type': 'City',
    name: 'TP. Hồ Chí Minh, Tây Ninh, Vĩnh Long, An Giang, Bình Dương',
  },
  priceRange: 'Liên hệ để biết giá',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '45',
  },
};

export const machineryAppraisalService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dịch vụ Thẩm định Động Sản',
  description:
    'Định giá máy móc thiết bị, dây chuyền sản xuất, phương tiện vận tải theo tiêu chuẩn quốc tế',
  provider: {
    '@type': 'Organization',
    name: 'Công ty TNHH Tư vấn và Định giá Châu Thành',
    url: 'https://chauthanh.vn',
  },
  areaServed: {
    '@type': 'City',
    name: 'TP. Hồ Chí Minh, Tây Ninh, Vĩnh Long, An Giang, Bình Dương',
  },
  priceRange: 'Liên hệ để biết giá',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '32',
  },
};

export const businessValuationService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dịch vụ Định giá Doanh Nghiệp',
  description:
    'Xác định giá trị doanh nghiệp, tài sản vô hình, và hỗ trợ các thương vụ mua bán, sáp nhập (M&A)',
  provider: {
    '@type': 'Organization',
    name: 'Công ty TNHH Tư vấn và Định giá Châu Thành',
    url: 'https://chauthanh.vn',
  },
  areaServed: {
    '@type': 'City',
    name: 'TP. Hồ Chí Minh, Tây Ninh, Vĩnh Long, An Giang, Bình Dương',
  },
  priceRange: 'Liên hệ để biết giá',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '28',
  },
};

export const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Liên Hệ Châu Thành',
  url: 'https://chauthanh.vn/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Công ty TNHH Tư vấn và Định giá Châu Thành',
    telephone: '+84283710889',
    email: 'thamdinhgiachauthanh@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '30/1F Ấp Đông, Thới Tam Thôn, Hóc Môn',
      addressLocality: 'TP.HCM',
      addressCountry: 'VN',
    },
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Châu Thành có các dịch vụ gì?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Châu Thành cung cấp các dịch vụ thẩm định giá bất động sản, động sản, định giá doanh nghiệp, và tư vấn dự án đầu tư.',
        },
      },
      {
        '@type': 'Question',
        name: 'Châu Thành có mạng lưới hoạt động ở đâu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Châu Thành hoạt động tại TP.HCM (trụ sở chính), Tây Ninh, Vĩnh Long, An Giang, và Bình Dương.',
        },
      },
      {
        '@type': 'Question',
        name: 'Phí thẩm định giá là bao nhiêu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Phí thẩm định giá tùy thuộc vào loại tài sản, giá trị và độ phức tạp của công việc. Vui lòng liên hệ để nhận báo giá chính xác.',
        },
      },
    ],
  },
];

// Data proyek PT Subasumi Cipta Senawira

const projects = [
  {
    id: 1,
    title: 'Gedung Perkantoran Modern',
    location: 'Jakarta Selatan',
    year: '2023',
    category: 'Commercial',
    description:
      'Pembangunan gedung perkantoran 20 lantai dengan desain fasad kaca modern dan sistem BMS terintegrasi.',
    image: 'https://i0.wp.com/www.emporioarchitect.com/upload/portofolio/desain-kantor-modern-5-lantai-13270821-21849288181122100757.jpg',
  },
  {
    id: 2,
    title: 'Rumah Sakit Umum',
    location: 'Bandung',
    year: '2022',
    category: 'Healthcare',
    description:
      'Konstruksi rumah sakit tipe B dengan 150 tempat tidur, dilengkapi ICU, IGD, dan fasilitas medis lengkap.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5CSYAvreDgC8bWUd05x1LYLmhHcAhHniplFMKIQzQ6qp-K-AaFgdm49Ah&s=10',
  },
  {
    id: 3,
    title: 'Sekolah Nasional Plus',
    location: 'Tangerang',
    year: '2023',
    category: 'Education',
    description:
      'Pembangunan kompleks sekolah nasional plus dengan fasilitas laboratorium, perpustakaan, dan lapangan olahraga.',
    image: 'https://idseducation.com/wp-content/uploads/2017/06/California-Institute-of-Technology.jpg',
  },
  {
    id: 4,
    title: 'Jalan Raya Tol',
    location: 'Jawa Barat',
    year: '2021',
    category: 'Infrastructure',
    description:
      'Konstruksi jalan tol sepanjang 25 km termasuk jembatan layang dan interchange.',
    image: 'https://astradigitaldigiroomuat.blob.core.windows.net/storage-uat-001/apa-perbedaan-jalan-raya-dan-jalan-tol.jpg',
  },
  {
    id: 5,
    title: 'Gudang Industri',
    location: 'Bekasi',
    year: '2022',
    category: 'Industrial',
    description:
      'Pembangunan gudang logistik seluas 15.000 m² dengan sistem racking otomatis dan loading dock.',
    image: 'https://awsimages.detik.net.id/community/media/visual/2022/10/04/staff-gudang_169.jpeg?w=1200',
  },
  {
    id: 6,
    title: 'Renovasi Hotel Bintang 5',
    location: 'Bali',
    year: '2023',
    category: 'Hospitality',
    description:
      'Renovasi total 200 kamar hotel bintang 5 termasuk lobby, restoran, spa, dan kolam renang.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/bb/c2/8d/yogyakarta-marriott-hotel.jpg?w=1200&h=-1&s=1',
  },
];

// Kategori proyek untuk filter
export const projectCategories = [
  'All',
  'Commercial',
  'Healthcare',
  'Education',
  'Infrastructure',
  'Industrial',
  'Hospitality',
];

export default projects;

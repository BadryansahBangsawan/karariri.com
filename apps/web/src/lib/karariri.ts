export const karariri = Object.freeze({
  name: "Karariri",
  legalName: "Karariri Coffee & Eatery",
  category: "Kedai Kopi",
  addressLine:
    "Jl. Hassanudin, Serui Kota, Kec. Yapen Sel., Kabupaten Kepulauan Yapen, Papua 98213",
  plusCode: "46HQ+7HR",
  lat: -1.8717744,
  lng: 136.2388775,
  timeZone: "Asia/Jayapura",
  hoursDisplay: "11.00–23.00",
  hoursLine: "Setiap hari 11.00–23.00 WIT",
  rating: 4.9,
  reviewCount: 24,
  photoCountLabel: "55+",
  mapsPlaceUrl:
    "https://www.google.com/maps/place/Karariri+Coffee+%26+Eatery/@-1.8717744,136.2388775,17z",
  mapsDirUrl:
    "https://www.google.com/maps/dir/?api=1&destination=-1.8717744,136.2388775",
  owner: "dr. Stephanie Caroline Banua",
  nameOrigin:
    "Nama Karariri diambil dari kampung di Distrik Kosiwo, Kepulauan Yapen.",
  rooms: ["Hall indoor ber-AC", "Ruang terbuka / outdoor", "Ruang VIP"] as const,
  signatures: [
    { name: "Kopi Susu Karariri", note: "Kopi susu dengan gula aren" },
    { name: "Spaghetti Brulee", note: "Sajian yang disebut pemilik" },
  ] as const,
  offerRange: "Makanan ringan sampai hidangan berat, plus aneka minuman.",
  images: {
    hero: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=2000&q=72",
    kopi: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=72",
    pasta: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=72",
    hall: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=72",
    outdoor: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=72",
    beans: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=72",
    cup: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=72",
    founder:
      "https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?auto=format&fit=crop&w=1400&q=72",
    gallery: [
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=72",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=72",
      "https://images.unsplash.com/photo-1453614512568-7af50d047f3c?auto=format&fit=crop&w=900&q=72",
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=72",
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=72",
    ] as const,
  },
  menu: [
    {
      name: "Kopi Susu Karariri",
      description: "Kopi susu dengan gula aren — minuman atas nama tempat.",
      tag: "Andalan",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=72",
    },
    {
      name: "Spaghetti Brulee",
      description: "Sajian yang disebut pemilik, di antara makanan ringan sampai berat.",
      tag: "Dapur",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=72",
    },
    {
      name: "Hall Indoor",
      description: "Ruang ber-AC untuk kumpul. Nyaman, tidak berisik.",
      tag: "Ber-AC",
      image:
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=72",
    },
    {
      name: "Ruang Terbuka",
      description: "Outdoor di Jalan Hassanudin, dengan parkir samping dan depan.",
      tag: "Outdoor",
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=72",
    },
  ] as const,
  roomsStrip: [
    { name: "Indoor", line: "Hall besar ber-AC" },
    { name: "Outdoor", line: "Ruang terbuka" },
    { name: "VIP", line: "Ruang tertutup" },
    { name: "Parkir", line: "Samping dan depan" },
  ] as const,
  reviews: [
    {
      author: "ria via",
      visit: "Ulasan Google",
      text: "Cafenya luas, ada space buat indoor dan outdoor. Ada parkiran di samping dan di depan. Untuk yang indoor ada AC. Cocok untuk kumpul. Service dari pegawainya oke. Lokasinya juga strategis dekat kantor pemkab.",
    },
    {
      author: "Nadia Nurtantijo",
      visit: "Ulasan Google",
      text: "Tempatnya nyaman, tidak berisik, ber-AC, makanan dan minuman semuanya oke, pegawainya ramah. Bisa bawa tumbler sendiri — bahkan bisa beli tumbler Karariri.",
    },
    {
      author: "Anath",
      visit: "Ulasan Google",
      text: "Minuman enak, makanan oke, tom yum terlalu bold.",
    },
  ] as const,
  ui: {
    ctaRoute: "Buka rute",
    ctaRouteArrow: "Buka rute →",
    ctaMenu: "Lihat sajian →",
    ctaFind: "Datang",
    copyPlus: "Salin plus code",
    copiedPlus: "Tersalin 46HQ+7HR",
    photos: "Lihat 55+ foto di Google Maps",
    hoursOpen: "Buka sekarang · tutup pukul 23.00",
    hoursClosed: "Buka pukul 11.00",
    ratingLine: "4,9 dari 24 ulasan Google",
    hook: "Kedai kopi di jantung Serui. Buka setiap hari sampai pukul 23.00.",
    ownerLine: "Dikelola dr. Stephanie Caroline Banua.",
    footerSource:
      "Fakta tempat dari Google Maps. Nama dan sajian dari pemberitaan lokal. Foto: ilustrasi stok, bukan foto kedai.",
    nearPemkab: "Dekat kantor pemkab",
    ilustrasi: "Ilustrasi",
    nav: {
      sajian: "Sajian",
      ruang: "Ruang",
      tentang: "Tentang",
      datang: "Datang",
    },
    hero: {
      label: "Kedai Kopi · Serui Kota, Papua",
      line1: "Kopi Enak.",
      line2: "Tempat Nyaman.",
      line3: "Sampai Malam.",
      sub: "Kopi susu gula aren, spaghetti brulee, dan tiga ruang untuk kumpul — buka setiap hari sampai pukul 23.00.",
      chips: ["4,9 Google", "Hall ber-AC", "Dekat pemkab"] as const,
    },
    menuTitle: "Yang Ada",
    coffeeTitle: "Dari Kampung ke Cangkir",
    coffeeQuote: "Setiap nama menyimpan kampung yang menumbuhkannya.",
    coffeeP1:
      "Karariri bukan merek yang diada-adakan di kota lain. Namanya diambil dari kampung di Distrik Kosiwo, Kepulauan Yapen — lalu dibawa ke Jalan Hassanudin sebagai kedai kopi dan eatery di jantung Serui Kota.",
    coffeeP2:
      "Andalan gelasnya Kopi Susu Karariri: kopi susu dengan gula aren. Dapur menghidangkan makanan ringan sampai hidangan berat. Yang kami tahu, kami tulis. Yang tidak, tidak kami karang.",
    coffeeChips: ["Gula Aren", "Nama Kampung", "Serui Kota"] as const,
    aboutTitle: "Dibuka dengan Satu Ide yang Besar",
    aboutP1:
      "Karariri Coffee & Eatery dikelola dr. Stephanie Caroline Banua. Tempat ini ada di peta karena orang Serui datang kumpul: indoor ber-AC, outdoor, dan ruang VIP — bukan karena slogan.",
    aboutP2:
      "Nama kedai dipinjam dari kampung di Distrik Kosiwo. Datang ke Hassanudin, dekat kantor pemkab. Plus code-nya 46HQ+7HR. Jamnya sederhana: setiap hari, sebelas pagi sampai sebelas malam, waktu Papua.",
    aboutChips: ["Serui Kota", "Kedai Kopi", "Dekat pemkab"] as const,
    spaceTitle: "Ruang untuk Kumpul",
    spaceBody:
      "Ada hall indoor ber-AC, ruang terbuka, dan VIP. Cocok untuk kumpul malam — bukan reservasi online. Datang ke Hassanudin, atau buka rute dulu.",
    spaceChips: ["Ruang VIP", "Hall Indoor"] as const,
    findTitle: "Mari Mampir",
    footerMark: "Karariri",
  },
});

const jayapuraHour = new Intl.DateTimeFormat("en-GB", {
  timeZone: karariri.timeZone,
  hour: "numeric",
  hourCycle: "h23",
});

/** Asia/Jayapura, open iff local hour in [11, 23) */
export function isOpenAt(now?: Date): boolean {
  const hour = Number(jayapuraHour.format(now ?? new Date()));
  return hour >= 11 && hour < 23;
}

export function hoursLabel(now?: Date): string {
  return isOpenAt(now) ? karariri.ui.hoursOpen : karariri.ui.hoursClosed;
}

export function localBusinessJsonLd(): object {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: karariri.legalName,
    address: {
      "@type": "PostalAddress",
      streetAddress: karariri.addressLine,
      addressLocality: "Serui Kota",
      addressRegion: "Papua",
      postalCode: "98213",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: karariri.lat,
      longitude: karariri.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "23:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: karariri.rating,
      reviewCount: karariri.reviewCount,
    },
  };
}

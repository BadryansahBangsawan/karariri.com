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
  offerRange:
    "Makanan ringan sampai hidangan berat, plus aneka minuman.",
  reviews: [
    {
      author: "ria via",
      text: "cafenya luas, ada space buat indoor dan outdoor. ada parkiran di samping dan di depan. untuk yang indoor ada ac, free wifi tapi tidak terlalu cepat, cocok untuk kumpul. service dari pegawainya oke. recommended cafe di serui. lokasinya juga strategis dekat kantor pemkab",
    },
    {
      author: "Nadia Nurtantijo",
      text: "Suka sekali bisa kurangi sampah plastik dengan bawa tumblr sendiri.. bahkan bisa beli tumblr Karariri dan diskon 3.000 setiap kali beli minum.. Tempatnya nyaman, tidak berisik, berAC, makanan dan minuman semuanya oke, pegawainya ramah",
    },
  ] as const,
  ui: {
    ctaRoute: "Buka rute",
    copyPlus: "Salin plus code",
    copiedPlus: "Tersalin 46HQ+7HR",
    photos: "Lihat 55+ foto di Google Maps",
    hoursOpen: "Buka sekarang · tutup pukul 23.00",
    hoursClosed: "Buka pukul 11.00",
    ratingLine: "4,9 dari 24 ulasan Google",
    hook: "Kedai kopi di jantung Serui. Buka setiap hari sampai pukul 23.00.",
    ownerLine: "Dikelola dr. Stephanie Caroline Banua.",
    footerSource:
      "Fakta tempat dari Google Maps. Nama dan sajian dari pemberitaan lokal.",
    nearPemkab: "Dekat kantor pemkab",
    nav: {
      ruang: "Ruang",
      sajian: "Sajian",
      ulasan: "Ulasan",
      datang: "Datang",
    },
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

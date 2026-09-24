import { karariri } from "@/lib/karariri";

const ALTS = [
  "Ilustrasi latte art dituang ke cangkir keramik",
  "Ilustrasi dua orang ngobrol di sudut kedai",
  "Ilustrasi etalase kedai independen",
  "Ilustrasi biji kopi digiling di pagi hari",
  "Ilustrasi kopi saring musiman di gelas",
] as const;

export function Gallery() {
  return (
    <section aria-label="Galeri ilustrasi">
      <div className="cafe-gallery">
        {karariri.images.gallery.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={ALTS[i] ?? karariri.ui.ilustrasi}
            width={900}
            height={280}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}

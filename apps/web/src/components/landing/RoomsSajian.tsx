import { karariri } from "@/lib/karariri";

const ROOM_FILLS = ["#1E4A38", "#245C44", "#16382B"] as const;

export function RoomsSajian() {
  return (
    <>
      <section className="cafe-section" id="ruang">
        <h2>{karariri.ui.nav.ruang}</h2>
        <div className="cafe-rooms">
          {karariri.rooms.map((name, i) => (
            <figure className="cafe-room" key={name}>
              <svg
                className="cafe-room-art"
                viewBox="0 0 240 120"
                aria-hidden="true"
                focusable="false"
              >
                <rect width="240" height="120" fill={ROOM_FILLS[i] ?? "#1E4A38"} />
                <rect
                  x="28"
                  y="28"
                  width="184"
                  height="64"
                  rx="8"
                  fill="#F3EDE1"
                  opacity="0.16"
                />
              </svg>
              <figcaption>
                <h3>{name}</h3>
                <p>Ilustrasi</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="cafe-section" id="sajian">
        <h2>{karariri.ui.nav.sajian}</h2>
        {karariri.signatures.map((item) => (
          <article className="cafe-drink" key={item.name}>
            <div className="cafe-drink-art" aria-hidden="true" />
            <div>
              <h3>{item.name}</h3>
              <p>{item.note}</p>
            </div>
          </article>
        ))}
        <p className="cafe-range">{karariri.offerRange}</p>
      </section>
    </>
  );
}

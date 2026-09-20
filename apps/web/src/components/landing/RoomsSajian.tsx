import { karariri } from "@/lib/karariri";

const [hallName, outdoorName, vipName] = karariri.rooms;

function HallPlan() {
  return (
    <svg viewBox="0 0 240 120" aria-hidden="true" focusable="false">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        d="M14 14 H226 V46 M226 74 V106 H14 V14"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        d="M226 46 C242 60 242 60 226 74"
      />
      <rect
        x="32"
        y="30"
        width="86"
        height="64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="128"
        y="30"
        width="86"
        height="64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function OutdoorPlan() {
  return (
    <svg viewBox="0 0 180 100" aria-hidden="true" focusable="false">
      <defs>
        <pattern
          id="kr-rs-hatch"
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <path
            d="M0 0 V7"
            stroke="currentColor"
            strokeWidth="0.9"
            opacity="0.4"
          />
        </pattern>
      </defs>
      <rect x="18" y="22" width="144" height="64" fill="url(#kr-rs-hatch)" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        d="M18 14 V86 H162 V14"
      />
    </svg>
  );
}

function VipPlan() {
  return (
    <svg viewBox="0 0 180 100" aria-hidden="true" focusable="false">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        d="M30 14 H162 V86 H30 V62 M30 38 V14"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        d="M30 38 C14 50 14 50 30 62"
      />
    </svg>
  );
}

export function RoomsSajian() {
  return (
    <>
      <section className="kr-section" id="ruang">
        <h2>{karariri.ui.nav.ruang}</h2>
        <figure className="kr-rs-figure kr-plate kr-beat">
          <div className="kr-rs-plan">
            <div className="kr-rs-cell kr-rs-hall">
              <HallPlan />
              <p>{hallName}</p>
            </div>
            <div className="kr-rs-cell kr-rs-outdoor">
              <OutdoorPlan />
              <p>{outdoorName}</p>
            </div>
            <div className="kr-rs-cell kr-rs-vip">
              <VipPlan />
              <p>{vipName}</p>
            </div>
          </div>
          <figcaption>Ilustrasi</figcaption>
        </figure>
      </section>

      <section className="kr-section" id="sajian">
        <h2>{karariri.ui.nav.sajian}</h2>
        <div className="kr-plate kr-beat kr-rs-board">
          {karariri.signatures.map((item) => (
            <p className="kr-rs-sig" key={item.name}>
              <span className="kr-rs-sig-name">{item.name}</span>
              <span className="kr-rs-sig-note">{item.note}</span>
            </p>
          ))}
          <p className="kr-rs-range">{karariri.offerRange}</p>
        </div>
      </section>
    </>
  );
}

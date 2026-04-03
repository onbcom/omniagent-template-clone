export default function TrustedBySection() {
  return (
    <section
      className="flex w-full items-center justify-center overflow-hidden bg-[#F4F8FF]"
      style={{ padding: "31px 0px 28px" }}
    >
      <div
        className="flex w-full max-w-[1150px] items-center justify-center"
        style={{ padding: "0px 20px", gap: "47px" }}
      >
        {/* White card container */}
        <div
          className="flex w-full items-center justify-center overflow-hidden bg-white"
          style={{
            padding: "20px 50px",
            height: 140,
            gap: "45px",
            borderRadius: "20px",
            boxShadow: "rgba(197, 204, 222, 0.12) 0px 0px 8px 0px",
          }}
        >
          {/* Text area */}
          <div
            className="shrink-0"
            style={{ width: 344.25 }}
          >
            <h5
              style={{
                fontSize: "20px",
                fontWeight: 500,
                fontFamily: "'Instrument Sans', sans-serif",
                color: "rgb(24, 34, 48)",
                lineHeight: "26px",
                letterSpacing: "-0.4px",
                margin: 0,
              }}
            >
              Fueling growth for innovative teams worldwide
            </h5>
          </div>

          {/* Divider */}
          <div
            className="hidden md:block shrink-0"
            style={{
              width: 2,
              height: 54,
              backgroundColor: "rgb(244, 248, 255)",
              opacity: 0.38,
            }}
          />

          {/* Logos area — placeholder logo ticker */}
          <div
            className="hidden md:flex flex-1 items-center justify-center overflow-hidden"
            style={{ height: 100 }}
          >
            <div className="flex items-center gap-10 opacity-40">
              {LOGO_NAMES.map((name) => (
                <span
                  key={name}
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    fontFamily: "'Instrument Sans', sans-serif",
                    color: "rgb(52, 64, 84)",
                    letterSpacing: "-0.36px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const LOGO_NAMES = [
  "TechFlow",
  "Nova Systems",
  "Apex AI",
  "Meridian",
  "Quantive",
  "SkyBridge",
] as const;

import CircularGallery from "../landing/CircularGallery";
import heroBg from "@/assets/landing/bg.png";

export default function Hero() {
  return (
    <section
      className={`font-dm flex min-h-screen flex-col items-center w-full justify-start pt-60 pb-5 px-10 bg-no-repeat bg-cover bg-center`}
      style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="flex flex-col justify-center items-center gap-1">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-3xl text-black font-tiempo italic">One Event</p>
          <div className="relative flex items-center justify-center">
            <svg
              width={500}
              height={80}
              viewBox="0 0 500 80"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50"
              style={{ zIndex: 0 }}>
              <ellipse
                cx="250"
                cy="40"
                rx="190"
                ry="30"
                stroke="#442077"
                strokeWidth="3"
                fill="none"
              />
            </svg>
            <p className="text-4xl text-black/60 font-light relative z-10">
              different perspective
            </p>
          </div>
        </div>
        <h1 className="text-[110px]/30 font-medium text-black font-dm group">
          Your Angle
        </h1>
      </div>
      <div style={{ height: "450px", position: "relative", width: "100%" }}>
        <CircularGallery bend={4} borderRadius={0.05} scrollEase={0.02} />
      </div>
    </section>
  );
}

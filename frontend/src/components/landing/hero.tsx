// import Swatchbg from "../../assets/landing/Swatch.svg";
export default function Hero() {
  return (
    <section className="font-dm flex min-h-screen flex-col items-center bg-white w-full justify-start pt-60 px-10">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-2xl text-black font-light">One Platform</p>
          <p className="text-2xl text-black font-normal">Many perspective</p>
        </div>

        <h1 className="text-[110px] font-bold text-black font-dm group">
          Your{" "}
          <span className="group-hover:mx-18 transform transition-all duration-300 ease-out"></span>{" "}
          Angle
        </h1>
      </div>
    </section>
  );
}

// import Swatchbg from "../../assets/landing/Swatch.svg";
export default function Hero() {
  return (
    <section
      className="font-dm flex min-h-screen flex-col items-center bg-white w-full justify-start pt-60 px-10"
      // style={{
      //   backgroundImage: `url(${Swatchbg})`,
      //   backgroundSize: "fit",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="text-xl text-black font-light ">One Platform</p>
        <p className="text-3xl text-black font-medium">Many perspective</p>
        <h1 className="text-9xl font-bold text-black font-dm group">
          Your{" "}
          <span className="group-hover:mx-18 transform transition-all duration-150 ease-out"></span>{" "}
          Angle
        </h1>
      </div>
    </section>
  );
}

import Navbar from "./navbar";
export default function Hero() {
  return (
    <section
      className="flex min-h-screen items-start w-full justify-center px-20 py-10"
      style={{
        backgroundImage: "url('../assets/landing/Swatch.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header className="fixed w-full z-50 px-20">
        <Navbar />
      </header>
    </section>
  );
}

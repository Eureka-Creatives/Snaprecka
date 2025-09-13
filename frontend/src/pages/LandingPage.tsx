import Hero from "@/components/landing/hero";
// import Feature from "@/components/landing/feature";
import How from "@/components/landing/how";
import CallToAction from "@/components/landing/call";

export default function LandingPage() {
  return (
    <section className="w-full min-h-screen">
      <Hero />
      <How />
      <How />
      <CallToAction />
    </section>
  );
}

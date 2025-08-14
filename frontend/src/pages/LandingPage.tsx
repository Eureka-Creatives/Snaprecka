import Hero from "@/components/landing/hero";
import Feature from "@/components/landing/feature";
import How from "@/components/landing/how";
import CallToAction from "@/components/landing/call";

export default function LandingPage() {
  return (
    <section>
      <Hero />
      <Feature />
      <How />
      <CallToAction />
    </section>
  );
}

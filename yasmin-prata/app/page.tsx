import Hero from "@/components/sections/Hero";
import Clinic from "@/components/sections/Clinic";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Differentials from "@/components/sections/Differentials";
import SocialProof from "@/components/sections/SocialProof";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Clinic />
      <About />
      <Services />
      <Differentials />
      <SocialProof />
      <FAQ />
      <CTA />
    </>
  );
}

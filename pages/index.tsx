import About from "@/components/layouts/About";
import CTA from "@/components/ui/CTA";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import OurServices from "@/components/layouts/Services";

import Marquee from "@/components/ui/Marquee";
import FAQ from "@/components/layouts/FAQ";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />

      <About />
      <OurServices />
      <Marquee text="Contact us Now" className="bg-zinc-900 text-zinc-50 " />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;


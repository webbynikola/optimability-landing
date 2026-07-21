import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import HowWeHelpYou from "./components/HowWeHelpYou";
import HowToJoin from "./components/HowToJoin";
import RealResults from "./components/RealResults";
import BuiltToRun from "./components/BuiltToRun";
import WhatFoundersAreSaying from "./components/WhatFoundersAreSaying";
import OptimabilityFounders from "./components/OptimabilityFounders";
import FinalCta from "./components/FinalCta";
import Faq from "./components/Faq";
import ApplyForm from "./components/ApplyForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="hero-gradient">
        <Hero />
      </div>
      {/* Reserves space for the hero image that overflows the gradient —
          heights must mirror the image's responsive negative margins in Hero */}
      <div aria-hidden className="h-24 sm:h-40 md:h-48 lg:h-64 xl:h-[21.25rem]" />
      <TrustedBy />
      <HowWeHelpYou />
      <HowToJoin />
      <RealResults />
      <BuiltToRun />
      <WhatFoundersAreSaying />
      <OptimabilityFounders />
      <FinalCta />
      <Faq />
      {/* Form and footer share one continuous gradient, per Figma's
          combined "Contact Form Footer" frame */}
      <div className="footer-gradient">
        <ApplyForm background={false} />
        <Footer background={false} />
      </div>
    </div>
  );
}

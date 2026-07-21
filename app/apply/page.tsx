import type { Metadata } from "next";
import ApplyHero from "../components/ApplyHero";
import ApplyForm from "../components/ApplyForm";
import TrustedBy from "../components/TrustedBy";
import HelpedFounders from "../components/HelpedFounders";
import Faq from "../components/Faq";
import FooterApply from "../components/FooterApply";

export const metadata: Metadata = {
  title: "Apply — Optimability",
  description:
    "Apply to Optimability — a done-for-you health system built for founders",
};

export default function ApplyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Hero and form share one continuous gradient, per Figma's
          combined "Apply Page Hero" frame */}
      <div className="hero-gradient">
        <ApplyHero />
        <ApplyForm background={false} topGapClassName="mt-[100px]" />
      </div>
      <TrustedBy />
      <HelpedFounders />
      <Faq />
      <FooterApply />
    </div>
  );
}

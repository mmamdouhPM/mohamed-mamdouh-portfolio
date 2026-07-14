import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Achievements } from "@/components/achievements";
import { Journey } from "@/components/journey";
import { Methodology } from "@/components/methodology";
import { Leadership } from "@/components/leadership";
import { Projects } from "@/components/projects";
import { Timeline } from "@/components/timeline";
import { Skills } from "@/components/skills";
import { PmpCertification } from "@/components/pmp-certification";
import { TrustedBy } from "@/components/trusted-by";
import { ResumeCta } from "@/components/resume-cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { BackToTop } from "@/components/back-to-top";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Achievements />
        <Journey />
        <Methodology />
        <Leadership />
        <Projects />
        <Timeline />
        <Skills />
        <PmpCertification />
        <TrustedBy />
        <ResumeCta />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}

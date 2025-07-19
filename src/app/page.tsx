import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Speaking } from "@/components/Speaking";
import { Services } from "@/components/Services";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="About Me"
        title="Technology Strategy & Innovation Leadership"
      >
        Combining deep technical expertise with strategic business vision to drive meaningful digital transformation and AI adoption across organizations.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <div id="speaking">
        <SectionTitle
          preTitle="Speaking & Thought Leadership"
          title="Sharing Insights on Modern Technology"
        >
          Bridging the gap between cutting-edge AI research and practical business implementation through engaging presentations and strategic insights.
        </SectionTitle>
        <Speaking />
      </div>

      <div id="collaborate">
        <SectionTitle
          preTitle="Services & Collaboration"
          title="Building AI-Powered Solutions"
        >
          Partnering with organizations to design, implement, and scale intelligent systems that drive measurable business outcomes.
        </SectionTitle>
        <Services />
      </div>

      <div id="contact">
        <Cta />
      </div>
    </Container>
  );
}

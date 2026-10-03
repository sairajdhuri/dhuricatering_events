import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Dhuri Catering & Decorations, a Mumbai event styling and hospitality team creating bespoke celebrations since 2015.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Dhuri"
        title="A decade of making moments feel extraordinary."
        description="Rooted in Borivali and trusted across Mumbai, we turn personal stories into beautifully considered celebrations."
        image="/images/events/rose-white-stage.jpg"
        imageAlt="Elegant rose and white celebration stage"
      />

      <section className="section">
        <div className="shell story-grid">
          <div className="story-images">
            <div className="story-images__main"><Image src="/images/people/dhuri-event-team.jpg" alt="The Dhuri team coordinating an event" fill sizes="(max-width: 800px) 92vw, 42vw" /></div>
            <div className="story-images__portrait"><Image src="/images/people/dhuri-founder.jpg" alt="Dhuri leadership" fill sizes="180px" /></div>
            <span className="story-images__year">Est.<br /><strong>2015</strong></span>
          </div>
          <div className="story-content">
            <p className="eyebrow">Who we are</p>
            <h2>Built on craft, hospitality and quiet precision.</h2>
            <p>Dhuri Decorations began in 2015 with a clear belief: a memorable event is never only about how a space looks. It is how warmly guests are welcomed, how naturally the occasion flows and how confidently every detail is handled.</p>
            <p>Today, our decorators, caterers and production team work as one—creating custom wedding settings, social celebrations and large-scale ground installations with an experienced eye and a personal approach.</p>
            <Link className="text-link" href="/services">Explore our services <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="shell">
          <SectionHeading eyebrow="Our design philosophy" title="Concept, craft and experience—in balance." align="center" />
          <div className="philosophy-grid">
            <article><span>01</span><h3>Concept</h3><p>A distinct creative idea gives every choice clarity, from the first sketch to the final flower.</p></article>
            <article><span>02</span><h3>Craft</h3><p>Quality materials, careful fabrication and clean finishing make a concept feel complete.</p></article>
            <article><span>03</span><h3>Experience</h3><p>Guest movement, comfort, service and atmosphere guide how the celebration comes together.</p></article>
          </div>
        </div>
      </section>

      <section className="section about-standard">
        <div className="shell about-standard__grid">
          <div className="about-standard__content">
            <p className="eyebrow">The Dhuri standard</p>
            <h2>A dependable partner when every detail matters.</h2>
            <ul className="check-list check-list--large">
              <li><Check size={17} /><span><strong>Ten years of proven experience</strong> across weddings and social occasions.</span></li>
              <li><Check size={17} /><span><strong>Custom concepts</strong> scaled thoughtfully to the space and brief.</span></li>
              <li><Check size={17} /><span><strong>End-to-end logistics</strong> with a single, coordinated production team.</span></li>
              <li><Check size={17} /><span><strong>Guest-first thinking</strong> at every touchpoint of the event.</span></li>
            </ul>
          </div>
          <div className="about-standard__image"><Image src="/images/events/sunflower-ring-ceremony.jpg" alt="Circular sunflower ceremony installation" fill sizes="(max-width: 800px) 92vw, 42vw" /></div>
        </div>
      </section>
    </main>
  );
}


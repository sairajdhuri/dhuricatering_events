import type { Metadata } from "next";
import { ArrowRight, Check, UtensilsCrossed, WandSparkles, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore bespoke event décor, celebration catering and event production services from Dhuri in Mumbai.",
};

const serviceDetails = [
  {
    icon: WandSparkles,
    title: "Event décor & styling",
    copy: "From intimate ceremony corners to expansive wedding grounds, we create a complete visual language for your event.",
    image: "/images/events/lotus-wedding-stage.jpg",
    items: ["Custom theme development", "Stages and ceremony backdrops", "Entrances and guest pathways", "Floral and light installations", "Lounge and selfie-point styling"],
  },
  {
    icon: UtensilsCrossed,
    title: "Celebration catering",
    copy: "Generous hospitality, organised service and vibrant presentation designed around your guest list and occasion.",
    image: "/images/catering/grand-buffet-spread.jpg",
    items: ["Curated celebration menus", "Buffet and live counter layouts", "Beverage and welcome service", "Service team coordination", "Guest-flow planning"],
  },
  {
    icon: Workflow,
    title: "Planning & production",
    copy: "One connected team to manage the practical details and keep your event moving smoothly from setup to close.",
    image: "/images/events/outdoor-reception.jpg",
    items: ["Creative and venue planning", "Vendor and production coordination", "Ground-level installations", "On-site setup supervision", "Event-day logistics"],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our services"
        title="Everything your celebration needs, beautifully connected."
        description="Creative direction, food and event logistics delivered by one experienced team."
        image="/images/events/banquet-evening.jpg"
        imageAlt="Evening banquet styled for a celebration"
      />

      <section className="section services-intro">
        <div className="shell">
          <SectionHeading eyebrow="End-to-end expertise" title="A seamless experience from first idea to final farewell." align="center" description="Choose a focused service or bring us in for the full celebration. In every case, the result is tailored to your priorities, your venue and your guests." />
        </div>
      </section>

      <section className="services-detail section section--cream">
        <div className="shell">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className="service-detail" key={service.title}>
                <div className="service-detail__image"><Image src={service.image} alt={service.title} fill sizes="(max-width: 800px) 92vw, 45vw" /></div>
                <div className="service-detail__content">
                  <div className="service-detail__icon"><Icon size={22} aria-hidden="true" /></div>
                  <p className="eyebrow">Service 0{index + 1}</p>
                  <h2>{service.title}</h2>
                  <p>{service.copy}</p>
                  <ul className="check-list">
                    {service.items.map((item) => <li key={item}><Check size={15} />{item}</li>)}
                  </ul>
                  <Link className="text-link" href="/contact">Discuss your event <ArrowRight size={17} /></Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section process-section section--green">
        <div className="shell">
          <SectionHeading eyebrow="Our process" title="Clear, collaborative and considered." inverse />
          <div className="process-grid">
            <article><span>01</span><h3>Discover</h3><p>We learn your priorities, guest profile, venue and visual references.</p></article>
            <article><span>02</span><h3>Design</h3><p>We shape the concept, service plan and practical production details.</p></article>
            <article><span>03</span><h3>Produce</h3><p>Our team coordinates fabrication, food, logistics and installation.</p></article>
            <article><span>04</span><h3>Celebrate</h3><p>On-site teams manage execution so you can stay present in the moment.</p></article>
          </div>
        </div>
      </section>

      <section className="section occasions-section">
        <div className="shell occasions-grid">
          <div>
            <p className="eyebrow">Occasions</p>
            <h2>Made for milestones of every kind.</h2>
          </div>
          <div className="occasion-list">
            <span>Weddings</span><span>Engagements</span><span>Receptions</span><span>Sangeet</span><span>Haldi &amp; Mehendi</span><span>Baby showers</span><span>Milestone celebrations</span><span>Corporate gatherings</span>
          </div>
        </div>
      </section>
    </main>
  );
}


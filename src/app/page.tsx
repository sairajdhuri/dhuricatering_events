import { ArrowDown, ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { eventGallery, services } from "@/lib/site-data";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <Image
          className="home-hero__image"
          src="/images/editorial/candlelit-reception.png"
          alt="Opulent candlelit wedding reception with floral installations"
          fill
          priority
          sizes="100vw"
        />
        <div className="home-hero__wash" />
        <div className="shell home-hero__content">
          <p className="eyebrow eyebrow--light home-hero__eyebrow">Catering · Décor · Celebrations</p>
          <h1>Celebrations,<br /><em>composed with care.</em></h1>
          <p className="home-hero__copy">
            Bespoke event design, generous hospitality and seamless production for the moments you will always remember.
          </p>
          <div className="hero-actions">
            <Link className="button button--light" href="/contact">Plan your event</Link>
            <Link className="text-link text-link--light" href="/gallery">Explore our work <ArrowRight size={17} /></Link>
          </div>
        </div>
        <div className="home-hero__details">
          <span><strong>Since</strong> 2015</span>
          <span><strong>Based in</strong> Mumbai</span>
          <span><strong>Made for</strong> Your story</span>
        </div>
        <a className="scroll-cue" href="#introduction" aria-label="Scroll to introduction">
          <ArrowDown size={17} aria-hidden="true" />
        </a>
      </section>

      <section className="intro-section section" id="introduction">
        <div className="shell intro-grid">
          <div className="intro-statement">
            <p className="eyebrow">The Dhuri approach</p>
            <h2>Your vision sets the direction. We bring it to life.</h2>
          </div>
          <div className="intro-copy">
            <p>
              For over a decade, Dhuri has transformed venues across Mumbai into celebrations with a distinctive sense of place. Every event begins with listening—then becomes a considered blend of décor, food, flow and feeling.
            </p>
            <Link className="text-link" href="/about">Discover our story <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="services-section section section--cream">
        <div className="shell">
          <SectionHeading
            eyebrow="What we create"
            title="One team. Every detail."
            description="A connected service for celebrations that feel effortless from the first idea to the final guest departure."
          />
          <div className="service-grid">
            {services.map((service) => (
              <Link className="service-card" href="/services" key={service.number}>
                <div className="service-card__image">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 800px) 100vw, 33vw" />
                </div>
                <div className="service-card__body">
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-card__link">Explore service <ArrowRight size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="signature-section section">
        <div className="shell signature-grid">
          <div className="signature-images">
            <div className="signature-images__large">
              <Image src="/images/events/garden-wedding-canopy.jpg" alt="Garden wedding installation with a pastel canopy" fill sizes="(max-width: 800px) 92vw, 42vw" />
            </div>
          </div>
          <div className="signature-content">
            <p className="eyebrow">Our signature</p>
            <h2>Grand in feeling.<br />Precise in every detail.</h2>
            <p>
              Our speciality is custom-concept décor for weddings, social gatherings and expansive outdoor venues. We balance visual impact with guest comfort, intelligent flow and disciplined execution.
            </p>
            <ul className="check-list">
              <li><Check size={16} /> Bespoke concepts shaped to your venue and story</li>
              <li><Check size={16} /> Skilled installation with polished finishing</li>
              <li><Check size={16} /> On-site coordination from setup to close</li>
            </ul>
            <Link className="button button--dark" href="/services">See how we work</Link>
          </div>
        </div>
      </section>

      <section className="promise-section section section--green">
        <div className="shell">
          <SectionHeading eyebrow="The client promise" title="Designed around how the day should feel." align="center" inverse />
          <div className="promise-grid">
            <article><span>01</span><h3>Tailored concepts</h3><p>Creative direction shaped to your vision, venue and celebration scale.</p></article>
            <article><span>02</span><h3>Quality execution</h3><p>Experienced teams and careful installation for a polished finish.</p></article>
            <article><span>03</span><h3>Guest experience</h3><p>Comfort, movement and visual impact considered as one complete experience.</p></article>
          </div>
        </div>
      </section>

      <section className="work-section section">
        <div className="shell">
          <div className="work-heading-row">
            <SectionHeading eyebrow="Selected work" title="Stories told in spaces." />
            <Link className="text-link" href="/gallery">View the full gallery <ArrowRight size={17} /></Link>
          </div>
          <div className="home-gallery">
            {eventGallery.slice(0, 5).map((item, index) => (
              <Link className={`home-gallery__item home-gallery__item--${index + 1}`} href="/gallery" key={item.src}>
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 800px) 92vw, 40vw" />
                <div><span>{item.category}</span><h3>{item.title}</h3></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="venues-section section section--cream">
        <div className="shell venue-grid">
          <div>
            <p className="eyebrow">Venue relationships</p>
            <h2>Trusted in spaces that demand excellence.</h2>
          </div>
          <div className="venue-list">
            <div><span>Preferred decorator</span><strong>Divine Banquets</strong><small>Borivali</small></div>
            <div><span>Trusted event partner</span><strong>Utopia Banquets</strong><small>Dahisar</small></div>
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <Image src="/images/events/colourful-celebration-canopy.jpg" alt="Colourful pink and coral canopy over a daytime celebration" fill sizes="100vw" />
        <div className="closing-cta__overlay" />
        <div className="shell closing-cta__content">
          <p className="eyebrow eyebrow--light">Begin with a conversation</p>
          <h2>Have a celebration in mind?</h2>
          <p>Tell us what you are imagining. We&apos;ll help shape the rest.</p>
          <Link className="button button--light" href="/contact">Plan with Dhuri</Link>
        </div>
      </section>
    </main>
  );
}

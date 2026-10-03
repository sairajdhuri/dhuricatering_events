import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { cateringGallery, eventGallery } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore wedding décor, celebration styling and catering work by Dhuri Catering & Decorations in Mumbai.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Selected work"
        title="Celebrations with a sense of place."
        description="A glimpse into the stages, settings, entrances and tables we have brought to life."
        image="/images/events/outdoor-grand-stage.jpg"
        imageAlt="Grand outdoor wedding stage by Dhuri Decorations"
      />

      <section className="section gallery-section">
        <div className="shell">
          <SectionHeading eyebrow="Décor & experiences" title="Designed for the moment—and the memory." description="Each project is developed for its own venue, guest experience and story." />
          <div className="gallery-masonry">
            {eventGallery.map((item, index) => (
              <figure className={`gallery-card gallery-card--${(index % 4) + 1}`} key={item.src}>
                <div className="gallery-card__image"><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 31vw" /></div>
                <figcaption><span>{item.category}</span><strong>{item.title}</strong></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream gallery-section">
        <div className="shell">
          <SectionHeading eyebrow="Catering" title="Hospitality, beautifully presented." description="From welcome drinks and live counters to generous buffet service." />
          <div className="food-gallery">
            {cateringGallery.map((item) => (
              <figure className="food-card" key={item.src}>
                <div><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 92vw, 33vw" /></div>
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-cta section section--green">
        <div className="shell">
          <p className="eyebrow eyebrow--light">Your event, your signature</p>
          <h2>Let&apos;s create something distinctly yours.</h2>
          <Link className="button button--light" href="/contact">Start planning</Link>
        </div>
      </section>
    </main>
  );
}


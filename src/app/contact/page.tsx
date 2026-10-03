import type { Metadata } from "next";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Plan your wedding or celebration with Dhuri Catering & Decorations in Borivali West, Mumbai.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Start a conversation"
        title="Tell us what you are dreaming of."
        description="Share your occasion, date and venue. We will help you shape a celebration that feels personal from beginning to end."
        image="/images/events/hanging-floral-aisle.jpg"
        imageAlt="Hanging floral aisle installation"
      />

      <section className="section contact-section">
        <div className="shell contact-grid">
          <div className="contact-content">
            <p className="eyebrow">Plan with Dhuri</p>
            <h2>A good event begins with a thoughtful brief.</h2>
            <p>When you get in touch, it helps to have your preferred date, venue or area, approximate guest count and the services you are considering. Early ideas are welcome—our team can help develop the rest.</p>
            <div className="contact-actions">
              <a className="button button--dark" href="tel:+919867673219"><Phone size={17} /> Call for an enquiry</a>
              <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Shimpoli+Borivali+West+Mumbai" target="_blank" rel="noreferrer">View location <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="contact-card">
            <div><Phone size={20} /><span><small>Call us</small><a href="tel:+919867673219">+91 98676 73219</a></span></div>
            <div><MapPin size={20} /><span><small>Studio</small><p>Shimpoli, Borivali West<br />Mumbai, Maharashtra 400092</p></span></div>
            <div><Clock3 size={20} /><span><small>Consultations</small><p>By appointment</p></span></div>
          </div>
        </div>
      </section>

      <section className="section section--cream planning-brief">
        <div className="shell planning-brief__grid">
          <div className="planning-brief__image"><Image src="/images/events/pink-blue-reception-stage.jpg" alt="Pink and blue reception stage" fill sizes="(max-width: 800px) 92vw, 44vw" /></div>
          <div className="planning-brief__content">
            <p className="eyebrow">Before we speak</p>
            <h2>Your event brief</h2>
            <p>These four details help us make the first conversation more useful:</p>
            <ol>
              <li><span>01</span><div><strong>Occasion &amp; date</strong><p>What are you celebrating, and when?</p></div></li>
              <li><span>02</span><div><strong>Venue or area</strong><p>Share a confirmed venue or preferred part of the city.</p></div></li>
              <li><span>03</span><div><strong>Guest count</strong><p>An estimate helps us plan scale and service.</p></div></li>
              <li><span>04</span><div><strong>Your priorities</strong><p>Décor, catering, production—or the full experience.</p></div></li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}

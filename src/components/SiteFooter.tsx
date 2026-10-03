import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import { siteNavigation } from "@/lib/site-data";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-lead">
          <p className="eyebrow eyebrow--light">Your celebration starts here</p>
          <h2>Let&apos;s make it memorable.</h2>
          <Link className="text-link text-link--light" href="/contact">
            Plan an event <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <BrandMark footer />
            <p>Thoughtful catering, custom décor and seamless event production across Mumbai.</p>
          </div>
          <div>
            <p className="footer-heading">Explore</p>
            <nav className="footer-links" aria-label="Footer navigation">
              {siteNavigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
            </nav>
          </div>
          <div>
            <p className="footer-heading">Visit</p>
            <a className="footer-contact" href="https://www.google.com/maps/search/?api=1&query=Shimpoli+Borivali+West+Mumbai" target="_blank" rel="noreferrer">
              <MapPin size={17} aria-hidden="true" />
              <span>Shimpoli, Borivali West<br />Mumbai, Maharashtra</span>
            </a>
          </div>
          <div>
            <p className="footer-heading">Enquiries</p>
            <a className="footer-contact" href="tel:+919867673219">
              <Phone size={17} aria-hidden="true" />
              <span>+91 98676 73219<br /><small>Event consultations</small></span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Dhuri Catering &amp; Decorations</span>
          <span>Established 2015 · Mumbai</span>
        </div>
      </div>
    </footer>
  );
}

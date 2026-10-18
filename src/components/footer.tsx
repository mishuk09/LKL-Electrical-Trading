import Image from "next/image";
import {
  ArrowUp,
  MessageCircle,
  Phone,
  MapPin,
  ShoppingBag,
} from "lucide-react";
import { business, navigation, photos, whatsapp } from "@/lib/business";
import { Action, Brand } from "./ui";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-cta">
            <div className="footer-cta-photo">
              <Image
                src={photos.technician}
                alt="LKL technician working on an air conditioning unit"
                fill
                sizes="(max-width: 700px) 0px, 340px"
              />
            </div>
            <div>
              <span className="eyebrow light">LET’S KEEP YOU COMFORTABLE</span>
              <h2>
                Ready for a cooler,
                <br />
                more comfortable space?
              </h2>
              <p>Let’s take care of your air conditioning, together.</p>
              <Action href={whatsapp()} external secondary>
                Book a service
              </Action>
            </div>
          </div>
          <div className="footer-grid">
            <div className="footer-brand">
              <Brand />
              <p>
                Your local partner for air conditioning, electrical solutions,
                and spare parts in Melaka.
              </p>
              <div className="social-links">
                <a
                  href={whatsapp()}
                  aria-label="WhatsApp LKL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={19} />
                </a>
                <a
                  href={business.shopee}
                  aria-label="Shop LA Electrical on Shopee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingBag size={19} />
                </a>
                <a
                  href={business.maps}
                  aria-label="Find LKL on Google Maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={19} />
                </a>
              </div>
            </div>
            <div>
              <h3>Explore</h3>
              {navigation.map((n) => (
                <a key={n} href={`#${n.toLowerCase()}`}>
                  {n}
                </a>
              ))}
            </div>
            <div>
              <h3>Our services</h3>
              {[
                "Aircond installation",
                "Servicing & chemical wash",
                "Dismantling & relocation",
                "Electrical & spare parts",
              ].map((t) => (
                <a href="#services" key={t}>
                  {t}
                </a>
              ))}
            </div>
            <div>
              <h3>Stay in touch</h3>
              <a className="footer-contact" href={business.phoneHref}>
                <Phone size={19} />
                <span>
                  <small>Call our team</small>
                  {business.phone}
                </span>
              </a>
              <a
                className="footer-contact"
                href={business.maps}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={22} />
                <span>
                  <small>Visit our shop</small>Taman Kota Laksamana,
                  <br />
                  75200 Melaka, Malaysia
                </span>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} LKL Electrical Trading. All rights
              reserved.
            </span>
            <a href="#home">
              Back to top <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href={whatsapp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with LKL on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </>
  );
}

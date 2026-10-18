import { MapPin, Phone, Clock3, ArrowUpRight } from "lucide-react";
import { business, whatsapp } from "@/lib/business";
import { Heading } from "./ui";
export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <Heading
          eyebrow="COME SAY HELLO"
          centered
          description="Visit our shop in Taman Kota Laksamana, or reach out to discuss your next installation."
        >
          Connect with <em>our Melaka team.</em>
        </Heading>
        <div className="contact-grid">
          <article className="contact-card">
            <span className="contact-tab">
              <MapPin size={15} />
              Our location
            </span>
            <h3>Taman Kota Laksamana</h3>
            <p>{business.address}</p>
            <a
              className="text-link"
              href={business.maps}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions <ArrowUpRight size={17} />
            </a>
          </article>
          <article className="contact-card">
            <span className="contact-tab">
              <Phone size={15} />
              Let’s talk
            </span>
            <h3>
              <a href={business.phoneHref}>{business.phone}</a>
            </h3>
            <p>
              Need a new unit, a service, or a spare part? We’re here to help.
            </p>
            <a
              className="text-link"
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp <ArrowUpRight size={17} />
            </a>
          </article>
          <article className="contact-card">
            <span className="contact-tab">
              <Clock3 size={15} />
              Opening hours
            </span>
            <dl className="hours">
              <div>
                <dt>Monday–Friday</dt>
                <dd>9am–6pm</dd>
              </div>
              <div>
                <dt>Saturday</dt>
                <dd>9am–4pm</dd>
              </div>
              <div>
                <dt>Sunday</dt>
                <dd>Closed</dd>
              </div>
            </dl>
            <p className="hours-note">We look forward to welcoming you.</p>
          </article>
        </div>
        <div className="map-frame">
          <iframe
            title="LKL Electrical Trading location in Melaka"
            src={business.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href={business.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            <MapPin size={18} />
            Open in Google Maps <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

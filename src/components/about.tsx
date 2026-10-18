import Image from "next/image";
import { Check, Phone, ArrowUpRight } from "lucide-react";
import { business, photos, whatsapp } from "@/lib/business";
import { Action, Heading } from "./ui";

export default function About() {
  return (
    <section className="section container about" id="about">
      <div className="about-collage">
        <div className="collage-column first">
          <div className="mini-note">
            <h3>
              Good service.
              <br />
              Real peace of mind.
            </h3>
            <p>Local people, taking care of local comfort.</p>
            <ArrowUpRight size={26} />
          </div>
          <div className="photo-frame collage-shop">
            <Image
              src={photos.shop}
              alt="LKL Electrical and LA Electrical & Parts Trading shopfront in Melaka"
              fill
              sizes="(max-width: 700px) 45vw, 260px"
            />
          </div>
        </div>
        <div className="collage-column">
          <div className="photo-frame">
            <Image
              src={photos.technician}
              alt="Careful wall-mounted air conditioner installation"
              fill
              sizes="(max-width: 700px) 45vw, 260px"
            />
          </div>
          <div className="photo-frame">
            <Image
              src={photos.finished}
              alt="Completed air conditioning installation in a home"
              fill
              sizes="(max-width: 700px) 45vw, 260px"
            />
          </div>
        </div>
        <div className="round-seal">
          <strong>
            4.9<span>★</span>
          </strong>
          <small>GOOGLE RATING</small>
        </div>
      </div>
      <div className="about-copy">
        <Heading eyebrow="GET TO KNOW LKL">
          Professional installation.
          <br />
          <em>Comfort you can trust.</em>
        </Heading>
        <p>
          We’re LKL Electrical Trading, your neighbourhood air conditioning
          contractor and electrical parts supplier in Taman Kota Laksamana,
          Melaka.
        </p>
        <p>
          From a new aircond for your home to a reliable setup for your
          business, we bring practical advice and careful workmanship to every
          job.
        </p>
        <div className="check-list">
          {[
            "Home & commercial installation",
            "Servicing & chemical wash",
            "Dismantling & relocation",
            "Electrical parts & accessories",
          ].map((t) => (
            <span key={t}>
              <Check size={15} />
              {t}
            </span>
          ))}
        </div>
        <div className="about-bottom">
          <h3>Your comfort, taken care of.</h3>
          <p>Tell us what you need. We’ll help you find the right solution.</p>
          <div className="actions">
            <Action href={whatsapp()} external>
              Get in touch
            </Action>
            <a className="phone-link" href={business.phoneHref}>
              <Phone size={23} />
              <span>
                <small>Give us a call</small>
                <strong>{business.phone}</strong>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="trust-bar">
        <span>BRANDS WE WORK WITH</span>
        <strong className="daikin">DAIKIN</strong>
        <strong className="midea">Midea</strong>
        <span className="trust-divider" />
        <p>
          <strong>Local service.</strong> Established names. Lasting comfort.
        </p>
      </div>
    </section>
  );
}

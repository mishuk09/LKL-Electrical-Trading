import Image from "next/image";
import { ArrowDown, ShieldCheck, Snowflake, Wrench, Zap } from "lucide-react";
import { business, photos, whatsapp } from "@/lib/business";
import { Action } from "./ui";

export default function Hero() {
  return (
    <>
      <section className="hero" id="home" aria-labelledby="hero-heading">
        <Image
          src={photos.hero}
          alt="LKL technician installing an air conditioner in a customer's home"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <span className="eyebrow light">
            <span className="tiny-line" />
            YOUR LOCAL AIRCOND SPECIALISTS
          </span>
          <h1 id="hero-heading">
            A cooler space.
            <br />A better <span>everyday.</span>
          </h1>
          <p>
            Trusted air conditioning & electrical services in Melaka. From the
            first installation to the parts you need, we keep your comfort
            running.
          </p>
          <div className="actions">
            <Action href={whatsapp()} external>
              Let’s talk on WhatsApp
            </Action>
            <a className="hero-call" href={business.phoneHref}>
              Call {business.phone} <span>↗</span>
            </a>
          </div>
          <div className="hero-proof">
            <span className="proof-icon">
              <ShieldCheck size={23} />
            </span>
            <div>
              <strong>
                4.9 <span className="stars">★★★★★</span>
              </strong>
              <small>Trusted by customers · 131+ Google reviews</small>
            </div>
          </div>
        </div>
        <a
          className="hero-scroll"
          href="#about"
          aria-label="Scroll to about us"
        >
          <ArrowDown size={19} />
        </a>
        <div className="hero-caption">REAL PEOPLE. CAREFUL WORKMANSHIP.</div>
      </section>
      <div className="container feature-strip">
        {[
          {
            Icon: Snowflake,
            title: "Air Conditioning",
            text: "Installation, servicing & maintenance",
          },
          {
            Icon: Wrench,
            title: "Electrical & Spare Parts",
            text: "The right parts. The right advice.",
          },
          {
            Icon: Zap,
            title: "Local Expertise",
            text: "Here for homes & businesses in Melaka",
          },
        ].map(({ Icon, title, text }) => (
          <a href="#services" className="feature" key={title}>
            <Icon size={32} strokeWidth={1.5} />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </>
  );
}

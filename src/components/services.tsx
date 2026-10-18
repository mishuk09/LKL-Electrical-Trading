import Image from "next/image";
import { Snowflake, Droplets, Truck, Cable, ArrowUpRight } from "lucide-react";
import { photos, whatsapp } from "@/lib/business";
import { Heading } from "./ui";
const services = [
  {
    title: "Aircond Installation",
    text: "Wall-mounted units for your home and ceiling cassette systems for commercial spaces. A careful fit, from start to finish.",
    image: photos.technician,
    Icon: Snowflake,
  },
  {
    title: "Servicing & Chemical Wash",
    text: "Give your aircond the attention it needs. Routine servicing and deeper cleaning to help keep your space comfortable.",
    image: photos.hero,
    Icon: Droplets,
  },
  {
    title: "Dismantling & Relocation",
    text: "Moving or replacing your aircond? Let us handle the careful removal and relocation of your indoor and outdoor units.",
    image: photos.outdoor,
    Icon: Truck,
  },
  {
    title: "Electrical & Parts",
    text: "From wiring and troubleshooting to replacement components, find practical support and the parts for the job.",
    image: photos.materials,
    Icon: Cable,
  },
];
export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <Heading
          eyebrow="WHAT WE DO"
          centered
          description="One local team for your air conditioning, electrical work, and spare parts."
        >
          Every space deserves <em>better comfort.</em>
        </Heading>
        <div className="services-grid">
          {services.map(({ title, text, image, Icon }, i) => (
            <article className="service-card" key={title}>
              <div className="service-image">
                <Image
                  src={image}
                  alt={title + " by LKL Electrical Trading"}
                  fill
                  sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 280px"
                />
                <span className="service-icon">
                  <Icon size={23} />
                </span>
              </div>
              <span className="card-number">0{i + 1} / OUR SERVICES</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
                href={whatsapp(
                  `Hi LKL Electrical! I would like to enquire about ${title.toLowerCase()}.`,
                )}
              >
                Enquire about this service <ArrowUpRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

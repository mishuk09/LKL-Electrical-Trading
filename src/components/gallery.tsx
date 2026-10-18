import Image from "next/image";
import { photos, whatsapp } from "@/lib/business";
import { Action, Heading } from "./ui";
const projects = [
  { src: photos.hero, title: "Careful installation", label: "AT HOME" },
  {
    src: photos.shop,
    title: "Your neighbourhood specialists",
    label: "OUR MELAKA SHOP",
  },
  {
    src: photos.finished,
    title: "Comfort, fitted neatly",
    label: "COMPLETED INSTALLATION",
  },
  {
    src: photos.outdoor,
    title: "Attention to every detail",
    label: "ON THE JOB",
  },
  {
    src: photos.installation,
    title: "Making spaces more comfortable",
    label: "OUR WORK",
  },
];
export default function Gallery() {
  return (
    <section className="section container gallery-section" id="gallery">
      <div className="heading-row">
        <Heading eyebrow="A CLOSER LOOK">
          Real spaces. <em>Real workmanship.</em>
        </Heading>
        <Action href={whatsapp()} external secondary>
          Plan your installation
        </Action>
      </div>
      <div className="gallery-grid">
        {projects.map(({ src, title, label }) => (
          <figure key={src} className="gallery-item">
            <Image
              src={src}
              alt={title}
              fill
              sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 50vw"
            />
            <figcaption>
              <small>{label}</small>
              <h3>{title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

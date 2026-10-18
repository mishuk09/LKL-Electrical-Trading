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
    <section
      className="w-[min(var(--container),_calc(100%_-_64px))] [@media(560px<width<=850px)]:w-[calc(100%_-_40px)] [@media(width<=560px)]:w-[calc(100%_-_36px)] mx-auto pt-[var(--section-space)] pb-[var(--section-space)]"
      id="gallery"
    >
      <div className="flex justify-between items-center [@media(width<=850px)]:items-start mb-[30px] gap-[20px] [&_[data-slot~='section-heading']_h2]:mb-0 [@media(width<=850px)]:flex-col">
        <Heading eyebrow="A CLOSER LOOK">
          Real spaces. <em>Real workmanship.</em>
        </Heading>
        <Action href={whatsapp()} external secondary>
          Plan your installation
        </Action>
      </div>
      <div className="grid grid-cols-[repeat(6,_1fr)] [@media(width<=560px)]:grid-cols-[1fr] gap-[20px] [@media(width<=560px)]:gap-[16px]">
        {projects.map(({ src, title, label }) => (
          <figure
            key={src}
            className="relative h-[260px] [@media(width<=560px)]:h-[275px] col-[span_2] [@media(560px<width<=850px)]:col-[span_3] [@media(width<=560px)]:col-[auto] overflow-hidden rounded-[var(--radius)] [&:nth-child(-n_+_2)]:col-[span_3] [@media(width<=560px)]:[&:nth-child(-n_+_2)]:col-[auto] [&:nth-child(-n_+_2)]:h-[330px] [@media(560px<width<=850px)]:[&:nth-child(-n_+_2)]:h-[260px] [@media(width<=560px)]:[&:nth-child(-n_+_2)]:h-[275px] [&_img]:[transition:transform_0.5s] [&:hover_img]:[transform:scale(1.035)] [&::after]:content-[''] [&::after]:absolute [&::after]:[inset:30%_0_0] [&::after]:[background:linear-gradient(transparent,_#0b172bdd)] [&_figcaption]:absolute [&_figcaption]:z-[1] [&_figcaption]:bottom-[23px] [&_figcaption]:left-[25px] [&_figcaption]:right-[20px] [&_figcaption]:text-[#fff] [&_small]:text-[8px] [&_small]:tracking-[1.8px] [&_small]:text-[#f1c2cb] [&_h3]:text-[18px] [&_h3]:mt-[9px] [@media(560px<width<=850px)]:[&:last-child]:col-[span_6] [@media(width<=560px)]:[&:last-child]:col-[auto] [@media(width<=560px)]:[&:last-child]:h-[275px]"
          >
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

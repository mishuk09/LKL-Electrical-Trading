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
    <section
      className="pt-[var(--section-space)] pb-[var(--section-space)] bg-soft [background-image:radial-gradient(#b63a530b_1px,_transparent_1px)] [background-size:20px_20px]"
      id="services"
    >
      <div className="w-[min(var(--container),_calc(100%_-_64px))] [@media(560px<width<=850px)]:w-[calc(100%_-_40px)] [@media(width<=560px)]:w-[calc(100%_-_36px)] mx-auto">
        <Heading
          eyebrow="WHAT WE DO"
          centered
          description="One local team for your air conditioning, electrical work, and spare parts."
        >
          Every space deserves <em>better comfort.</em>
        </Heading>
        <div className="grid grid-cols-[repeat(4,_1fr)] [@media(560px<width<=1100px)]:grid-cols-[1fr_1fr] [@media(width<=560px)]:grid-cols-[1fr] gap-[20px] [@media(width<=560px)]:gap-[22px]">
          {services.map(({ title, text, image, Icon }, i) => (
            <article
              className="bg-white pt-[12px] [@media(560px<width<=1100px)]:pt-[15px] pr-[12px] [@media(560px<width<=1100px)]:pr-[15px] pb-[24px] [@media(width<=1100px)]:pb-[25px] pl-[12px] [@media(560px<width<=1100px)]:pl-[15px] rounded-[var(--radius)] flex flex-col [box-shadow:var(--shadow)] [&_h3]:text-[19px] [@media(width<=1100px)]:[&_h3]:text-[22px] [&_h3]:mt-0 [&_h3]:mr-[9px] [&_h3]:mb-[13px] [&_h3]:ml-[9px] [&_h3]:leading-[1.3] [&_p]:text-[12px] [&_p]:mt-0 [&_p]:mr-[9px] [&_p]:mb-[23px] [&_p]:ml-[9px] [&_[data-slot~='text-link']]:mt-auto [&_[data-slot~='text-link']]:mr-[9px] [&_[data-slot~='text-link']]:mb-0 [&_[data-slot~='text-link']]:ml-[9px] [&_[data-slot~='text-link']]:text-[10px] [@media(width<=1100px)]:[&_[data-slot~='text-link']]:text-[12px] [&_[data-slot~='text-link']]:gap-[5px] [@media(width<=1100px)]:[&_p]:max-w-[380px]"
              key={title}
            >
              <div className="relative h-[185px] [@media(width<=1100px)]:h-[230px] rounded-[5px] overflow-hidden mb-[24px]">
                <Image
                  src={image}
                  alt={title + " by LKL Electrical Trading"}
                  fill
                  sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 280px"
                />
                <span className="absolute bottom-0 right-0 grid place-items-center w-[46px] h-[46px] rounded-[12px_0_0_0] bg-primary text-[#fff]">
                  <Icon size={23} />
                </span>
              </div>
              <span className="text-[8px] font-bold tracking-[1.5px] text-muted mt-0 mr-[9px] mb-[10px] ml-[9px]">
                0{i + 1} / OUR SERVICES
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a
                data-slot="text-link"
                className="inline-flex items-center text-primary text-[12px] font-bold gap-[10px] [&:hover]:underline"
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

import Image from "next/image";
import { ArrowDown, ShieldCheck, Snowflake, Wrench, Zap } from "lucide-react";
import { business, photos, whatsapp } from "@/lib/business";
import { Action } from "./ui";

export default function Hero() {
  return (
    <>
      <section
        className="relative min-h-[610px] [@media(width<=850px)]:min-h-[570px] [@media(width>=1600px)]:min-h-[680px] text-[#fff] flex items-center pt-[70px] [@media(width<=560px)]:pt-[58px] pb-[95px] [@media(width<=560px)]:pb-[82px] [&_h1]:text-[length:clamp(46px,_5.1vw,_72px)] [@media(560px<width<=850px)]:[&_h1]:text-[60px] [@media(width<=560px)]:[&_h1]:text-[45px] [&_h1]:font-[750] [&_h1]:leading-[1.06] [&_h1]:tracking-[-3px] [@media(width<=560px)]:[&_h1]:tracking-[-1.8px] [&_h1]:max-w-[750px] [&_h1_span]:text-[#eea7b5] [&_p]:max-w-[500px] [@media(width<=560px)]:[&_p]:max-w-[330px] [&_p]:text-[#e1e5ec] [&_p]:text-[15px] [@media(width<=560px)]:[&_p]:text-[13px] [&_p]:leading-[1.85] [&_p]:mt-[25px] [&_p]:mr-0 [&_p]:mb-[30px] [&_p]:ml-0 [@media(width<=560px)]:pr-0 [@media(width<=560px)]:pl-0 [@media(width<=560px)]:[&_[data-slot~='eyebrow']]:text-[9px] [@media(width<=560px)]:[&_[data-slot~='eyebrow']]:tracking-[1.1px] [@media(width<=560px)]:[&_[data-slot~='actions']]:items-start [@media(width<=560px)]:[&_[data-slot~='actions']]:flex-col [@media(width<=560px)]:[&_[data-slot~='actions']]:gap-[16px]"
        id="home"
        aria-labelledby="hero-heading"
      >
        <Image
          src={photos.hero}
          alt="LKL technician installing an air conditioner in a customer's home"
          fill
          priority
          sizes="100vw"
          className="object-[50%_43%] [@media(width<=560px)]:object-[63%_center]"
        />
        <div className="absolute [inset:0] [background:linear-gradient(_90deg,_#0b172beb_0%,_#0d1a30c9_37%,_#101e3450_75%,_#101e3420_)] [@media(width<=560px)]:[background:linear-gradient(90deg,_#0b172be8,_#0b172b99)]" />
        <div className="w-[min(var(--container),_calc(100%_-_64px))] [@media(560px<width<=850px)]:w-[calc(100%_-_40px)] [@media(width<=560px)]:w-[calc(100%_-_36px)] mx-auto relative z-[1]">
          <span
            data-slot="eyebrow light"
            className="flex items-center text-[11px] font-bold tracking-[1.7px] text-[#fff] mb-[19px] gap-[9px]"
          >
            <span className="h-[1px] w-[28px] bg-[#e7a0af]" />
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
          <div
            data-slot="actions"
            className="flex items-center flex-wrap gap-[24px]"
          >
            <Action href={whatsapp()} external>
              Let’s talk on WhatsApp
            </Action>
            <a
              className="text-[12px] text-[#fff] [&_span]:ml-[9px]"
              href={business.phoneHref}
            >
              Call {business.phone} <span>↗</span>
            </a>
          </div>
          <div className="flex items-center mt-[37px] [@media(width<=560px)]:mt-[25px] gap-[13px] [&_strong]:text-[17px] [&_[data-slot~='stars']]:ml-[8px] [&_[data-slot~='stars']]:text-[12px] [&_small]:block [&_small]:text-[#e1e5ec] [&_small]:text-[10px] [@media(width<=560px)]:[&_small]:text-[9px] [&_small]:mt-[2px]">
            <span className="grid place-items-center w-[42px] h-[42px] bg-[#ffffff13] [border:1px_solid_#ffffff30] rounded-[50%]">
              <ShieldCheck size={23} />
            </span>
            <div>
              <strong>
                4.9{" "}
                <span
                  data-slot="stars"
                  className="text-[#e9ab56] text-[14px] tracking-[3px]"
                >
                  ★★★★★
                </span>
              </strong>
              <small>Trusted by customers · 131+ Google reviews</small>
            </div>
          </div>
        </div>
        <a
          className="absolute right-[5%] bottom-[85px] [border:1px_solid_#ffffff60] rounded-[50%] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [@media(width<=560px)]:hidden"
          href="#about"
          aria-label="Scroll to about us"
        >
          <ArrowDown size={19} />
        </a>
        <div className="absolute right-[5%] bottom-[45%] [writing-mode:vertical-rl] text-[9px] tracking-[3px] text-[#ffffffb0] [@media(width<=850px)]:hidden">
          REAL PEOPLE. CAREFUL WORKMANSHIP.
        </div>
      </section>
      <div className="w-[min(var(--container),_calc(100%_-_64px))] [@media(560px<width<=850px)]:w-[calc(100%_-_40px)] [@media(width<=560px)]:w-[calc(100%_-_36px)] mx-auto grid grid-cols-[repeat(3,_1fr)] [@media(width<=850px)]:grid-cols-[1fr] relative mt-[-36px] z-[2] [box-shadow:var(--shadow)]">
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
          <a
            href="#services"
            className="bg-soft flex items-center pt-[29px] [@media(850px<width<=1100px)]:pt-[25px] [@media(width<=850px)]:pt-[20px] pr-[26px] [@media(850px<width<=1100px)]:pr-[18px] [@media(560px<width<=850px)]:pr-[30px] [@media(width<=560px)]:pr-[20px] pb-[29px] [@media(850px<width<=1100px)]:pb-[25px] [@media(width<=850px)]:pb-[20px] pl-[26px] [@media(850px<width<=1100px)]:pl-[18px] [@media(560px<width<=850px)]:pl-[30px] [@media(width<=560px)]:pl-[20px] min-h-[111px] [@media(width<=850px)]:min-h-[80px] gap-[18px] [@media(560px<width<=1100px)]:gap-[12px] [@media(width<=560px)]:gap-[15px] [&_>_svg]:text-primary [&_h3]:text-[16px] [@media(850px<width<=1100px)]:[&_h3]:text-[14px] [@media(width<=560px)]:[&_h3]:text-[15px] [&_h3]:tracking-[-0.3px] [&_p]:text-[11px] [@media(850px<width<=1100px)]:[&_p]:text-[10px] [@media(width<=560px)]:[&_p]:text-[10px] [@media(560px<width<=850px)]:[&_p]:text-[12px] [&_p]:mt-[6px] [&_>_span]:ml-auto [&:nth-child(2)]:bg-primary [&:nth-child(2)]:text-[#fff] [&:nth-child(2)_p]:text-[#fff] [&:nth-child(2)_>_svg]:text-[#fff] [&:nth-child(3)]:bg-navy [&:nth-child(3)]:text-[#fff] [&:nth-child(3)_p]:text-[#c6cfdd] [&:nth-child(3)_>_svg]:text-[#e49baa] [@media(width<=560px)]:[&_>_svg]:w-[28px]"
            key={title}
          >
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

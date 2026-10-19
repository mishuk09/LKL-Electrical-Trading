import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";
import { business, photos } from "@/lib/business";
import { ContactActions, Heading } from "./ui";

export default function About() {
  return (
    <section
      className="w-[min(var(--container),_calc(100%_-_64px))] [@media(560px<width<=850px)]:w-[calc(100%_-_40px)] [@media(width<=560px)]:w-[calc(100%_-_36px)] mx-auto pt-[var(--section-space)] pb-[var(--section-space)] grid grid-cols-[1fr_1.08fr] [@media(width<=850px)]:grid-cols-[1fr] gap-[65px] [@media(width<=1100px)]:gap-x-[35px] [@media(850px<width<=1100px)]:gap-y-[65px] [@media(width<=850px)]:gap-y-[40px] [@media(width<=1100px)]:[&_[data-slot~='actions']]:gap-[15px]"
      id="about"
    >
      <div className="relative grid grid-cols-[1fr_1fr] [align-items:start] gap-[16px] [@media(width<=560px)]:gap-[12px] [@media(width<=850px)]:max-w-[530px] [@media(width<=850px)]:w-full [@media(width<=850px)]:mt-auto [@media(width<=850px)]:mr-auto [@media(width<=850px)]:mb-auto [@media(width<=850px)]:ml-auto">
        <div
          data-slot="first"
          className="grid pt-[36px] gap-[16px] [@media(width<=560px)]:gap-[12px]"
        >
          <div className="bg-soft pt-[25px] [@media(width<=560px)]:pt-[19px] pr-[20px] [@media(width<=560px)]:pr-[15px] pb-[25px] [@media(width<=560px)]:pb-[19px] pl-[20px] [@media(width<=560px)]:pl-[15px] rounded-[var(--radius)] relative min-h-[178px] [@media(width<=560px)]:min-h-[165px] [&_h3]:text-[18px] [@media(width<=560px)]:[&_h3]:text-[16px] [&_h3]:leading-[1.3] [&_p]:text-[12px] [@media(width<=560px)]:[&_p]:text-[10px] [&_p]:mt-[9px] [&_p]:max-w-[150px] [&_svg]:absolute [&_svg]:right-[12px] [&_svg]:bottom-[14px] [&_svg]:text-primary">
            <h3>
              Good service.
              <br />
              Real peace of mind.
            </h3>
            <p>Local people, taking care of local comfort.</p>
            <ArrowUpRight size={26} />
          </div>
          <div className="h-[276px] [@media(width<=560px)]:h-[220px] relative rounded-[var(--radius)] overflow-hidden [&_img]:object-[53%_center]">
            <Image
              src={photos.shop}
              alt="LKL Electrical and LA Electrical & Parts Trading shopfront in Melaka"
              fill
              sizes="(max-width: 700px) 45vw, 260px"
            />
          </div>
        </div>
        <div className="grid gap-[16px] [@media(width<=560px)]:gap-[12px]">
          <div className="h-[230px] [@media(width<=560px)]:h-[190px] relative rounded-[var(--radius)] overflow-hidden">
            <Image
              src={photos.technician}
              alt="Careful wall-mounted air conditioner installation"
              fill
              sizes="(max-width: 700px) 45vw, 260px"
            />
          </div>
          <div className="h-[230px] [@media(width<=560px)]:h-[190px] relative rounded-[var(--radius)] overflow-hidden">
            <Image
              src={photos.finished}
              alt="Completed air conditioning installation in a home"
              fill
              sizes="(max-width: 700px) 45vw, 260px"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-[calc(25%_-_63px)] [@media(width<=560px)]:left-[calc(25%_-_52px)] w-[126px] [@media(width<=560px)]:w-[104px] h-[126px] [@media(width<=560px)]:h-[104px] rounded-[50%] bg-navy text-[#fff] [border:8px_solid_white] flex items-center justify-center flex-col [transform:rotate(-10deg)] [&_strong]:text-[31px] [@media(width<=560px)]:[&_strong]:text-[26px] [&_strong]:leading-[1.3] [&_strong_span]:text-[18px] [&_strong_span]:text-[#e9ab56] [&_small]:text-[8px] [@media(width<=560px)]:[&_small]:text-[7px] [&_small]:tracking-[1px]">
          <strong>
            4.9<span>★</span>
          </strong>
          <small>GOOGLE RATING</small>
        </div>
      </div>
      <div className="[&_>_p]:text-[14px] [&_>_p]:mb-[16px]">
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
        <div className="grid grid-cols-[1fr_1fr] [@media(850px<width<=1100px)]:grid-cols-[1fr] [@media(width<=560px)]:grid-cols-[1fr] gap-y-[13px] gap-x-[20px] bg-soft pt-[22px] [@media(width<=560px)]:pt-[20px] pr-[22px] [@media(width<=560px)]:pr-[20px] pb-[22px] [@media(width<=560px)]:pb-[20px] pl-[22px] [@media(width<=560px)]:pl-[20px] mt-[24px] mr-0 mb-[16px] ml-0 rounded-[var(--radius)] text-[12px] [&_span]:flex [&_span]:items-center [&_span]:gap-[8px] [&_svg]:bg-primary [&_svg]:text-[#fff] [&_svg]:rounded-[50%] [&_svg]:pt-[2px] [&_svg]:pr-[2px] [&_svg]:pb-[2px] [&_svg]:pl-[2px]">
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
        <div className="pt-[23px] pr-[23px] pb-[23px] pl-[23px] bg-soft rounded-[var(--radius)] [&_h3]:text-[18px] [&_p]:text-[12px] [&_p]:mt-[8px] [&_p]:mr-0 [&_p]:mb-[18px] [&_p]:ml-0 [@media(width<=560px)]:[&_[data-slot~='actions']]:gap-[20px]">
          <h3>Your comfort, taken care of.</h3>
          <p>Tell us what you need. We’ll help you find the right solution.</p>
          <ContactActions />
        </div>
      </div>
      <div className="col-[1/-1] flex items-center justify-between [@media(width<=850px)]:justify-center [border-top:1px_solid_var(--line)] [border-bottom:1px_solid_var(--line)] pt-[28px] pr-0 pb-[28px] pl-0 gap-[30px] [@media(560px<width<=850px)]:gap-[25px] [@media(width<=560px)]:gap-[20px] [&_>_span:first-child]:text-[9px] [&_>_span:first-child]:tracking-[1.5px] [&_>_span:first-child]:text-muted [&_img]:h-auto [&_img]:object-contain [&_[data-slot~='daikin']]:w-[125px] [@media(width<=560px)]:[&_[data-slot~='daikin']]:w-[95px] [&_[data-slot~='midea']]:w-[110px] [@media(width<=560px)]:[&_[data-slot~='midea']]:w-[85px] [&_[data-slot~='shopee']]:w-[110px] [@media(width<=560px)]:[&_[data-slot~='shopee']]:w-[85px] [&_p]:text-[12px] [&_p_strong]:text-ink [@media(width<=850px)]:flex-wrap [@media(width<=850px)]:[&_>_span:first-child]:w-full [@media(width<=850px)]:[&_>_span:first-child]:text-center [@media(width<=560px)]:[&_p]:text-center [@media(width<=560px)]:[&_p]:w-full">
        <span>BRANDS WE WORK WITH</span>
        <Image
          data-slot="daikin"
          src="/images/Daikin.png"
          alt="Daikin"
          width={125}
          height={48}
        />
        <Image
          data-slot="midea"
          src="/images/Midea.png"
          alt="Midea"
          width={110}
          height={48}
        />
        <Image
          data-slot="shopee"
          src="/images/shopee.png"
          alt="Shopee"
          width={110}
          height={48}
        />
        <span className="h-[35px] w-[1px] bg-line [@media(width<=850px)]:hidden" />
        <p>
          <strong>Local service.</strong> Established names. Lasting comfort.
        </p>
      </div>
    </section>
  );
}

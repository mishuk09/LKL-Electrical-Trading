import { ArrowUpRight, Phone } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { business, whatsapp } from "@/lib/business";

export function Action({
  href,
  children,
  secondary = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  external?: boolean;
}) {
  return (
    <a
      className={`inline-flex items-center justify-between pt-[9px] pr-[10px] pb-[9px] pl-[23px] min-h-[52px] rounded-[30px] text-[#fff] text-[13px] font-bold [transition:background_0.2s,_transform_0.2s] gap-[22px] [&:hover]:[transform:translateY(-2px)] ${secondary ? "bg-navy [&:hover]:bg-[#243a58]" : "bg-primary [&:hover]:bg-primary-dark"}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <span className="grid place-items-center w-[34px] h-[34px] rounded-[50%] bg-white text-primary">
        <ArrowUpRight size={18} />
      </span>
    </a>
  );
}

export function ContactActions({
  light = false,
}: {
  light?: boolean;
}) {
  return (
    <div
      data-slot="actions"
      className={`flex items-center flex-wrap gap-[24px] ${light ? "[&_small]:text-[#e1e5ec]" : ""}`}
    >
      <a
        className="inline-flex shrink-0 items-center justify-between h-[52px] rounded-[30px] pt-[9px] pr-[10px] pb-[9px] pl-[18px] whitespace-nowrap text-[#fff] text-[13px] font-bold [transition:background_0.2s,_transform_0.2s] gap-[14px] bg-[#42b94f] [&:hover]:bg-[#50CC5D] [&:hover]:[transform:translateY(-2px)]"
        href={whatsapp()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/whatsapp.webp"
          alt=""
          width={24}
          height={24}
          className="h-[24px] w-[24px] object-contain"
        />
        Get in touch
        <span className="grid place-items-center w-[34px] h-[34px] rounded-[50%] bg-white text-[#50CC5D]">
          <ArrowUpRight size={18} />
        </span>
      </a>
      <a
        className="inline-flex shrink-0 items-center h-[52px] rounded-[30px] bg-primary pt-[9px] pr-[20px] pb-[9px] pl-[18px] whitespace-nowrap text-[#fff] text-[12px] gap-[11px] [transition:background_0.2s,_transform_0.2s] [&:hover]:bg-primary-dark [&:hover]:[transform:translateY(-2px)] [&_>_svg]:text-[#fff] [&_small]:block [&_small]:text-[#ffffffcc] [&_small]:text-[10px] [&_span]:leading-[1.2]"
        href={business.phoneHref}
      >
        <Phone size={23} />
        <span>
          <small>Give us a call</small>
          <strong>{business.phone}</strong>
        </span>
      </a>
    </div>
  );
}

export function Heading({
  eyebrow,
  children,
  description,
  centered = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div
      data-slot={centered ? "section-heading centered" : "section-heading"}
      className={`[&_h2]:mb-[20px] [&_p]:max-w-[600px] ${centered ? "[&_p]:mx-auto text-center max-w-[760px] mt-0 mr-auto mb-[52px] [@media(width<=560px)]:mb-[35px] ml-auto [&_[data-slot~='eyebrow']]:justify-center" : ""}`}
    >
      <span
        data-slot="eyebrow"
        className="flex items-center text-[11px] font-bold tracking-[1.7px] text-primary mb-[19px] gap-[9px]"
      >
        <Image
          src="/images/icon.svg"
          alt=""
          width={17}
          height={17}
          className="h-[17px] w-[17px] object-contain"
        />
        {eyebrow}
      </span>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

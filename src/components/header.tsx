"use client";
import { useState } from "react";
import { Clock3, MapPin, Menu, Phone, X } from "lucide-react";
import { business, navigation, whatsapp } from "@/lib/business";
import { Brand } from "./ui";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-[40] bg-white [box-shadow:0_2px_12px_#00000008]">
      <div className="bg-navy text-[#e2e5eb] text-sm tracking-[0.25px] [&_span]:flex [&_span]:items-center [&_span]:gap-[7px] [&_a]:flex [&_a]:items-center [&_a]:gap-[7px] [&_svg]:text-[#e49baa]">
        <div className="w-[min(var(--container),_calc(100%_-_64px))] [@media(560px<width<=850px)]:w-[calc(100%_-_40px)] [@media(width<=560px)]:w-[calc(100%_-_36px)] mx-auto flex justify-between [@media(width<=560px)]:justify-center items-center min-h-[33px] [@media(width<=560px)]:min-h-[28px] [@media(width<=850px)]:[&_>_span:nth-child(2)]:hidden [@media(width<=560px)]:[&_>_a]:hidden">
          <span>
            <MapPin size={13} />
            Taman Kota Laksamana, Melaka
          </span>
          <span>
            <Clock3 size={13} />
            Mon–Fri: 9am–6pm · Sat: 9am–4pm
          </span>
          <a href={business.phoneHref}>
            <Phone size={13} />
            {business.phone}
          </a>
        </div>
      </div>
      <div className="w-[min(var(--container),_calc(100%_-_64px))] [@media(560px<width<=850px)]:w-[calc(100%_-_40px)] [@media(width<=560px)]:w-[calc(100%_-_36px)] mx-auto flex items-center justify-between h-[85px] [@media(560px<width<=850px)]:h-[74px] [@media(width<=560px)]:h-[70px] gap-[25px] [@media(560px<width<=1100px)]:gap-[15px] [@media(width<=560px)]:gap-[10px]">
        <Brand />
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          data-slot={open ? "is-open" : ""}
          className={`flex text-[12px] font-semibold gap-[25px] [&_a:hover]:text-primary [@media(width<=850px)]:absolute [@media(width<=850px)]:top-[100%] [@media(width<=850px)]:left-0 [@media(width<=850px)]:right-0 [@media(width<=850px)]:bg-white [@media(width<=850px)]:pt-[15px] [@media(width<=850px)]:pr-[25px] [@media(width<=850px)]:pb-[25px] [@media(width<=850px)]:pl-[25px] [@media(width<=850px)]:[box-shadow:0_10px_20px_#0001] [@media(width<=850px)]:[&_a]:pt-[11px] [@media(width<=850px)]:[&_a]:pr-[11px] [@media(width<=850px)]:[&_a]:pb-[11px] [@media(width<=850px)]:[&_a]:pl-[11px] [@media(width<=850px)]:[&_a]:[border-bottom:1px_solid_var(--line)] ${open ? "[@media(850px<width<=1100px)]:gap-[15px] [@media(width<=850px)]:gap-[0] [@media(width<=850px)]:flex-col" : "[@media(width<=850px)]:hidden [@media(width<=1100px)]:gap-[15px]"}`}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          className="bg-primary text-[#fff] rounded-[25px] pt-[12px] [@media(width<=560px)]:pt-[9px] pr-[20px] [@media(width<=560px)]:pr-[12px] pb-[12px] [@media(width<=560px)]:pb-[9px] pl-[20px] [@media(width<=560px)]:pl-[12px] text-[12px] [@media(width<=560px)]:text-[10px] font-bold whitespace-nowrap [&_span]:ml-[12px] [@media(width<=560px)]:[&_span]:ml-[3px] [@media(width<=850px)]:ml-auto"
          href={whatsapp()}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Us <span aria-hidden="true">↗</span>
        </a>
        <button
          className="hidden [@media(width<=850px)]:block bg-transparent text-ink pt-[7px] [@media(width<=560px)]:pt-[2px] pr-[7px] [@media(width<=560px)]:pr-[2px] pb-[7px] [@media(width<=560px)]:pb-[2px] pl-[7px] [@media(width<=560px)]:pl-[2px]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

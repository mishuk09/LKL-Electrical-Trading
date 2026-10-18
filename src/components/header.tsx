"use client";
import { useState } from "react";
import { Clock3, MapPin, Menu, Phone, X } from "lucide-react";
import { business, navigation, whatsapp } from "@/lib/business";
import { Brand } from "./ui";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
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
      <div className="container navbar">
        <Brand />
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "nav-links is-open" : "nav-links"}
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
          className="header-cta"
          href={whatsapp()}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Us <span aria-hidden="true">↗</span>
        </a>
        <button
          className="menu-toggle"
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

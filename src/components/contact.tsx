import { MapPin, Phone, Clock3, ArrowUpRight } from "lucide-react";
import { business, whatsapp } from "@/lib/business";
import { Heading } from "./ui";
export default function Contact() {
  return (
    <section
      className="pt-[20px] [@media(width<=850px)]:pt-[10px] pb-[160px] [@media(width<=850px)]:pb-[145px]"
      id="contact"
    >
      <div className="w-[min(var(--container),_calc(100%_-_64px))] [@media(560px<width<=850px)]:w-[calc(100%_-_40px)] [@media(width<=560px)]:w-[calc(100%_-_36px)] mx-auto">
        <Heading
          eyebrow="COME SAY HELLO"
          centered
          description="Visit our shop in Taman Kota Laksamana, or reach out to discuss your next installation."
        >
          Connect with <em>our Melaka team.</em>
        </Heading>
        <div className="grid grid-cols-[repeat(3,_1fr)] [@media(width<=560px)]:grid-cols-[1fr] mt-[64px] [@media(width<=560px)]:mt-[50px] mr-0 mb-[38px] ml-0 gap-[24px] [@media(560px<width<=850px)]:gap-[16px] [@media(width<=560px)]:gap-[36px]">
          <article className="relative [border:1px_solid_var(--line)] rounded-[var(--radius)] pt-[40px] [@media(width<=850px)]:pt-[35px] pr-[28px] [@media(560px<width<=850px)]:pr-[18px] [@media(width<=560px)]:pr-[24px] pb-[25px] [@media(560px<width<=850px)]:pb-[20px] pl-[28px] [@media(560px<width<=850px)]:pl-[18px] [@media(width<=560px)]:pl-[24px] flex flex-col [&_h3]:text-[18px] [@media(560px<width<=850px)]:[&_h3]:text-[16px] [@media(width<=560px)]:[&_h3]:text-[19px] [&_h3]:mb-[15px] [&_p]:text-[12px] [&_p]:mb-[18px] [&_[data-slot~='text-link']]:mt-auto [&_[data-slot~='hours-note']]:text-[11px] [&_[data-slot~='hours-note']]:mt-[10px] [&_[data-slot~='hours-note']]:mr-0 [&_[data-slot~='hours-note']]:mb-0 [&_[data-slot~='hours-note']]:ml-0">
            <span className="absolute top-[-16px] left-[50%] [transform:translateX(-50%)] flex items-center whitespace-nowrap bg-primary text-[#fff] rounded-[5px] text-[12px] font-bold pt-[6px] pr-[17px] pb-[6px] pl-[17px] gap-[8px]">
              <MapPin size={15} />
              Our location
            </span>
            <h3>Taman Kota Laksamana</h3>
            <p>{business.address}</p>
            <a
              data-slot="text-link"
              className="inline-flex items-center text-primary text-[12px] font-bold gap-[10px] [&:hover]:underline"
              href={business.maps}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions <ArrowUpRight size={17} />
            </a>
          </article>
          <article className="relative [border:1px_solid_var(--line)] rounded-[var(--radius)] pt-[40px] [@media(width<=850px)]:pt-[35px] pr-[28px] [@media(560px<width<=850px)]:pr-[18px] [@media(width<=560px)]:pr-[24px] pb-[25px] [@media(560px<width<=850px)]:pb-[20px] pl-[28px] [@media(560px<width<=850px)]:pl-[18px] [@media(width<=560px)]:pl-[24px] flex flex-col [&_h3]:text-[18px] [@media(560px<width<=850px)]:[&_h3]:text-[16px] [@media(width<=560px)]:[&_h3]:text-[19px] [&_h3]:mb-[15px] [&_p]:text-[12px] [&_p]:mb-[18px] [&_[data-slot~='text-link']]:mt-auto [&_[data-slot~='hours-note']]:text-[11px] [&_[data-slot~='hours-note']]:mt-[10px] [&_[data-slot~='hours-note']]:mr-0 [&_[data-slot~='hours-note']]:mb-0 [&_[data-slot~='hours-note']]:ml-0">
            <span className="absolute top-[-16px] left-[50%] [transform:translateX(-50%)] flex items-center whitespace-nowrap bg-primary text-[#fff] rounded-[5px] text-[12px] font-bold pt-[6px] pr-[17px] pb-[6px] pl-[17px] gap-[8px]">
              <Phone size={15} />
              Let’s talk
            </span>
            <h3>
              <a href={business.phoneHref}>{business.phone}</a>
            </h3>
            <p>
              Need a new unit, a service, or a spare part? We’re here to help.
            </p>
            <a
              data-slot="text-link"
              className="inline-flex items-center text-primary text-[12px] font-bold gap-[10px] [&:hover]:underline"
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp <ArrowUpRight size={17} />
            </a>
          </article>
          <article className="relative [border:1px_solid_var(--line)] rounded-[var(--radius)] pt-[40px] [@media(width<=850px)]:pt-[35px] pr-[28px] [@media(560px<width<=850px)]:pr-[18px] [@media(width<=560px)]:pr-[24px] pb-[25px] [@media(560px<width<=850px)]:pb-[20px] pl-[28px] [@media(560px<width<=850px)]:pl-[18px] [@media(width<=560px)]:pl-[24px] flex flex-col [&_h3]:text-[18px] [@media(560px<width<=850px)]:[&_h3]:text-[16px] [@media(width<=560px)]:[&_h3]:text-[19px] [&_h3]:mb-[15px] [&_p]:text-[12px] [&_p]:mb-[18px] [&_[data-slot~='text-link']]:mt-auto [&_[data-slot~='hours-note']]:text-[11px] [&_[data-slot~='hours-note']]:mt-[10px] [&_[data-slot~='hours-note']]:mr-0 [&_[data-slot~='hours-note']]:mb-0 [&_[data-slot~='hours-note']]:ml-0">
            <span className="absolute top-[-16px] left-[50%] [transform:translateX(-50%)] flex items-center whitespace-nowrap bg-primary text-[#fff] rounded-[5px] text-[12px] font-bold pt-[6px] pr-[17px] pb-[6px] pl-[17px] gap-[8px]">
              <Clock3 size={15} />
              Opening hours
            </span>
            <dl className="mt-0 mr-0 mb-0 ml-0 text-[12px] [&_>_div]:flex [@media(560px<width<=850px)]:[&_>_div]:block [&_>_div]:justify-between [&_>_div]:mb-[10px] [&_>_div]:gap-[20px] [&_dd]:mt-0 [&_dd]:mr-0 [&_dd]:mb-0 [@media(width<=850px)]:[&_dd]:mb-[10px] [&_dd]:ml-0 [&_dd]:text-muted">
              <div>
                <dt>Monday–Friday</dt>
                <dd>9am–6pm</dd>
              </div>
              <div>
                <dt>Saturday</dt>
                <dd>9am–4pm</dd>
              </div>
              <div>
                <dt>Sunday</dt>
                <dd>Closed</dd>
              </div>
            </dl>
            <p data-slot="hours-note" className="">
              We look forward to welcoming you.
            </p>
          </article>
        </div>
        <div className="relative h-[325px] [@media(width<=560px)]:h-[310px] bg-soft [border:1px_solid_var(--line)] rounded-[var(--radius)] overflow-hidden [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:block">
          <iframe
            title="LKL Electrical Trading location in Melaka"
            src={business.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href={business.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-[18px] [@media(width<=560px)]:bottom-[12px] left-[18px] [@media(width<=560px)]:left-[12px] bg-white flex items-center pt-[12px] pr-[17px] pb-[12px] pl-[17px] [box-shadow:var(--shadow)] text-[12px] [@media(width<=560px)]:text-[10px] rounded-[6px] gap-[10px] [@media(width<=560px)]:gap-[7px]"
          >
            <MapPin size={18} />
            Open in Google Maps <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

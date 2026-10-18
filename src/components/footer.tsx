import Image from "next/image";
import {
  ArrowUp,
  MessageCircle,
  Phone,
  MapPin,
  ShoppingBag,
} from "lucide-react";
import { business, navigation, photos, whatsapp } from "@/lib/business";
import { Action } from "./ui";
import MainLogo from "./mainlogo";
export default function Footer() {
  return (
    <>
      <footer className="[background:linear-gradient(120deg,_#101e34,_#16182c)] text-[#fff] pt-0 pr-0 pb-[25px] pl-0">
        <div className="w-[min(var(--container),_calc(100%_-_64px))] [@media(560px<width<=850px)]:w-[calc(100%_-_40px)] [@media(width<=560px)]:w-[calc(100%_-_36px)] mx-auto">
          <div className="bg-primary grid [@media(width<=560px)]:block grid-cols-[1fr_1.8fr] [@media(width<=850px)]:grid-cols-[1fr_1.5fr] relative [transform:translateY(-70px)] [@media(width<=560px)]:[transform:translateY(-65px)] rounded-[var(--radius)] overflow-hidden min-h-[290px] gap-[50px] [@media(width<=850px)]:gap-[25px] [&_>_div:last-child]:pt-[40px] [@media(width<=560px)]:[&_>_div:last-child]:pt-[30px] [&_>_div:last-child]:pr-[40px] [@media(width<=560px)]:[&_>_div:last-child]:pr-[25px] [&_>_div:last-child]:pb-[40px] [@media(width<=560px)]:[&_>_div:last-child]:pb-[30px] [&_>_div:last-child]:pl-0 [@media(width<=560px)]:[&_>_div:last-child]:pl-[25px] [&_[data-slot~='eyebrow']]:text-[9px] [&_[data-slot~='eyebrow']]:mb-[12px] [&_h2]:text-[35px] [@media(560px<width<=850px)]:[&_h2]:text-[29px] [@media(width<=560px)]:[&_h2]:text-[30px] [&_p]:text-[#fff] [&_p]:text-[12px] [&_p]:mt-[15px] [&_p]:mr-0 [&_p]:mb-[20px] [&_p]:ml-0">
            <div className="relative [&::after]:content-[''] [&::after]:absolute [&::after]:[inset:0] [&::after]:[background:linear-gradient(_90deg,_transparent,_#b63a5310_60%,_var(--primary)_)] [&_img]:object-[50%_32%] [@media(width<=560px)]:hidden">
              <Image
                src={photos.technician}
                alt="LKL technician working on an air conditioning unit"
                fill
                sizes="(max-width: 700px) 0px, 340px"
              />
            </div>
            <div>
              <span
                data-slot="eyebrow light"
                className="flex items-center text-[11px] font-bold tracking-[1.7px] text-[#fff] mb-[19px] gap-[9px]"
              >
                LET’S KEEP YOU COMFORTABLE
              </span>
              <h2>
                Ready for a cooler,
                <br />
                more comfortable space?
              </h2>
              <p>Let’s take care of your air conditioning, together.</p>
              <Action href={whatsapp()} external secondary>
                Book a service
              </Action>
            </div>
          </div>
          <div className="grid grid-cols-[1.4fr_0.8fr_1fr_1.1fr] [@media(width<=850px)]:grid-cols-[1.3fr_1fr] pt-0 pr-0 pb-[55px] [@media(width<=560px)]:pb-[35px] pl-0 gap-[45px] [@media(850px<width<=1100px)]:gap-[25px] [@media(560px<width<=850px)]:gap-[35px] [&_h3]:text-[15px] [&_h3]:mt-[4px] [&_h3]:mr-0 [&_h3]:mb-[23px] [&_h3]:ml-0 [&_>_div_>_a:not([data-slot~='brand'])]:block [&_>_div_>_a:not([data-slot~='brand'])]:text-[12px] [@media(width<=560px)]:[&_>_div_>_a:not([data-slot~='brand'])]:text-[11px] [&_>_div_>_a:not([data-slot~='brand'])]:text-[#c4cbd7] [&_>_div_>_a:not([data-slot~='brand'])]:mb-[10px] [&_a:hover]:text-[#f0aabb] [&_[data-slot~='footer-contact']]:flex! [&_[data-slot~='footer-contact']]:items-center [&_[data-slot~='footer-contact']]:mb-[20px]! [&_[data-slot~='footer-contact']]:gap-[13px] [@media(width<=560px)]:gap-y-[35px] [@media(width<=560px)]:gap-x-[20px] [@media(width<=560px)]:[&_>_div:last-child]:col-[1/-1]">
            <div className="[&_p]:text-[12px] [&_p]:text-[#b9c3d2] [&_p]:max-w-[250px] [@media(width<=560px)]:[&_p]:max-w-[300px] [&_p]:mt-[20px] [&_p]:mr-0 [&_p]:mb-[20px] [&_p]:ml-0 [@media(width<=560px)]:col-[1/-1]">
              <MainLogo />
              <p>
                Your local partner for air conditioning, electrical solutions,
                and spare parts in Melaka.
              </p>
              <div className="flex gap-[9px] [&_a]:w-[34px] [&_a]:h-[34px] [&_a]:grid [&_a]:place-items-center [&_a]:rounded-[50%] [&_a]:bg-primary [&_a]:text-[#fff]">
                <a
                  href={whatsapp()}
                  aria-label="WhatsApp LKL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={19} />
                </a>
                <a
                  href={business.shopee}
                  aria-label="Shop LA Electrical on Shopee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingBag size={19} />
                </a>
                <a
                  href={business.maps}
                  aria-label="Find LKL on Google Maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={19} />
                </a>
              </div>
            </div>
            <div>
              <h3>Explore</h3>
              {navigation.map((n) => (
                <a key={n} href={`#${n.toLowerCase()}`}>
                  {n}
                </a>
              ))}
            </div>
            <div>
              <h3>Our services</h3>
              {[
                "Aircond installation",
                "Servicing & chemical wash",
                "Dismantling & relocation",
                "Electrical & spare parts",
              ].map((t) => (
                <a href="#services" key={t}>
                  {t}
                </a>
              ))}
            </div>
            <div>
              <h3>Stay in touch</h3>
              <a
                data-slot="footer-contact"
                className="[&_svg]:text-[#eb9cae] [&_small]:block [&_small]:text-[#9ba9be] [&_small]:text-[10px] [&_small]:mb-[3px]"
                href={business.phoneHref}
              >
                <Phone size={19} />
                <span>
                  <small>Call our team</small>
                  {business.phone}
                </span>
              </a>
              <a
                data-slot="footer-contact"
                className="[&_svg]:text-[#eb9cae] [&_small]:block [&_small]:text-[#9ba9be] [&_small]:text-[10px] [&_small]:mb-[3px]"
                href={business.maps}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={22} />
                <span>
                  <small>Visit our shop</small>Taman Kota Laksamana,
                  <br />
                  75200 Melaka, Malaysia
                </span>
              </a>
            </div>
          </div>
          <div className="flex items-center [@media(width<=560px)]:items-start justify-between [border-top:1px_solid_#ffffff18] pt-[25px] text-[10px] text-[#aab7c8] gap-[20px] [@media(width<=560px)]:gap-[15px] [&_a]:flex [&_a]:items-center [&_a]:gap-[12px] [@media(width<=560px)]:flex-col [@media(width<=560px)]:pr-[40px]">
            <span>
              © {new Date().getFullYear()} LKL Electrical Trading. All rights
              reserved.
            </span>
            <a href="#home">
              Back to top <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </footer>
      <a
        className="fixed bottom-[24px] [@media(width<=560px)]:bottom-[18px] right-[24px] [@media(width<=560px)]:right-[15px] z-[30] grid place-items-center bg-primary text-[#fff] w-[52px] [@media(width<=560px)]:w-[48px] h-[52px] [@media(width<=560px)]:h-[48px] rounded-[50%] [box-shadow:0_4px_15px_#0003] [border:3px_solid_white]"
        href={whatsapp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with LKL on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </>
  );
}

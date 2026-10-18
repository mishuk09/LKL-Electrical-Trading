import {
  ShoppingBag,
  ArrowUpRight,
  Radio,
  Cable,
  Fan,
  CircuitBoard,
} from "lucide-react";
import { business } from "@/lib/business";
import { Action, Heading } from "./ui";
const categories = [
  {
    name: "Remote Controls",
    description: "Everyday control, made simple.",
    Icon: Radio,
  },
  {
    name: "Capacitors & Relays",
    description: "Small parts. Essential performance.",
    Icon: CircuitBoard,
  },
  {
    name: "Copper Pipes & Materials",
    description: "Get your installation essentials.",
    Icon: Cable,
  },
  {
    name: "Aircond Motors",
    description: "Replacement parts to keep air moving.",
    Icon: Fan,
  },
];
export default function Products() {
  return (
    <section
      className="w-[min(var(--container),_calc(100%_-_64px))] [@media(560px<width<=850px)]:w-[calc(100%_-_40px)] [@media(width<=560px)]:w-[calc(100%_-_36px)] mx-auto pt-[var(--section-space)] pb-[var(--section-space)] grid grid-cols-[0.85fr_1.2fr] [@media(width<=850px)]:grid-cols-[1fr] items-center gap-[85px] [@media(850px<width<=1100px)]:gap-[45px] [@media(width<=850px)]:gap-[35px]"
      id="products"
    >
      <div className="[&_>_p]:mt-0 [&_>_p]:mr-0 [&_>_p]:mb-[28px] [&_>_p]:ml-0 [&_>_p]:text-[14px] [&_>_p]:max-w-[380px] [@media(width<=850px)]:[&_>_p]:max-w-[600px]">
        <Heading eyebrow="PARTS, JUST A CLICK AWAY">
          The right part.
          <br />
          <em>Right when you need it.</em>
        </Heading>
        <p>
          Shop aircond spare parts, installation materials, and accessories
          through our LA Electrical store on Shopee Malaysia.
        </p>
        <Action href={business.shopee} external>
          Visit our Shopee store
        </Action>
        <div className="flex items-center mt-[30px] text-primary gap-[12px] [&_strong]:text-[13px] [&_strong]:block [&_strong]:text-ink [&_small]:text-muted [&_small]:text-[11px]">
          <ShoppingBag size={29} />
          <span>
            <strong>LA Electrical</strong>
            <small>Our official Shopee storefront</small>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-[20px] [@media(width<=560px)]:gap-[12px]">
        {categories.map(({ name, description, Icon }) => (
          <a
            href={business.shopee}
            target="_blank"
            rel="noopener noreferrer"
            className="[border:1px_solid_var(--line)] rounded-[var(--radius)] overflow-hidden [transition:transform_0.2s] [&:hover]:[transform:translateY(-4px)]"
            key={name}
          >
            <div className="h-[153px] [@media(560px<width<=850px)]:h-[180px] [@media(width<=560px)]:h-[130px] relative grid place-items-center bg-soft text-primary overflow-hidden [&_>_svg]:z-[1] [&_>_svg]:[transform:rotate(-12deg)] [@media(width<=560px)]:[&_>_svg]:w-[65px]">
              <Icon strokeWidth={1} size={78} />
              <span className="absolute w-[122px] h-[122px] [border:1px_solid_#b63a5320] rounded-[50%] [&::after]:content-[''] [&::after]:absolute [&::after]:[inset:-20px] [&::after]:[border:1px_solid_#b63a5310] [&::after]:rounded-[50%]" />
            </div>
            <div className="pt-[20px] [@media(width<=560px)]:pt-[16px] pr-[20px] [@media(width<=560px)]:pr-[12px] pb-[20px] [@media(width<=560px)]:pb-[16px] pl-[20px] [@media(width<=560px)]:pl-[12px] [&_h3]:text-[16px] [@media(width<=560px)]:[&_h3]:text-[15px] [&_p]:text-[11px] [@media(width<=560px)]:[&_p]:text-[10px] [&_p]:mt-[8px] [&_p]:mr-0 [&_p]:mb-[15px] [&_p]:ml-0 [&_>_span]:flex [&_>_span]:items-center [&_>_span]:justify-between [&_>_span]:text-primary [&_>_span]:text-[11px] [@media(width<=560px)]:[&_>_span]:text-[10px] [&_>_span]:font-bold [@media(width<=560px)]:[&_h3]:leading-[1.3]">
              <h3>{name}</h3>
              <p>{description}</p>
              <span>
                Shop on Shopee <ArrowUpRight size={16} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

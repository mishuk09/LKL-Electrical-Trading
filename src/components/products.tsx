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
    <section className="section container products" id="products">
      <div className="products-intro">
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
        <div className="store-note">
          <ShoppingBag size={29} />
          <span>
            <strong>LA Electrical</strong>
            <small>Our official Shopee storefront</small>
          </span>
        </div>
      </div>
      <div className="product-grid">
        {categories.map(({ name, description, Icon }) => (
          <a
            href={business.shopee}
            target="_blank"
            rel="noopener noreferrer"
            className="product-card"
            key={name}
          >
            <div className="product-illustration">
              <Icon strokeWidth={1} size={78} />
              <span className="product-orbit" />
            </div>
            <div className="product-info">
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

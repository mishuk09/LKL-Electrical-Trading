import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import {
  ArrowUpRight,
  ShoppingBag,
  Star,
  Package,
  Users,
  Store,
  WashingMachine,
  CookingPot,
  Snowflake,
  ShieldCheck,
  Tv,
  Plug,
  Wrench,
  Car,
  Camera,
  Shirt,
  House,
  PawPrint,
  MessageCircle,
} from "lucide-react";
import { business, photos, whatsapp } from "@/lib/business";
import { Action, Heading } from "./ui";

// Store figures are a snapshot from the supplied October 2026 Shopee reference.
// Update these together when a newer store snapshot is available.
const storeStats = [
  { value: "4.9 / 5", label: "From 2k Shopee ratings", Icon: Star },
  { value: "277", label: "Products in store", Icon: Package },
  { value: "1k", label: "Store followers", Icon: Users },
  { value: "9 years", label: "On Shopee", Icon: Store },
];

// Add matching images to public/images/categories/. See that folder's README.
// Keep category URLs pointed at the store until real Shopee category links are supplied.
const categories = [
  {
    slug: "pencuci-pengering",
    name: "Pencuci & Pengering",
    english: "Washers & dryers",
    Icon: WashingMachine,
  },
  {
    slug: "peralatan-dapur-besar",
    name: "Peralatan Dapur Besar",
    english: "Large kitchen appliances",
    Icon: CookingPot,
  },
  {
    slug: "penyejuk-pemanas",
    name: "Penyejuk & Pemanas",
    english: "Cooling & heating",
    Icon: Snowflake,
  },
  {
    slug: "keselamatan-pengawasan",
    name: "Keselamatan & Pengawasan",
    english: "Security & surveillance",
    Icon: ShieldCheck,
  },
  {
    slug: "aksesori-tv",
    name: "Aksesori TV",
    english: "TV accessories",
    Icon: Tv,
  },
  {
    slug: "peralatan-rumah-kecil",
    name: "Peralatan Rumah Kecil",
    english: "Small home appliances",
    Icon: Plug,
  },
  {
    slug: "penambahbaikan-rumah",
    name: "Penambahbaikan Rumah",
    english: "Home improvement",
    Icon: Wrench,
  },
  {
    slug: "alat-ganti-kereta",
    name: "Alat Ganti Kereta",
    english: "Car spare parts",
    Icon: Car,
  },
  {
    slug: "aksesori-kamera",
    name: "Aksesori Kamera",
    english: "Camera accessories",
    Icon: Camera,
  },
  { slug: "baju", name: "Baju", english: "Clothing", Icon: Shirt },
  {
    slug: "bekalan-perumahan",
    name: "Bekalan Perumahan",
    english: "Household supplies",
    Icon: House,
  },
  {
    slug: "bekalan-haiwan-peliharaan",
    name: "Bekalan Haiwan Peliharaan",
    english: "Pet supplies",
    Icon: PawPrint,
  },
];

function categoryImage(slug: string) {
  // Resolve on the server so missing photos never produce broken images or 404s.
  for (const extension of ["webp", "jpg", "jpeg", "png"]) {
    const filename = `${slug}.${extension}`;
    if (
      existsSync(
        path.join(process.cwd(), "public", "images", "categories", filename),
      )
    ) {
      return `/images/categories/${filename}`;
    }
  }
  return null;
}

export default function Products() {
  return (
    <section
      id="products"
      aria-label="LA Electrical online store and product categories"
      className="mx-auto w-[min(var(--container),calc(100%_-_64px))] py-[var(--section-space)] [@media(560px<width<=850px)]:w-[calc(100%_-_40px)] [@media(width<=560px)]:w-[calc(100%_-_36px)]"
    >
      <div className="mb-[38px] grid items-end gap-[24px] min-[851px]:grid-cols-[1.15fr_1fr] min-[851px]:gap-[65px]">
        <Heading eyebrow="PARTS, JUST A CLICK AWAY">
          The right part.
          <br />
          <em>And so much more.</em>
        </Heading>
        <div className="pb-[20px]">
          <p className="mb-[22px] max-w-[480px] text-[14px] leading-[1.85]">
            Aircond parts, electrical essentials, and everyday finds for your
            home. Discover the full range at LA Electrical, our store on Shopee
            Malaysia.
          </p>
          <Action href={business.shopee} external>
            Visit our Shopee store
          </Action>
        </div>
      </div>

      <div className="overflow-hidden rounded-[var(--radius)] [border:1px_solid_var(--line)] [box-shadow:var(--shadow)]">
        <div className="grid min-[851px]:grid-cols-[1fr_1.65fr]">
          <div className="relative overflow-hidden bg-navy px-[28px] py-[32px] text-white max-[560px]:px-[22px]">
            <div
              aria-hidden="true"
              className="absolute -right-[50px] -top-[85px] h-[230px] w-[230px] rounded-full [border:1px_solid_#ffffff12]"
            />
            <span className="relative mb-[22px] inline-flex items-center gap-[8px] text-[9px] font-bold tracking-[1.7px] text-[#e9a4b4]">
              <ShoppingBag size={15} /> OUR SHOPEE STOREFRONT
            </span>
            <div className="relative flex items-center gap-[16px]">
              <div className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-full [border:3px_solid_#ffffff35]">
                <Image
                  src={photos.shop}
                  alt="LA Electrical shopfront"
                  fill
                  sizes="76px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-[25px] tracking-[-0.6px]">LA Electrical</h3>
                <span className="mt-[6px] block text-[12px] text-[#c1cbd9]">
                  @laelectrical · Malaysia
                </span>
                <span
                  className="mt-[9px] flex gap-[3px] text-[#e9ab56]"
                  aria-label="4.9 out of 5 stars"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={12}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  ))}
                </span>
              </div>
            </div>
            <a
              href={business.shopee}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-[24px] inline-flex items-center gap-[9px] text-[11px] font-bold text-white hover:underline"
            >
              Explore our store <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="flex flex-col justify-center bg-soft px-[30px] py-[28px] max-[560px]:px-[20px]">
            <div className="grid grid-cols-2 gap-x-[24px] gap-y-[26px]">
              {storeStats.map(({ value, label, Icon }) => (
                <div
                  key={label}
                  className="flex items-start gap-[12px] max-[560px]:gap-[9px]"
                >
                  <span className="mt-[4px] text-primary">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <div>
                    <strong className="block text-[26px] leading-[1.2] tracking-[-0.7px] max-[560px]:text-[22px]">
                      {value}
                    </strong>
                    <span className="mt-[6px] block text-[11px] leading-[1.5] text-muted">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-[24px] pt-[16px] text-[10px] leading-[1.6] [border-top:1px_solid_var(--line)]">
              Store snapshot · October 2026. See Shopee for current figures and
              availability.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-[25px] mt-[52px] flex flex-wrap items-end justify-between gap-[18px]">
        <div>
          <span className="mb-[8px] block text-[10px] font-bold tracking-[1.5px] text-primary">
            FIND WHAT YOU NEED
          </span>
          <h3 className="text-[28px]">
            Explore our categories<span className="text-primary">.</span>
          </h3>
          <p className="mt-[10px] text-[12px]">
            12 categories. One store for your next find.
          </p>
        </div>
        <a
          href={business.shopee}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-[9px] pb-[3px] text-[12px] font-bold text-primary hover:underline"
        >
          All products on Shopee <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-[20px] min-[701px]:grid-cols-3 min-[1101px]:grid-cols-4 max-[560px]:gap-[12px]">
        {categories.map(({ slug, name, english, Icon }, index) => {
          const image = categoryImage(slug);
          return (
            <a
              key={slug}
              href={business.shopee}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} — visit the LA Electrical Shopee store`}
              className="group flex min-w-0 flex-col overflow-hidden rounded-[var(--radius)] bg-white [border:1px_solid_var(--line)] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[4px] hover:border-primary hover:[box-shadow:var(--shadow)]"
            >
              <div className="relative grid aspect-[1.65] place-items-center overflow-hidden bg-soft text-primary">
                {image ? (
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 700px) 45vw, (max-width: 1100px) 30vw, 280px"
                    className="object-contain p-[18px] transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute h-[105px] w-[105px] rounded-full [border:1px_solid_#b63a5317] max-[560px]:h-[80px] max-[560px]:w-[80px]"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute h-[140px] w-[140px] rounded-full [border:1px_solid_#b63a530c] max-[560px]:h-[110px] max-[560px]:w-[110px]"
                    />
                    <Icon
                      size={49}
                      strokeWidth={1.1}
                      aria-hidden="true"
                      className="relative transition-transform duration-300 group-hover:scale-110 max-[560px]:h-[38px] max-[560px]:w-[38px]"
                    />
                  </>
                )}
                <span
                  aria-hidden="true"
                  className="absolute left-[13px] top-[9px] text-[9px] font-bold tracking-[1px] text-primary/50"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-[19px] max-[560px]:p-[13px]">
                <h4
                  lang="ms"
                  className="m-0 text-[15px] font-bold leading-[1.4] tracking-[-0.2px] max-[560px]:text-[13px]"
                >
                  {name}
                </h4>
                <p className="mb-[20px] mt-[5px] text-[11px] leading-[1.6] max-[560px]:text-[10px]">
                  {english}
                </p>
                <span className="mt-auto flex items-center justify-between gap-[6px] text-[10px] font-bold text-primary">
                  Explore on Shopee <ArrowUpRight size={15} />
                </span>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-[30px] flex flex-wrap items-center justify-between gap-[18px] rounded-[var(--radius)] bg-soft px-[25px] py-[23px] max-[560px]:px-[20px]">
        <div className="flex items-center gap-[14px]">
          <MessageCircle
            className="shrink-0 text-primary"
            size={25}
            strokeWidth={1.5}
          />
          <div>
            <h4 className="m-0 text-[14px] font-bold">
              Not sure which part fits?
            </h4>
            <p className="mt-[4px] text-[12px]">
              Send us your model number or a photo. Let’s find the right part.
            </p>
          </div>
        </div>
        <a
          href={whatsapp(
            "Hi LA Electrical! I need help finding the right part for my appliance.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-[10px] text-[12px] font-bold text-primary hover:underline"
        >
          Ask our team <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

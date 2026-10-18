import { ArrowUpRight, Wind } from "lucide-react";
import type { ReactNode } from "react";

export function Brand() {
  return (
    <a className="brand" href="#home" aria-label="LKL Electrical Trading home">
      <span className="brand-symbol">
        <Wind size={29} />
      </span>
      <span>
        <strong>
          LKL<span className="brand-dot">.</span>
        </strong>
        <small>ELECTRICAL TRADING</small>
      </span>
    </a>
  );
}
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
      className={`button ${secondary ? "button-secondary" : ""}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <span className="button-arrow">
        <ArrowUpRight size={18} />
      </span>
    </a>
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
    <div className={`section-heading ${centered ? "centered" : ""}`}>
      <span className="eyebrow">
        <Wind size={17} />
        {eyebrow}
      </span>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

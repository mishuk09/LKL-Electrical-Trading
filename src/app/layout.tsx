import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "LKL Electrical Trading | Aircond & Electrical Services in Melaka",
  description:
    "Air conditioning installation, servicing, chemical wash, electrical solutions and spare parts in Taman Kota Laksamana, Melaka. Call LKL at +60 16-626 1222.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="fixed left-[16px] top-[-100px] z-[100] bg-white pt-[12px] pr-[12px] pb-[12px] pl-[12px] [&:focus]:top-[12px]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

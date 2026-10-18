import Image from "next/image";

export default function MainLogo({ className = "" }: { className?: string }) {
  return (
    <a
      data-slot="brand"
      className={`inline-flex shrink-0 ${className}`}
      href="#home"
      aria-label="LKL Electrical Trading home"
    >
      <Image
        src="/images/mainlogo.svg"
        alt="LKL Electrical Trading"
        width={300}
        height={100}
        priority
        className="h-auto w-[180px] [@media(width<=560px)]:w-[150px]"
      />
    </a>
  );
}

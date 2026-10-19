"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategoryCarousel({ children }: { children: ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const count = Children.count(children);
  const [position, setPosition] = useState({ page: 0, pages: Math.ceil(count / 2) });

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => {
      const card = element.firstElementChild as HTMLElement | null;
      if (!card) return;
      const gap = parseFloat(getComputedStyle(element).columnGap);
      const step = card.getBoundingClientRect().width + gap;
      const visible = Math.round((element.clientWidth + gap) / step);
      setPosition({
        page: Math.round(element.scrollLeft / (step * visible)),
        pages: Math.ceil(count / visible),
      });
    };
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      element.removeEventListener("scroll", update);
    };
  }, [count]);

  function goTo(page: number) {
    const element = track.current;
    if (!element) return;
    const gap = parseFloat(getComputedStyle(element).columnGap);
    element.scrollTo({
      left: Math.max(0, Math.min(page, position.pages - 1)) * (element.clientWidth + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  const buttonClass = "grid h-[44px] w-[44px] shrink-0 place-items-center rounded-full border border-solid border-[#e9e2e0] bg-white text-navy transition-colors hover:border-[#F8492F] hover:text-[#F8492F] disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8492F]";

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Product categories">
      <div
        id="product-category-track"
        ref={track}
        tabIndex={0}
        aria-label="Swipe or use arrow keys to browse categories"
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            goTo(position.page + (event.key === "ArrowRight" ? 1 : -1));
          }
        }}
        className="grid auto-cols-[calc((100%_-_12px)/2)] grid-flow-col items-stretch gap-[12px] overflow-x-auto overscroll-x-contain snap-x snap-mandatory px-[1px] pb-[10px] pt-[5px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>a]:snap-start [&>a]:scroll-mx-0 min-[1024px]:auto-cols-[calc((100%_-_60px)/4)] min-[1024px]:gap-[20px] focus-visible:outline-2 focus-visible:outline-[#F8492F]"
      >
        {children}
      </div>
      <div className="mt-[18px] flex items-center justify-between gap-[12px]">
        <button type="button" className={buttonClass} aria-label="Previous categories" aria-controls="product-category-track" disabled={position.page === 0} onClick={() => goTo(position.page - 1)}><ChevronLeft size={19} /></button>
        <div className="flex items-center justify-center gap-[2px]" aria-label="Category pages">
          {Array.from({ length: position.pages }, (_, page) => (
            <button key={page} type="button" aria-label={`Go to category page ${page + 1}`} aria-current={page === position.page ? "page" : undefined} onClick={() => goTo(page)} className="group grid h-[44px] w-[28px] place-items-center rounded-full border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-[#F8492F]">
              <span className={`h-[6px] rounded-full transition-all motion-reduce:transition-none ${page === position.page ? "w-[22px] bg-[#F8492F]" : "w-[6px] bg-[#d9d0ce] group-hover:bg-[#F8492F]"}`} />
            </button>
          ))}
        </div>
        <button type="button" className={buttonClass} aria-label="Next categories" aria-controls="product-category-track" disabled={position.page >= position.pages - 1} onClick={() => goTo(position.page + 1)}><ChevronRight size={19} /></button>
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">Category page {position.page + 1} of {position.pages}</p>
    </div>
  );
}

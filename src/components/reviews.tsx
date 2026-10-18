"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import reviews from "@/lib/reviews.json";
import { business } from "@/lib/business";
import { Heading } from "./ui";
export default function Reviews() {
  const [page, setPage] = useState(0);
  const total = Math.ceil(reviews.length / 2);
  return (
    <section
      className="pt-[var(--section-space)] pb-[var(--section-space)] bg-navy text-[#fff] relative [&_[data-slot~='eyebrow']]:text-[#e99aab] [&_em]:text-[#e99aab] [&_[data-slot~='text-link']]:text-[#e99aab] [&_p]:text-[#bdc7d6] [&_p]:text-[14px]"
      id="reviews"
    >
      <div className="w-[min(var(--container),_calc(100%_-_64px))] [@media(560px<width<=850px)]:w-[calc(100%_-_40px)] [@media(width<=560px)]:w-[calc(100%_-_36px)] mx-auto grid grid-cols-[0.85fr_1.65fr] [@media(850px<width<=1100px)]:grid-cols-[0.8fr_1.5fr] [@media(width<=850px)]:grid-cols-[1fr] items-center gap-[65px] [@media(width<=1100px)]:gap-[35px] [@media(width<=850px)]:[&_>_div:first-child]:max-w-[550px]">
        <div>
          <Heading eyebrow="WORDS FROM OUR CUSTOMERS">
            Good work.
            <br />
            <em>Happy customers.</em>
          </Heading>
          <p>
            Real experiences from the people who trust us with their comfort.
          </p>
          <div className="flex items-center mt-[25px] gap-[18px] [&_>_strong]:text-[48px] [&_>_strong]:tracking-[-2px] [&_small]:block [&_small]:text-[#c3ccda] [&_small]:text-[11px]">
            <strong>4.9</strong>
            <div>
              <span
                data-slot="stars"
                className="text-[#e9ab56] text-[14px] tracking-[3px]"
              >
                ★★★★★
              </span>
              <small>131+ reviews on Google</small>
            </div>
          </div>
          <a
            data-slot="text-link"
            className="inline-flex items-center text-primary text-[12px] font-bold gap-[10px] [&:hover]:underline"
            href={business.maps}
            target="_blank"
            rel="noopener noreferrer"
          >
            Find us on Google <ArrowRight size={16} />
          </a>
          <div className="flex items-center mt-[28px] gap-[15px] [&_button]:grid [&_button]:place-items-center [&_button]:[border:1px_solid_#ffffff35] [&_button]:w-[39px] [&_button]:h-[39px] [&_button]:rounded-[50%] [&_button]:text-[#fff] [&_button]:bg-transparent [&_button:hover]:bg-primary [&_span]:text-[10px] [&_span]:text-[#c3ccda]">
            <button
              onClick={() => setPage((page - 1 + total) % total)}
              aria-label="Previous reviews"
            >
              <ArrowLeft />
            </button>
            <span>
              {String(page + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
            <button
              onClick={() => setPage((page + 1) % total)}
              aria-label="Next reviews"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
        <div
          className="grid grid-cols-[1fr_1fr] [@media(width<=560px)]:grid-cols-[1fr] items-stretch gap-[20px]"
          aria-live="polite"
          aria-atomic="true"
        >
          {reviews.slice(page * 2, page * 2 + 2).map((review) => (
            <article
              className="[border:1px_solid_#ffffff25] rounded-[var(--radius)] pt-[27px] [@media(560px<width<=1100px)]:pt-[20px] [@media(width<=560px)]:pt-[24px] pr-[27px] [@media(560px<width<=1100px)]:pr-[20px] [@media(width<=560px)]:pr-[24px] pb-[27px] [@media(560px<width<=1100px)]:pb-[20px] [@media(width<=560px)]:pb-[24px] pl-[27px] [@media(560px<width<=1100px)]:pl-[20px] [@media(width<=560px)]:pl-[24px] min-h-[340px] [@media(560px<width<=850px)]:min-h-[300px] [@media(width<=560px)]:min-h-0 flex flex-col bg-[#ffffff03] [&_blockquote]:text-[14px] [@media(width<=560px)]:[&_blockquote]:text-[13px] [&_blockquote]:leading-[1.9] [&_blockquote]:mt-[23px] [&_blockquote]:mr-0 [&_blockquote]:mb-[27px] [&_blockquote]:ml-0 [&_blockquote]:text-[#f0f2f7]"
              key={review.reviewer_name}
            >
              <div className="flex justify-between items-center [&_>_svg]:text-[#d67b90] [&_>_svg]:stroke-[1]">
                <span
                  data-slot="stars"
                  className="text-[#e9ab56] text-[14px] tracking-[3px]"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  ★★★★★
                </span>
                <Quote size={31} />
              </div>
              <blockquote>
                {review.review_text.replace(/\s*… More$/, "…")}
              </blockquote>
              <div className="flex items-center mt-auto [border-top:1px_solid_#ffffff1c] pt-[20px] gap-[10px] [&_strong]:text-[11px] [@media(width<=560px)]:[&_strong]:text-[12px] [&_strong]:block [&_strong]:leading-[1.5] [&_strong]:[overflow-wrap:anywhere] [&_small]:text-[10px] [&_small]:text-[#b5c1d3]">
                <span className="rounded-[50%] w-[35px] h-[35px] bg-[#b63a5345] grid place-items-center text-[11px] shrink-0">
                  {review.reviewer_name
                    .split(" ")
                    .slice(0, 2)
                    .map((s) => s[0])
                    .join("")}
                </span>
                <div>
                  <strong>{review.reviewer_name}</strong>
                  <small>Google review</small>
                </div>
                <span
                  className="text-[20px] font-bold ml-auto"
                  aria-hidden="true"
                >
                  G
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

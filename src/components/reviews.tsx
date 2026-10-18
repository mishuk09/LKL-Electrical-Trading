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
    <section className="section reviews-section" id="reviews">
      <div className="container reviews-layout">
        <div>
          <Heading eyebrow="WORDS FROM OUR CUSTOMERS">
            Good work.
            <br />
            <em>Happy customers.</em>
          </Heading>
          <p>
            Real experiences from the people who trust us with their comfort.
          </p>
          <div className="review-score">
            <strong>4.9</strong>
            <div>
              <span className="stars">★★★★★</span>
              <small>131+ reviews on Google</small>
            </div>
          </div>
          <a
            className="text-link"
            href={business.maps}
            target="_blank"
            rel="noopener noreferrer"
          >
            Find us on Google <ArrowRight size={16} />
          </a>
          <div className="review-controls">
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
        <div className="review-cards" aria-live="polite" aria-atomic="true">
          {reviews.slice(page * 2, page * 2 + 2).map((review) => (
            <article className="review-card" key={review.reviewer_name}>
              <div className="review-top">
                <span
                  className="stars"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  ★★★★★
                </span>
                <Quote size={31} />
              </div>
              <blockquote>
                {review.review_text.replace(/\s*… More$/, "…")}
              </blockquote>
              <div className="review-person">
                <span className="avatar">
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
                <span className="google-letter" aria-hidden="true">
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

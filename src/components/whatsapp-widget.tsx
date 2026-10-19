"use client";

import Image from "next/image";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { whatsapp } from "@/lib/business";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-[24px] right-[24px] z-[30] [@media(width<=560px)]:bottom-[18px] [@media(width<=560px)]:right-[15px]">
      {open && (
        <div
          role="dialog"
          aria-label="Start a WhatsApp conversation"
          className="absolute bottom-[68px] right-0 w-[350px] overflow-hidden rounded-[8px] bg-white text-ink [box-shadow:0_8px_30px_#0003] [@media(width<=560px)]:bottom-[60px] [@media(width<=560px)]:w-[min(350px,calc(100vw_-_30px))]"
        >
          <div className="bg-[#42B94F] px-[22px] pb-[18px] pt-[17px] text-white">
            <div className="flex items-start gap-[12px]">
              <Image
                src="/images/whatsapp.webp"
                alt=""
                width={34}
                height={34}
                className="h-[34px] w-[34px] object-contain brightness-0 invert"
              />
              <div>
                <h2 className="text-[18px] font-bold leading-[1.25]">
                  Start a Conversation
                </h2>
                <p className="mt-[4px] text-[12px] font-semibold leading-[1.5] text-white">
                  Hi! Click below to chat with us on WhatsApp
                </p>
              </div>
            </div>
          </div>
          <p className="px-[22px] pb-[16px] pt-[18px] text-[11px] font-semibold text-[#aab2bd]">
            The team typically replies in a few minutes.
          </p>
          <a
            href={whatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-[20px] mb-[20px] flex items-center gap-[14px] rounded-[4px] border-l-[2px] border-solid border-[#25D366] bg-[#f2f4f6] px-[14px] py-[12px] transition-colors hover:bg-[#e8ecef]"
          >
            <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[50%] bg-[#25D366] text-white">
              <MessageCircle size={25} />
            </span>
            <span className="min-w-0">
              <strong className="block text-[14px] font-normal text-[#536071]">
                 Luis Lee
              </strong>
              <small className="block text-[11px] text-[#a1aab5]">Sales &amp; Marketing</small>
            </span>
            <MessageCircle className="ml-auto text-[#25D366]" size={21} />
          </a>
        </div>
      )}
      {!open && (
        <span className="absolute right-[62px] top-[50%] -translate-y-1/2 whitespace-nowrap rounded-[4px] bg-white px-[12px] py-[8px] text-[12px] text-[#536071] [box-shadow:0_2px_10px_#0002] [@media(width<=560px)]:right-[58px] [@media(width<=560px)]:px-[9px] [@media(width<=560px)]:text-[11px]">
          Need Help? Chat with us
        </span>
      )}
      <button
        type="button"
        className={`grid h-[52px] w-[52px] place-items-center rounded-[50%] border-[3px] border-solid border-white text-white [box-shadow:0_4px_15px_#0003] transition-transform hover:scale-105 [@media(width<=560px)]:h-[48px] [@media(width<=560px)]:w-[48px] bg-[#25D366]`}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <X size={25} />
        ) : (
          <Image
            src="/images/whatsapp.webp"
            alt=""
            width={30}
            height={30}
            className="h-[30px] w-[30px] object-contain"
          />
        )}
      </button>
    </div>
  );
}

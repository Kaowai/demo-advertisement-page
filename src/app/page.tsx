"use client";
import Footer from "@/components/footers/Footer";
import Header2 from "@/components/headers/Header2";
import ItemNavHeader from "@/components/shared/ScrollText";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import ScrollText from "@/components/shared/ScrollText";

const dmSans = DM_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={cn("overflow-auto bg-black", dmSans.className)}>
      <Header2 />
      <section
        id="section-header"
        className="bg-[url('/images/background.png')] bg-cover bg-no-repeat bg-top p-20 flex flex-col items-center self-stretch gap-24"
      >
        <div className="flex w-full max-w-[1440px] justify-between items-end mt-[116px]">
          <div className="flex max-w-[850px] flex-col items-start gap-6 flex-grow flex-shrink-0 basis-0">
            <h1 className="heading-xxl self-stretch text-[#F7F7F7]">
              A Better Way to Think About Design
            </h1>
            <div className="flex items-center gap-6 self-stretch">
              <button className="flex px-3 py-2 gap-[6px] items-center border rounded-full border-[#9FCD09] bg-[#222C00]">
                <Image
                  src={"/icons/Clock.svg"}
                  width={20}
                  height={20}
                  alt="clock"
                />
                <span className="label-s text-[#9FCD09]">19:00</span>
              </button>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/calendar-schedule.svg"
                  width={20}
                  height={20}
                  alt="Calendar"
                />
                <span className="body-l text-[#F7F7F7]">May 15, 2025</span>
              </div>

              <div className="flex items-center gap-1">
                <Image
                  src="/icons/pin-location.svg"
                  width={20}
                  height={20}
                  alt="Location"
                />
                <span className="body-l text-[#F7F7F7]">Ho Chi Minh City</span>
              </div>
            </div>
          </div>
          <button
            className="flex text-[#F7F7F7] bg-[#E82840] text-center pl-[18px] py-3 pr-5 items-center justify-center gap-[10px]
              hover:bg-[#F7F7F7] hover:border-[#F7F7F7] transition duration-300 ease-in-out
              rounded-full cursor-pointer group hover:text-[#0D0D0D]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.05546 4.55546C2.57118 4.03973 3.27065 3.75 4 3.75H13.2388C13.2493 3.75 13.2599 3.75022 13.2704 3.75067C13.5562 3.76272 13.8308 3.86517 14.0547 4.04326C14.2785 4.22135 14.4401 4.46589 14.5161 4.74167C14.5182 4.74934 14.5202 4.75705 14.5221 4.76479C14.5816 5.01099 14.7221 5.23003 14.9211 5.3867C15.1202 5.54337 15.3661 5.62855 15.6194 5.62855C15.8727 5.62856 16.1186 5.54338 16.3176 5.38673C16.5166 5.23007 16.6572 5.01103 16.7167 4.76483C16.7186 4.75712 16.7205 4.74944 16.7226 4.74179C16.7986 4.46598 16.9602 4.22141 17.1841 4.0433C17.4079 3.86519 17.6826 3.76273 17.9684 3.75067C17.9789 3.75022 17.9895 3.75 18 3.75H20C20.7293 3.75 21.4288 4.03973 21.9445 4.55546C22.4603 5.07118 22.75 5.77065 22.75 6.5V17.5C22.75 18.2293 22.4603 18.9288 21.9445 19.4445C21.4288 19.9603 20.7293 20.25 20 20.25H18C17.9895 20.25 17.9789 20.2498 17.9684 20.2493C17.6826 20.2373 17.408 20.1348 17.1841 19.9567C16.9602 19.7786 16.7987 19.534 16.7227 19.2583C16.7215 19.2541 16.7204 19.2499 16.7193 19.2458C16.7184 19.2422 16.7175 19.2387 16.7167 19.2352C16.6572 18.989 16.5166 18.77 16.3176 18.6133C16.1186 18.4566 15.8727 18.3715 15.6194 18.3715C15.3661 18.3715 15.1202 18.4567 14.9211 18.6133C14.7221 18.77 14.5816 18.989 14.5221 19.2352C14.5202 19.243 14.5182 19.2507 14.5161 19.2584C14.4401 19.5341 14.2785 19.7787 14.0547 19.9568C13.8308 20.1348 13.5562 20.2373 13.2704 20.2493C13.2599 20.2498 13.2493 20.25 13.2388 20.25H4C3.27065 20.25 2.57118 19.9603 2.05546 19.4445C1.53973 18.9288 1.25 18.2293 1.25 17.5V6.5C1.25 5.77065 1.53973 5.07118 2.05546 4.55546ZM4 5.25C3.66848 5.25 3.35054 5.3817 3.11612 5.61612C2.8817 5.85054 2.75 6.16848 2.75 6.5V17.5C2.75 17.8315 2.8817 18.1495 3.11612 18.3839C3.35054 18.6183 3.66848 18.75 4 18.75H13.0999C13.2544 18.2309 13.566 17.7711 13.9933 17.4347C14.4568 17.0698 15.0295 16.8715 15.6193 16.8715C16.2092 16.8715 16.7819 17.0698 17.2454 17.4346C17.6727 17.771 17.9843 18.2309 18.1389 18.75H20C20.3315 18.75 20.6495 18.6183 20.8839 18.3839C21.1183 18.1495 21.25 17.8315 21.25 17.5V6.5C21.25 6.16848 21.1183 5.85054 20.8839 5.61612C20.6495 5.3817 20.3315 5.25 20 5.25H18.1389C17.9843 5.76911 17.6727 6.22901 17.2454 6.5654C16.7819 6.93022 16.2092 7.12857 15.6193 7.12855C15.0295 7.12854 14.4568 6.93017 13.9933 6.56534C13.566 6.22896 13.2544 5.76908 13.0999 5.25H4Z"
                className="fill-current text-[#F7F7F7] group-hover:text-[#0D0D0D]"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5 14C15.9142 14 16.25 14.3358 16.25 14.75V15.25C16.25 15.6642 15.9142 16 15.5 16C15.0858 16 14.75 15.6642 14.75 15.25V14.75C14.75 14.3358 15.0858 14 15.5 14Z"
                className="fill-current text-[#F7F7F7] group-hover:text-[#0D0D0D]"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5 11C15.9142 11 16.25 11.3358 16.25 11.75V12.25C16.25 12.6642 15.9142 13 15.5 13C15.0858 13 14.75 12.6642 14.75 12.25V11.75C14.75 11.3358 15.0858 11 15.5 11Z"
                className="fill-current text-[#F7F7F7] group-hover:text-[#0D0D0D]"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5 8C15.9142 8 16.25 8.33579 16.25 8.75V9.25C16.25 9.66421 15.9142 10 15.5 10C15.0858 10 14.75 9.66421 14.75 9.25V8.75C14.75 8.33579 15.0858 8 15.5 8Z"
                className="fill-current text-[#F7F7F7] group-hover:text-[#0D0D0D]"
              />
            </svg>
            <ScrollText
              label="Get your ticket"
              className="button-l group-hover:text-[#0D0D0D]"
            />
          </button>
        </div>

        <div className="flex h-[720px] max-w-[1440px] max-h-[810px] flex-col justify-center items-center gap-2 self-stretch aspect-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-[20px] border-[1.5px] border-[#1F1F1F] "
          >
            <source src="/videos/Teaser.webm" />
          </video>
        </div>
      </section>

      <Footer />
    </div>
  );
}

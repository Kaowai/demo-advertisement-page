"use client";
import Image from "next/image";
import React from "react";
import ItemNavHeader from "../shared/ItemNavHeader";
import { cn } from "@/lib/utils";

const ItemsNavHeader = [
  { content: "About us", href: "#" },
  { content: "Events", href: "#" },
  { content: "Venue", href: "#" },
  { content: "Partner", href: "#" },
];

interface MainHeaderProps {
  isAboveHeaderVisible: boolean;
}

const MainHeader = ({ isAboveHeaderVisible }: MainHeaderProps) => {
  return (
    <nav 
      className={cn(
        "w-full fixed top-0 max-h-24 flex mx-auto justify-between items-center px-20 py-4 bg-[#0D0D0D]/32 backdrop-sepia-[52px] z-40 transition-transform duration-300",
        isAboveHeaderVisible ? "translate-y-9" : "translate-y-0"
      )}
    >
      <a className="flex items-center">
        <Image
          width={128}
          height={32}
          src="/images/logo.svg"
          alt="Logo"
          className="object-contain w-full h-full"
        />
      </a>
      <div className="md:hidden">Button mobile</div>
      <div className="hidden md:flex items-center gap-2-3">
        {/* NAVBAR ITEMS */}
        <ul className="flex gap-10 items-center">
          {ItemsNavHeader.map((item, index) => (
            <li key={index} className="cursor-default">
              <ItemNavHeader content={item.content} href={item.href} />
            </li>
          ))}
          <li>
            <button
              className="flex text-[#F7F7F7] text-center pl-[18px] py-3 pr-5 items-center justify-center gap-[10px]
              hover:bg-[#E82840] hover:border-[#E82840] transition duration-300 ease-in-out
              border-[1.5px] border-[#F7F7F7] rounded-full cursor-pointer group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar-icon lucide-calendar"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
              <ItemNavHeader content="All Events" href="#" classNameLabel="button-m"/>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainHeader;

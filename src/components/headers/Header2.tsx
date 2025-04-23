"use client";
import Image from "next/image";
import React from "react";
import AboveHeader from "./AboveHeader";

const Header2 = () => {
  return (
    <>
      <AboveHeader />
      <nav className="w-full fixed flex mx-auto justify-between items-center px-20 py-4 bg-[#0D0D0D]/32 backdrop-sepia-[52px] z-50">
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
            <li className="cursor-default">
              <span className="label-l text-[#F7F7F7] transition-transform transform hover:translate-z-[100px]">
                About us
              </span>
            </li>
            <li className="cursor-default">
              <span className="label-l text-[#F7F7F7] transition-transform transform hover:translate-z-[100px]">
                Events
              </span>
            </li>
            <li className="cursor-default">
              <span className="label-l text-[#F7F7F7] transition-transform transform hover:translate-z-[100px]">
                Venue
              </span>
            </li>
            <li className="cursor-default">
              <span className="label-l text-[#F7F7F7] transition-transform transform hover:translate-z-[100px]">
                Partner
              </span>
            </li>
            <li>
              <button
                className="flex button-m text-[#F7F7F7] text-center pl-[18px] py-3 pr-5 items-center justify-center gap-[10px]
                    hover:bg-[#E82840] hover:border-[#E82840] transition duration-300 ease-in-out
                    border-[1.5px] border-[#F7F7F7] rounded-full cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-calendar-icon lucide-calendar"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                All events
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header2;

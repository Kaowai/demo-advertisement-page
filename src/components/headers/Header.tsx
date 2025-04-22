"use client";
import Image from "next/image";
import React, { useState } from "react";
import ButtonHeader from "../shared/ButtonHeader";
import NavCard from "../shared/NavCard";
import { cn } from "./../../lib/utils";

export interface NavItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const navItemsCardLearn: NavItem[] = [
  {
    icon: <Image src="/icons/globe.svg" alt="Global" width={24} height={24} />,
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    icon: (
      <Image
        src="/icons/terminal.svg"
        alt="Terminal Icon"
        width={24}
        height={24}
      />
    ),
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    icon: (
      <Image
        src="/icons/graduation-cap.svg"
        alt="Graduation Icon"
        width={24}
        height={24}
      />
    ),
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    icon: (
      <Image
        src="/icons/columns-2.svg"
        alt="Columns Icon"
        width={24}
        height={24}
      />
    ),
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    icon: (
      <Image
        src="/icons/square-code.svg"
        alt="Square Code Icon"
        width={24}
        height={24}
      />
    ),
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
];

const navItemsCardCommunity: NavItem[] = [
  {
    icon: (
      <Image
        src="/icons/terminal.svg"
        alt="Terminal Icon"
        width={24}
        height={24}
      />
    ),
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    icon: (
      <Image
        src="/icons/graduation-cap.svg"
        alt="Graduation Icon"
        width={24}
        height={24}
      />
    ),
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    icon: (
      <Image
        src="/icons/columns-2.svg"
        alt="Columns Icon"
        width={24}
        height={24}
      />
    ),
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    icon: (
      <Image
        src="/icons/square-code.svg"
        alt="Square Code Icon"
        width={24}
        height={24}
      />
    ),
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState<null | "Learn" | "Community">(
    null
  );
  const [previousTab, setPreviousTab] = useState<null | "Learn" | "Community">(
    null
  );

  let timeout: NodeJS.Timeout;

  const handleEnter = (tab: "Learn" | "Community") => {
    clearTimeout(timeout);
    setPreviousTab(activeTab);
    setActiveTab(tab);
  };

  const handleLeave = () => {
    timeout = setTimeout(() => {
      setActiveTab(null);
    }, 200); // delay tránh bị tắt liền khi chuyển vùng
  };

  const getSlideDirection = (
    previousTab: "Learn" | "Community" | null,
    nextTab: "Learn" | "Community"
  ): "left" | "right" | null => {
    if (!previousTab || previousTab === nextTab) return null;

    if (previousTab === "Learn" && nextTab === "Community") return "left";
    if (previousTab === "Community" && nextTab === "Learn") return "right";

    return null; // fallback
  };
  return (
    <nav className="w-full max-h-24 flex mx-auto justify-between items-center border-b px-4 md:px-8 lg:px-16 bg-white">
      <a className="flex items-center py-4">
        <div className="relative w-32 h-8">
          <Image
            width={128}
            height={32}
            src="/images/logo.svg"
            alt="Logo"
            className="object-contain w-full h-full absolute"
          />
        </div>
      </a>
      <div className="md:hidden">Button mobile</div>
      <div className="hidden md:flex items-center gap-2-3">
        <div className="relative">
          {/* NAVBAR ITEMS */}
          <ul className="flex gap-2">
            <li className="cursor-pointer">
              <ButtonHeader
                content="Learn"
                itemActive={activeTab}
                onCloseItemCard={handleLeave}
                onOpenItemCard={() => handleEnter("Learn")}
              />
            </li>
            <li className="cursor-pointer">
              <ButtonHeader
                content="Community"
                itemActive={activeTab}
                onCloseItemCard={handleLeave}
                onOpenItemCard={() => handleEnter("Community")}
              />
            </li>
          </ul>

          {/* DROPDOWN CONTAINER */}
          {activeTab && (
            <div
              className={cn(
                "absolute flex items-center top-full transition-opacity duration-200 right-0 bg-white z-50",
                activeTab ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
              onMouseEnter={() => clearTimeout(timeout)}
              onMouseLeave={handleLeave}
            >
              <NavCard
                itemOpen={activeTab}
                slideDirection={getSlideDirection(previousTab, activeTab)}
                navItemsCardCommunity={navItemsCardCommunity}
                navItemsCardLearn={navItemsCardLearn}
              />
            </div>
          )}
        </div>

        <div className="flex items-center gap-2"></div>
      </div>
    </nav>
  );
};

export default Header;

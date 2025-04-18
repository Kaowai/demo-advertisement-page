"use client";
import Image from "next/image";
import React from "react";
import ButtonHeader from "../shared/ButtonHeader";
import NavCard from "../shared/NavCard";
import { cn } from "@/lib/utils";

export interface NavItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const navItemsCardLearn: NavItem[] = [
  {
    icon: (
      <Image
        src="/icons/terminal.svg"
        alt="Terminal Icon"
        width={16}
        height={16}
      />
    ),
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati",
  },
  {
    icon: (
      <Image
        src="/icons/graduation-cap.svg"
        alt="Graduation Icon"
        width={16}
        height={16}
      />
    ),
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati",
  },
  {
    icon: (
      <Image
        src="/icons/columns-2.svg"
        alt="Columns Icon"
        width={16}
        height={16}
      />
    ),
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati",
  },
  {
    icon: (
      <Image
        src="/icons/square-code.svg"
        alt="Square Code Icon"
        width={16}
        height={16}
      />
    ),
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati",
  },
];

const navItemsCardCommunity: NavItem[] = [
  {
    icon: (
      <Image
        src="/icons/terminal.svg"
        alt="Terminal Icon"
        width={16}
        height={16}
      />
    ),
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati",
  },
  {
    icon: (
      <Image
        src="/icons/graduation-cap.svg"
        alt="Graduation Icon"
        width={16}
        height={16}
      />
    ),
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati",
  },
  {
    icon: (
      <Image
        src="/icons/columns-2.svg"
        alt="Columns Icon"
        width={16}
        height={16}
      />
    ),
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati",
  },
  {
    icon: (
      <Image
        src="/icons/square-code.svg"
        alt="Square Code Icon"
        width={16}
        height={16}
      />
    ),
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati",
  },
];
const navItems = [{ name: "Learn" }, { name: "Community" }];

const Header = () => {
  const [isOpenNavCard, setIsOpenNavCard] = React.useState<boolean>(false);
  const [itemOpen, setItemOpen] = React.useState<string>("");
  const [prevItemOpen, setPrevItemOpen] = React.useState<string>("");
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const onOpenItemCard = (item: string) => {
    if (item !== itemOpen) {
      // Nếu NavCard đang mở => cho phép animate chuyển hướng
      if (isOpenNavCard) {
        setPrevItemOpen(itemOpen);
        setIsTransitioning(true);
      } else {
        // Nếu NavCard đang đóng => không animate trái/phải
        setPrevItemOpen("");
        setIsTransitioning(false);
      }
    }
    setItemOpen(item);
    setIsOpenNavCard(true);
  };

  const getSlideDirection = () => {
    if (!isTransitioning) return null; // không animate nếu không trong quá trình chuyển item
    const currentIndex = navItems.findIndex((i) => i.name === itemOpen);
    const prevIndex = navItems.findIndex((i) => i.name === prevItemOpen);
    return currentIndex > prevIndex ? "right" : "left";
  };

  const onCloseItemCard = () => {
    setIsOpenNavCard(false);
    setIsTransitioning(false);
  };

  return (
    <div className="w-full max-h-16 flex mx-auto justify-between items-center border-b px-4 md:px-8 lg:px-16 bg-white">
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
        <ul className="flex relative justify-start items-center list-none flex-1 group">
          {navItems.map((item, index) => (
            <li key={index} className="flex items-center relative">
              <ButtonHeader
                content={item.name}
                className="text-sm font-medium"
                onOpenItemCard={() => onOpenItemCard(item.name)}
                onCloseItemCard={onCloseItemCard}
              />
            </li>
          ))}
          <div
            className={cn(
              "absolute right-0 top-10 z-10 w-full min-w-[400px] h-full max-w-[400px] transition-all duration-300 ease-in-out origin-top",
              "opacity-0 scale-95 pointer-events-none",
              "group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
            )}
          >
            <NavCard
              itemOpen={itemOpen}
              slideDirection={getSlideDirection()}
              navItemsCardLearn={navItemsCardLearn}
              navItemsCardCommunity={navItemsCardCommunity}
            />
          </div>
        </ul>
        <div className="flex items-center gap-2"></div>
      </div>
    </div>
  );
};

export default Header;

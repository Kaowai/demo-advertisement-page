"use client";
import Image from "next/image";
import React from "react";
import ButtonHeader from "../shared/ButtonHeader";
import NavCard from "../shared/NavCard";

const navItems = [{ name: "Learn" }, { name: "Community" }];

const Header = () => {
  const [isOpenNavCard, setIsOpenNavCard] = React.useState<boolean>(false);

  const onOpenItemCard = () => {
    setIsOpenNavCard(true);
  };

  const onCloseItemCard = () => {
    setIsOpenNavCard(false);
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
        <ul className="flex relative justify-start items-center list-none flex-1">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center relative group"
            >
              <ButtonHeader
                content={item.name}
                className="text-sm font-medium"
                onOpenItemCard={onOpenItemCard}
                onCloseItemCard={onCloseItemCard}
              />
              {/* Hover effect for li */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 duration-500 transition-all"></span>
            </li>
          ))}
          <div
            className={`absolute right-0 top-10 z-10 w-full min-w-[400px] max-w-[400px] ${
              isOpenNavCard ? "block" : "hidden"
            }`}
          >
            <NavCard />
          </div>
        </ul>
        <div className="flex items-center gap-2"></div>
      </div>
    </div>
  );
};

export default Header;

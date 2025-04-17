import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full max-h-16 flex mx-auto justify-between items-center border px-4 md:px-8 lg:px-16 bg-white">
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
        <ul className="flex justify-start items-center gap-2 list-none flex-1">
          <li>
            <button className="text-black text-sm font-medium transition-color focus:outline-none flex h-10 w-max items-center justify-center px-4 py-2">
              Learn
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-down-icon lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>{" "}
            </button>
          </li>
          <li>
            <button className="text-black text-base">Community</button>
          </li>
        </ul>
        <div className="flex items-center gap-2"></div>
      </div>
    </div>
  );
};

export default Header;

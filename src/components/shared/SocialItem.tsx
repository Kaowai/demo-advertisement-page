import { cn } from "@/lib/utils";
import React from "react";

export interface SocialItemProps {
  icon: React.ReactNode;
  link: string;
  title?: string;
  className?: string;
}
const SocialItem = ({ icon, link, title, className }: SocialItemProps) => {
  return (
    <a
      href={link}
      className={cn(
        "w-full h-full border rounded-lg p-4 flex justify-center items-center gap-2",
        "hover:bg-[#F6A7B1] transition-all duration-200 cursor-pointer",
        "font-semibold text-white text-base",
        className
      )}
    >
      {icon}
      {title}
    </a>
  );
};

export default SocialItem;

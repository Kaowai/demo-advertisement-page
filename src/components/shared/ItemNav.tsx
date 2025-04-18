import { cn } from "@/lib/utils";
import React from "react";

interface IProps {
  className?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}
const ItemNav = ({ icon, className, title, description }: IProps) => {
  return (
    <a href="">
      <div
        className={cn(
          "flex rounded-lg items-start gap-4 bg-transparent hover:bg-neutral-800/20 cursor-pointer",
          className
        )}
      >
        {icon}
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-semibold text-neutral-800">{title}</span>
          <span className="text-xs text-neutral-500">{description}</span>
        </div>
      </div>
    </a>
  );
};

export default ItemNav;

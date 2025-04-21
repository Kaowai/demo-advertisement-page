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
    <div
      className={cn(
        "flex rounded-lg p-4 items-center gap-6 bg-transparent hover:bg-neutral-100 transition-all cursor-pointer",
        className
      )}
    >
      {icon}
      <div className="flex flex-col justify-center gap-1">
        <span className="text-base font-semibold text-neutral-800">{title}</span>
        <span className="text-sm text-neutral-500">{description}</span>
      </div>
    </div>
  );
};

export default ItemNav;

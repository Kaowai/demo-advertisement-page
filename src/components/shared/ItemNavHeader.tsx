import { cn } from "@/lib/utils";
import React from "react";

interface IProps {
  href?: string;
  classNameLabel?: string;
  content?: string;
}

const ItemNavHeader = ({ href, content, classNameLabel }: IProps) => {
  return (
    <a href={href}>
      <div className="h-6 overflow-hidden group">
        <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
          <span className={cn("label-l text-[#F7F7F7]", classNameLabel)}>
            {content}
          </span>
          <span className={cn("label-l text-[#F7F7F7]", classNameLabel)}>
            {content}
          </span>
        </div>
      </div>
    </a>
  );
};

export default ItemNavHeader;

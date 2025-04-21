import { cn } from "@/lib/utils";
import React from "react";

interface IProps {
  content: string;
  itemActive: "Learn" | "Community" | null;
  className?: string;
  onOpenItemCard: (item: string) => void;
  onCloseItemCard: () => void;
}

const ButtonHeader = ({
  content,
  className,
  itemActive,
  onOpenItemCard,
  onCloseItemCard,
}: IProps) => {
  return (
    <div
      onMouseEnter={() => onOpenItemCard(content)}
      onMouseLeave={() => onCloseItemCard()}
      className="relative"
    >
      <button
        className={cn(
          "group text-black text-sm font-medium transition-color focus:outline-none flex h-10 w-max items-center justify-center px-4 py-2",
          className
        )}
      >
        {content}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-chevron-down-icon lucide-chevron-down transition-transform duration-200 ${
            itemActive === content && "rotate-180"
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </div>
  );
};

export default ButtonHeader;

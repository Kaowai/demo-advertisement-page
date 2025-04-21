import { cn } from "@/lib/utils";
import { NavItem } from "../headers/Header";
import ItemNav from "./ItemNav";

interface IProps {
  itemOpen?: string;
  slideDirection?: "left" | "right" | null;
  navItemsCardCommunity?: NavItem[];
  navItemsCardLearn?: NavItem[];
}

export default function NavCard({
  itemOpen,
  slideDirection,
  navItemsCardCommunity,
  navItemsCardLearn,
}: IProps) {
  return (
    <div
      className={cn(
        "flex w-full h-full items-center justify-center relative overflow-hidden "
      )}
    >
      <div
        className={cn(
          "absolute w-full",
          slideDirection === "right"
            ? "animate-fade-in-right"
            : slideDirection === "left"
            ? "animate-fade-in-left"
            : "opacity-0 animate-fade-in" // nếu không phải left/right, dùng animation mặc định
        )}
      >
        <div className="text-sm font-semibold flex items-center justify-center gap-2">
          <div className="basis-[60%] text-neutral-800 flex flex-col gap-2 items-center justify-center p-3">
            {itemOpen === "Community"
              ? navItemsCardCommunity?.map((item, index) => (
                  <ItemNav
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))
              : navItemsCardLearn?.map((item, index) => (
                  <ItemNav
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
          </div>
          <div className="basis-[40%] text-neutral-500 text-right bg-black">Content2</div>
        </div>
      </div>
    </div>
  );
}

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
        "flex w-full h-full min-h-[500px] items-center justify-center rounded-xl border bg-white p-4 relative overflow-hidden"
      )}
    >
      <div
        key={itemOpen}
        className={cn(
          "absolute w-full p-12",
          slideDirection === "right"
            ? "animate-fade-in-right"
            : slideDirection === "left"
            ? "animate-fade-in-left"
            : "opacity-0 scale-95 animate-fade-in" // nếu không phải left/right, dùng animation mặc định
        )}
      >
        <div className="text-sm font-semibold flex items-center gap-2 mb-4">
          <div className="basis-1/2 text-neutral-800 flex flex-col items-start gap-2">
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
          <div className="basis-1/2 text-neutral-500 text-right"></div>
        </div>
      </div>
    </div>
  );
}

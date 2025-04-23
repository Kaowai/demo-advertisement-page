import { cn } from "@/lib/utils";
import { NavItem } from "../headers/Header";
import ItemNav from "./ItemNav";
import Image from "next/image";
import SocialItem, { SocialItemProps } from "./SocialItem";

interface IProps {
  itemOpen: string;
  slideDirection?: "left" | "right" | null;
  navItemsCardCommunity?: NavItem[];
  navItemsCardLearn?: NavItem[];
}

const socialList: SocialItemProps[] = [
  {
    icon: (
      <Image
        src={"/icons/linkedin.svg"}
        alt="LinkedIn"
        width={24}
        height={24}
      />
    ),
    link: "https://linkedin.com",
  },
  {
    icon: (
      <Image
        src={"/icons/facebook.svg"}
        alt="Facebook"
        width={24}
        height={24}
      />
    ),
    link: "https://facebook.com",
  },
  {
    icon: (
      <Image src={"/icons/twitch.svg"} alt="Twitch" width={24} height={24} />
    ),
    link: "https://twitch.com",
  },
  {
    icon: (
      <Image src={"/icons/twitter.svg"} alt="Twitter" width={24} height={24} />
    ),
    link: "https://twitter.com",
  },
  {
    icon: (
      <Image
        src={"/icons/flame.svg"}
        alt="Terminal Icon"
        width={24}
        height={24}
      />
    ),
    link: "",
    title: "Sonic Swag"
  },
];

export default function NavCard({
  itemOpen,
  slideDirection,
  navItemsCardCommunity,
  navItemsCardLearn,
}: IProps) {
  return (
    <div
      className={cn(
        "rounded-lg border w-[500px] h-full relative overflow-hidden ",
        itemOpen === "Learn"
          ? "h-[550px] max-h-[550px] "
          : "h-[515px] max-h-[515px]"
      )}
    >
      <div
        className={cn(
          "absolute w-full transition-transform duration-100 top-0",
          itemOpen === "Learn"
            ? "translate-x-0"
            : slideDirection === "left"
            ? "-translate-x-full "
            : "-translate-x-full"
        )}
      >
        <div className="text-sm font-semibold flex gap-2">
          <div className="basis-[60%] text-neutral-800 flex flex-col gap-2 items-center justify-center p-3">
            {navItemsCardLearn?.map((item, index) => (
              <ItemNav
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="basis-[40%] text-neutral-500 p-7 bg-[#E82840]">
            <ul className="list-none space-y-2">
              <li>
                <a href="" className="text-base text-white font-semibold">
                  Github
                </a>
              </li>
              <li>
                <a href="" className="text-base text-white font-semibold">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="text-base text-white font-semibold">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "absolute w-full transition-transform duration-100 top-0",
          itemOpen === "Community"
            ? "translate-x-0"
            : slideDirection === "right"
            ? "translate-x-full"
            : "translate-x-full"
        )}
      >
        <div className="text-sm font-semibold flex gap-2">
          <div className="basis-[55%] text-neutral-800 flex flex-col gap-2 items-start justify-center p-3">
            {navItemsCardCommunity?.map((item, index) => (
              <ItemNav
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
            <ul className="list-none space-y-3 px-4">
              <li>
                <a href="" className="text-base text-neutral-900 font-semibold">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="text-base text-neutral-900 font-semibold">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="basis-[45%] text-neutral-500 p-7 bg-[#E82840] flex flex-col gap-2">
            <span className="text-base font-medium text-white">SOCIALS</span>
            <div className="grid grid-cols-2 grid-rows-3 gap-2">
              {socialList.map((item, idx) => (
                <SocialItem
                  key={item.link}
                  icon={item.icon}
                  link={item.link}
                  className={idx === socialList.length - 1 ? "col-span-2" : ""}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

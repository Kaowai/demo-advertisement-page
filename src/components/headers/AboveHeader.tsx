import Image from "next/image";
import React from "react";
import CountDownWrapper from "../shared/CountDownWrapper";

const AboveHeader = () => {
  return (
    <div
      className="flex px-20 py-2 flex-col justify-center items-center gap-2 self-stretch 
    bg-gradient-to-r from-[#16C3E8] via-[#064099] to-[#010412]"
    >
      <div className="flex justify-between items-center self-stretch">
        <div className="flex items-center gap-6">
          <span className="label-s text-[#F7F7F7]">
            A Better Way to Think About Design
          </span>
          <div className="flex items-center gap-4">
            <div className="flex justify-between items-center w-[112px]">
              <Image
                src="/icons/calendar-schedule.svg"
                width={20}
                height={20}
                alt="Calendar"
              />
              <span className="body-s text-[#F7F7F7]">May 15, 2025</span>
            </div>

            <div className="flex justify-between items-center gap-1">
              <Image
                src="/icons/pin-location.svg"
                width={20}
                height={20}
                alt="Location"
              />
              <span className="body-s text-[#F7F7F7]">Ho Chi Minh City</span>
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-6">
          <CountDownWrapper timeTakeplace={new Date("2025-05-25")} />
          <div className="w-0.25 self-stretch bg-[#D9D9D9]" />
          <button className="flex justify-center items-center gap-2">
            <Image
              src="/icons/ticket.svg"
              width={20}
              height={20}
              alt="Location"
            />
            <span className="label-s text-[#F7F7F7] underline underline-offset-auto">
              Get ticket
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboveHeader;

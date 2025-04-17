import React from "react";

export default function NavCard() {
  return (
    <div className="flex w-full items-center justify-center rounded-lg border bg-white p-4"> 
        <div className="basis-[60%] bg-blue-100">Cột 60%</div>
        <div className="basis-[40%] bg-red-100">Cột 40%</div>
    </div>
  )
}

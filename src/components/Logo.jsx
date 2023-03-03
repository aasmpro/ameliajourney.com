import React, { useContext } from "react";

import { SettingsContext } from "../context/SettingsContext";

export const Logo = ({ size = "default" }) => {
  const stg = useContext(SettingsContext);

  let backCircle =
    "w-[37px] h-[37px] max-w-[37px] max-h-[37px] min-w-[37px] min-h-[37px]";
  let firstLetter = "text-3xl left-[7px]";
  let secondLetter = "text-[34px] left-[12px]";

  if (size === "large") {
    backCircle =
      "w-[60px] h-[60px] max-w-[60px] max-h-[60px] min-w-[60px] min-h-[60px]";
    firstLetter = "text-[48px] left-[11px]";
    secondLetter = "text-[55px] left-[19px]";
  }

  return (
    <a href={window.location.origin} className="cursor-pointer select-none">
      <div
        className={`group ${backCircle} bg-${stg.theme_color}-300 rounded-full transition duration-300 hover:ring-2 hover:ring-${stg.theme_color}-300 hover:bg-white`}>
        <div className="relative">
          <div
            className={`absolute font-extrabold ${firstLetter} text-${stg.theme_color}-900 transition duration-300 group-hover:text-${stg.theme_color}-900`}>
            A
          </div>
          <div
            className={`absolute font-extrabold ${secondLetter} -top-[2.6px] text-white transition duration-300 group-hover:text-${stg.theme_color}-300 -rotate-[21deg]`}>
            J
          </div>
        </div>
      </div>
    </a>
  );
};

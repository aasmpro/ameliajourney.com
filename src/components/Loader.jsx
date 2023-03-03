import React, { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { Logo } from "./Logo";

export const Loader = ({ is_loaded }) => {
  const stg = useContext(SettingsContext);
  return is_loaded ? null : (
    <div className="print:hidden fixed min-h-screen min-w-full z-50 flex flex-col justify-center items-center bg-white">
      <div
        className={`absolute min-w-[200px] min-h-[200px] rounded-full bg-${stg.theme_color}-300 animate-ping blur`}></div>
      <Logo size="large"/>
    </div>
  );
};

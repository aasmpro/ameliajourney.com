import React, { useContext } from "react";

import { SettingsContext } from "../context/SettingsContext";

export const TransformText = ({ children, textColor }) => {
  const stg = useContext(SettingsContext);

  return (
    <>
      {children
        ? [...children].map((item) => (
            <span
              className={`transition duration-500 hover:text-${stg.theme_color}-400 select-none ${textColor}`}>
              {item}
            </span>
          ))
        : null}
    </>
  );
};

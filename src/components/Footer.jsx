import React from "react";

export const Footer = ({ children }) => {
  return (
    <div className="pt-5 pb-10 flex flex-col justify-center items-center">
      <div className="text-xs">
        {children} |{" "}
        <a href="https://abolfazlamiri.ir/" target="_blank" rel="noreferrer">
          aasmpro
        </a>
      </div>
    </div>
  );
};

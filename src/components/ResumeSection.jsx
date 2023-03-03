import React from "react";

import { ResumeSectionItem } from "./ResumeSectionItem";

export const ResumeSection = ({ title, icon, items }) => {
  return (
    <div className="py-1.5">
      <div className="text-xl font-black pb-1">
        <i className={`${icon} mr-3 text-[18px] select-none`} />
        {title}
      </div>
      <div className={`${title==="Skills"?"sm:grid sm:grid-cols-2":""}`}>
        {items?.map((item) => (
          <ResumeSectionItem {...item} />
        ))}
      </div>
    </div>
  );
};

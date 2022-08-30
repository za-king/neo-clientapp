import React from "react";
import { leftData } from "./sidebarData";

const Sidebar = () => {
  return (
    <div className="bg-white h-screen w-48 mt-[60px] fixed ">
      {leftData.map((item) => {
        return <><div>{item.title}</div></>
      })}
    </div>
  );
};

export default Sidebar;

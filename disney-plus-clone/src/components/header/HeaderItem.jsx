import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div className="flex text-white items-center gap-3 font-semibold text-[18px] cursor-pointer hover:underline underline-offset-8">
      <Icon />
      <h1 className="uppercase">{name}</h1>
    </div>
  );
}

export default HeaderItem;

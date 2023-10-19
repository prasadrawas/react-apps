import React from "react";
import NavItem from "./NavItem";

function BottomBarSection({ title }) {
  const departments = [
    "Fashion",
    "Education Products",
    "Frozen food",
    "Beverages",
    "Organic food",
    "Snacks",
    "Food",
    "Hair care",
    "Tech Products",
  ];

  return (
    <div>
      <h1 className="text-xl text-slate-900 mb-5 font-semibold">{title}</h1>
      {departments.map((e) => (
        <NavItem key={e} title={e} />
      ))}
    </div>
  );
}

export default BottomBarSection;

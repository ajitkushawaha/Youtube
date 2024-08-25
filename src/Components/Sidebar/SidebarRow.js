import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarRow = ({ Icon, title, path, onClick, selected }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick();
    navigate(path);
  };

  return (
    <div
      className={`sidebar-row w-4/5 rounded-md hover:bg-slate-500/20 mb-1 cursor-pointer ${
        selected ? "bg-slate-500/20" : ""
      }`}
      onClick={handleClick}
    >
      <div className="sidebar-data flex gap-5 py-2 px-3">
        {Icon && <Icon className="sidebar__icon" />}
        <p className="sidebar__title">{title}</p>
      </div>
    </div>
  );
};

export default SidebarRow;

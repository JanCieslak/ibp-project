import React from "react";

export function Project() {
  return (
    <div className="main-panel-content flex flex-column items-center">
      <h1>Project search</h1>
      <div className="w-100 flex justify-center">
        <input className="w-60" type="text"/>
        <input className="" type="submit" value="Search"/>
      </div>
    </div>
  );
}
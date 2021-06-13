import React from "react";

export function Warehouse() {
  return (
    <div className="main-panel-content flex flex-column items-center">
      <h1>Product search</h1>
      <div className="w-100 flex justify-center">
        <input className="w-60" type="text"/>
        <input className="" type="submit" value="Search"/>
      </div>
    </div>
  );
}
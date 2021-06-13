import React from "react";

export function QualityAssurance() {
  return (
    <div className="main-panel-content flex flex-column items-center">
      <h1>Quality Assurance</h1>
      <form className="w-100 flex flex-column">
        <label className="f3 mt3 mb2" htmlFor="content">Content</label>
        <textarea className="qa-content" name="content"/>
        <input className="w-20 mt3 pv2" type="submit" value="Send"/>
      </form>
    </div>
  );
}
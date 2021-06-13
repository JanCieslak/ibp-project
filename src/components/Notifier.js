import React from "react";

export function Notifier() {
  return (
    <div className="main-panel-content flex flex-column items-center">
      <h1>Notifier</h1>
      <form className="w-100 flex flex-column">
        <label className="f3 mb2" htmlFor="to">To</label>
        <input name="to" type="text" placeholder="username"/>
        <label className="f3 mt3 mb2" htmlFor="content">Content</label>
        <textarea name="content"/>
        <input className="w-20 mt3 pv2" type="submit" value="Send"/>
      </form>
    </div>
  );
}
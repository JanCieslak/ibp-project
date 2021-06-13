import React from "react";

export function SidePanelLink({currentTab, setCurrentTab, tab, content}) {
  return (
    <li className={currentTab === tab ?
      "dib white f6 ph3 pv2 bg-gray br-pill pointer" :
      "dib f6 ph3 pv2 bg-light-gray br-pill dim pointer"}
        onClick={() => setCurrentTab(tab)}>
      {content}
    </li>
  );
}
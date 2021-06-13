import React, {useState} from "react";
import {SidePanelLink} from "./SidePanelLink";
import {Warehouse} from "./Warehouse";
import {Project} from "./Project";
import {Notifier} from "./Notifier";
import {QualityAssurance} from "./QualityAssurance";

export function EmployeePanel() {
  const [currentTab, setCurrentTab] = useState(0);
  const [tab, setTab] = useState(['warehouse', 'project', 'notifier', 'quality assurance']);

  return (
    <div className="w-100 flex flex-column items-center justify-center">
      {/* Top panel */}
      <div className="w-50 mt2">
        <ul className="ma0 pa0">
          <SidePanelLink currentTab={currentTab} setCurrentTab={setCurrentTab} tab={0} content="Warehouse search"/>
          <SidePanelLink currentTab={currentTab} setCurrentTab={setCurrentTab} tab={1} content="Project search"/>
          <SidePanelLink currentTab={currentTab} setCurrentTab={setCurrentTab} tab={2} content="Notifier"/>
          <SidePanelLink currentTab={currentTab} setCurrentTab={setCurrentTab} tab={3} content="Quality assurance"/>
        </ul>
      </div>

      {/* Main panel */}
      <div>
        {
          tab.map((tab, index) => {
            if (index === currentTab) {
              switch (tab) {
                case 'warehouse':
                  return <Warehouse/>
                case 'project':
                  return <Project/>
                case 'notifier':
                  return <Notifier/>
                case 'quality assurance':
                  return <QualityAssurance/>
              }
            }
          })
        }
      </div>
    </div>
  );
}
import React, { useState } from "react";
import EpsRangeDisplay from "./EpsRange";
import EpsForm from "./EpsForm";
import CronTimer from "./CronTimer";
import SetClustersNum from './SetClustersNum'
import SetCronTime from "./SetCronTime";

const SettingsUI = () => {
  const [activeComponent, setActiveComponent] = useState("CronTimer");

  const displayComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="settings-container">
      <div className="settings-menu">
        <h3>Menu</h3>
        <ul>
          <li onClick={() => displayComponent("CronTimer")}>View Current Cron Timer</li>
          <li onClick={() => displayComponent("SetCronTime")}>Set Cron Time</li>
          <li onClick={() => displayComponent("EpsRangeDisplay")}>EPS Range Display</li>
          <li onClick={() => displayComponent("EpsForm")}>Set EPS Value</li>
          <li onClick={() => displayComponent("SetClustersNum")}>Set Number Of Clusters</li>
        </ul>
      </div>
      <div className="settings-components">
        {activeComponent === "CronTimer" && <CronTimer />}
        {activeComponent === "SetCronTime" && <SetCronTime />}
        {activeComponent === "EpsRangeDisplay" && <EpsRangeDisplay />}
        {activeComponent === "EpsForm" && <EpsForm />}
        {activeComponent === "SetClustersNum" && <SetClustersNum />}
      </div>
    </div>
  );
};

export default SettingsUI;

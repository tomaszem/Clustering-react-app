import React, { useState } from "react";
import EpsRangeDisplay from "./EpsRange";
import EpsForm from "./EpsForm";
import CronTimer from "./CronTimer";

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
          <li onClick={() => displayComponent("CronTimer")}>Cron Timer</li>
          <li onClick={() => displayComponent("EpsRangeDisplay")}>EPS Range Display</li>
          <li onClick={() => displayComponent("EpsForm")}>EPS Form</li>
        </ul>
      </div>
      <div className="settings-components">
        {activeComponent === "CronTimer" && <CronTimer />}
        {activeComponent === "EpsRangeDisplay" && <EpsRangeDisplay />}
        {activeComponent === "EpsForm" && <EpsForm />}
      </div>
    </div>
  );
};

export default SettingsUI;

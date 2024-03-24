import React from "react";
import EpsRangeDisplay from "./EpsRange";
import EpsForm from "./EpsForm";

const SettingsUI = () => {
  return (
    <div>
      <h2>Settings</h2>
      <EpsRangeDisplay />
      <EpsForm />
    </div>
  );
};

export default SettingsUI;

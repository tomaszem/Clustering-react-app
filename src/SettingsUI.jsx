import React from "react";
import EpsRangeDisplay from "./EpsRange";
import EpsForm from "./EpsForm";

const SettingsUI = () => {
  return (
    <div>
      <h1>Settings</h1>
      <EpsRangeDisplay />
      <EpsForm />
    </div>
  );
};

export default SettingsUI;

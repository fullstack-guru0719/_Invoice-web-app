import React from "react";

const StatsInfo = ({ value, title, number, color }) => (
  <div className="stats-info">
    <p>
      {title} <strong>{number ? number : "0"}</strong>
    </p>
    <div className="progress">
      <div
        className={"progress-bar bg-" + color}
        role="progressbar"
        style={{ width: value + "%" }}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  </div>
);
export default StatsInfo;

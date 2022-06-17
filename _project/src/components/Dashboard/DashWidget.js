import React from "react";

const DashWidget = ({ icon, number, title }) => (
  <div className="card dash-widget">
    <div className="card-body">
      <span className="dash-widget-icon">
        <i className={"fa " + icon} />
      </span>
      <div className="dash-widget-info">
        <h3>{number}</h3>
        <span>{title}</span>
      </div>
    </div>
  </div>
);

export default DashWidget;

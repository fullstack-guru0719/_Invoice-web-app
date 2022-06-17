import React, { useState, useMemo, useEffect } from "react";

const MessagePanel = ({ title, defaultValue, onSave, cycle, onSaveCycle }) => {
  const [sent, setSent] = useState({
    value: defaultValue,
    default: defaultValue,
    open: false,
  });
  useEffect(
    () =>
      setSent((prev) => ({
        ...prev,
        value: defaultValue,
        default: defaultValue,
      })),
    [defaultValue, setSent]
  );
  const cycleDropdown = useMemo(() => (cycle ? cycle : "Send Reminder"), [
    cycle,
  ]);

  return (
    <div className="col-md-12">
      <div className="col-12 col-md-6 col-lg-6 d-flex">
        <div className="card flex-fill">
          <div className="card-header d-flex align-items-center">
            <h5 className="card-title mb-0">{title}</h5>
            {onSaveCycle ? (
              <div className="btn-group ml-auto">
                <button
                  type="button"
                  className="btn btn-info dropdown-toggle text-capitalize"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {cycleDropdown}
                </button>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    onClick={() => onSaveCycle("daily")}
                  >
                    Daily
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => onSaveCycle("weekly")}
                  >
                    Weekly
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="card-body">
            {sent.open ? (
              <div>
                <textarea
                  className="w-100 min-height-150 form-control mb-3"
                  value={sent.value}
                  onChange={(e) => {
                    const { value } = e.target;
                    setSent((s) => ({ ...s, value: value }));
                  }}
                />
                <button
                  className="btn btn-success mr-3 pull-right"
                  onClick={() => {
                    setSent((s) => ({
                      ...s,
                      default: s.value,
                      open: false,
                    }));
                    onSave(sent.value);
                  }}
                >
                  Save
                </button>
                <button
                  className="btn pull-right"
                  onClick={() =>
                    setSent((s) => ({
                      ...s,
                      value: s.default,
                      open: false,
                    }))
                  }
                >
                  Discard
                </button>
              </div>
            ) : (
              <div>
                <p className="card-text">{sent.default}</p>
                <button
                  className="btn btn-primary pull-right"
                  onClick={() => setSent((s) => ({ ...s, open: true }))}
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePanel;

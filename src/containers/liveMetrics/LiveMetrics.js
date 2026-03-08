import React, { useState, useEffect } from "react";
import "./LiveMetrics.scss";
import { liveMetrics } from "../../portfolio";

export default function LiveMetrics() {
  const [metricValues, setMetricValues] = useState(
    liveMetrics.metrics.map(() => 0)
  );

  useEffect(() => {
    if (!liveMetrics.display) return;

    const timer = setTimeout(() => {
      setMetricValues(liveMetrics.metrics.map(m => m.value));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!liveMetrics.display) {
    return null;
  }

  return (
    <div className="live-metrics-main" id="metrics">
      <div className="metrics-header">
        <h1 className="metrics-heading">{liveMetrics.title}</h1>
      </div>
      <div className="metrics-container">
        {liveMetrics.metrics.map((metric, index) => {
          const circumference = 2 * Math.PI * 45;
          const strokeDashoffset = circumference - (metricValues[index] / 100) * circumference;
          
          return (
            <div key={index} className="metric-card">
              <div className="radial-progress">
                <svg viewBox="0 0 100 100">
                  <circle className="bg" cx="50" cy="50" r="45" />
                  <circle
                    className="progress"
                    cx="50" cy="50" r="45"
                    style={{ strokeDasharray: circumference, strokeDashoffset }}
                  />
                </svg>
                <div className="metric-value">
                  {metricValues[index]}{metric.unit}
                </div>
              </div>
              <div className="metric-label">{metric.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

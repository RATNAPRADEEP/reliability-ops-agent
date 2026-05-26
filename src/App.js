import React, { useEffect, useState } from "react";
import "./App.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";

function App() {

  const [metrics, setMetrics] = useState({
    totalPipelines: 128,
    activeIncidents: 12,
    runningWorkflows: 7,
    recoveryRate: 92,
  });

  useEffect(() => {

    const interval = setInterval(() => {

      setMetrics({
        totalPipelines:
          120 + Math.floor(Math.random() * 20),

        activeIncidents:
          1 + Math.floor(Math.random() * 15),

        runningWorkflows:
          4 + Math.floor(Math.random() * 10),

        recoveryRate:
          85 + Math.floor(Math.random() * 15),
      });

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  const recoveryData = [
    { time: "10:00", recovery: 82, incidents: 4 },
    { time: "11:00", recovery: 78, incidents: 5 },
    { time: "12:00", recovery: 72, incidents: 3 },
    { time: "13:00", recovery: 57, incidents: 2 },
    { time: "14:00", recovery: 61, incidents: 1 },
    { time: "15:00", recovery: 58, incidents: 0 },
  ];

  const executionData = [
    { stage: "Detection", workflows: 9 },
    { stage: "Analysis", workflows: 7 },
    { stage: "Remediation", workflows: 5 },
    { stage: "Approval", workflows: 3 },
  ];

  const aiIncidentScore =
    Math.floor(
      (
        (metrics.activeIncidents * 12) +
        ((100 - metrics.recoveryRate) * 2) +
        (metrics.runningWorkflows * 3)
      )
    ) % 100;

  return (

    <div className="app">

      {/* Header */}

      <div className="title">
        Reliability Ops Agent
      </div>

      <div className="subtitle">
        Agentic Operational Workflow System for CI/CD Reliability Engineering
      </div>

      {/* Navigation */}

      <div className="top-nav">
        <span>Overview</span>
        <span>Workflows</span>
        <span>Incidents</span>
        <span>Agents</span>
        <span>Observability</span>
      </div>

      {/* Metrics */}

      <div className="dashboard-grid">

        <div className="card">
          <h2>Total Pipelines</h2>
          <p>{metrics.totalPipelines}</p>
        </div>

        <div className="card">
          <h2>Active Reliability Incidents</h2>
          <p className="danger">
            {metrics.activeIncidents}
          </p>
        </div>

        <div className="card">
          <h2>Running Workflows</h2>
          <p className="success">
            {metrics.runningWorkflows}
          </p>
        </div>

        <div className="card">
          <h2>Recovery Success Rate</h2>
          <p className="metric-highlight">
            {metrics.recoveryRate}%
          </p>
        </div>

      </div>

      {/* Operational Summary */}

      <div className="analysis-box">

        <h2>Operational Incident Summary</h2>

        <div className="label">
          Incident Severity
        </div>

        <div className="value danger">
          High
        </div>

        <div className="label">
          Cluster Region
        </div>

        <div className="value">
          ap-south-1
        </div>

        <div className="label">
          Last Updated
        </div>

        <div className="value">
          Live operational telemetry update
        </div>

        <div className="label">
          Active Agents
        </div>

        <div className="value">
          6 operational agents online
        </div>

      </div>

      {/* Investigation Workflow */}

      <div className="analysis-box">

        <h2>Investigation Workflow</h2>

        <div className="label">
          Failure Event
        </div>

        <div className="value danger">
          payment-workflow • CrashLoopBackOff
        </div>

        <div className="label">
          Investigation Agent
        </div>

        <div className="value">
          Operational signals extracted from CI/CD telemetry.
        </div>

        <div className="label">
          Operational Root Cause
        </div>

        <div className="value">
          Dependency container failed startup health checks during orchestration.
        </div>

        <div className="label">
          Historical Correlation
        </div>

        <div className="value">
          Similar failure detected across previous deployment cycles.
        </div>

        <div className="label">
          Remediation Plan
        </div>

        <div className="value">
          Increase startup probe timeout and validate downstream dependencies.
        </div>

        <div className="label">
          Confidence Score
        </div>

        <div className="value metric-highlight">
          0.91 • High Reliability
        </div>

        <div className="label">
          Approval Status
        </div>

        <div className="value warning">
          Awaiting Reliability Engineer Approval
        </div>

      </div>

      {/* Workflow + Agent Console */}

      <div className="double-grid">

        <div className="analysis-box">

          <h2>Workflow Timeline</h2>

          <div className="workflow-step success">
            ✔ Failure Detection Completed
          </div>

          <div className="workflow-step success">
            ✔ Investigation Workflow Completed
          </div>

          <div className="workflow-step success">
            ✔ Root-Cause Classification Completed
          </div>

          <div className="workflow-step info">
            ↻ Historical Correlation Generated
          </div>

          <div className="workflow-step warning">
            ● Awaiting Human Approval
          </div>

        </div>

        <div className="analysis-box">

          <h2>Agent Status Console</h2>

          <div className="agent-status online">
            Investigation Agent • Active
          </div>

          <div className="agent-status running">
            Classification Agent • Running
          </div>

          <div className="agent-status waiting">
            Remediation Agent • Awaiting Approval
          </div>

          <div className="agent-status synced">
            Historical Memory Layer • Synced
          </div>

        </div>

      </div>

      {/* Reliability Metrics */}

      <div className="analysis-box">

        <h2>Reliability Metrics</h2>

        <div className="label">
          Mean Time To Resolution (MTTR)
        </div>

        <div className="value">
          18 mins
        </div>

        <div className="label">
          Recurring Incident Frequency
        </div>

        <div className="value">
          Medium • 14 repeated failures detected
        </div>

        <div className="label">
          Pipeline Health Score
        </div>

        <div className="value metric-highlight">
          87 / 100
        </div>

        <div className="label">
          Operational Risk Level
        </div>

        <div className="value warning">
          Medium
        </div>

      </div>

      {/* Analytics Charts */}

      <div className="analytics-grid">

        <div className="analytics-card">

          <h2>Incident Recovery Analytics</h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <LineChart data={recoveryData}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#355"
              />

              <XAxis
                dataKey="time"
                stroke="#9bbcff"
              />

              <YAxis stroke="#9bbcff" />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="recovery"
                stroke="#38f2d3"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="incidents"
                stroke="#ff6ba0"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        <div className="analytics-card">

          <h2>Workflow Execution Analytics</h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart data={executionData}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#355"
              />

              <XAxis
                dataKey="stage"
                stroke="#9bbcff"
              />

              <YAxis stroke="#9bbcff" />

              <Tooltip />

              <Bar
                dataKey="workflows"
                fill="#38f2d3"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* AI Scoring */}

      <div className="ai-score-card">

        <h2>AI Incident Scoring Engine</h2>

        <h1>{aiIncidentScore}/100</h1>

        <p>
          AI operational risk scoring based on
          anomaly frequency, workflow instability,
          retry failures, and infrastructure severity.
        </p>

      </div>

    </div>
  );
}

export default App;
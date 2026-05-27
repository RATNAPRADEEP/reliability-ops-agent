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

  const workflowCases = [

    {
      event:
        "payment-workflow • CrashLoopBackOff",

      investigation:
        "Operational signals extracted from CI/CD telemetry.",

      rootCause:
        "Dependency container failed startup health checks during orchestration.",

      correlation:
        "Similar failure detected across previous deployment cycles.",

      remediation:
        "Increase startup probe timeout and validate downstream dependencies.",

      confidence:
        "0.91 • High Reliability",

      approval:
        "Awaiting Reliability Engineer Approval",
    },

    {
      event:
        "kubeflow-pipeline • ImagePullBackOff",

      investigation:
        "Container registry authentication failure identified.",

      rootCause:
        "Image pull secret expired during workflow scheduling.",

      correlation:
        "Registry access instability detected in prior releases.",

      remediation:
        "Rotate registry credentials and refresh deployment secrets.",

      confidence:
        "0.88 • Medium Risk",

      approval:
        "Approval Required For Secret Rotation",
    },

    {
      event:
        "ml-training-agent • OOMKilled",

      investigation:
        "Memory telemetry spike detected across execution nodes.",

      rootCause:
        "Training containers exceeded configured memory limits.",

      correlation:
        "Large dataset execution patterns matched historical incidents.",

      remediation:
        "Increase memory allocation and optimize batch execution.",

      confidence:
        "0.95 • Stable Recovery",

      approval:
        "Auto Recovery Workflow Approved",
    },

    {
      event:
        "telemetry-stream • NodeFailure",

      investigation:
        "Distributed node heartbeat interruptions detected.",

      rootCause:
        "Cluster infrastructure instability affected telemetry ingestion.",

      correlation:
        "Recurring infrastructure degradation identified.",

      remediation:
        "Trigger node replacement workflow and rebalance workloads.",

      confidence:
        "0.84 • Infrastructure Risk",

      approval:
        "Escalated To Platform Engineering",
    },

  ];

  const reliabilityCases = [

    {
      mttr: "18 mins",
      recurring:
        "Medium • 14 repeated failures detected",
      score:
        "87 / 100",
      risk:
        "Medium",
    },

    {
      mttr: "9 mins",
      recurring:
        "Low • Recovery stabilized across workflows",
      score:
        "94 / 100",
      risk:
        "Low",
    },

    {
      mttr: "27 mins",
      recurring:
        "High • Multiple recurring orchestration failures",
      score:
        "72 / 100",
      risk:
        "High",
    },

    {
      mttr: "13 mins",
      recurring:
        "Medium • Pipeline retry spikes observed",
      score:
        "83 / 100",
      risk:
        "Medium",
    },

  ];

  const workflowTimelineSets = [

    [
      { text: "✔ Failure Detection Completed", className: "success" },
      { text: "◌ Investigation Workflow Running", className: "info" },
      { text: "◌ Root-Cause Classification Pending", className: "waiting" },
      { text: "◌ Historical Correlation Queued", className: "waiting" },
      { text: "◌ Awaiting Human Approval", className: "warning" },
    ],

    [
      { text: "✔ Failure Detection Completed", className: "success" },
      { text: "✔ Investigation Workflow Completed", className: "success" },
      { text: "◌ Root-Cause Classification Running", className: "info" },
      { text: "◌ Historical Correlation Queued", className: "waiting" },
      { text: "◌ Awaiting Human Approval", className: "warning" },
    ],

    [
      { text: "✔ Failure Detection Completed", className: "success" },
      { text: "✔ Investigation Workflow Completed", className: "success" },
      { text: "✔ Root-Cause Classification Completed", className: "success" },
      { text: "↻ Historical Correlation Generated", className: "info" },
      { text: "◌ Awaiting Human Approval", className: "warning" },
    ],

    [
      { text: "✔ Failure Detection Completed", className: "success" },
      { text: "✔ Investigation Workflow Completed", className: "success" },
      { text: "✔ Root-Cause Classification Completed", className: "success" },
      { text: "✔ Historical Correlation Generated", className: "success" },
      { text: "● Awaiting Human Approval", className: "warning" },
    ],

  ];

  const agentStatusSets = [

    [
      {
        text: "Investigation Agent • Active",
        className: "online",
      },

      {
        text: "Classification Agent • Waiting",
        className: "waiting",
      },

      {
        text: "Remediation Agent • Idle",
        className: "waiting",
      },

      {
        text: "Historical Memory Layer • Offline",
        className: "synced",
      },
    ],

    [
      {
        text: "Investigation Agent • Collecting Telemetry",
        className: "online",
      },

      {
        text: "Classification Agent • Running",
        className: "running",
      },

      {
        text: "Remediation Agent • Waiting Analysis",
        className: "waiting",
      },

      {
        text: "Historical Memory Layer • Syncing",
        className: "synced",
      },
    ],

    [
      {
        text: "Investigation Agent • Correlation Complete",
        className: "online",
      },

      {
        text: "Classification Agent • Root Cause Detected",
        className: "running",
      },

      {
        text: "Remediation Agent • Generating Recovery",
        className: "running",
      },

      {
        text: "Historical Memory Layer • Synced",
        className: "synced",
      },
    ],

    [
      {
        text: "Investigation Agent • Monitoring",
        className: "online",
      },

      {
        text: "Classification Agent • Completed",
        className: "online",
      },

      {
        text: "Remediation Agent • Awaiting Approval",
        className: "waiting",
      },

      {
        text: "Historical Memory Layer • Knowledge Updated",
        className: "synced",
      },
    ],

  ];

  const [workflowIndex, setWorkflowIndex] = useState(0);
  const [metricIndex, setMetricIndex] = useState(0);
  const [timelineIndex, setTimelineIndex] = useState(0);
  const [agentIndex, setAgentIndex] = useState(0);

  const [recoveryData, setRecoveryData] = useState([
    { time: "10:00", recovery: 82, incidents: 4 },
    { time: "11:00", recovery: 78, incidents: 5 },
    { time: "12:00", recovery: 72, incidents: 3 },
    { time: "13:00", recovery: 57, incidents: 2 },
    { time: "14:00", recovery: 61, incidents: 1 },
    { time: "15:00", recovery: 58, incidents: 0 },
  ]);

  const [executionData, setExecutionData] = useState([
    { stage: "Detection", workflows: 9 },
    { stage: "Analysis", workflows: 7 },
    { stage: "Remediation", workflows: 5 },
    { stage: "Approval", workflows: 3 },
  ]);

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

    }, 2000);

    return () => clearInterval(interval);

  }, [reliabilityCases.length, workflowTimelineSets.length]);

  useEffect(() => {

    const workflowInterval =
      setInterval(() => {

        setWorkflowIndex((prev) =>
          (prev + 1) %
          workflowCases.length
        );

      }, 2000);

    const metricInterval =
      setInterval(() => {

        setMetricIndex((prev) =>
          (prev + 1) %
          reliabilityCases.length
        );

      }, 2000);

    return () => {

      clearInterval(workflowInterval);
      clearInterval(metricInterval);

    };

  }, [agentStatusSets.length, workflowTimelineSets.length]);

  useEffect(() => {

    const syncInterval = setInterval(() => {

      setTimelineIndex((prev) =>
        (prev + 1) %
        workflowTimelineSets.length
      );

      setAgentIndex((prev) =>
        (prev + 1) %
        agentStatusSets.length
      );

    }, 2500);

    return () => clearInterval(syncInterval);

  }, []);

  useEffect(() => {

    const analyticsInterval = setInterval(() => {

      setRecoveryData([
        {
          time: "10:00",
          recovery: 70 + Math.floor(Math.random() * 20),
          incidents: Math.floor(Math.random() * 6),
        },

        {
          time: "11:00",
          recovery: 65 + Math.floor(Math.random() * 20),
          incidents: Math.floor(Math.random() * 6),
        },

        {
          time: "12:00",
          recovery: 60 + Math.floor(Math.random() * 20),
          incidents: Math.floor(Math.random() * 6),
        },

        {
          time: "13:00",
          recovery: 55 + Math.floor(Math.random() * 20),
          incidents: Math.floor(Math.random() * 6),
        },

        {
          time: "14:00",
          recovery: 60 + Math.floor(Math.random() * 20),
          incidents: Math.floor(Math.random() * 6),
        },

        {
          time: "15:00",
          recovery: 65 + Math.floor(Math.random() * 20),
          incidents: Math.floor(Math.random() * 6),
        },
      ]);

      setExecutionData([
        {
          stage: "Detection",
          workflows: 5 + Math.floor(Math.random() * 6),
        },

        {
          stage: "Analysis",
          workflows: 4 + Math.floor(Math.random() * 5),
        },

        {
          stage: "Remediation",
          workflows: 3 + Math.floor(Math.random() * 5),
        },

        {
          stage: "Approval",
          workflows: 1 + Math.floor(Math.random() * 5),
        },
      ]);

    }, 2000);

    return () => clearInterval(analyticsInterval);

  }, []);

  const currentWorkflow =
    workflowCases[workflowIndex];

  const currentMetrics =
    reliabilityCases[metricIndex];

  const aiScore =
    Math.floor(
      (
        metrics.recoveryRate +
        (100 - metrics.activeIncidents * 3)
      ) / 2
    );

  return (

    <div className="app">

      <div className="title">
        Reliability Ops Agent
      </div>

      <div className="subtitle">
        Agentic Operational Workflow System for CI/CD Reliability Engineering
      </div>

      <div className="top-nav">
        <span>Overview</span>
        <span>Workflows</span>
        <span>Incidents</span>
        <span>Agents</span>
        <span>Observability</span>
      </div>

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

      <div className="investigation-card">

        <h1>Investigation Workflow</h1>

        <div className="incident-block">
          <span>FAILURE EVENT</span>
          <h2>{currentWorkflow.event}</h2>
        </div>

        <div className="incident-block">
          <span>INVESTIGATION AGENT</span>
          <p>{currentWorkflow.investigation}</p>
        </div>

        <div className="incident-block">
          <span>OPERATIONAL ROOT CAUSE</span>
          <p>{currentWorkflow.rootCause}</p>
        </div>

        <div className="incident-block">
          <span>HISTORICAL CORRELATION</span>
          <p>{currentWorkflow.correlation}</p>
        </div>

        <div className="incident-block">
          <span>REMEDIATION PLAN</span>
          <p>{currentWorkflow.remediation}</p>
        </div>

        <div className="incident-block">
          <span>CONFIDENCE SCORE</span>
          <p className="success">
            {currentWorkflow.confidence}
          </p>
        </div>

        <div className="incident-block">
          <span>APPROVAL STATUS</span>
          <p className="warning-text">
            {currentWorkflow.approval}
          </p>
        </div>

      </div>

      <div className="workflow-grid">

        <div className="workflow-card">

          <h1>Workflow Timeline</h1>

          {
            workflowTimelineSets[timelineIndex].map(
              (item, index) => (
                <div
                  key={index}
                  className={`timeline-item ${item.className}`}
                >
                  {item.text}
                </div>
              )
            )
          }

        </div>

        <div className="workflow-card">

          <h1>Agent Status Console</h1>

          {
            agentStatusSets[agentIndex].map(
              (agent, index) => (
                <div
                  key={index}
                  className={`agent-item ${agent.className}`}
                >
                  {agent.text}
                </div>
              )
            )
          }

        </div>

      </div>

      <div className="metrics-card">

        <h1>Reliability Metrics</h1>

        <div className="metric-row">
          <span>MEAN TIME TO RESOLUTION (MTTR)</span>
          <h2>{currentMetrics.mttr}</h2>
        </div>

        <div className="metric-row">
          <span>RECURRING INCIDENT FREQUENCY</span>
          <h2>{currentMetrics.recurring}</h2>
        </div>

        <div className="metric-row">
          <span>PIPELINE HEALTH SCORE</span>
          <h2>{currentMetrics.score}</h2>
        </div>

        <div className="metric-row">
          <span>OPERATIONAL RISK LEVEL</span>
          <h2 className="warning-text">
            {currentMetrics.risk}
          </h2>
        </div>

      </div>

      <div className="charts-grid">

        <div className="chart-card">

          <h1>Incident Recovery Analytics</h1>

          <div className="chart-wrapper">

            <ResponsiveContainer width="100%" height="100%">

              <LineChart data={recoveryData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="time" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="recovery"
                  stroke="#7df9ff"
                  strokeWidth={4}
                />

                <Line
                  type="monotone"
                  dataKey="incidents"
                  stroke="#ff8fab"
                  strokeWidth={3}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

        <div className="chart-card">

          <h1>Workflow Execution Analytics</h1>

          <div className="chart-wrapper">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={executionData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="stage" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="workflows"
                  fill="#7df9ff"
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>
      <div className="ai-score-card">

        	<h1>AI Reliability Engine Score</h1>

        	<div className="ai-score-value">
          		{aiScore}
        	</div>

        	<p>
          		Dynamic operational intelligence score generated from
          		live workflow telemetry, recovery efficiency,
          		incident severity patterns, and orchestration stability.
        	</p>

     </div>

    </div>

  );
}

export default App;
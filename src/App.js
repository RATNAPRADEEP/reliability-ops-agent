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

  const [incident, setIncident] = useState({
    severity: "High",
    region: "ap-south-1",
    message: "Live operational telemetry update",
    agents: 6,
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

  const [workflowIndex, setWorkflowIndex] =
    useState(0);

  const [metricIndex, setMetricIndex] =
    useState(0);

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

      const incidents = [

        {
          severity: "High",
          region: "ap-south-1",
          message: "Kubernetes pod crash detected",
          agents: 6,
        },

        {
          severity: "Medium",
          region: "us-east-1",
          message: "CI pipeline execution delay",
          agents: 4,
        },

        {
          severity: "Critical",
          region: "eu-central-1",
          message: "Cluster node memory spike",
          agents: 8,
        },

        {
          severity: "Low",
          region: "ap-south-1",
          message: "Workflow retry initiated",
          agents: 3,
        },

      ];

      const randomIncident =
        incidents[
          Math.floor(
            Math.random() * incidents.length
          )
        ];

      setIncident(randomIncident);

    }, 2000);

    return () => clearInterval(interval);

  }, []);

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

  }, [workflowCases.length, reliabilityCases.length]);

  const currentWorkflow =
    workflowCases[workflowIndex];

  const currentMetrics =
    reliabilityCases[metricIndex];

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

      <div className="analysis-box">

        <h2>Operational Incident Summary</h2>

        <div className="label">
          Incident Severity
        </div>

        <div className="value danger">
          {incident.severity}
        </div>

        <div className="label">
          Cluster Region
        </div>

        <div className="value">
          {incident.region}
        </div>

        <div className="label">
          Last Updated
        </div>

        <div className="value">
          {incident.message}
        </div>

        <div className="label">
          Active Agents
        </div>

        <div className="value">
          {incident.agents}
          {" "}
          operational agents online
        </div>

      </div>

      <div className="analysis-box dynamic-box">

        <h2>Investigation Workflow</h2>

        <div className="label">
          Failure Event
        </div>

        <div className="value danger dynamic-text">
          {currentWorkflow.event}
        </div>

        <div className="label">
          Investigation Agent
        </div>

        <div className="value dynamic-text">
          {currentWorkflow.investigation}
        </div>

        <div className="label">
          Operational Root Cause
        </div>

        <div className="value dynamic-text">
          {currentWorkflow.rootCause}
        </div>

        <div className="label">
          Historical Correlation
        </div>

        <div className="value dynamic-text">
          {currentWorkflow.correlation}
        </div>

        <div className="label">
          Remediation Plan
        </div>

        <div className="value dynamic-text">
          {currentWorkflow.remediation}
        </div>

        <div className="label">
          Confidence Score
        </div>

        <div className="value metric-highlight dynamic-text">
          {currentWorkflow.confidence}
        </div>

        <div className="label">
          Approval Status
        </div>

        <div className="value warning dynamic-text">
          {currentWorkflow.approval}
        </div>

      </div>

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

      <div className="analysis-box dynamic-box">

        <h2>Reliability Metrics</h2>

        <div className="label">
          Mean Time To Resolution (MTTR)
        </div>

        <div className="value dynamic-text">
          {currentMetrics.mttr}
        </div>

        <div className="label">
          Recurring Incident Frequency
        </div>

        <div className="value dynamic-text">
          {currentMetrics.recurring}
        </div>

        <div className="label">
          Pipeline Health Score
        </div>

        <div className="value metric-highlight dynamic-text">
          {currentMetrics.score}
        </div>

        <div className="label">
          Operational Risk Level
        </div>

        <div className="value warning dynamic-text">
          {currentMetrics.risk}
        </div>

      </div>

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
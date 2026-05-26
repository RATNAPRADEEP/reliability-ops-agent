import React, { useEffect, useState } from "react";
import "./App.css";

import { motion } from "framer-motion";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

function App() {

  const [dashboardData, setDashboardData] = useState({
    totalPipelines: 128,
    activeIncidents: 12,
    runningWorkflows: 7,
    recoveryRate: 92,
    incidentSeverity: "High",
    clusterRegion: "us-east-1",
    lastUpdated: "12 seconds ago",
    activeAgents: 4,

    aiRiskScore: 87,

    failureEvent:
      "payment-workflow • CrashLoopBackOff",

    investigationAgent:
      "Operational signals extracted from CI/CD logs",

    rootCause:
      "Dependency container failed startup health checks during orchestration.",

    historicalCorrelation:
      "Similar failure detected 14 times in previous deployment cycles.",

    remediationPlan:
      "Increase startup probe timeout and validate downstream service dependencies.",

    confidenceScore:
      "0.91 • High Reliability",

    approvalStatus:
      "Awaiting Reliability Engineer Approval",

    workflowTimeline: [
      "Failure Detection Completed",
      "Investigation Workflow Completed",
      "Root-Cause Classification Completed",
      "Historical Context Retrieved",
      "Awaiting Human Approval",
    ],

    systemHealth: {
      kubernetes:
        "Healthy • API latency normal",

      orchestration:
        "Active • 18 workflows managed",

      observability:
        "Synced • Reliability metrics operational",

      aiEngine:
        "Online • Monitoring pipeline anomalies",
    },

    metrics: {
      mttr: "18 mins",

      recurringFailures:
        "Medium • 14 repeated failures detected",

      pipelineScore: "87 / 100",

      riskLevel: "Medium",
    },
  });

  useEffect(() => {

    const interval = setInterval(() => {

      const incidentCount =
        Math.floor(Math.random() * 20) + 1;

      const workflows =
        Math.floor(Math.random() * 15) + 1;

      const recovery =
        Math.floor(Math.random() * 10) + 90;

      const aiScore =
        Math.floor(Math.random() * 20) + 80;

      const severities = [
        "Low",
        "Medium",
        "High",
        "Critical",
      ];

      const regions = [
        "us-east-1",
        "us-west-2",
        "eu-central-1",
        "ap-south-1",
      ];

      const failures = [
        "payment-workflow • CrashLoopBackOff",
        "auth-service • ImagePullBackOff",
        "checkout-api • OOMKilled",
        "inventory-worker • NodeFailure",
        "billing-engine • ProbeTimeout",
      ];

      const severity =
        severities[
          Math.floor(
            Math.random() * severities.length
          )
        ];

      setDashboardData({

        totalPipelines:
          120 + Math.floor(Math.random() * 20),

        activeIncidents: incidentCount,

        runningWorkflows: workflows,

        recoveryRate: recovery,

        incidentSeverity: severity,

        clusterRegion:
          regions[
            Math.floor(
              Math.random() * regions.length
            )
          ],

        lastUpdated:
          "Live operational update",

        activeAgents:
          Math.floor(Math.random() * 5) + 3,

        aiRiskScore: aiScore,

        failureEvent:
          failures[
            Math.floor(
              Math.random() * failures.length
            )
          ],

        investigationAgent:
          "Operational telemetry dynamically analyzed from CI/CD systems.",

        rootCause:
          "AI reliability engine detected orchestration instability in Kubernetes workflows.",

        historicalCorrelation:
          "Historical deployment anomalies correlated with present operational patterns.",

        remediationPlan:
          "Automated remediation workflow generated infrastructure recovery recommendations.",

        confidenceScore: `${(
          Math.random() * (0.99 - 0.80) +
          0.80
        ).toFixed(2)} • AI Reliability Confidence`,

        approvalStatus:
          Math.random() > 0.5
            ? "Awaiting Reliability Engineer Approval"
            : "Auto-remediation approved",

        workflowTimeline: [
          "Failure Detection Completed",
          "CI/CD Telemetry Aggregated",
          "AI Root-Cause Analysis Running",
          "Historical Failure Correlation Generated",
          "Operational Mitigation Workflow Triggered",
        ],

        systemHealth: {

          kubernetes:
            "Healthy • API latency stable",

          orchestration:
            `Active • ${workflows} workflows managed`,

          observability:
            "Synced • Monitoring agents operational",

          aiEngine:
            "Online • AI anomaly detection active",
        },

        metrics: {

          mttr:
            `${Math.floor(Math.random() * 30) + 10} mins`,

          recurringFailures:
            `${severity} • ${incidentCount} anomaly patterns detected`,

          pipelineScore:
            `${aiScore} / 100`,

          riskLevel: severity,
        },
      });

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  const reliabilityTrendData = [
    { time: "10:00", incidents: 4, recovery: 82 },
    { time: "11:00", incidents: 7, recovery: 85 },
    { time: "12:00", incidents: 5, recovery: 88 },
    { time: "13:00", incidents: 9, recovery: 80 },
    { time: "14:00", incidents: 6, recovery: 91 },
    { time: "15:00", incidents: 3, recovery: 95 },
  ];

  const workflowData = [
    { name: "Detection", workflows: 14 },
    { name: "Analysis", workflows: 10 },
    { name: "Remediation", workflows: 7 },
    { name: "Approval", workflows: 5 },
  ];

  return (

    <div className="container">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Reliability Ops Agent
      </motion.h1>

      <p>
        Agentic Operational Workflow System for
        CI/CD Reliability Engineering
      </p>

      <div className="cards">

        <motion.div
          whileHover={{ scale: 1.04 }}
          className="card"
        >
          <h3>Total Pipelines</h3>
          <h1>{dashboardData.totalPipelines}</h1>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.04 }}
          className="card"
        >
          <h3>Active Reliability Incidents</h3>
          <h1>{dashboardData.activeIncidents}</h1>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.04 }}
          className="card"
        >
          <h3>Running Workflows</h3>
          <h1>{dashboardData.runningWorkflows}</h1>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.04 }}
          className="card"
        >
          <h3>Recovery Success Rate</h3>
          <h1>{dashboardData.recoveryRate}%</h1>
        </motion.div>

      </div>

      <motion.div
        className="section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >

        <h2>AI Incident Scoring Engine</h2>

        <h1>{dashboardData.aiRiskScore}/100</h1>

        <p>
          AI operational risk scoring based on
          anomaly frequency, workflow instability,
          retry failures, and infrastructure severity.
        </p>

      </motion.div>

      <div className="section">

        <h2>Operational Incident Summary</h2>

        <p>
          <strong>Incident Severity:</strong>
          {" "}
          {dashboardData.incidentSeverity}
        </p>

        <p>
          <strong>Cluster Region:</strong>
          {" "}
          {dashboardData.clusterRegion}
        </p>

        <p>
          <strong>Last Updated:</strong>
          {" "}
          {dashboardData.lastUpdated}
        </p>

        <p>
          <strong>Active Agents:</strong>
          {" "}
          {dashboardData.activeAgents}
        </p>

      </div>

      <div className="section">

        <h2>Investigation Workflow</h2>

        <p>
          <strong>Failure Event:</strong>
          {" "}
          {dashboardData.failureEvent}
        </p>

        <p>
          <strong>Investigation Agent:</strong>
          {" "}
          {dashboardData.investigationAgent}
        </p>

        <p>
          <strong>Operational Root Cause:</strong>
          {" "}
          {dashboardData.rootCause}
        </p>

        <p>
          <strong>Historical Correlation:</strong>
          {" "}
          {dashboardData.historicalCorrelation}
        </p>

        <p>
          <strong>Remediation Plan:</strong>
          {" "}
          {dashboardData.remediationPlan}
        </p>

      </div>

      <motion.div
        className="section"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
      >

        <h2>Workflow Timeline</h2>

        <ul>
          {dashboardData.workflowTimeline.map(
            (step, index) => (
              <li key={index}>{step}</li>
            )
          )}
        </ul>

      </motion.div>

      <div className="section">

        <h2>Reliability Metrics</h2>

        <p>
          <strong>MTTR:</strong>
          {" "}
          {dashboardData.metrics.mttr}
        </p>

        <p>
          <strong>Recurring Failures:</strong>
          {" "}
          {
            dashboardData.metrics
              .recurringFailures
          }
        </p>

        <p>
          <strong>Pipeline Health:</strong>
          {" "}
          {
            dashboardData.metrics
              .pipelineScore
          }
        </p>

      </div>

      <div className="section">

        <h2>Incident Recovery Analytics</h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <LineChart
            data={reliabilityTrendData}
          >

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="incidents"
              stroke="#ff4d6d"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="recovery"
              stroke="#00ffae"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      <div className="section">

        <h2>Workflow Execution Analytics</h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <BarChart data={workflowData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="workflows"
              fill="#4f7cff"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default App;
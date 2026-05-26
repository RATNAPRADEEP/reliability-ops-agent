import './App.css';
import dashboardData from "./mock/dashboardData.json";

function App() {

  const {
    metrics,
    incidentSummary,
    investigationWorkflow,
    workflowTimeline,
    agentStatus,
    systemHealth,
    reliabilityMetrics
  } = dashboardData;

  return (
    <div className="app">

      {/* Header */}

      <div className="title">
        Reliability Ops Agent
      </div>

      <div className="subtitle">
        Agentic Operational Workflow System for CI/CD Reliability Engineering
      </div>

      {/* Top Navigation */}

      <div className="top-nav">
        <span>Overview</span>
        <span>Workflows</span>
        <span>Incidents</span>
        <span>Agents</span>
        <span>Observability</span>
      </div>

      {/* Dashboard Metrics */}

      <div className="dashboard-grid">

        <div className="card">
          <h2>Total Pipelines</h2>
          <p>{metrics.totalPipelines}</p>
        </div>

        <div className="card">
          <h2>Active Reliability Incidents</h2>
          <p className="danger">{metrics.activeIncidents}</p>
        </div>

        <div className="card">
          <h2>Running Workflows</h2>
          <p className="success">{metrics.runningWorkflows}</p>
        </div>

        <div className="card">
          <h2>Recovery Success Rate</h2>
          <p className="metric-highlight">
            {metrics.recoveryRate}%
          </p>
        </div>

      </div>

      {/* Incident Summary */}

      <div className="analysis-box">

        <h2>Operational Incident Summary</h2>

        <div className="label">Incident Severity</div>
        <div className="value danger">
          {incidentSummary.severity}
        </div>

        <div className="label">Cluster Region</div>
        <div className="value">
          {incidentSummary.region}
        </div>

        <div className="label">Last Updated</div>
        <div className="value">
          {incidentSummary.lastUpdated}
        </div>

        <div className="label">Active Agents</div>
        <div className="value">
          {incidentSummary.activeAgents}
        </div>

      </div>

      {/* Investigation Workflow */}

      <div className="analysis-box">

        <h2>Investigation Workflow</h2>

        <div className="label">Failure Event</div>
        <div className="value danger">
          {investigationWorkflow.failureEvent}
        </div>

        <div className="label">Investigation Agent</div>
        <div className="value">
          {investigationWorkflow.investigationAgent}
        </div>

        <div className="label">Operational Root Cause</div>
        <div className="value">
          {investigationWorkflow.rootCause}
        </div>

        <div className="label">Historical Correlation</div>
        <div className="value">
          {investigationWorkflow.historicalCorrelation}
        </div>

        <div className="label">Remediation Plan</div>
        <div className="value">
          {investigationWorkflow.remediationPlan}
        </div>

        <div className="label">Confidence Score</div>
        <div className="value metric-highlight">
          {investigationWorkflow.confidenceScore}
        </div>

        <div className="label">Approval Status</div>
        <div className="value warning">
          {investigationWorkflow.approvalStatus}
        </div>

      </div>

      {/* Workflow Timeline */}

      <div className="analysis-box">

        <h2>Workflow Timeline</h2>

        {
          workflowTimeline.map((step, index) => (

            <div className="workflow-step" key={index}>

              <div
                className={
                  step.status === "warning"
                    ? "status-dot warning"
                    : "status-dot"
                }
              ></div>

              <div>{step.message}</div>

            </div>

          ))
        }

      </div>

      {/* Agent Status Console */}

      <div className="analysis-box">

        <h2>Agent Status Console</h2>

        {
          agentStatus.map((agent, index) => (

            <div key={index}>

              <div className="label">
                {agent.name}
              </div>

              <div className={`value ${agent.type}`}>
                {agent.status} • {agent.message}
              </div>

            </div>

          ))
        }

      </div>

      {/* System Health */}

      <div className="analysis-box">

        <h2>System Health Overview</h2>

        {
          systemHealth.map((item, index) => (

            <div key={index}>

              <div className="label">
                {item.component}
              </div>

              <div className={`value ${item.type}`}>
                {item.message}
              </div>

            </div>

          ))
        }

      </div>

      {/* Reliability Metrics */}

      <div className="analysis-box">

        <h2>Reliability Metrics</h2>

        {
          reliabilityMetrics.map((metric, index) => (

            <div key={index}>

              <div className="label">
                {metric.label}
              </div>

              <div className={`value ${metric.type}`}>
                {metric.value}
              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default App;
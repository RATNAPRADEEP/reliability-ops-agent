import './App.css';

function App() {
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

      {/* Operational Overview */}

      <div className="dashboard-grid">

        <div className="card">
          <h2>Total Pipelines</h2>
          <p>128</p>
        </div>

        <div className="card">
          <h2>Active Reliability Incidents</h2>
          <p className="danger">12</p>
        </div>

        <div className="card">
          <h2>Running Workflows</h2>
          <p className="success">7</p>
        </div>

        <div className="card">
          <h2>Recovery Success Rate</h2>
          <p className="metric-highlight">92%</p>
        </div>

      </div>

      {/* Incident Summary */}

      <div className="analysis-box">

        <h2>Operational Incident Summary</h2>

        <div className="label">Incident Severity</div>
        <div className="value danger">
          High
        </div>

        <div className="label">Cluster Region</div>
        <div className="value">
          us-east-1
        </div>

        <div className="label">Last Updated</div>
        <div className="value">
          12 seconds ago
        </div>

        <div className="label">Active Agents</div>
        <div className="value">
          4 operational agents online
        </div>

      </div>

      {/* Investigation Workflow */}

      <div className="analysis-box">

        <h2>Investigation Workflow</h2>

        <div className="label">Failure Event</div>
        <div className="value danger">
          payment-workflow • CrashLoopBackOff
        </div>

        <div className="label">Investigation Agent</div>
        <div className="value">
          Operational signals extracted from CI/CD logs
        </div>

        <div className="label">Operational Root Cause</div>
        <div className="value">
          Dependency container failed startup health checks during orchestration.
        </div>

        <div className="label">Historical Correlation</div>
        <div className="value">
          Similar failure detected 14 times in previous deployment cycles.
        </div>

        <div className="label">Remediation Plan</div>
        <div className="value">
          Increase startup probe timeout and validate downstream service dependencies.
        </div>

        <div className="label">Confidence Score</div>
        <div className="value metric-highlight">
          0.91 • High Reliability
        </div>

        <div className="label">Approval Status</div>
        <div className="value warning">
          Awaiting Reliability Engineer Approval
        </div>

      </div>

      {/* Workflow Timeline */}

      <div className="analysis-box">

        <h2>Workflow Timeline</h2>

        <div className="workflow-step">
          <div className="status-dot"></div>
          <div>Failure Detection Completed</div>
        </div>

        <div className="workflow-step">
          <div className="status-dot"></div>
          <div>Investigation Workflow Completed</div>
        </div>

        <div className="workflow-step">
          <div className="status-dot"></div>
          <div>Root-Cause Classification Completed</div>
        </div>

        <div className="workflow-step">
          <div className="status-dot"></div>
          <div>Historical Context Retrieved</div>
        </div>

        <div className="workflow-step">
          <div className="status-dot warning"></div>
          <div>Awaiting Human Approval</div>
        </div>

      </div>

      {/* Agent Status */}

      <div className="analysis-box">

        <h2>Agent Status Console</h2>

        <div className="label">Investigation Agent</div>
        <div className="value success">
          Active • Processing operational logs
        </div>

        <div className="label">Classification Agent</div>
        <div className="value success">
          Running • Root-cause workflow completed
        </div>

        <div className="label">Remediation Agent</div>
        <div className="value warning">
          Waiting • Human approval required
        </div>

        <div className="label">Historical Memory Layer</div>
        <div className="value success">
          Synced • 248 incident patterns indexed
        </div>

      </div>

      {/* System Health */}

      <div className="analysis-box">

        <h2>System Health Overview</h2>

        <div className="label">Kubernetes Cluster</div>
        <div className="value success">
          Healthy • API latency normal
        </div>

        <div className="label">Workflow Orchestration Layer</div>
        <div className="value success">
          Active • 18 workflows managed
        </div>

        <div className="label">Observability Engine</div>
        <div className="value success">
          Synced • Reliability metrics operational
        </div>

        <div className="label">AI Reliability Operations Engine</div>
        <div className="value success">
          Online • Monitoring pipeline anomalies
        </div>

      </div>

      {/* Reliability Metrics */}

      <div className="analysis-box">

        <h2>Reliability Metrics</h2>

        <div className="label">Mean Time To Resolution (MTTR)</div>
        <div className="value">
          18 mins
        </div>

        <div className="label">Recurring Incident Frequency</div>
        <div className="value">
          Medium • 14 repeated failures detected
        </div>

        <div className="label">Pipeline Health Score</div>
        <div className="value metric-highlight">
          87 / 100
        </div>

        <div className="label">Operational Risk Level</div>
        <div className="value warning">
          Medium
        </div>

      </div>

    </div>
  );
}

export default App;
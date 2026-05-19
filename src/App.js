import './App.css';

function App() {
  return (
    <div className="app">

      <div className="title">
        AI-Powered CI/CD Failure Intelligence Dashboard
      </div>

      <div className="subtitle">
        Intelligent Kubernetes & Kubeflow Pipeline Observability Platform
      </div>

      <div className="dashboard-grid">

        <div className="card">
          <h2>Total Pipelines</h2>
          <p>128</p>
        </div>

        <div className="card">
          <h2>Failed Jobs</h2>
          <p>12</p>
        </div>

        <div className="card">
          <h2>Running Workflows</h2>
          <p>7</p>
        </div>

        <div className="card">
          <h2>Recovery Success Rate</h2>
          <p>92%</p>
        </div>

      </div>

      <div className="analysis-box">

        <h2>AI Failure Classification</h2>

        <div className="label">Failure Type</div>
        <div className="value">CrashLoopBackOff</div>

        <div className="label">Root Cause</div>
        <div className="value">
          Dependency container failed health checks during startup.
        </div>

        <div className="label">Recommended Remediation</div>
        <div className="value">
          Increase startup probe timeout and validate service dependencies.
        </div>

      </div>

      <div className="analysis-box" style={{ marginTop: "20px" }}>

        <h2>Recent Pipeline Events</h2>

        <div className="analysis-box" style={{ marginTop: "20px" }}>

  	<h2>System Health Overview</h2>

  	<div className="label">Kubernetes Cluster</div>
  	<div className="value">
    	Healthy • API latency normal
  	</div>

  	<div className="label">Argo Workflow Controller</div>
  	<div className="value">
    	  Active • 18 workflows managed
  	</div>

  	<div className="label">Persistence Agent</div>
  	<div className="value">
    	  Synced • No reconciliation lag detected
  	</div>

  	<div className="label">AI Failure Detection Engine</div>
  	<div className="value">
    	  Online • Monitoring pipeline anomalies
  	</div>

	</div>

        <div className="label">build-service-v2</div>
        <div className="value">
          Succeeded • 2 mins ago
        </div>

        <div className="label">payment-workflow</div>
        <div className="value">
          CrashLoopBackOff • 5 mins ago
        </div>

        <div className="label">ml-training-pipeline</div>
        <div className="value">
          Running • Active
        </div>

      </div>

    </div>
  );
}

export default App;
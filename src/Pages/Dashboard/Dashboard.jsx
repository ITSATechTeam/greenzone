import {
  FileText,
  CheckCircle,
  XCircle,
  MinusCircle,
  MoreVertical,
} from "lucide-react";
import "./Dashboard.css";

export default function DashboardContent() {
  const overviewData = [
    { icon: FileText, count: "04", label: "Total Domains", color: "#888" },
    { icon: CheckCircle, count: "02", label: "Active", color: "#4CAF50" },
    { icon: XCircle, count: "01", label: "Declined", color: "#F44336" },
    { icon: MinusCircle, count: "01", label: "Deactivated", color: "#888" },
  ];

  const activeDomains = ["greenzone.ng", "yourbiz.com.ng", "greenzone.ng"];

  const domainLifecycle = [
    { status: "Active", percentage: 20, color: "rgba(35, 139, 69, 1)" },
    { status: "Expiring Soon", percentage: 50, color: "rgba(35, 139, 69, 1)" },
    { status: "Expired", percentage: 30, color: "rgba(35, 139, 69, 1)" },
    { status: "Deactivated", percentage: 10, color: "rgba(35, 139, 69, 1)" },
  ];

  const myDomains = [
    {
      name: "greenzone.ng",
      expiry: "Dec 7, 2019 23:26",
      autoRenew: "On",
      priority: "Expired",
    },
    {
      name: "bizhub.com.ng",
      expiry: "Dec 30, 2019 07:52",
      autoRenew: "Off",
      priority: "Active",
    },
    {
      name: "soft.ng",
      expiry: "Dec 4, 2019 21:42",
      autoRenew: "Off",
      priority: "Expired",
    },
    {
      name: "eduplus.org.ng",
      expiry: "Dec 30, 2019 05:18",
      autoRenew: "On",
      priority: "Pending",
    },
    {
      name: "greenzone.ng",
      expiry: "Feb 2, 2019 19:28",
      autoRenew: "Off",
      priority: "Active",
    },
    {
      name: "Nebula.ng",
      expiry: "Mar 20, 2019 23:14",
      autoRenew: "On",
      priority: "Pending",
    },
  ];

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "Expired":
        return "priority-expired";
      case "Active":
        return "priority-active";
      case "Pending":
        return "priority-pending";
      default:
        return "";
    }
  };

  return (
    <main className="dashboard-content">
      <div className="dashboard-header">
        <h1 className="welcome-message">Welcome, Jude Uche!</h1>
        <button className="register-button">Register New Domain</button>
      </div>

      <section className="overview-section">
        <h2 className="section-title">Overview</h2>
        <div className="overview-cards">
          {overviewData.map((item, index) => (
            <div className="overview-card" key={index}>
              <div
                className="card-icon-wrapper"
                style={{ backgroundColor: item.color + "1A" }}
              >
                {" "}
                {/* 1A for 10% opacity */}
                <item.icon
                  className="card-icon"
                  style={{ color: item.color }}
                />
              </div>
              <div className="card-info">
                <div className="card-count">{item.count}</div>
                <div className="card-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="domains-status-section">
        <div className="card active-domains-card">
          <h3 className="card-title">Active Domains</h3>
          <ul className="domain-list">
            {activeDomains.map((domain, index) => (
              <li key={index} className="domain-item">
                <span className="dot green-dot"></span>
                {domain}
              </li>
            ))}
          </ul>
          <button className="view-all-button">View all</button>
        </div>

        <div className="card domain-lifecycle-card">
          <h3 className="card-title">Domain Lifecycle Status</h3>
          <ul className="lifecycle-list">
            {domainLifecycle.map((item, index) => (
              <li key={index} className="lifecycle-item">
                <div className="lifecycle-status">
                  <span
                    className="dot"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  {item.status}:
                </div>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${item.percentage}%`,
                      backgroundColor: item.color,
                    }}
                  ></div>
                </div>
                <span className="percentage">{item.percentage}%</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="my-domains-section">
        <h2 className="section-title">My Domains</h2>
        <div className="card my-domains-table-card">
          <table className="domains-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Domain Name</th>
                <th>Expiry Date</th>
                <th>Auto-Renew</th>
                <th>Priority</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myDomains.map((domain, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{domain.name}</td>
                  <td>{domain.expiry}</td>
                  <td>{domain.autoRenew}</td>
                  <td>
                    <span
                      className={`priority-tag ${getPriorityClass(
                        domain.priority
                      )}`}
                    >
                      {domain.priority}
                    </span>
                  </td>
                  <td>
                    <MoreVertical className="action-icon" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

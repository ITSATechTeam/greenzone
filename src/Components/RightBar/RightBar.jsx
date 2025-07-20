import { AlertTriangle } from "lucide-react";
import "./Rightbar.css";

export default function Rightbar() {
  const domainRenewalAlerts = [
    { domain: "greenzone.ng", days: 3 },
    { domain: "yourbiz.com.ng", days: 3 },
    { domain: "youzone.ng", days: 3 },
  ];

  const recentActivityLogs = [
    "DNS updated for yourbiz.ng",
    "Invoice #2025 paid",
    "Domain transfer requested",
  ];

  const supportTickets = [
    { issue: "DNS Issue", date: "July 30, 2024", status: "Awaiting response" },
    { issue: "DNS Issue", date: "July 30, 2024", status: "Completed" },
    { issue: "DNS Issue", date: "July 30, 2024", status: "declined" },
  ];

  const getSupportStatusClass = (status) => {
    switch (status) {
      case "Awaiting response":
        return "status-awaiting";
      case "Completed":
        return "status-completed";
      case "declined":
        return "status-declined";
      default:
        return "";
    }
  };

  return (
    <aside className="rightbar">
      <section className="alerts-activity-section">
        <div className="card domain-alerts-card">
          <h3 className="card-title">
            <AlertTriangle className="alert-icon" /> Domain Renewal Alerts
          </h3>
          <ul className="alert-list">
            {domainRenewalAlerts.map((alert, index) => (
              <li key={index} className="alert-item">
                <span className="dot green-dot"></span>
                <span className="alert-text">
                  {alert.domain}: Renew in {alert.days} days
                </span>
              </li>
            ))}
          </ul>
          <button className="renew-all-button">Renew All</button>
        </div>

        <div className="card activity-logs-card">
          <h3 className="card-title">
            Recent Activity Logs{" "}
            <a href="#" className="see-all-link">
              see all
            </a>
          </h3>
          <ul className="activity-list">
            {recentActivityLogs.map((log, index) => (
              <li key={index} className="activity-item">
                <span className="dot green-dot"></span>
                {log}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="support-center-section">
        <div className="card support-center-card">
          <h3 className="card-title">
            Support Center{" "}
            <a href="#" className="see-all-link">
              see all
            </a>
          </h3>
          <div className="support-tickets">
            {supportTickets.map((ticket, index) => (
              <div key={index} className="ticket-item">
                <div className="ticket-row">
                  <span className="ticket-label">Open Ticket</span>
                  <span className="ticket-value">: {ticket.issue}</span>
                </div>
                <div className="ticket-row">
                  <span className="ticket-label">Date</span>
                  <span className="ticket-value">{ticket.date}</span>
                </div>
                <div className="ticket-row">
                  <span className="ticket-label">Status</span>
                  <span
                    className={`ticket-value ${getSupportStatusClass(
                      ticket.status
                    )}`}
                  >
                    {ticket.status}
                  </span>
                </div>
                {index < supportTickets.length - 1 && (
                  <hr className="ticket-separator" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </aside>
  );
}

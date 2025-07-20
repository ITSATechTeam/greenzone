import {
  LayoutDashboard,
  Globe,
  Dna,
  ReceiptText,
  BarChart,
  LifeBuoy,
  Settings,
  LogOut,
} from "lucide-react";
import "./Sidebar.css";

export default function Sidebar({ isSidebarOpen }) {
  return (
    <>
      <aside
        className={`sidebar ${isSidebarOpen ? "sidebar-mobile-open" : ""}`}
      >
        <div className="sidebar-header">
          <img
            src="/placeholder.svg?height=32&width=150"
            alt="Greenzone Logo"
            className="sidebar-logo"
          />
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="nav-item active">
              <LayoutDashboard className="nav-icon" />
              <span>Dashboard</span>
            </li>
            <li className="nav-item">
              <Globe className="nav-icon" />
              <span>My Domains</span>
            </li>
            <li className="nav-item">
              <Dna className="nav-icon" />
              <span>DNS Management</span>
            </li>
            <li className="nav-item">
              <ReceiptText className="nav-icon" />
              <span>Billing & Invoices</span>
            </li>
            <li className="nav-item">
              <BarChart className="nav-icon" />
              <span>Analytics</span>
            </li>
            <li className="nav-item">
              <LifeBuoy className="nav-icon" />
              <span>Help and support</span>
            </li>
            <li className="nav-item">
              <Settings className="nav-icon" />
              <span>Settings</span>
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <div className="nav-item">
            <LogOut className="nav-icon" />
            <span>Log out</span>
          </div>
        </div>
      </aside>
    </>
  );
}

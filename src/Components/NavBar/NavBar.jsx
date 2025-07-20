"use client";

import { Search, Bell, ChevronDown, Menu } from "lucide-react"; 
import "./Navbar.css";

export default function Navbar({ toggleSidebar }) {
  return (
    <header className="navbar">
      <button
        className="menu-icon"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <Menu />
      </button>
      <div className="search-bar">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Enter your desired domain name..."
          className="search-input"
        />
      </div>
      <div className="user-section">
        <Bell className="notification-icon" />
        <span className="user-name">Jude Uche</span>
        <img
          src="/placeholder.svg?height=32&width=32"
          alt="User Avatar"
          className="user-avatar"
        />
        <ChevronDown className="dropdown-icon" />
      </div>
    </header>
  );
}

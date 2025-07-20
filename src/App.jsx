"use client";

import { useState } from "react";

import Sidebar from "../src/Components/SideBar/SideBar.jsx";
import Navbar from "../src/Components/NavBar/NavBar.jsx";
import DashboardContent from "../src/Pages/Dashboard/Dashboard.jsx";
import Rightbar from "../src/Components/RightBar/RightBar.jsx";
import "./App.css"; 

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`dashboard-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
      <Navbar toggleSidebar={toggleSidebar} />{" "}
      
      <div className="main-content-area">
        <DashboardContent />
      </div>
      <Rightbar />
    </div>
  );
}

export default App;

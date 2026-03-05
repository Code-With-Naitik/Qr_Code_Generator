import React, { useState } from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { useAdmin } from "./AdminContext";
import "./admin.css";

const NavItem = ({ to, icon, label, badge }) => (
    <NavLink to={to} className={({ isActive }) => `adm-nav-item ${isActive ? "adm-nav-item--active" : ""}`} end={to === "/admin/dashboard"}>
        <span className="adm-nav-icon">{icon}</span>
        <span className="adm-nav-label">{label}</span>
        {badge != null && <span className="adm-nav-badge">{badge}</span>}
    </NavLink>
);

export default function AdminLayout() {
    const { adminUser, logout, getStats } = useAdmin();
    const navigate = useNavigate();
    const stats = getStats();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/admin/login");
    };

    return (
        <div className="adm-layout">
            {/* Mobile overlay */}
            {sidebarOpen && <div className="adm-sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

            {/* Sidebar */}
            <aside className={`adm-sidebar ${sidebarOpen ? "adm-sidebar--open" : ""}`}>
                <div className="adm-sidebar-header">
                    <div className="adm-sidebar-logo">
                        <a href="/">
                            <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                                <rect width="36" height="36" rx="10" fill="url(#sbl)" />
                                <defs><linearGradient id="sbl" x1="0" y1="0" x2="36" y2="36">
                                    <stop stopColor="#6366f1" /><stop offset="1" stopColor="#8b5cf6" />
                                </linearGradient></defs>
                                <rect x="6" y="6" width="10" height="10" rx="2" fill="white" />
                                <rect x="20" y="6" width="10" height="10" rx="2" fill="white" />
                                <rect x="6" y="20" width="10" height="10" rx="2" fill="white" />
                                <rect x="21" y="21" width="4" height="4" rx="1" fill="white" />
                                <rect x="27" y="21" width="3" height="3" rx="1" fill="white" opacity="0.7" />
                                <rect x="21" y="27" width="9" height="3" rx="1" fill="white" opacity="0.7" />
                            </svg>
                            <span className="adm-sidebar-brand">QRify</span>
                        </a>
                    </div>
                    <button className="adm-sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <div className="adm-sidebar-section-label">Main</div>
                <nav className="adm-nav">
                    <NavItem to="/admin/dashboard" label="Dashboard" badge={null} icon={
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                        </svg>
                    } />
                    <NavItem to="/admin/qr-types" label="QR Types" badge={null} icon={
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
                        </svg>
                    } />
                    <NavItem to="/admin/qr-codes" label="QR Codes" badge={stats.total} icon={
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="5" height="5" rx="1" /><rect x="16" y="3" width="5" height="5" rx="1" />
                            <rect x="3" y="16" width="5" height="5" rx="1" /><line x1="21" y1="21" x2="16" y2="21" />
                            <line x1="21" y1="16" x2="21" y2="21" /><line x1="11" y1="3" x2="11" y2="11" />
                            <line x1="3" y1="11" x2="11" y2="11" />
                        </svg>
                    } />
                </nav>

                <div className="adm-sidebar-section-label">Settings</div>
                <nav className="adm-nav">
                    <NavItem to="/admin/profile" label="Profile" icon={
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    } />
                </nav>

                <div className="adm-sidebar-footer">
                    <div className="adm-user-card">
                        <div className="adm-user-avatar">
                            {adminUser?.name?.charAt(0)?.toUpperCase() || "A"}
                        </div>
                        <div className="adm-user-info">
                            <span className="adm-user-name">{adminUser?.name || "Admin"}</span>
                            <span className="adm-user-email">{adminUser?.email || ""}</span>
                        </div>
                    </div>
                    <button className="adm-logout-btn" onClick={handleLogout} id="admin-logout-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <div className="adm-main">
                {/* Topbar */}
                <header className="adm-topbar">
                    <button className="adm-menu-btn" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                    <div className="adm-topbar-right">
                        <div className="adm-topbar-badge">
                            <span className="adm-status-dot"></span>
                            <span className="adm-status-text">Live</span>
                        </div>
                        <div className="adm-topbar-user">
                            <span>{adminUser?.name || "Admin"}</span>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <div className="adm-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

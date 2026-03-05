import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useAdmin } from "./AdminContext";
import "./admin.css";

const STAT_CARDS = [
    {
        key: "total",
        label: "Total QR Codes",
        color: "indigo",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="5" height="5" rx="1" /><rect x="16" y="3" width="5" height="5" rx="1" />
                <rect x="3" y="16" width="5" height="5" rx="1" /><line x1="21" y1="21" x2="16" y2="21" />
                <line x1="21" y1="16" x2="21" y2="21" /><line x1="11" y1="3" x2="11" y2="11" />
                <line x1="3" y1="11" x2="11" y2="11" />
            </svg>
        ),
    },
    {
        key: "active",
        label: "Active QR Codes",
        color: "emerald",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 11.08 22 12 12 22 2 12 2.5 6.75" /><polyline points="22 2 12 11 7 8" />
            </svg>
        ),
    },
    {
        key: "inactive",
        label: "Inactive QR Codes",
        color: "amber",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
        ),
    },
    {
        key: "totalScans",
        label: "Total Scans",
        color: "violet",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
    },
];

const QR_TYPE_ICONS = {
    URL: "🌐", WiFi: "📶", vCard: "👤", SMS: "💬", Email: "📧",
    Social: "📱", Location: "📍", App: "📦", Text: "📝", Phone: "📞",
};

const TYPE_COLORS = {
    URL: "#6366f1", WiFi: "#22c55e", vCard: "#f59e0b", SMS: "#3b82f6",
    Email: "#ec4899", Social: "#8b5cf6", Location: "#ef4444", App: "#14b8a6", Text: "#64748b", Phone: "#f97316",
};

function StatCard({ label, value, color, icon, trend }) {
    return (
        <div className={`adm-stat-card adm-stat-card--${color}`}>
            <div className="adm-stat-icon">{icon}</div>
            <div className="adm-stat-info">
                <span className="adm-stat-label">{label}</span>
                <span className="adm-stat-value">{value.toLocaleString()}</span>
            </div>
            <div className="adm-stat-glow" />
        </div>
    );
}

function MiniBarChart({ data }) {
    const maxVal = Math.max(...data.map(d => d.value), 1);
    return (
        <div className="adm-mini-chart">
            {data.map((d, i) => (
                <div key={i} className="adm-mini-bar-wrap" title={`${d.label}: ${d.value}`}>
                    <div
                        className="adm-mini-bar"
                        style={{ height: `${(d.value / maxVal) * 100}%`, background: TYPE_COLORS[d.label] || "#6366f1" }}
                    />
                    <span className="adm-mini-bar-label">{d.label.slice(0, 3)}</span>
                </div>
            ))}
        </div>
    );
}

export default function AdminDashboard() {
    const { qrCodes, getStats } = useAdmin();
    const stats = useMemo(() => getStats(), [qrCodes]);

    const typeData = useMemo(() =>
        Object.entries(stats.byType).map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value),
        [stats.byType]
    );

    const recentQRs = useMemo(() => [...qrCodes].sort((a, b) => b.id - a.id).slice(0, 5), [qrCodes]);

    const topQRs = useMemo(() => [...qrCodes].sort((a, b) => (b.scans || 0) - (a.scans || 0)).slice(0, 5), [qrCodes]);

    return (
        <div className="adm-page">
            <div className="adm-page-header">
                <div>
                    <h1 className="adm-page-title">Dashboard</h1>
                    <p className="adm-page-subtitle">Welcome back! Here's what's happening with your QR codes.</p>
                </div>
                <Link to="/admin/qr-codes" className="adm-btn-primary adm-btn-sm" id="dashboard-add-qr-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    New QR Code
                </Link>
            </div>

            {/* Stat cards */}
            <div className="adm-stats-grid">
                {STAT_CARDS.map(card => (
                    <StatCard key={card.key} label={card.label} value={stats[card.key]} color={card.color} icon={card.icon} />
                ))}
            </div>

            {/* Charts row */}
            <div className="adm-row-2">
                {/* QR Type breakdown */}
                <div className="adm-card adm-card-chart">
                    <div className="adm-card-header">
                        <h3 className="adm-card-title">QR Codes by Type</h3>
                        <Link to="/admin/qr-types" className="adm-link adm-link-sm">View all →</Link>
                    </div>
                    <MiniBarChart data={typeData} />
                    <div className="adm-type-legend">
                        {typeData.slice(0, 6).map(d => (
                            <div key={d.label} className="adm-legend-item">
                                <span className="adm-legend-dot" style={{ background: TYPE_COLORS[d.label] || "#6366f1" }} />
                                <span className="adm-legend-name">{QR_TYPE_ICONS[d.label] || "📌"} {d.label}</span>
                                <span className="adm-legend-count">{d.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top scanned */}
                <div className="adm-card">
                    <div className="adm-card-header">
                        <h3 className="adm-card-title">Top Scanned QR Codes</h3>
                        <Link to="/admin/qr-codes" className="adm-link adm-link-sm">All codes →</Link>
                    </div>
                    <div className="adm-top-list">
                        {topQRs.map((qr, i) => (
                            <div key={qr.id} className="adm-top-item">
                                <span className="adm-top-rank">#{i + 1}</span>
                                <div className="adm-top-qr-icon" style={{ background: TYPE_COLORS[qr.type] + "22", color: TYPE_COLORS[qr.type] }}>
                                    {QR_TYPE_ICONS[qr.type] || "📌"}
                                </div>
                                <div className="adm-top-info">
                                    <span className="adm-top-name">{qr.name}</span>
                                    <span className="adm-top-type">{qr.type}</span>
                                </div>
                                <span className="adm-top-scans">{(qr.scans || 0).toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent QR codes */}
            <div className="adm-card adm-card-full">
                <div className="adm-card-header">
                    <h3 className="adm-card-title">Recent QR Codes</h3>
                    <Link to="/admin/qr-codes" className="adm-link adm-link-sm">View all →</Link>
                </div>
                <div className="adm-table-wrap">
                    <table className="adm-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Created</th>
                                <th>Scans</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentQRs.map(qr => (
                                <tr key={qr.id}>
                                    <td>
                                        <span className="adm-table-name">
                                            <span className="adm-type-emoji">{QR_TYPE_ICONS[qr.type] || "📌"}</span>
                                            {qr.name}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="adm-type-badge" style={{ background: TYPE_COLORS[qr.type] + "22", color: TYPE_COLORS[qr.type] }}>
                                            {qr.type}
                                        </span>
                                    </td>
                                    <td className="adm-table-date">{qr.createdAt}</td>
                                    <td className="adm-table-scans">{(qr.scans || 0).toLocaleString()}</td>
                                    <td>
                                        <span className={`adm-status-badge adm-status-badge--${qr.status}`}>
                                            <span className="adm-status-dot-sm" />{qr.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

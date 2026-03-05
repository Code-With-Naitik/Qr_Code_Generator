import React, { useState, useMemo } from "react";
import { useAdmin } from "./AdminContext";
import "./admin.css";

const QR_TYPES = [
    { type: "URL", icon: "🌐", description: "Link to any website or web page", color: "#6366f1" },
    { type: "WiFi", icon: "📶", description: "Share WiFi credentials instantly", color: "#22c55e" },
    { type: "vCard", icon: "👤", description: "Share contact information", color: "#f59e0b" },
    { type: "SMS", icon: "💬", description: "Pre-filled SMS message", color: "#3b82f6" },
    { type: "Email", icon: "📧", description: "Pre-filled email with subject/body", color: "#ec4899" },
    { type: "Social", icon: "📱", description: "Social media profile links", color: "#8b5cf6" },
    { type: "Location", icon: "📍", description: "GPS coordinates or address", color: "#ef4444" },
    { type: "App", icon: "📦", description: "App Store / Play Store link", color: "#14b8a6" },
    { type: "Text", icon: "📝", description: "Plain text content", color: "#64748b" },
    { type: "Phone", icon: "📞", description: "Click to call phone number", color: "#f97316" },
];

export default function AdminQRTypes() {
    const { qrCodes } = useAdmin();
    const [search, setSearch] = useState("");

    const typeCounts = useMemo(() => {
        return qrCodes.reduce((acc, qr) => {
            acc[qr.type] = (acc[qr.type] || 0) + 1;
            return acc;
        }, {});
    }, [qrCodes]);

    const totalScans = useMemo(() => {
        return qrCodes.reduce((acc, qr) => {
            const type = qr.type;
            if (!acc[type]) acc[type] = 0;
            acc[type] += qr.scans || 0;
            return acc;
        }, {});
    }, [qrCodes]);

    const filtered = QR_TYPES.filter(t =>
        t.type.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase())
    );

    const maxCount = Math.max(...QR_TYPES.map(t => typeCounts[t.type] || 0), 1);

    return (
        <div className="adm-page">
            <div className="adm-page-header">
                <div>
                    <h1 className="adm-page-title">QR Code Types</h1>
                    <p className="adm-page-subtitle">Overview of all supported QR code formats and their usage.</p>
                </div>
            </div>

            {/* Summary cards */}
            <div className="adm-types-summary">
                <div className="adm-type-summary-card">
                    <span className="adm-type-summary-num">{QR_TYPES.length}</span>
                    <span className="adm-type-summary-label">Supported Types</span>
                </div>
                <div className="adm-type-summary-card">
                    <span className="adm-type-summary-num">{Object.keys(typeCounts).length}</span>
                    <span className="adm-type-summary-label">Types In Use</span>
                </div>
                <div className="adm-type-summary-card">
                    <span className="adm-type-summary-num">{qrCodes.length}</span>
                    <span className="adm-type-summary-label">Total QR Codes</span>
                </div>
            </div>

            {/* Search */}
            <div className="adm-card adm-card-full">
                <div className="adm-card-header">
                    <h3 className="adm-card-title">All Types</h3>
                    <div className="adm-search-wrap">
                        <svg className="adm-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input className="adm-search-input" placeholder="Search types..." value={search}
                            onChange={e => setSearch(e.target.value)} id="qr-types-search" />
                    </div>
                </div>

                <div className="adm-types-grid">
                    {filtered.map(t => {
                        const count = typeCounts[t.type] || 0;
                        const scans = totalScans[t.type] || 0;
                        const pct = Math.round((count / maxCount) * 100);

                        return (
                            <div key={t.type} className="adm-type-card" style={{ "--type-color": t.color }}>
                                <div className="adm-type-card-header">
                                    <div className="adm-type-emoji-wrap" style={{ background: t.color + "22" }}>
                                        <span className="adm-type-emoji-lg">{t.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="adm-type-name">{t.type}</h4>
                                        <p className="adm-type-desc">{t.description}</p>
                                    </div>
                                </div>

                                <div className="adm-type-stats">
                                    <div className="adm-type-stat">
                                        <span className="adm-type-stat-val" style={{ color: t.color }}>{count}</span>
                                        <span className="adm-type-stat-lbl">QR Codes</span>
                                    </div>
                                    <div className="adm-type-stat">
                                        <span className="adm-type-stat-val" style={{ color: t.color }}>{scans.toLocaleString()}</span>
                                        <span className="adm-type-stat-lbl">Total Scans</span>
                                    </div>
                                </div>

                                <div className="adm-type-progress-wrap">
                                    <div className="adm-type-progress-bar">
                                        <div className="adm-type-progress-fill" style={{ width: `${pct}%`, background: t.color }} />
                                    </div>
                                    <span className="adm-type-progress-pct">{pct}%</span>
                                </div>

                                <div className="adm-type-badge-row">
                                    {count > 0 ? (
                                        <span className="adm-type-active-badge">● Active</span>
                                    ) : (
                                        <span className="adm-type-unused-badge">○ Unused</span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filtered.length === 0 && (
                    <div className="adm-empty">
                        <span className="adm-empty-icon">🔍</span>
                        <p className="adm-empty-text">No types match your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

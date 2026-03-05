import React, { useState, useMemo, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useAdmin } from "./AdminContext";
import "./admin.css";

const QR_TYPES = ["URL", "WiFi", "vCard", "SMS", "Email", "Social", "Location", "App", "Text", "Phone"];
const TYPE_COLORS = {
    URL: "#6366f1", WiFi: "#22c55e", vCard: "#f59e0b", SMS: "#3b82f6",
    Email: "#ec4899", Social: "#8b5cf6", Location: "#ef4444", App: "#14b8a6", Text: "#64748b", Phone: "#f97316",
};
const TYPE_ICONS = {
    URL: "🌐", WiFi: "📶", vCard: "👤", SMS: "💬", Email: "📧",
    Social: "📱", Location: "📍", App: "📦", Text: "📝", Phone: "📞",
};

const ITEMS_PER_PAGE = 6;

// ─── Modals ───────────────────────────────────────────────
function ViewModal({ qr, onClose }) {
    if (!qr) return null;
    const isUrl = /^https?:\/\//i.test(qr.value || "");
    return (
        <div className="adm-modal-overlay" onClick={onClose}>
            <div className="adm-modal" onClick={e => e.stopPropagation()}>
                <div className="adm-modal-header">
                    <h3 className="adm-modal-title">QR Code Preview</h3>
                    <button className="adm-modal-close" onClick={onClose}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
                <div className="adm-modal-body">
                    <div className="adm-qr-preview-wrap">
                        <div className="adm-qr-frame" style={{ background: qr.bgColor || "#ffffff", padding: 12, borderRadius: 12, display: "inline-flex" }}>
                            <QRCodeSVG
                                value={qr.value || "https://qrify.com"}
                                size={200}
                                level="H"
                                fgColor={qr.fgColor || "#000000"}
                                bgColor={qr.bgColor || "#ffffff"}
                                style={{ display: "block", borderRadius: 8 }}
                            />
                        </div>
                        <div className="adm-qr-preview-info">
                            <div className="adm-preview-field">
                                <span className="adm-preview-lbl">Name</span>
                                <span className="adm-preview-val">{qr.name}</span>
                            </div>
                            <div className="adm-preview-field">
                                <span className="adm-preview-lbl">Type</span>
                                <span className="adm-type-badge" style={{ background: TYPE_COLORS[qr.type] + "22", color: TYPE_COLORS[qr.type] }}>
                                    {TYPE_ICONS[qr.type]} {qr.type}
                                </span>
                            </div>
                            <div className="adm-preview-field">
                                <span className="adm-preview-lbl">Content</span>
                                {isUrl ? (
                                    <a
                                        href={qr.value}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="adm-preview-val adm-preview-val-mono"
                                        style={{ color: "#6366f1", wordBreak: "break-all" }}
                                    >
                                        {qr.value}
                                    </a>
                                ) : (
                                    <span className="adm-preview-val adm-preview-val-mono">{qr.value}</span>
                                )}
                            </div>
                            <div className="adm-preview-field">
                                <span className="adm-preview-lbl">Colors</span>
                                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    <span title="QR Color" style={{ width: 18, height: 18, borderRadius: 4, background: qr.fgColor || "#000000", border: "1px solid #e2e8f0", display: "inline-block" }} />
                                    <span title="Background" style={{ width: 18, height: 18, borderRadius: 4, background: qr.bgColor || "#ffffff", border: "1px solid #e2e8f0", display: "inline-block" }} />
                                </span>
                            </div>
                            <div className="adm-preview-field">
                                <span className="adm-preview-lbl">Created</span>
                                <span className="adm-preview-val">{qr.createdAt}</span>
                            </div>
                            <div className="adm-preview-field">
                                <span className="adm-preview-lbl">Scans</span>
                                <span className="adm-preview-val adm-preview-val-big">{(qr.scans || 0).toLocaleString()}</span>
                            </div>
                            <div className="adm-preview-field">
                                <span className="adm-preview-lbl">Status</span>
                                <span className={`adm-status-badge adm-status-badge--${qr.status}`}>
                                    <span className="adm-status-dot-sm" /> {qr.status}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function EditModal({ qr, onClose, onSave }) {
    const [form, setForm] = useState({ name: qr.name, type: qr.type, value: qr.value, status: qr.status });
    const [error, setError] = useState("");

    const handleSave = () => {
        if (!form.name.trim() || !form.value.trim()) { setError("Name and content are required."); return; }
        onSave({ ...form });
        onClose();
    };

    return (
        <div className="adm-modal-overlay" onClick={onClose}>
            <div className="adm-modal adm-modal-lg" onClick={e => e.stopPropagation()}>
                <div className="adm-modal-header">
                    <h3 className="adm-modal-title">Edit QR Code</h3>
                    <button className="adm-modal-close" onClick={onClose}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
                <div className="adm-modal-body">
                    {error && <div className="adm-alert adm-alert-error"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /></svg>{error}</div>}
                    <div className="adm-form">
                        <div className="adm-form-row">
                            <div className="adm-field">
                                <label className="adm-label">Name</label>
                                <div className="adm-input-wrap">
                                    <input className="adm-input" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="QR code name" id="edit-qr-name" />
                                </div>
                            </div>
                            <div className="adm-field">
                                <label className="adm-label">Type</label>
                                <div className="adm-input-wrap">
                                    <select className="adm-input adm-select" value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))} id="edit-qr-type">
                                        {QR_TYPES.map(t => <option key={t} value={t}>{TYPE_ICONS[t]} {t}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="adm-field">
                            <label className="adm-label">Content / Value</label>
                            <div className="adm-input-wrap">
                                <textarea className="adm-input adm-textarea" value={form.value} onChange={e => setForm(f => ({ ...f, value: e.target.value }))} placeholder="QR code content..." id="edit-qr-value" rows={3} />
                            </div>
                        </div>
                        <div className="adm-field">
                            <label className="adm-label">Status</label>
                            <div className="adm-toggle-row">
                                {["active", "inactive"].map(s => (
                                    <button key={s} type="button"
                                        className={`adm-toggle-btn ${form.status === s ? "adm-toggle-btn--active" : ""}`}
                                        onClick={() => setForm(f => ({ ...f, status: s }))}>
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Live preview */}
                    <div className="adm-edit-preview">
                        <p className="adm-preview-label-sm">Live Preview</p>
                        <QRCodeSVG
                            value={form.value || "https://qrify.com"}
                            size={120}
                            level="H"
                            fgColor={qr.fgColor || "#000000"}
                            bgColor={qr.bgColor || "#ffffff"}
                            style={{ borderRadius: 8 }}
                        />
                    </div>
                </div>
                <div className="adm-modal-footer">
                    <button className="adm-btn-ghost" onClick={onClose}>Cancel</button>
                    <button className="adm-btn-primary" onClick={handleSave} id="edit-qr-save-btn">Save Changes</button>
                </div>
            </div>
        </div>
    );
}

function AddModal({ onClose, onAdd }) {
    const [form, setForm] = useState({ name: "", type: "URL", value: "", status: "active" });
    const [error, setError] = useState("");

    const handleAdd = () => {
        if (!form.name.trim() || !form.value.trim()) { setError("Name and content are required."); return; }
        onAdd(form);
        onClose();
    };

    return (
        <div className="adm-modal-overlay" onClick={onClose}>
            <div className="adm-modal adm-modal-lg" onClick={e => e.stopPropagation()}>
                <div className="adm-modal-header">
                    <h3 className="adm-modal-title">Create New QR Code</h3>
                    <button className="adm-modal-close" onClick={onClose}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
                <div className="adm-modal-body">
                    {error && <div className="adm-alert adm-alert-error"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /></svg>{error}</div>}
                    <div className="adm-form">
                        <div className="adm-form-row">
                            <div className="adm-field">
                                <label className="adm-label">Name</label>
                                <div className="adm-input-wrap">
                                    <input className="adm-input" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="My QR Code" id="add-qr-name" />
                                </div>
                            </div>
                            <div className="adm-field">
                                <label className="adm-label">Type</label>
                                <div className="adm-input-wrap">
                                    <select className="adm-input adm-select" value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))} id="add-qr-type">
                                        {QR_TYPES.map(t => <option key={t} value={t}>{TYPE_ICONS[t]} {t}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="adm-field">
                            <label className="adm-label">Content / Value</label>
                            <div className="adm-input-wrap">
                                <textarea className="adm-input adm-textarea" value={form.value} onChange={e => setForm(f => ({ ...f, value: e.target.value }))} placeholder="https://example.com" id="add-qr-value" rows={3} />
                            </div>
                        </div>
                        <div className="adm-field">
                            <label className="adm-label">Status</label>
                            <div className="adm-toggle-row">
                                {["active", "inactive"].map(s => (
                                    <button key={s} type="button"
                                        className={`adm-toggle-btn ${form.status === s ? "adm-toggle-btn--active" : ""}`}
                                        onClick={() => setForm(f => ({ ...f, status: s }))}>
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="adm-edit-preview">
                        <p className="adm-preview-label-sm">Preview</p>
                        <QRCodeSVG value={form.value || "https://qrify.com"} size={120} level="H" style={{ borderRadius: 8 }} />
                    </div>
                </div>
                <div className="adm-modal-footer">
                    <button className="adm-btn-ghost" onClick={onClose}>Cancel</button>
                    <button className="adm-btn-primary" onClick={handleAdd} id="add-qr-create-btn">Create QR Code</button>
                </div>
            </div>
        </div>
    );
}

function DeleteConfirm({ qr, onClose, onDelete }) {
    return (
        <div className="adm-modal-overlay" onClick={onClose}>
            <div className="adm-modal adm-modal-sm" onClick={e => e.stopPropagation()}>
                <div className="adm-modal-body adm-delete-body">
                    <div className="adm-delete-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                        </svg>
                    </div>
                    <h3 className="adm-delete-title">Delete QR Code?</h3>
                    <p className="adm-delete-msg">This will permanently delete <strong>{qr?.name}</strong>. This action cannot be undone.</p>
                </div>
                <div className="adm-modal-footer">
                    <button className="adm-btn-ghost" onClick={onClose}>Cancel</button>
                    <button className="adm-btn-danger" onClick={() => { onDelete(qr.id); onClose(); }} id="delete-qr-confirm-btn">Delete</button>
                </div>
            </div>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────
export default function AdminQRCodes() {
    const { qrCodes, addQrCode, updateQrCode, deleteQrCode } = useAdmin();
    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState("All");
    const [filterStatus, setFilterStatus] = useState("All");
    const [page, setPage] = useState(1);
    const [viewQr, setViewQr] = useState(null);
    const [editQr, setEditQr] = useState(null);
    const [deleteQr, setDeleteQr] = useState(null);
    const [showAdd, setShowAdd] = useState(false);

    const filtered = useMemo(() => {
        return qrCodes.filter(qr => {
            const matchSearch = qr.name.toLowerCase().includes(search.toLowerCase()) ||
                qr.value.toLowerCase().includes(search.toLowerCase());
            const matchType = filterType === "All" || qr.type === filterType;
            const matchStatus = filterStatus === "All" || qr.status === filterStatus;
            return matchSearch && matchType && matchStatus;
        });
    }, [qrCodes, search, filterType, filterStatus]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    const currentPage = Math.min(page, totalPages);
    const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handleSearch = (v) => { setSearch(v); setPage(1); };
    const handleType = (v) => { setFilterType(v); setPage(1); };
    const handleStatus = (v) => { setFilterStatus(v); setPage(1); };

    return (
        <div className="adm-page">
            <div className="adm-page-header">
                <div>
                    <h1 className="adm-page-title">QR Codes</h1>
                    <p className="adm-page-subtitle">Manage all your QR codes — view, edit, or delete.</p>
                </div>
                <button className="adm-btn-primary" onClick={() => setShowAdd(true)} id="open-add-qr-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    New QR Code
                </button>
            </div>

            {/* Filters */}
            <div className="adm-filters">
                <div className="adm-search-wrap adm-search-wide">
                    <svg className="adm-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input className="adm-search-input" placeholder="Search by name or content..." value={search}
                        onChange={e => handleSearch(e.target.value)} id="qr-codes-search" />
                </div>
                <div className="adm-filter-group">
                    <select className="adm-filter-select" value={filterType} onChange={e => handleType(e.target.value)} id="qr-filter-type">
                        <option value="All">All Types</option>
                        {QR_TYPES.map(t => <option key={t} value={t}>{TYPE_ICONS[t]} {t}</option>)}
                    </select>
                    <select className="adm-filter-select" value={filterStatus} onChange={e => handleStatus(e.target.value)} id="qr-filter-status">
                        <option value="All">All Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="adm-card adm-card-full">
                <div className="adm-card-header">
                    <h3 className="adm-card-title">
                        {filtered.length} QR Code{filtered.length !== 1 ? "s" : ""}
                        {(search || filterType !== "All" || filterStatus !== "All") && " (filtered)"}
                    </h3>
                </div>
                <div className="adm-table-wrap">
                    <table className="adm-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>QR</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Content</th>
                                <th>Created</th>
                                <th>Scans</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginated.map((qr, idx) => (
                                <tr key={qr.id}>
                                    <td className="adm-table-idx">{(currentPage - 1) * ITEMS_PER_PAGE + idx + 1}</td>
                                    <td>
                                        {/* Tiny QR thumbnail with saved colors */}
                                        <div
                                            style={{
                                                background: qr.bgColor || "#ffffff",
                                                padding: 4,
                                                borderRadius: 6,
                                                display: "inline-flex",
                                                cursor: "pointer",
                                                border: "1px solid #e2e8f0",
                                            }}
                                            title="Click to preview"
                                            onClick={() => setViewQr(qr)}
                                        >
                                            <QRCodeSVG
                                                value={qr.value || "https://qrify.com"}
                                                size={40}
                                                level="L"
                                                fgColor={qr.fgColor || "#000000"}
                                                bgColor={qr.bgColor || "#ffffff"}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <span className="adm-table-name">
                                            <span className="adm-type-emoji">{TYPE_ICONS[qr.type] || "📌"}</span>
                                            {qr.name}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="adm-type-badge" style={{ background: TYPE_COLORS[qr.type] + "22", color: TYPE_COLORS[qr.type] }}>
                                            {qr.type}
                                        </span>
                                    </td>
                                    <td className="adm-table-content">
                                        {/^https?:\/\//i.test(qr.value || "") ? (
                                            <a
                                                href={qr.value}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="adm-ellipsis"
                                                style={{ color: "#6366f1" }}
                                                title={qr.value}
                                            >
                                                {qr.value}
                                            </a>
                                        ) : (
                                            <span className="adm-ellipsis" title={qr.value}>{qr.value}</span>
                                        )}
                                    </td>
                                    <td className="adm-table-date">{qr.createdAt}</td>
                                    <td className="adm-table-scans">{(qr.scans || 0).toLocaleString()}</td>
                                    <td>
                                        <span className={`adm-status-badge adm-status-badge--${qr.status}`}>
                                            <span className="adm-status-dot-sm" /> {qr.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="adm-action-btns">
                                            <button className="adm-action-btn adm-action-btn--view" onClick={() => setViewQr(qr)} title="View" id={`view-qr-${qr.id}`}>
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                                                </svg>
                                            </button>
                                            <button className="adm-action-btn adm-action-btn--edit" onClick={() => setEditQr(qr)} title="Edit" id={`edit-qr-${qr.id}`}>
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                </svg>
                                            </button>
                                            <button className="adm-action-btn adm-action-btn--delete" onClick={() => setDeleteQr(qr)} title="Delete" id={`delete-qr-${qr.id}`}>
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {paginated.length === 0 && (
                                <tr>
                                    <td colSpan={9}>
                                        <div className="adm-empty">
                                            <span className="adm-empty-icon">🔍</span>
                                            <p className="adm-empty-text">No QR codes found. Try adjusting your filters.</p>
                                            <button className="adm-btn-primary adm-btn-sm" onClick={() => setShowAdd(true)}>Create your first QR code</button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="adm-pagination">
                        <span className="adm-page-info">
                            Page {currentPage} of {totalPages} · {filtered.length} results
                        </span>
                        <div className="adm-page-btns">
                            <button className="adm-page-btn" disabled={currentPage === 1} onClick={() => setPage(1)}>«</button>
                            <button className="adm-page-btn" disabled={currentPage === 1} onClick={() => setPage(p => p - 1)}>‹</button>
                            {[...Array(totalPages)].map((_, i) => (
                                <button key={i} className={`adm-page-btn ${currentPage === i + 1 ? "adm-page-btn--active" : ""}`}
                                    onClick={() => setPage(i + 1)}>{i + 1}</button>
                            ))}
                            <button className="adm-page-btn" disabled={currentPage === totalPages} onClick={() => setPage(p => p + 1)}>›</button>
                            <button className="adm-page-btn" disabled={currentPage === totalPages} onClick={() => setPage(totalPages)}>»</button>
                        </div>
                    </div>
                )}
            </div>

            {/* Modals */}
            {viewQr && <ViewModal qr={viewQr} onClose={() => setViewQr(null)} />}
            {editQr && (
                <EditModal qr={editQr} onClose={() => setEditQr(null)}
                    onSave={(updates) => updateQrCode(editQr.id, updates)} />
            )}
            {deleteQr && (
                <DeleteConfirm qr={deleteQr} onClose={() => setDeleteQr(null)}
                    onDelete={deleteQrCode} />
            )}
            {showAdd && (
                <AddModal onClose={() => setShowAdd(false)} onAdd={addQrCode} />
            )}
        </div>
    );
}

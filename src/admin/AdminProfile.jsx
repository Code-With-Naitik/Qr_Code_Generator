import React, { useState } from "react";
import { useAdmin } from "./AdminContext";
import "./admin.css";

export default function AdminProfile() {
    const { adminUser } = useAdmin();
    const [saved, setSaved] = useState(false);
    const [form, setForm] = useState({ name: adminUser?.name || "", email: adminUser?.email || "" });

    const handleSave = (e) => {
        e.preventDefault();
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    return (
        <div className="adm-page">
            <div className="adm-page-header">
                <div>
                    <h1 className="adm-page-title">Profile</h1>
                    <p className="adm-page-subtitle">Manage your admin account information.</p>
                </div>
            </div>

            <div className="adm-profile-grid">
                <div className="adm-card adm-profile-card">
                    <div className="adm-profile-avatar-wrap">
                        <div className="adm-profile-avatar">
                            {adminUser?.name?.charAt(0)?.toUpperCase() || "A"}
                        </div>
                        <h3 className="adm-profile-name">{adminUser?.name || "Admin"}</h3>
                        <span className="adm-profile-role">Administrator</span>
                    </div>
                    <div className="adm-profile-stats">
                        <div className="adm-profile-stat">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                            </svg>
                            <span>{adminUser?.email}</span>
                        </div>
                    </div>
                </div>

                <div className="adm-card adm-profile-form-card">
                    <h3 className="adm-card-title" style={{ marginBottom: "1.5rem" }}>Account Settings</h3>
                    {saved && (
                        <div className="adm-alert adm-alert-success">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Profile updated successfully!
                        </div>
                    )}
                    <form onSubmit={handleSave} className="adm-form">
                        <div className="adm-field">
                            <label className="adm-label">Full Name</label>
                            <div className="adm-input-wrap">
                                <input className="adm-input" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} id="profile-name" />
                            </div>
                        </div>
                        <div className="adm-field">
                            <label className="adm-label">Email Address</label>
                            <div className="adm-input-wrap">
                                <input type="email" className="adm-input" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} id="profile-email" />
                            </div>
                        </div>
                        <div className="adm-field">
                            <label className="adm-label">New Password</label>
                            <div className="adm-input-wrap">
                                <input type="password" className="adm-input" placeholder="Leave blank to keep current" id="profile-new-password" />
                            </div>
                        </div>
                        <button type="submit" className="adm-btn-primary" id="profile-save-btn">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

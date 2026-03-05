import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAdmin } from "./AdminContext";
import "./admin.css";

export default function AdminLogin() {
    const { login } = useAdmin();
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (!form.email || !form.password) { setError("All fields are required."); return; }
        setLoading(true);
        await new Promise(r => setTimeout(r, 800));
        const result = login(form.email, form.password);
        setLoading(false);
        if (result.success) navigate("/admin/dashboard");
        else setError(result.error);
    };

    return (
        <div className="adm-auth-bg">
            <div className="adm-auth-particles">
                {[...Array(20)].map((_, i) => <span key={i} className="adm-particle" style={{ "--i": i }} />)}
            </div>
            <div className="adm-auth-card">
                <div className="adm-auth-logo">
                    <div className="adm-logo-icon">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <rect width="36" height="36" rx="10" fill="url(#lg1)" />
                            <defs><linearGradient id="lg1" x1="0" y1="0" x2="36" y2="36">
                                <stop stopColor="#6366f1" /><stop offset="1" stopColor="#8b5cf6" />
                            </linearGradient></defs>
                            <rect x="6" y="6" width="10" height="10" rx="2" fill="white" />
                            <rect x="20" y="6" width="10" height="10" rx="2" fill="white" />
                            <rect x="6" y="20" width="10" height="10" rx="2" fill="white" />
                            <rect x="21" y="21" width="4" height="4" rx="1" fill="white" />
                            <rect x="27" y="21" width="3" height="3" rx="1" fill="white" opacity="0.7" />
                            <rect x="21" y="27" width="9" height="3" rx="1" fill="white" opacity="0.7" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="adm-brand">QRify Admin</h1>
                        <p className="adm-brand-sub">Management Console</p>
                    </div>
                </div>

                <h2 className="adm-auth-title">Welcome back</h2>
                <p className="adm-auth-subtitle">Sign in to your admin account</p>

                {error && (
                    <div className="adm-alert adm-alert-error">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="adm-form">
                    <div className="adm-field">
                        <label htmlFor="adm-login-email" className="adm-label">Email Address</label>
                        <div className="adm-input-wrap">
                            <svg className="adm-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <input id="adm-login-email" type="email" className="adm-input" placeholder="admin@qrify.com"
                                value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} autoComplete="email" />
                        </div>
                    </div>

                    <div className="adm-field">
                        <label htmlFor="adm-login-password" className="adm-label">Password</label>
                        <div className="adm-input-wrap">
                            <svg className="adm-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            <input id="adm-login-password" type={showPass ? "text" : "password"} className="adm-input" placeholder="••••••••"
                                value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} autoComplete="current-password" />
                            <button type="button" className="adm-pass-toggle" onClick={() => setShowPass(p => !p)} aria-label="Toggle password">
                                {showPass ? (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" /><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" /><line x1="1" y1="1" x2="23" y2="23" />
                                    </svg>
                                ) : (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="adm-btn-primary" disabled={loading}>
                        {loading ? <span className="adm-spinner" /> : null}
                        {loading ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                <p className="adm-auth-switch">
                    Don't have an account?{" "}
                    <Link to="/admin/register" className="adm-link">Create account</Link>
                </p>

                <div className="adm-auth-hint">
                    <span>Demo: admin@qrify.com / Admin@123</span>
                </div>
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAdmin } from "./AdminContext";
import "./admin.css";

export default function AdminRegister() {
    const { register } = useAdmin();
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (!form.name || !form.email || !form.password || !form.confirm) { setError("All fields are required."); return; }
        if (form.password !== form.confirm) { setError("Passwords do not match."); return; }
        if (form.password.length < 6) { setError("Password must be at least 6 characters."); return; }
        setLoading(true);
        await new Promise(r => setTimeout(r, 800));
        const result = register(form.name, form.email, form.password);
        setLoading(false);
        if (result.success) navigate("/admin/dashboard");
        else setError(result.error);
    };

    return (
        <div className="adm-auth-bg">
            <div className="adm-auth-particles">
                {[...Array(20)].map((_, i) => <span key={i} className="adm-particle" style={{ "--i": i }} />)}
            </div>
            <div className="adm-auth-card adm-auth-card-wide">
                <div className="adm-auth-logo">
                    <div className="adm-logo-icon">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <rect width="36" height="36" rx="10" fill="url(#lg2)" />
                            <defs><linearGradient id="lg2" x1="0" y1="0" x2="36" y2="36">
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

                <h2 className="adm-auth-title">Create Account</h2>
                <p className="adm-auth-subtitle">Register as admin to manage QR codes</p>

                {error && (
                    <div className="adm-alert adm-alert-error">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="adm-form">
                    <div className="adm-form-row">
                        <div className="adm-field">
                            <label htmlFor="adm-reg-name" className="adm-label">Full Name</label>
                            <div className="adm-input-wrap">
                                <svg className="adm-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                                <input id="adm-reg-name" type="text" className="adm-input" placeholder="John Doe"
                                    value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                            </div>
                        </div>

                        <div className="adm-field">
                            <label htmlFor="adm-reg-email" className="adm-label">Email Address</label>
                            <div className="adm-input-wrap">
                                <svg className="adm-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <input id="adm-reg-email" type="email" className="adm-input" placeholder="you@example.com"
                                    value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                            </div>
                        </div>
                    </div>

                    <div className="adm-form-row">
                        <div className="adm-field">
                            <label htmlFor="adm-reg-password" className="adm-label">Password</label>
                            <div className="adm-input-wrap">
                                <svg className="adm-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                                <input id="adm-reg-password" type={showPass ? "text" : "password"} className="adm-input" placeholder="Min 6 chars"
                                    value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} />
                                <button type="button" className="adm-pass-toggle" onClick={() => setShowPass(p => !p)}>
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

                        <div className="adm-field">
                            <label htmlFor="adm-reg-confirm" className="adm-label">Confirm Password</label>
                            <div className="adm-input-wrap">
                                <svg className="adm-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <input id="adm-reg-confirm" type={showPass ? "text" : "password"} className="adm-input" placeholder="Repeat password"
                                    value={form.confirm} onChange={e => setForm(f => ({ ...f, confirm: e.target.value }))} />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="adm-btn-primary" disabled={loading}>
                        {loading ? <span className="adm-spinner" /> : null}
                        {loading ? "Creating account..." : "Create Account"}
                    </button>
                </form>

                <p className="adm-auth-switch">
                    Already have an account?{" "}
                    <Link to="/admin/login" className="adm-link">Sign in</Link>
                </p>
            </div>
        </div>
    );
}

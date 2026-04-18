import React, { createContext, useContext, useState, useEffect } from "react";

const AdminContext = createContext(null);

// Demo seed data for QR codes
const SEED_QR_CODES = [
    { id: 1, name: "Company Website", type: "URL", value: "https://example.com", createdAt: "2025-01-10", status: "active", scans: 142 },
    { id: 2, name: "WiFi Guest Network", type: "WiFi", value: "SSID:GuestNet;PWD:pass123", createdAt: "2025-01-15", status: "active", scans: 89 },
    { id: 3, name: "Contact Card", type: "vCard", value: "BEGIN:VCARD\nFN:John Doe\nEND:VCARD", createdAt: "2025-01-20", status: "inactive", scans: 24 },
    { id: 4, name: "Product Promo SMS", type: "SMS", value: "+1234567890?body=Hello", createdAt: "2025-02-01", status: "active", scans: 311 },
    { id: 5, name: "Support Email", type: "Email", value: "support@example.com", createdAt: "2025-02-10", status: "active", scans: 67 },
    { id: 6, name: "Instagram Profile", type: "Social", value: "https://instagram.com/example", createdAt: "2025-02-18", status: "active", scans: 208 },
    { id: 7, name: "Event Location", type: "Location", value: "28.6139,77.2090", createdAt: "2025-03-01", status: "inactive", scans: 15 },
    { id: 8, name: "App Store Link", type: "App", value: "https://apps.apple.com/app/example", createdAt: "2025-03-05", status: "active", scans: 453 },
];

const DEFAULT_ADMIN = { email: "admin@qrify.com", password: "Admin@123", name: "Admin User" };

export function AdminProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        try { return JSON.parse(localStorage.getItem("admin_logged_in")) || false; } catch { return false; }
    });

    const [adminUser, setAdminUser] = useState(() => {
        try { return JSON.parse(localStorage.getItem("admin_user")) || null; } catch { return null; }
    });

    const [users, setUsers] = useState(() => {
        try {
            const stored = JSON.parse(localStorage.getItem("admin_users"));
            return stored || [DEFAULT_ADMIN];
        } catch { return [DEFAULT_ADMIN]; }
    });

    const [qrCodes, setQrCodes] = useState(() => {
        try {
            const stored = JSON.parse(localStorage.getItem("admin_qr_codes"));
            return stored || SEED_QR_CODES;
        } catch { return SEED_QR_CODES; }
    });

    useEffect(() => {
        localStorage.setItem("admin_logged_in", JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    useEffect(() => {
        localStorage.setItem("admin_user", JSON.stringify(adminUser));
    }, [adminUser]);

    useEffect(() => {
        localStorage.setItem("admin_users", JSON.stringify(users));
    }, [users]);

    useEffect(() => {
        localStorage.setItem("admin_qr_codes", JSON.stringify(qrCodes));
    }, [qrCodes]);

    const login = (email, password) => {
        const found = users.find(u => u.email === email && u.password === password);
        if (found) {
            setAdminUser(found);
            setIsLoggedIn(true);
            return { success: true };
        }
        return { success: false, error: "Invalid email or password" };
    };

    const register = (name, email, password) => {
        if (users.find(u => u.email === email)) {
            return { success: false, error: "Email already registered" };
        }
        const newUser = { name, email, password };
        setUsers(prev => [...prev, newUser]);
        setAdminUser(newUser);
        setIsLoggedIn(true);
        return { success: true };
    };

    const logout = () => {
        setIsLoggedIn(false);
        setAdminUser(null);
    };

    const addQrCode = (qr) => {
        // Use Date.now() + random suffix to guarantee unique IDs
        const newQr = {
            ...qr,
            id: Date.now() + Math.floor(Math.random() * 1000),
            createdAt: new Date().toISOString().split("T")[0],
            scans: 0,
            status: qr.status || "active",
        };
        setQrCodes(prev => [newQr, ...prev]);
        return newQr;
    };

    const updateQrCode = (id, updates) => {
        setQrCodes(prev => prev.map(q => q.id === id ? { ...q, ...updates } : q));
    };

    const deleteQrCode = (id) => {
        setQrCodes(prev => prev.filter(q => q.id !== id));
    };

    const getStats = () => {
        const total = qrCodes.length;
        const active = qrCodes.filter(q => q.status === "active").length;
        const inactive = qrCodes.filter(q => q.status === "inactive").length;
        const totalScans = qrCodes.reduce((sum, q) => sum + (q.scans || 0), 0);
        const byType = qrCodes.reduce((acc, q) => {
            acc[q.type] = (acc[q.type] || 0) + 1;
            return acc;
        }, {});
        return { total, active, inactive, totalScans, byType };
    };

    return (
        <AdminContext.Provider value={{ isLoggedIn, adminUser, login, logout, register, qrCodes, addQrCode, updateQrCode, deleteQrCode, getStats }}>
            {children}
        </AdminContext.Provider>
    );
}

export const useAdmin = () => {
    const ctx = useContext(AdminContext);
    if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
    return ctx;
};

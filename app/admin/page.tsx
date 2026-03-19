"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert("로그인 실패");
        } else {
            alert("로그인 성공");
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Admin Login</h1>

            <input
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br />

            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <button onClick={handleLogin}>로그인</button>
        </div>
    );
}
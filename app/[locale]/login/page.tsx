"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLocale } from "next-intl";

type OAuthProvider = "google" | "kakao";

export default function LoginPage() {
    const locale = useLocale();
    const e = locale === "en";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [oauthLoading, setOauthLoading] = useState<OAuthProvider | null>(null);
    const router = useRouter();

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (!error) {
            router.push("/guestbook");
        } else {
            alert(error.message);
        }
    };

    const handleOAuth = async (provider: OAuthProvider) => {
        setOauthLoading(provider);
        const { error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${window.location.origin}/auth/callback?next=/guestbook`,
            },
        });
        if (error) {
            setOauthLoading(null);
            alert(error.message);
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-100 shadow-sm p-8">

                <div className="mb-7">
                    <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M14 2H2a1 1 0 00-1 1v8a1 1 0 001 1h3l3 3 3-3h3a1 1 0 001-1V3a1 1 0 00-1-1z"
                                stroke="#185FA5"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <h1 className="text-xl font-semibold text-gray-900">
                        {e ? "Welcome back" : "다시 만나서 반가워요"}
                    </h1>
                    <p className="text-sm text-gray-400 mt-1">
                        {e ? "Leave a message in the guestbook." : "방명록에 흔적을 남겨보세요."}
                    </p>
                </div>

                <div className="space-y-4 mb-5">
                    <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1.5">
                            {e ? "Email" : "이메일"}
                        </label>
                        <input
                            type="email"
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            placeholder="hello@example.com"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1.5">
                            {e ? "Password" : "비밀번호"}
                        </label>
                        <input
                            type="password"
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            placeholder={e ? "Password" : "비밀번호"}
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                    </div>
                </div>

                <button
                    className="w-full rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
                    onClick={handleLogin}
                    disabled={!email || !password}
                >
                    {e ? "Sign in" : "로그인"}
                </button>

                <div className="my-5 flex items-center gap-3">
                    <div className="flex-1 h-px bg-gray-100" />
                    <span className="text-xs text-gray-400">{e ? "or" : "또는"}</span>
                    <div className="flex-1 h-px bg-gray-100" />
                </div>

                <div className="space-y-2.5">
                    <button
                        className="w-full flex items-center justify-center gap-2.5 rounded-xl border border-gray-200 bg-white py-2.5 text-sm text-gray-700 transition hover:bg-gray-50"
                        onClick={() => handleOAuth("google")}
                        disabled={oauthLoading !== null}
                    >
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        {e ? "Continue with Google" : "Google로 로그인"}
                    </button>

                    <button
                        className="w-full flex items-center justify-center gap-2.5 rounded-xl py-2.5 text-sm font-medium transition hover:brightness-95"
                        style={{ background: "#FEE500", color: "#191919" }}
                        onClick={() => handleOAuth("kakao")}
                        disabled={oauthLoading !== null}
                    >
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 18 16" fill="none">
                            <path
                                d="M9 0C4.03 0 0 3.13 0 6.99c0 2.48 1.56 4.66 3.91 5.9L2.97 16l4.06-2.73c.64.1 1.3.15 1.97.15 4.97 0 9-3.13 9-6.99S13.97 0 9 0z"
                                fill="#191919"
                            />
                        </svg>
                        {oauthLoading === "kakao"
                            ? (e ? "Redirecting..." : "Kakao로 이동 중...")
                            : (e ? "Continue with Kakao" : "Kakao로 로그인")}
                    </button>

                    <button
                        className="w-full flex items-center justify-center gap-2.5 rounded-xl py-2.5 text-sm font-medium text-white transition hover:brightness-95"
                        style={{ background: "#03C75A" }}
                        disabled
                    >
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="white">
                            <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
                        </svg>
                        {e ? "Continue with Naver" : "Naver로 로그인"}{" "}
                        <span className="text-xs opacity-70">({e ? "coming soon" : "준비 중"})</span>
                    </button>
                </div>

                <p className="mt-6 text-center text-xs text-gray-400">
                    {e ? "New here? " : "처음이신가요? "}
                    <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                        {e ? "Sign up" : "회원가입"}
                    </Link>
                </p>
            </div>
        </main>
    );
}

"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (!error) {
            router.push("/guestbook");
        } else {
            alert(error.message);
        }
    };

    const handleOAuth = async (provider: "google" | "github" | "gitlab" | string) => {
      const { error } = await supabase.auth.signInWithOAuth({
          provider: provider as any,
          options: {
              redirectTo: `${window.location.origin}/guestbook`,
          },
      });

      if (error) {
        alert(error.message);
      }
    };

    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h1 className="text-2xl font-bold mb-6 text-gray-900">
                    로그인
                </h1>

                <input
                    className="w-full border rounded-lg px-4 py-2 mb-3"
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="w-full border rounded-lg px-4 py-2 mb-4"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleLogin}
                    disabled={!email || !password}
                >
                    로그인
                </button>
                <div className="my-6 flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-sm text-gray-400">또는</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                <div className="space-y-2">
                  <button
                    className="w-full border border-gray-200 py-2 rounded-lg text-sm hover:bg-gray-50"
                    onClick={() => handleOAuth("google")}
                  >
                    Google로 로그인
                  </button>

                  <button
                    className="w-full border border-gray-200 py-2 rounded-lg text-sm hover:bg-gray-50"
                    onClick={() => handleOAuth("kakao")}
                  >
                    Kakao로 로그인
                  </button>

                  <button
                    className="w-full border border-gray-200 py-2 rounded-lg text-sm hover:bg-gray-50"
                    onClick={() => handleOAuth("naver")}
                  >
                    Naver로 로그인
                  </button>
                </div>
                <div className="mt-6 text-center text-sm text-gray-500">
                  회원이 아닌가요?{" "}
                  <Link href="/signup" className="text-blue-600 hover:underline">
                    회원가입
                  </Link>
                </div>
            </div>
        </main>
    );
}
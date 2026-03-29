

"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async () => {
    if (!email || !password || !nickname) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nickname,
        },
      },
    });

    setLoading(false);

    if (error) {
      alert("회원가입 실패: " + error.message);
      return;
    }

    alert("회원가입 완료! 이메일 인증을 확인해주세요.");
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">회원가입</h1>

        <input
          className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-3 text-gray-900"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <input
          className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-3 text-gray-900"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-4 text-gray-900"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition disabled:bg-gray-300"
          onClick={handleSignup}
          disabled={loading}
        >
          {loading ? "가입 중..." : "회원가입"}
        </button>

        <div className="mt-6 text-center text-sm text-gray-500">
          이미 계정이 있나요?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </main>
  );
}
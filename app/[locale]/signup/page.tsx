

"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [loading, setLoading] = useState(false);

  const passwordMismatch = confirmPassword.length > 0 && password !== confirmPassword;

  const nicknameInvalid = nickname.length > 0 && !/^[a-zA-Z가-힣]{2,10}$/.test(nickname);
  const emailInvalid = email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const router = useRouter();

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword || !nickname) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    if (nicknameInvalid) {
      alert("닉네임은 2~10자의 한글 또는 영문만 사용 가능합니다.");
      return;
    }

    if (emailInvalid) {
      alert("올바른 이메일 형식을 입력해주세요.");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
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
          className={`w-full border rounded-lg px-4 py-3 mb-1 text-gray-900 ${
            nicknameInvalid ? "border-red-400" : "border-gray-200"
          }`}
          placeholder="닉네임 (2~10자, 한글·영문)"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        {nicknameInvalid && (
          <p className="text-red-500 text-xs mb-3">2~10자의 한글 또는 영문만 사용 가능합니다.</p>
        )}
        {!nicknameInvalid && <div className="mb-3" />}

        <input
          className={`w-full border rounded-lg px-4 py-3 mb-1 text-gray-900 ${
            emailInvalid ? "border-red-400" : "border-gray-200"
          }`}
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailInvalid && (
          <p className="text-red-500 text-xs mb-3">올바른 이메일 형식을 입력해주세요.</p>
        )}
        {!emailInvalid && <div className="mb-3" />}

        <input
          type="password"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-3 text-gray-900"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          className={`w-full border rounded-lg px-4 py-3 mb-1 text-gray-900 ${
            passwordMismatch ? "border-red-400" : "border-gray-200"
          }`}
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {passwordMismatch && (
          <p className="text-red-500 text-xs mb-3">비밀번호가 일치하지 않습니다.</p>
        )}
        {!passwordMismatch && confirmPassword.length > 0 && (
          <p className="text-green-500 text-xs mb-3">비밀번호가 일치합니다.</p>
        )}
        {!passwordMismatch && confirmPassword.length === 0 && (
          <div className="mb-3" />
        )}

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition disabled:bg-gray-300"
          onClick={handleSignup}
          disabled={loading || nicknameInvalid || emailInvalid || passwordMismatch}
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
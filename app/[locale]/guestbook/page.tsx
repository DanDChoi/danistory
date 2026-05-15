"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useLocale } from "next-intl";

type Guestbook = {
    id: string;
    name: string;
    message: string;
    created_at: string;
    user_id: string;
};

const formatDate = (value: string, locale: string) =>
    new Date(value).toLocaleDateString(locale === "en" ? "en-US" : "ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

const getInitials = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return "?";
    const words = trimmed.split(" ");
    if (words.length >= 2) {
        return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    }
    return trimmed.slice(0, 2);
};

const AVATAR_COLORS = [
    { bg: "bg-blue-50",   text: "text-blue-800"   },
    { bg: "bg-teal-50",   text: "text-teal-800"   },
    { bg: "bg-purple-50", text: "text-purple-800" },
    { bg: "bg-amber-50",  text: "text-amber-800"  },
    { bg: "bg-rose-50",   text: "text-rose-800"   },
];

const getAvatarColor = (name: string) => {
    const hash = [...name].reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return AVATAR_COLORS[hash % AVATAR_COLORS.length];
};

export default function GuestbookPage() {
    const locale = useLocale();
    const e = locale === "en";

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [list, setList] = useState<Guestbook[]>([]);
    const [user, setUser] = useState<User | null>(null);
    const metadataName =
        user?.user_metadata?.nickname ||
        user?.user_metadata?.name ||
        user?.user_metadata?.full_name ||
        "";
    const resolvedName = name.trim() || metadataName;

    useEffect(() => {
        supabase.auth.getUser().then(({ data }) => setUser(data.user));
        void supabase
            .from("guestbook")
            .select("*")
            .order("created_at", { ascending: false })
            .then(({ data, error }) => {
                if (!error && data) {
                    setList(data);
                }
            });
    }, []);

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_, session) => setUser(session?.user ?? null)
        );
        return () => subscription.unsubscribe();
    }, []);

    const handleSubmit = async () => {
        const { error } = await supabase
            .from("guestbook")
            .insert([{ name: resolvedName, message, user_id: user?.id }]);
        if (!error) {
            setName("");
            setMessage("");
            const { data, error: fetchError } = await supabase
                .from("guestbook")
                .select("*")
                .order("created_at", { ascending: false });
            if (!fetchError && data) setList(data);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm(e ? "Are you sure you want to delete this?" : "정말 삭제하시겠습니까?")) return;
        const { error } = await supabase.from("guestbook").delete().eq("id", id);
        if (!error) {
            const { data, error: fetchError } = await supabase
                .from("guestbook")
                .select("*")
                .order("created_at", { ascending: false });
            if (!fetchError && data) setList(data);
        }
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-2xl mx-auto px-4 md:px-6 py-12 md:py-16">

                {/* 헤더 */}
                <header className="mb-8">
                    <div className="flex items-start justify-between gap-4">
                        <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-3">
                <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
                  <path d="M14 2H2a1 1 0 00-1 1v8a1 1 0 001 1h3l3 3 3-3h3a1 1 0 001-1V3a1 1 0 00-1-1z"
                        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                Guestbook
              </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                                {e ? <>Thank you<br />for visiting.</> : <>방문해주셔서<br />감사해요.</>}
                            </h1>
                            <p className="text-gray-500 text-sm mt-2">
                                {e ? "Leave a short greeting or feedback." : "짧은 인사나 피드백을 남겨주세요."}
                            </p>
                        </div>

                        {user ? (
                            <div className="flex flex-col items-end gap-2 mt-1 shrink-0">
                <span className="inline-flex items-center gap-2 text-xs text-gray-500 bg-white border border-gray-200 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {user.email}
                </span>
                                <button
                                    className="text-xs text-gray-400 hover:text-gray-600 transition"
                                    onClick={async () => {
                                        await supabase.auth.signOut();
                                        setUser(null);
                                    }}
                                >
                                    {e ? "Sign out" : "로그아웃"}
                                </button>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className="mt-1 shrink-0 text-xs font-medium text-blue-600 bg-white border border-blue-200 rounded-full px-3 py-1.5 hover:bg-blue-50 transition"
                            >
                                {e ? "Sign in" : "로그인"}
                            </Link>
                        )}
                    </div>
                </header>

                <hr className="border-gray-100 mb-8" />

                {/* 글쓰기 폼 */}
                {user ? (
                    <section className="rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-sm mb-10">
                        <h2 className="text-base font-semibold text-gray-900 mb-4">
                            {e ? "Leave a message" : "글 남기기"}
                        </h2>
                        <div className="space-y-3">
                            <input
                                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                placeholder={metadataName || (e ? "Name" : "이름")}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <textarea
                                className="w-full min-h-[120px] rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 resize-none"
                                placeholder={e ? "Write a message..." : "메시지를 입력하세요..."}
                                value={message}
                                onChange={(ev) => setMessage(ev.target.value)}
                            />
                            <button
                                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
                                onClick={handleSubmit}
                                disabled={!resolvedName || !message.trim()}
                            >
                                {e ? "Submit" : "등록"}
                            </button>
                        </div>
                    </section>
                ) : (
                    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-10 text-center">
                        <p className="text-sm text-gray-500 mb-4">
                            {e ? "You need to sign in to leave a message." : "방명록을 남기려면 로그인이 필요합니다."}
                        </p>
                        <Link
                            href="/login"
                            className="inline-block bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-blue-500 transition"
                        >
                            {e ? "Sign in" : "로그인 하러 가기"}
                        </Link>
                    </section>
                )}

                {/* 목록 */}
                <section>
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-base font-semibold text-gray-900">
                            {e ? "Messages" : "방명록"}
                        </h2>
                        <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2.5 py-1">
                            {e ? `${list.length} messages` : `${list.length}개`}
                        </span>
                    </div>

                    {list.length === 0 ? (
                        <div className="rounded-2xl border border-dashed border-gray-200 bg-white py-14 text-center">
                            <p className="text-sm text-gray-400">
                                {e ? "No messages yet." : "아직 방명록이 없어요."}
                            </p>
                            <p className="text-xs text-gray-300 mt-1">
                                {e ? "Be the first to leave a message!" : "첫 번째 메시지를 남겨보세요!"}
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {list.map((item) => {
                                const color = getAvatarColor(item.name);
                                return (
                                    <article
                                        key={item.id}
                                        className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-4 md:p-5 shadow-sm transition hover:shadow-md"
                                    >
                                        <div
                                            className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${color.bg} ${color.text}`}
                                        >
                                            {getInitials(item.name)}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-baseline justify-between gap-2 mb-1">
                                                <strong className="text-sm font-semibold text-gray-900 truncate">
                                                    {item.name}
                                                </strong>
                                                <div className="flex items-center gap-3 shrink-0">
                          <span className="text-xs text-gray-400">
                            {formatDate(item.created_at, locale)}
                          </span>
                                                    {user && String(user.id) === String(item.user_id) && (
                                                        <button
                                                            className="text-xs text-red-400 hover:text-red-500 transition"
                                                            onClick={() => handleDelete(item.id)}
                                                        >
                                                            {e ? "Delete" : "삭제"}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-sm leading-relaxed text-gray-600 whitespace-pre-wrap break-words">
                                                {item.message}
                                            </p>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}

"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

type Guestbook = {
    id: string;
    name: string;
    message: string;
    created_at: string;
    user_id: string;
};

const formatDate = (value: string) => {
    return new Date(value).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

export default function GuestbookPage() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [list, setList] = useState<Guestbook[]>([]);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        supabase.auth.getUser().then(({ data }) => {
            setUser(data.user);
        });

        fetchGuestbook();
    }, []);
    const handleDelete = async (id: string) => {
        const confirmDelete = confirm("정말 삭제하시겠습니까?");
        if (!confirmDelete) return;

        const { error } = await supabase
            .from("guestbook")
            .delete()
            .eq("id", id);

        if (!error) {
            fetchGuestbook();
        }
    };

    // 데이터 불러오기
    const fetchGuestbook = async () => {
        const { data, error } = await supabase
            .from("guestbook")
            .select("*")
            .order("created_at", { ascending: false });

        if (!error && data) {
            setList(data);
        }
    };

    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    // 등록
    const handleSubmit = async () => {
        const { error } = await supabase.from("guestbook").insert([
            { name, message, user_id: user?.id },
        ]);

        if (!error) {
            setName("");
            setMessage("");
            fetchGuestbook(); // 다시 불러오기
        }
    };

    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Guestbook
            </h1>
            <p className="text-gray-500 mt-2">
              방문의 흔적을 남겨주세요.
            </p>
          </div>

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
            <div>
              <p className="text-sm font-medium text-gray-700">
                {user ? "로그인됨" : "로그인 안됨"}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {user ? user.email : "로그인 후 방명록을 남길 수 있습니다."}
              </p>
            </div>

            {user && (
              <button
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                onClick={async () => {
                  await supabase.auth.signOut();
                  setUser(null);
                  alert("로그아웃됨");
                }}
              >
                로그아웃
              </button>
            )}
          </div>

          {user ? (
            <section className="rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-sm mb-10">
              <div className="mb-5">
                <h2 className="text-lg font-semibold text-gray-900">방명록 남기기</h2>
                <p className="text-sm text-gray-500 mt-1">짧은 인사나 응원의 메시지도 좋아요.</p>
              </div>

              <div className="space-y-4">
                <input
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  placeholder="이름"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <textarea
                  className="w-full min-h-[140px] rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 resize-none"
                  placeholder="메시지"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <button
                  className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-300"
                  onClick={handleSubmit}
                  disabled={!name.trim() || !message.trim() || !user}
                >
                  등록
                </button>
              </div>
            </section>
          ) : (
            <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-10 text-center">
              <p className="text-gray-600 mb-4">
                방명록을 남기려면 로그인이 필요합니다.
              </p>

              <Link
                href="/login"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500"
              >
                로그인 하러 가기
              </Link>
            </section>
          )}

          <section>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">목록</h2>
              <span className="text-sm text-gray-400">총 {list.length}개</span>
            </div>

            <div className="space-y-4">
              {list.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-base md:text-lg text-gray-900">
                          {item.name}
                        </strong>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        {formatDate(item.created_at)}
                      </p>
                    </div>

                    {user && String(user.id) === String(item.user_id) && (
                      <button
                        className="shrink-0 text-sm font-medium text-red-500 transition hover:text-red-600"
                        onClick={() => handleDelete(item.id)}
                      >
                        삭제
                      </button>
                    )}
                  </div>

                  <p className="mt-4 whitespace-pre-wrap break-words text-sm md:text-base leading-relaxed text-gray-700">
                    {item.message}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    );
}
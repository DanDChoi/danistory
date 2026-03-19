"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Guestbook = {
    id: string;
    name: string;
    message: string;
    created_at: string;
    user_id: string;
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
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Danistory Guestbook</h1>

          <p className="text-sm text-gray-500 mb-4">
            {user ? `로그인됨: ${user.email}` : "로그인 안됨"}
          </p>

          {user && (
            <button
              className="mb-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              onClick={async () => {
                await supabase.auth.signOut();
                setUser(null);
                alert("로그아웃됨");
              }}
            >
              로그아웃
            </button>
          )}

          {/* 입력 폼 */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <input
              className="w-full border p-2 rounded mb-3"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              className="w-full border p-2 rounded mb-3"
              placeholder="메시지"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
              onClick={handleSubmit}
            >
              등록
            </button>
          </div>

          {/* 목록 */}
          <h2 className="text-xl font-semibold mb-4">목록</h2>

          <div className="space-y-4">
            {list.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow"
              >
                <div className="flex justify-between items-center">
                  <strong className="text-lg">{item.name}</strong>

                  {user && String(user.id) === String(item.user_id) && (
                    <button
                      className="text-red-500 text-sm hover:underline"
                      onClick={() => handleDelete(item.id)}
                    >
                      삭제
                    </button>
                  )}
                </div>

                <p className="text-gray-700 mt-2">{item.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
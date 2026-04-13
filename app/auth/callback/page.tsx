"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

export default function AuthCallbackPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [errorMessage, setErrorMessage] = useState("");
    const [isResolving, setIsResolving] = useState(true);
    const code = searchParams.get("code");
    const next = searchParams.get("next") ?? "/guestbook";
    const oauthError =
        searchParams.get("error_description") ?? searchParams.get("error");

    useEffect(() => {
        if (oauthError) {
            return;
        }

        let cancelled = false;

        const finishLogin = async () => {
            const { data: sessionData } = await supabase.auth.getSession();

            if (cancelled) {
                return;
            }

            if (sessionData.session) {
                router.replace(next.startsWith("/") ? next : "/guestbook");
                return;
            }

            if (code) {
                const { error } = await supabase.auth.exchangeCodeForSession(code);

                if (cancelled) {
                    return;
                }

                if (error) {
                    setErrorMessage(error.message);
                    setIsResolving(false);
                    return;
                }

                router.replace(next.startsWith("/") ? next : "/guestbook");
                return;
            }

            setErrorMessage("인증 정보가 없어 로그인 처리를 완료하지 못했습니다.");
            setIsResolving(false);
        };

        void finishLogin();

        return () => {
            cancelled = true;
        };
    }, [code, next, oauthError, router]);

    const resolvedErrorMessage = oauthError || errorMessage;

    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <h1 className="text-xl font-semibold text-gray-900 mb-2">
                    로그인 처리 중
                </h1>
                {oauthError || (resolvedErrorMessage && !isResolving) ? (
                    <>
                        <p className="text-sm text-red-500 leading-6">{resolvedErrorMessage}</p>
                        <Link
                            href="/login"
                            className="mt-6 inline-flex rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                        >
                            로그인으로 돌아가기
                        </Link>
                    </>
                ) : (
                    <p className="text-sm text-gray-500 leading-6">
                        Supabase 세션을 마무리하고 있습니다. 잠시만 기다려주세요.
                    </p>
                )}
            </div>
        </main>
    );
}

import { Suspense } from "react";

import AuthCallbackClient from "./AuthCallbackClient";

export default function AuthCallbackPage() {
    return (
        <Suspense
            fallback={
                <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
                    <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                        <h1 className="text-xl font-semibold text-gray-900 mb-2">
                            로그인 처리 중
                        </h1>
                        <p className="text-sm text-gray-500 leading-6">
                            Supabase 세션을 마무리하고 있습니다. 잠시만 기다려주세요.
                        </p>
                    </div>
                </main>
            }
        >
            <AuthCallbackClient />
        </Suspense>
    );
}

"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface VisitorCounts {
  today: number;
  total: number;
}

export default function VisitorCounter() {
  const [counts, setCounts] = useState<VisitorCounts | null>(null);

  useEffect(() => {
    async function trackAndFetch() {
      // 세션 내 중복 카운트 방지
      const alreadyCounted = sessionStorage.getItem("visit_counted");

      if (!alreadyCounted) {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        await fetch("/api/visitors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userEmail: user?.email ?? null }),
        });

        sessionStorage.setItem("visit_counted", "true");
      }

      const res = await fetch("/api/visitors");
      const data = await res.json();
      setCounts(data);
    }

    trackAndFetch();
  }, []);

  if (!counts) return null;

  return (
    <div className="flex flex-col gap-2">
      <span className="flex items-center gap-2">
        <span className="w-3 inline-block" />
        <span className="text-xs text-gray-400">Today : {counts.today}</span>
      </span>
      <span className="flex items-center gap-2">
        <span className="w-3 inline-block" />
        <span className="text-xs text-gray-400">Total : {counts.total.toLocaleString()}</span>
      </span>
    </div>
  );
}

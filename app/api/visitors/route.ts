import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const OWNER_EMAIL = "danchoi.dev@gmail.com";

function kstMidnightISO(): string {
  const kst = new Date(Date.now() + 9 * 60 * 60 * 1000);
  kst.setUTCHours(0, 0, 0, 0);
  return kst.toISOString().replace("Z", "+09:00");
}

export async function GET() {
  const [{ count: total }, { count: todayCount }] = await Promise.all([
    supabase.from("page_views").select("*", { count: "exact", head: true }),
    supabase
      .from("page_views")
      .select("*", { count: "exact", head: true })
      .gte("visited_at", kstMidnightISO()),
  ]);

  return NextResponse.json({ total: total ?? 0, today: todayCount ?? 0 });
}

export async function POST(request: NextRequest) {
  // 1. localhost 제외 — Vercel 배포 환경에서는 항상 x-forwarded-for가 존재함
  const forwarded = request.headers.get("x-forwarded-for");
  if (!forwarded) {
    return NextResponse.json({ skipped: "localhost" });
  }

  // 2. is_owner 쿠키 제외
  const cookieStore = await cookies();
  const isOwner = cookieStore.get("is_owner");
  if (isOwner?.value === "true") {
    return NextResponse.json({ skipped: "owner_cookie" });
  }

  // 3. 로그인된 오너 계정 제외
  const body = await request.json().catch(() => ({}));
  if (body.userEmail === OWNER_EMAIL) {
    return NextResponse.json({ skipped: "owner_user" });
  }

  await supabase.from("page_views").insert({});

  return NextResponse.json({ recorded: true });
}

// app/projects/[slug]/components/WizpayPlatformFlow.tsx

export default function WizpayPlatformFlow({ locale }: { locale: string }) {
  const e = locale === "en";
  return (
    <svg width="100%" viewBox="0 0 680 420" className="w-full">
      <defs>
        <marker id="arrow-plat" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* ── Start ── */}
      <rect x="260" y="20" width="160" height="44" rx="22" fill="#F1EFE8" stroke="#888780" strokeWidth="0.5"/>
      <text x="340" y="42" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#2C2C2A">{e ? "Order Entry" : "주문서 진입"}</text>

      <line x1="340" y1="64" x2="340" y2="94" stroke="#888780" strokeWidth="1.5" markerEnd="url(#arrow-plat)"/>

      {/* ── 환경 감지 다이아몬드 ── */}
      <polygon points="340,96 430,130 340,164 250,130" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="340" y="124" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#3C3489">{e ? "Detect Env" : "환경 감지"}</text>
      <text x="340" y="142" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#534AB7">User-Agent / App Flag</text>

      {/* 분기 화살표 */}
      <line x1="250" y1="130" x2="162" y2="130" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#arrow-plat)"/>
      <text x="206" y="122" textAnchor="middle" fontSize="11" fill="#5F5E5A">PC</text>

      <line x1="340" y1="164" x2="340" y2="210" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#arrow-plat)"/>
      <text x="356" y="190" fontSize="11" fill="#5F5E5A">Mobile</text>

      <line x1="430" y1="130" x2="518" y2="130" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#arrow-plat)"/>
      <text x="474" y="122" textAnchor="middle" fontSize="11" fill="#5F5E5A">App</text>

      {/* ── PC 박스 ── */}
      <rect x="20" y="108" width="140" height="44" rx="8" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="90" y="124" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#3C3489">{e ? "PC Web" : "PC 웹"}</text>
      <text x="90" y="142" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#534AB7">click event</text>

      {/* ── Mobile 박스 ── */}
      <rect x="260" y="210" width="160" height="44" rx="8" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="340" y="226" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#3C3489">{e ? "Mobile Web" : "모바일 웹"}</text>
      <text x="340" y="244" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#534AB7">touch event</text>

      {/* ── App 박스 ── */}
      <rect x="520" y="108" width="140" height="44" rx="8" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="590" y="124" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#3C3489">{e ? "App WebView" : "앱 WebView"}</text>
      <text x="590" y="142" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#534AB7">{e ? "App Bridge event" : "앱 Bridge 이벤트"}</text>

      {/* 각 플랫폼 → 동적 UI */}
      <line x1="90"  y1="152" x2="90"  y2="280" stroke="#888780" strokeWidth="1.5" markerEnd="url(#arrow-plat)"/>
      <line x1="340" y1="254" x2="340" y2="280" stroke="#888780" strokeWidth="1.5" markerEnd="url(#arrow-plat)"/>
      <line x1="590" y1="152" x2="590" y2="280" stroke="#888780" strokeWidth="1.5" markerEnd="url(#arrow-plat)"/>

      {/* ── 동적 UI 구성 (공통 3개) ── */}
      <rect x="20"  y="280" width="140" height="56" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="90"  y="297" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#085041">{e ? "Dynamic UI" : "동적 UI 구성"}</text>
      <text x="90"  y="315" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#0F6E56">{e ? "Interest-free / Installment" : "무이자 / 할부 옵션"}</text>
      <text x="90"  y="330" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#0F6E56">{e ? "select box rendering" : "select box 렌더링"}</text>

      <rect x="260" y="280" width="160" height="56" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="340" y="297" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#085041">{e ? "Dynamic UI" : "동적 UI 구성"}</text>
      <text x="340" y="315" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#0F6E56">{e ? "Interest-free / Installment" : "무이자 / 할부 옵션"}</text>
      <text x="340" y="330" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#0F6E56">{e ? "select box rendering" : "select box 렌더링"}</text>

      <rect x="520" y="280" width="140" height="56" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="590" y="297" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#085041">{e ? "Dynamic UI" : "동적 UI 구성"}</text>
      <text x="590" y="315" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#0F6E56">{e ? "Interest-free / Installment" : "무이자 / 할부 옵션"}</text>
      <text x="590" y="330" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#0F6E56">{e ? "select box rendering" : "select box 렌더링"}</text>

      {/* 수렴 → 결제 완료 */}
      <line x1="90"  y1="336" x2="90"  y2="368" stroke="#888780" strokeWidth="1.5"/>
      <line x1="340" y1="336" x2="340" y2="368" stroke="#888780" strokeWidth="1.5"/>
      <line x1="590" y1="336" x2="590" y2="368" stroke="#888780" strokeWidth="1.5"/>
      <line x1="90"  y1="368" x2="590" y2="368" stroke="#888780" strokeWidth="1.5"/>
      <line x1="340" y1="368" x2="340" y2="382" stroke="#888780" strokeWidth="1.5" markerEnd="url(#arrow-plat)"/>

      {/* ── 결과 ── */}
      <rect x="240" y="382" width="200" height="26" rx="13" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="340" y="395" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#085041">{e ? "Unified Payment UX" : "동일한 결제 UX 제공"}</text>
    </svg>
  );
}

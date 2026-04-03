// app/projects/[slug]/components/SlowQueryExecutionPlan.tsx

export default function SlowQueryExecutionPlan() {
  return (
    <svg width="100%" viewBox="0 0 680 740" className="w-full">
      <defs>
        <marker
          id="arrow-sq"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M2 1L8 5L2 9"
            fill="none"
            stroke="context-stroke"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>

      {/* ── Column Headers ── */}
      <rect x="40"  y="20" width="270" height="36" rx="8" fill="#FCEBEB" stroke="#E24B4A" strokeWidth="0.5" />
      <text x="175" y="38" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#A32D2D">Before — 개선 전</text>

      <rect x="370" y="20" width="270" height="36" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5" />
      <text x="505" y="38" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#085041">After — 개선 후</text>

      {/* ── 중앙 구분선 ── */}
      <line x1="340" y1="60" x2="340" y2="620" stroke="#B4B2A9" strokeWidth="0.5" strokeDasharray="4 3" />

      {/* ── PATTERN 1 ── */}
      <text x="340" y="90" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#888780">패턴 1 · 서브쿼리 조건 부족 → 풀스캔</text>
      <line x1="40" y1="100" x2="640" y2="100" stroke="#B4B2A9" strokeWidth="0.5" strokeDasharray="4 3" />

      {/* BEFORE P1 */}
      <rect x="80"  y="114" width="190" height="44" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5" />
      <text x="175" y="130" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#2C2C2A">Subquery</text>
      <text x="175" y="148" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#5F5E5A">WHERE 조건 없음</text>
      <line x1="175" y1="158" x2="175" y2="176" stroke="#E24B4A" strokeWidth="1.5" markerEnd="url(#arrow-sq)" />
      <rect x="80"  y="178" width="190" height="44" rx="6" fill="#FCEBEB" stroke="#E24B4A" strokeWidth="0.5" />
      <text x="175" y="194" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#A32D2D">Seq Scan</text>
      <text x="175" y="212" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#791F1F">전체 테이블 풀스캔</text>
      <line x1="175" y1="222" x2="175" y2="240" stroke="#E24B4A" strokeWidth="1.5" markerEnd="url(#arrow-sq)" />
      <rect x="80"  y="242" width="190" height="36" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5" />
      <text x="175" y="260" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#5F5E5A">cost=0..8920  rows=320,000</text>

      {/* AFTER P1 */}
      <rect x="410" y="114" width="190" height="44" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5" />
      <text x="505" y="130" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#2C2C2A">Subquery</text>
      <text x="505" y="148" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#5F5E5A">WHERE 조건 추가</text>
      <line x1="505" y1="158" x2="505" y2="176" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arrow-sq)" />
      <rect x="410" y="178" width="190" height="44" rx="6" fill="#E1F5EEF" stroke="#1D9E75" strokeWidth="0.5" />
      <rect x="410" y="178" width="190" height="44" rx="6" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5" />
      <text x="505" y="194" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#085041">Index Scan</text>
      <text x="505" y="212" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#0F6E56">필요한 범위만 조회</text>
      <line x1="505" y1="222" x2="505" y2="240" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arrow-sq)" />
      <rect x="410" y="242" width="190" height="36" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5" />
      <text x="505" y="260" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#5F5E5A">cost=0..42   rows=120</text>

      {/* ── PATTERN 2 ── */}
      <text x="340" y="312" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#888780">패턴 2 · 서브쿼리 컬럼 인덱스 없음</text>
      <line x1="40" y1="322" x2="640" y2="322" stroke="#B4B2A9" strokeWidth="0.5" strokeDasharray="4 3" />

      {/* BEFORE P2 */}
      <rect x="80"  y="336" width="190" height="44" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5" />
      <text x="175" y="352" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#2C2C2A">Filter on col</text>
      <text x="175" y="370" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#5F5E5A">인덱스 없는 컬럼 조건</text>
      <line x1="175" y1="380" x2="175" y2="398" stroke="#E24B4A" strokeWidth="1.5" markerEnd="url(#arrow-sq)" />
      <rect x="80"  y="400" width="190" height="44" rx="6" fill="#FCEBEB" stroke="#E24B4A" strokeWidth="0.5" />
      <text x="175" y="416" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#A32D2D">Seq Scan + Filter</text>
      <text x="175" y="434" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#791F1F">rows=280,000 filtered</text>

      {/* AFTER P2 */}
      <rect x="410" y="336" width="190" height="44" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5" />
      <text x="505" y="352" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#2C2C2A">Filter on col</text>
      <text x="505" y="370" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#5F5E5A">인덱스 생성 후 조건</text>
      <line x1="505" y1="380" x2="505" y2="398" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arrow-sq)" />
      <rect x="410" y="400" width="190" height="44" rx="6" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5" />
      <text x="505" y="416" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#085041">Bitmap Index Scan</text>
      <text x="505" y="434" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#0F6E56">rows=120 exact</text>

      {/* ── PATTERN 3 ── */}
      <text x="340" y="476" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#888780">패턴 3 · JOIN 컬럼 부족 → 대용량 Hash Join</text>
      <line x1="40" y1="486" x2="640" y2="486" stroke="#B4B2A9" strokeWidth="0.5" strokeDasharray="4 3" />

      {/* BEFORE P3 */}
      <rect x="80"  y="500" width="190" height="44" rx="6" fill="#FCEBEB" stroke="#E24B4A" strokeWidth="0.5" />
      <text x="175" y="516" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#A32D2D">Hash Join</text>
      <text x="175" y="534" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#791F1F">컬럼 부족 → 대용량 해시</text>
      <line x1="175" y1="544" x2="175" y2="562" stroke="#E24B4A" strokeWidth="1.5" markerEnd="url(#arrow-sq)" />
      <rect x="80"  y="564" width="190" height="36" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5" />
      <text x="175" y="582" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#5F5E5A">cost=12,400  rows=95,000</text>

      {/* AFTER P3 */}
      <rect x="410" y="500" width="190" height="44" rx="6" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5" />
      <text x="505" y="516" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#085041">Nested Loop Join</text>
      <text x="505" y="534" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#0F6E56">컬럼 추가 → 소량 조인</text>
      <line x1="505" y1="544" x2="505" y2="562" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arrow-sq)" />
      <rect x="410" y="564" width="190" height="36" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5" />
      <text x="505" y="582" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#5F5E5A">cost=0..38    rows=120</text>

      {/* ── Legend ── */}
      <rect x="160" y="638" width="12" height="12" rx="3" fill="#FCEBEB" stroke="#E24B4A" strokeWidth="0.5" />
      <text x="178" y="644" dominantBaseline="central" fontSize="12" fill="#888780">비효율 실행 경로</text>
      <rect x="340" y="638" width="12" height="12" rx="3" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5" />
      <text x="358" y="644" dominantBaseline="central" fontSize="12" fill="#888780">최적화된 실행 경로</text>
    </svg>
  );
}

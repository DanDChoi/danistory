// app/projects/[slug]/components/BoPoStateDiagram.tsx

export default function BoPoStateDiagram() {
  return (
    <svg width="100%" viewBox="0 0 680 370" className="w-full">
      <defs>
        <marker id="arr-st" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* 시작점 */}
      <circle cx="60" cy="80" r="12" fill="#444441"/>
      <line x1="72" y1="80" x2="108" y2="80" stroke="#444441" strokeWidth="1.5" markerEnd="url(#arr-st)"/>

      {/* 입점 신청 */}
      <rect x="110" y="58" width="120" height="44" rx="8" fill="#FAEEDA" stroke="#BA7517" strokeWidth="0.5"/>
      <text x="170" y="74" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#633806">입점 신청</text>
      <text x="170" y="92" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#854F0B">status = PENDING</text>

      {/* 입점 신청 → 운영 중 */}
      <line x1="230" y1="80" x2="286" y2="80" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arr-st)"/>
      <text x="258" y="70" textAnchor="middle" fontSize="10" fill="#1D9E75">승인</text>

      {/* 입점 신청 → 반려 */}
      <line x1="170" y1="102" x2="170" y2="230" stroke="#E24B4A" strokeWidth="1.5" markerEnd="url(#arr-st)"/>
      <text x="152" y="170" textAnchor="middle" fontSize="10" fill="#E24B4A">반려</text>

      {/* 운영 중 */}
      <rect x="288" y="58" width="130" height="44" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="353" y="74" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#085041">운영 중</text>
      <text x="353" y="92" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#0F6E56">status = ACTIVE</text>

      {/* 운영 중 → 만료 임박 */}
      <line x1="418" y1="80" x2="474" y2="80" stroke="#BA7517" strokeWidth="1.5" markerEnd="url(#arr-st)"/>
      <text x="446" y="70" textAnchor="middle" fontSize="10" fill="#BA7517">계약 만료일 D-30</text>

      {/* 만료 임박 */}
      <rect x="476" y="58" width="130" height="44" rx="8" fill="#FAEEDA" stroke="#BA7517" strokeWidth="0.5"/>
      <text x="541" y="74" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#633806">만료 임박</text>
      <text x="541" y="92" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#854F0B">status = EXPIRING</text>

      {/* 만료 임박 → 운영 중 (재계약) */}
      <path d="M541 58 Q541 30 353 30 Q288 30 288 58" fill="none" stroke="#1D9E75" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr-st)"/>
      <text x="447" y="22" textAnchor="middle" fontSize="10" fill="#1D9E75">재계약</text>

      {/* 만료 임박 → 계약 만료 */}
      <line x1="541" y1="102" x2="541" y2="148" stroke="#E24B4A" strokeWidth="1.5" markerEnd="url(#arr-st)"/>
      <text x="560" y="128" fontSize="10" fill="#E24B4A">만료일 경과</text>

      {/* 운영 중 → 자진 퇴점 */}
      <line x1="353" y1="102" x2="353" y2="148" stroke="#888780" strokeWidth="1.5" markerEnd="url(#arr-st)"/>
      <text x="370" y="128" fontSize="10" fill="#888780">자진 퇴점</text>

      {/* 계약 만료 */}
      <rect x="476" y="150" width="130" height="44" rx="8" fill="#FCEBEB" stroke="#E24B4A" strokeWidth="0.5"/>
      <text x="541" y="166" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#A32D2D">계약 만료</text>
      <text x="541" y="184" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#791F1F">status = EXPIRED</text>

      {/* 퇴점 처리 중 */}
      <rect x="288" y="150" width="130" height="44" rx="8" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5"/>
      <text x="353" y="166" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#2C2C2A">퇴점 처리 중</text>
      <text x="353" y="184" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#5F5E5A">status = LEAVING</text>

      {/* 계약 만료 → 퇴점 처리 중 */}
      <line x1="476" y1="172" x2="420" y2="172" stroke="#E24B4A" strokeWidth="1.5" markerEnd="url(#arr-st)"/>
      <text x="448" y="164" textAnchor="middle" fontSize="10" fill="#E24B4A">퇴점 처리 시작</text>

      {/* 반려 */}
      <rect x="110" y="230" width="120" height="44" rx="8" fill="#FCEBEB" stroke="#E24B4A" strokeWidth="0.5"/>
      <text x="170" y="246" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#A32D2D">반려</text>
      <text x="170" y="264" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#791F1F">status = REJECTED</text>

      {/* 퇴점 완료 */}
      <rect x="288" y="252" width="130" height="44" rx="8" fill="#F1EFE8" stroke="#888780" strokeWidth="0.5"/>
      <text x="353" y="268" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#2C2C2A">퇴점 완료</text>
      <text x="353" y="286" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#5F5E5A">status = INACTIVE</text>

      {/* 퇴점 처리 중 → 퇴점 완료 */}
      <line x1="353" y1="194" x2="353" y2="250" stroke="#888780" strokeWidth="1.5" markerEnd="url(#arr-st)"/>
      <text x="370" y="225" fontSize="10" fill="#888780">처리 완료</text>

      {/* 종료점 */}
      <circle cx="353" cy="316" r="10" fill="none" stroke="#444441" strokeWidth="2"/>
      <circle cx="353" cy="316" r="6"  fill="#444441"/>
      <line x1="353" y1="296" x2="353" y2="304" stroke="#444441" strokeWidth="1.5" markerEnd="url(#arr-st)"/>

      {/* 범례 */}
      <rect x="80"  y="344" width="10" height="10" rx="2" fill="#FAEEDA" stroke="#BA7517" strokeWidth="0.5"/>
      <text x="96"  y="349" dominantBaseline="central" fontSize="10" fill="#888780">진행 중</text>
      <rect x="170" y="344" width="10" height="10" rx="2" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="186" y="349" dominantBaseline="central" fontSize="10" fill="#888780">정상 운영</text>
      <rect x="270" y="344" width="10" height="10" rx="2" fill="#FCEBEB" stroke="#E24B4A" strokeWidth="0.5"/>
      <text x="286" y="349" dominantBaseline="central" fontSize="10" fill="#888780">종료 / 반려</text>
      <rect x="370" y="344" width="10" height="10" rx="2" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5"/>
      <text x="386" y="349" dominantBaseline="central" fontSize="10" fill="#888780">처리 중</text>
    </svg>
  );
}

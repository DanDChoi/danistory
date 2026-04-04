// app/projects/[slug]/components/MdReviewArchitecture.tsx

export default function MdReviewArchitecture() {
  return (
    <svg width="100%" viewBox="0 0 680 380" className="w-full">
      <defs>
        <marker id="arr-arch" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* ── 외부 컨테이너 ── */}
      <rect x="20" y="16" width="640" height="330" rx="16" fill="none" stroke="#D3D1C7" strokeWidth="0.5" strokeDasharray="6 4"/>
      <text x="36" y="34" fontSize="11" fill="#888780" fontFamily="monospace">WIZWID MD 상품평 시스템</text>

      {/* ── BackOffice (관리자) ── */}
      <rect x="40" y="46" width="176" height="80" rx="10" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="128" y="66" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#3C3489">BackOffice (관리자)</text>
      <rect x="56" y="78" width="144" height="32" rx="6" fill="#AFA9EC" stroke="none"/>
      <text x="128" y="94" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#26215C">jQuery + JSTL UI</text>

      {/* ── Spring MVC (API) ── */}
      <rect x="252" y="46" width="176" height="80" rx="10" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="340" y="66" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#3C3489">Spring MVC (API)</text>
      <rect x="268" y="78" width="144" height="32" rx="6" fill="#AFA9EC" stroke="none"/>
      <text x="340" y="94" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#26215C">Controller / Service</text>

      {/* BackOffice → API */}
      <line x1="216" y1="86" x2="250" y2="86" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#arr-arch)"/>
      <text x="233" y="78" textAnchor="middle" fontSize="10" fill="#5F5E5A">HTTP</text>

      {/* ── S3 임시 버킷 ── */}
      <rect x="464" y="46" width="172" height="36" rx="8" fill="#FAEEDA" stroke="#BA7517" strokeWidth="0.5"/>
      <text x="550" y="64" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#633806">S3 임시 버킷</text>

      {/* ── S3 메인 버킷 ── */}
      <rect x="464" y="90" width="172" height="36" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="550" y="108" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#085041">S3 메인 버킷</text>

      {/* API → S3 임시 */}
      <line x1="428" y1="72" x2="462" y2="64" stroke="#BA7517" strokeWidth="1.5" markerEnd="url(#arr-arch)"/>
      <text x="445" y="62" textAnchor="middle" fontSize="10" fill="#5F5E5A">upload</text>

      {/* API → S3 메인 */}
      <line x1="428" y1="94" x2="462" y2="104" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arr-arch)"/>
      <text x="445" y="107" textAnchor="middle" fontSize="10" fill="#5F5E5A">copy</text>

      {/* 임시 버킷 삭제 표시 */}
      <line x1="550" y1="82" x2="550" y2="90" stroke="#E24B4A" strokeWidth="1" strokeDasharray="3 2"/>
      <text x="608" y="87" fontSize="10" fill="#E24B4A">등록 후 삭제</text>

      {/* ── PostgreSQL ── */}
      <rect x="252" y="166" width="176" height="64" rx="10" fill="#E6F1FB" stroke="#378ADD" strokeWidth="0.5"/>
      <text x="340" y="186" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#0C447C">PostgreSQL</text>
      <rect x="268" y="198" width="144" height="26" rx="6" fill="#85B7EB" stroke="none"/>
      <text x="340" y="211" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#042C53">상품평 · 이미지 URL</text>

      {/* API → DB */}
      <line x1="340" y1="126" x2="340" y2="164" stroke="#378ADD" strokeWidth="1.5" markerEnd="url(#arr-arch)"/>
      <text x="356" y="148" fontSize="10" fill="#5F5E5A">INSERT</text>

      {/* ── 전시 모듈 ── */}
      <rect x="40" y="166" width="176" height="64" rx="10" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="128" y="186" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#085041">전시 모듈</text>
      <rect x="56" y="198" width="144" height="26" rx="6" fill="#5DCAA5" stroke="none"/>
      <text x="128" y="211" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#04342C">프론트 상품평 노출</text>

      {/* API → 전시 모듈 */}
      <line x1="252" y1="194" x2="216" y2="194" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arr-arch)"/>
      <text x="234" y="186" textAnchor="middle" fontSize="10" fill="#5F5E5A">연동</text>

      {/* DB → 전시 모듈 */}
      <line x1="252" y1="210" x2="216" y2="210" stroke="#378ADD" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr-arch)"/>
      <text x="234" y="222" textAnchor="middle" fontSize="10" fill="#5F5E5A">SELECT</text>

      {/* ── 범례 ── */}
      <rect x="40"  y="272" width="12" height="12" rx="3" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="58"  y="278" dominantBaseline="central" fontSize="11" fill="#888780">Spring / jQuery 레이어</text>

      <rect x="210" y="272" width="12" height="12" rx="3" fill="#FAEEDA" stroke="#BA7517" strokeWidth="0.5"/>
      <text x="228" y="278" dominantBaseline="central" fontSize="11" fill="#888780">S3 임시 (휘발)</text>

      <rect x="360" y="272" width="12" height="12" rx="3" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="378" y="278" dominantBaseline="central" fontSize="11" fill="#888780">S3 메인 / 전시</text>

      <rect x="500" y="272" width="12" height="12" rx="3" fill="#E6F1FB" stroke="#378ADD" strokeWidth="0.5"/>
      <text x="518" y="278" dominantBaseline="central" fontSize="11" fill="#888780">PostgreSQL</text>
    </svg>
  );
}

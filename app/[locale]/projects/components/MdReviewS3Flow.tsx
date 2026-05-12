// app/projects/[slug]/components/MdReviewS3Flow.tsx

export default function MdReviewS3Flow() {
  return (
    <svg width="100%" viewBox="0 0 680 500" className="w-full">
      <defs>
        <marker id="arr-md" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* ── Row 1: 이미지 업로드 ── */}
      <text x="30" y="66" fontSize="11" fill="#888780" fontFamily="monospace">1</text>

      <rect x="50"  y="44" width="120" height="44" rx="8" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="110" y="60" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#3C3489">관리자</text>
      <text x="110" y="78" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#534AB7">BackOffice UI</text>

      <line x1="170" y1="66" x2="220" y2="66" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#arr-md)"/>
      <text x="195" y="58" textAnchor="middle" fontSize="11" fill="#5F5E5A">이미지 선택</text>

      <rect x="222" y="44" width="120" height="44" rx="8" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="282" y="60" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#3C3489">Spring 서버</text>
      <text x="282" y="78" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#534AB7">API</text>

      <line x1="342" y1="66" x2="392" y2="66" stroke="#BA7517" strokeWidth="1.5" markerEnd="url(#arr-md)"/>
      <text x="367" y="58" textAnchor="middle" fontSize="11" fill="#5F5E5A">upload</text>

      <rect x="394" y="44" width="130" height="44" rx="8" fill="#FAEEDA" stroke="#BA7517" strokeWidth="0.5"/>
      <text x="459" y="60" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#633806">S3 임시 버킷</text>
      <text x="459" y="78" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#854F0B">temp-bucket</text>

      <line x1="392" y1="82" x2="342" y2="92" stroke="#BA7517" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr-md)"/>
      <text x="367" y="82" textAnchor="middle" fontSize="11" fill="#5F5E5A">임시 URL 반환</text>

      {/* ── Row 2: 상품평 등록 ── */}
      <text x="30" y="146" fontSize="11" fill="#888780" fontFamily="monospace">2</text>
      <line x1="40" y1="130" x2="640" y2="130" stroke="#D3D1C7" strokeWidth="0.5" strokeDasharray="3 3"/>

      <text x="110" y="146" textAnchor="middle" fontSize="12" fill="#2C2C2A" fontWeight="500">상품평 내용 작성</text>
      <text x="110" y="162" textAnchor="middle" fontSize="11" fill="#5F5E5A">텍스트 + 임시 URL 포함</text>

      <line x1="170" y1="154" x2="220" y2="154" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#arr-md)"/>
      <text x="195" y="146" textAnchor="middle" fontSize="11" fill="#5F5E5A">등록 요청</text>

      <rect x="222" y="132" width="120" height="44" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5"/>
      <text x="282" y="148" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#2C2C2A">유효성 검증</text>
      <text x="282" y="166" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#5F5E5A">데이터 파싱</text>

      {/* ── Row 3: 버킷 복사 ── */}
      <text x="30" y="226" fontSize="11" fill="#888780" fontFamily="monospace">3</text>
      <line x1="40" y1="210" x2="640" y2="210" stroke="#D3D1C7" strokeWidth="0.5" strokeDasharray="3 3"/>

      <line x1="394" y1="230" x2="344" y2="230" stroke="#1D9E75" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arr-md)"/>
      <text x="459" y="220" textAnchor="middle" fontSize="11" fill="#5F5E5A">임시 버킷 파일</text>

      <rect x="222" y="210" width="120" height="44" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5"/>
      <text x="282" y="226" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#2C2C2A">S3 CopyObject</text>
      <text x="282" y="244" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#5F5E5A">임시 → 메인 복사</text>

      <line x1="342" y1="232" x2="452" y2="232" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arr-md)"/>

      <rect x="454" y="210" width="130" height="44" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="519" y="226" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#085041">S3 메인 버킷</text>
      <text x="519" y="244" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#0F6E56">main-bucket</text>

      {/* ── Row 4: DB 저장 ── */}
      <text x="30" y="306" fontSize="11" fill="#888780" fontFamily="monospace">4</text>
      <line x1="40" y1="290" x2="640" y2="290" stroke="#D3D1C7" strokeWidth="0.5" strokeDasharray="3 3"/>

      <rect x="222" y="292" width="120" height="44" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5"/>
      <text x="282" y="308" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#2C2C2A">DB 저장</text>
      <text x="282" y="326" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#5F5E5A">메인 URL + 텍스트</text>

      <rect x="454" y="292" width="130" height="44" rx="8" fill="#E6F1FB" stroke="#378ADD" strokeWidth="0.5"/>
      <text x="519" y="308" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#0C447C">PostgreSQL</text>
      <text x="519" y="326" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#185FA5">상품평 데이터</text>

      <line x1="342" y1="314" x2="452" y2="314" stroke="#378ADD" strokeWidth="1.5" markerEnd="url(#arr-md)"/>

      <rect x="394" y="292" width="56" height="44" rx="6" fill="#FCEBEB" stroke="#E24B4A" strokeWidth="0.5"/>
      <text x="422" y="308" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#A32D2D">임시</text>
      <text x="422" y="324" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#791F1F">삭제</text>

      <line x1="342" y1="322" x2="392" y2="314" stroke="#E24B4A" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#arr-md)"/>

      {/* ── Row 5: 전시 반영 ── */}
      <text x="30" y="386" fontSize="11" fill="#888780" fontFamily="monospace">5</text>
      <line x1="40" y1="370" x2="640" y2="370" stroke="#D3D1C7" strokeWidth="0.5" strokeDasharray="3 3"/>

      <rect x="222" y="374" width="120" height="44" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5"/>
      <text x="282" y="390" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#2C2C2A">전시 모듈 연동</text>
      <text x="282" y="408" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#5F5E5A">프론트 반영 처리</text>

      <rect x="454" y="374" width="130" height="44" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="519" y="390" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#085041">프론트 페이지</text>
      <text x="519" y="408" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#0F6E56">상품평 노출</text>

      <line x1="342" y1="396" x2="452" y2="396" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arr-md)"/>

      <line x1="220" y1="414" x2="170" y2="444" stroke="#7F77DD" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr-md)"/>

      <rect x="50"  y="440" width="120" height="36" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="110" y="458" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#085041">등록 완료</text>
    </svg>
  );
}

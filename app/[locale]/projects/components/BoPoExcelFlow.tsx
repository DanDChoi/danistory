// app/projects/[slug]/components/BoPoExcelFlow.tsx

export default function BoPoExcelFlow({ locale }: { locale: string }) {
  const e = locale === "en";
  return (
    <svg width="100%" viewBox="0 0 680 460" className="w-full">
      <defs>
        <marker id="arr-bp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* ── Actors ── */}
      <rect x="40"  y="20" width="110" height="44" rx="8" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="95"  y="36" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#3C3489">{e ? "Manager" : "담당자"}</text>
      <text x="95"  y="54" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#534AB7">BackOffice</text>

      <rect x="198" y="20" width="120" height="44" rx="8" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="258" y="36" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#3C3489">{e ? "Spring Server" : "Spring 서버"}</text>
      <text x="258" y="54" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#534AB7">Controller</text>

      <rect x="366" y="20" width="120" height="44" rx="8" fill="#FAEEDA" stroke="#BA7517" strokeWidth="0.5"/>
      <text x="426" y="36" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#633806">Apache POI</text>
      <text x="426" y="54" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#854F0B">Parser</text>

      <rect x="534" y="20" width="110" height="44" rx="8" fill="#E6F1FB" stroke="#378ADD" strokeWidth="0.5"/>
      <text x="589" y="36" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#0C447C">PostgreSQL</text>
      <text x="589" y="54" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#185FA5">DB</text>

      {/* Lifelines */}
      <line x1="95"  y1="64" x2="95"  y2="430" stroke="#B4B2A9" strokeWidth="0.5" strokeDasharray="4 3"/>
      <line x1="258" y1="64" x2="258" y2="430" stroke="#B4B2A9" strokeWidth="0.5" strokeDasharray="4 3"/>
      <line x1="426" y1="64" x2="426" y2="430" stroke="#B4B2A9" strokeWidth="0.5" strokeDasharray="4 3"/>
      <line x1="589" y1="64" x2="589" y2="430" stroke="#B4B2A9" strokeWidth="0.5" strokeDasharray="4 3"/>

      {/* 1 */}
      <text x="30" y="88" fontSize="11" fill="#888780" fontFamily="monospace">1</text>
      <line x1="95" y1="92" x2="250" y2="92" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#arr-bp)"/>
      <text x="172" y="84" textAnchor="middle" fontSize="11" fill="#5F5E5A">{e ? "Excel File Upload" : "엑셀 파일 업로드"}</text>

      {/* 2 */}
      <text x="30" y="118" fontSize="11" fill="#888780" fontFamily="monospace">2</text>
      <line x1="258" y1="122" x2="418" y2="122" stroke="#BA7517" strokeWidth="1.5" markerEnd="url(#arr-bp)"/>
      <text x="338" y="114" textAnchor="middle" fontSize="11" fill="#5F5E5A">{e ? "Workbook Parse Request" : "Workbook 파싱 요청"}</text>

      <rect x="346" y="136" width="160" height="52" rx="6" fill="#FAEEDA" stroke="#BA7517" strokeWidth="0.5"/>
      <text x="426" y="152" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#633806">{e ? "Row Iteration" : "Row 순회"}</text>
      <text x="426" y="170" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#854F0B">{e ? "Cell Type Conversion · Mapping" : "Cell 타입 변환 · 매핑"}</text>
      <text x="426" y="184" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#854F0B">{e ? "Empty Row / Header Skip" : "빈 행 / 헤더 스킵"}</text>

      <line x1="418" y1="192" x2="268" y2="202" stroke="#BA7517" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr-bp)"/>
      <text x="343" y="194" textAnchor="middle" fontSize="11" fill="#5F5E5A">{e ? "Return Parsed Data" : "파싱된 데이터 반환"}</text>

      {/* 3 */}
      <text x="30" y="225" fontSize="11" fill="#888780" fontFamily="monospace">3</text>
      <rect x="178" y="210" width="160" height="52" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5"/>
      <text x="258" y="226" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#2C2C2A">{e ? "Validation" : "유효성 검증"}</text>
      <text x="258" y="244" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#5F5E5A">{e ? "Required · Format · Duplicate" : "필수값 · 형식 · 중복 체크"}</text>
      <text x="258" y="258" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#5F5E5A">{e ? "Collect Error Rows" : "오류 행 수집"}</text>

      <line x1="178" y1="240" x2="108" y2="270" stroke="#E24B4A" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arr-bp)"/>
      <rect x="40"  y="270" width="110" height="36" rx="6" fill="#FCEBEB" stroke="#E24B4A" strokeWidth="0.5"/>
      <text x="95"  y="282" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#A32D2D">{e ? "Error Feedback" : "오류 피드백"}</text>
      <text x="95"  y="298" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#791F1F">{e ? "Return Error Row List" : "오류 행 목록 반환"}</text>
      <text x="142" y="252" fontSize="10" fill="#E24B4A">{e ? "Failed" : "검증 실패"}</text>

      {/* 4 */}
      <text x="30" y="336" fontSize="11" fill="#888780" fontFamily="monospace">4</text>
      <line x1="258" y1="276" x2="258" y2="320" stroke="#888780" strokeWidth="1" strokeDasharray="3 3"/>
      <text x="274" y="302" fontSize="10" fill="#888780">{e ? "Passed" : "검증 성공"}</text>
      <line x1="258" y1="322" x2="418" y2="322" stroke="#378ADD" strokeWidth="1.5" markerEnd="url(#arr-bp)"/>

      <rect x="346" y="306" width="160" height="52" rx="6" fill="#E6F1FB" stroke="#378ADD" strokeWidth="0.5"/>
      <text x="426" y="322" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#0C447C">{e ? "Change Log" : "변경 내역 로깅"}</text>
      <text x="426" y="340" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#185FA5">{e ? "Before/After Value Record" : "변경 전·후 값 기록"}</text>
      <text x="426" y="354" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#185FA5">{e ? "Save Timestamp" : "처리 일시 저장"}</text>

      <line x1="506" y1="332" x2="581" y2="332" stroke="#378ADD" strokeWidth="1.5" markerEnd="url(#arr-bp)"/>
      <text x="543" y="324" textAnchor="middle" fontSize="11" fill="#5F5E5A">UPSERT</text>

      {/* 5 */}
      <text x="30" y="398" fontSize="11" fill="#888780" fontFamily="monospace">5</text>
      <line x1="581" y1="366" x2="268" y2="386" stroke="#378ADD" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr-bp)"/>
      <text x="424" y="370" textAnchor="middle" fontSize="11" fill="#5F5E5A">{e ? "Return Result" : "처리 결과 반환"}</text>

      <line x1="248" y1="398" x2="108" y2="408" stroke="#1D9E75" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr-bp)"/>
      <rect x="40"  y="406" width="110" height="36" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="95"  y="418" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#085041">{e ? "Complete" : "처리 완료"}</text>
      <text x="95"  y="434" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#0F6E56">{e ? "Show Success Count" : "성공 건수 표시"}</text>
    </svg>
  );
}

// app/projects/[slug]/components/WizpaySequenceDiagram.tsx

export default function WizpaySequenceDiagram() {
  return (
    <svg width="100%" viewBox="0 0 680 580" className="w-full">
      <defs>
        <marker id="arrow-wiz" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* ── Actors ── */}
      <rect x="30"  y="20" width="100" height="40" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="80"  y="40" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#085041">사용자</text>

      <rect x="178" y="20" width="110" height="40" rx="8" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="233" y="33" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#3C3489">주문서</text>
      <text x="233" y="50" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#534AB7">Frontend</text>

      <rect x="336" y="20" width="110" height="40" rx="8" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="391" y="33" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#3C3489">Spring 서버</text>
      <text x="391" y="50" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#534AB7">Backend</text>

      <rect x="494" y="20" width="110" height="40" rx="8" fill="#FAEEDA" stroke="#BA7517" strokeWidth="0.5"/>
      <text x="549" y="33" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#633806">카드사 API</text>
      <text x="549" y="50" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#854F0B">External</text>

      {/* ── Lifelines ── */}
      <line x1="80"  y1="60" x2="80"  y2="550" stroke="#B4B2A9" strokeWidth="0.5" strokeDasharray="4 3"/>
      <line x1="233" y1="60" x2="233" y2="550" stroke="#B4B2A9" strokeWidth="0.5" strokeDasharray="4 3"/>
      <line x1="391" y1="60" x2="391" y2="550" stroke="#B4B2A9" strokeWidth="0.5" strokeDasharray="4 3"/>
      <line x1="549" y1="60" x2="549" y2="550" stroke="#B4B2A9" strokeWidth="0.5" strokeDasharray="4 3"/>

      {/* 1. 주문서 진입 */}
      <text x="30" y="85" fontSize="11" fill="#888780" fontFamily="monospace">1</text>
      <line x1="80" y1="90" x2="225" y2="90" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arrow-wiz)"/>
      <text x="152" y="84" textAnchor="middle" fontSize="11" fill="#5F5E5A">주문서 진입</text>

      {/* 2. 카드 정보 조회 요청 */}
      <text x="30" y="117" fontSize="11" fill="#888780" fontFamily="monospace">2</text>
      <line x1="233" y1="120" x2="383" y2="120" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#arrow-wiz)"/>
      <text x="308" y="114" textAnchor="middle" fontSize="11" fill="#5F5E5A">카드 정보 조회 요청</text>

      {/* 3. 외부 카드사 API 호출 */}
      <text x="30" y="147" fontSize="11" fill="#888780" fontFamily="monospace">3</text>
      <line x1="391" y1="150" x2="541" y2="150" stroke="#BA7517" strokeWidth="1.5" markerEnd="url(#arrow-wiz)"/>
      <text x="466" y="144" textAnchor="middle" fontSize="11" fill="#5F5E5A">외부 카드사 API 호출</text>

      {/* 4. 카드 목록 + 정책 응답 */}
      <text x="30" y="177" fontSize="11" fill="#888780" fontFamily="monospace">4</text>
      <line x1="541" y1="180" x2="399" y2="180" stroke="#BA7517" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrow-wiz)"/>
      <text x="466" y="174" textAnchor="middle" fontSize="11" fill="#5F5E5A">카드 목록 + 정책 응답</text>

      {/* 5. 조건 분기 처리 박스 */}
      <rect x="310" y="196" width="162" height="52" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5"/>
      <text x="391" y="212" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#2C2C2A">조건 분기 처리</text>
      <text x="391" y="230" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#5F5E5A">무이자 / 할부 / 체크·신용</text>
      <text x="391" y="244" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#5F5E5A">카드사별 정책 자동 적용</text>

      {/* 6. 분기된 결제 옵션 전달 */}
      <text x="30" y="267" fontSize="11" fill="#888780" fontFamily="monospace">5</text>
      <line x1="383" y1="270" x2="241" y2="270" stroke="#7F77DD" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrow-wiz)"/>
      <text x="312" y="264" textAnchor="middle" fontSize="11" fill="#5F5E5A">분기된 결제 옵션 전달</text>

      {/* 7. 동적 UI 렌더링 */}
      <rect x="153" y="286" width="160" height="40" rx="6" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="233" y="300" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#3C3489">동적 UI 렌더링</text>
      <text x="233" y="316" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#534AB7">select box 자동 구성</text>

      {/* 8. 결제 수단 선택 */}
      <text x="30" y="347" fontSize="11" fill="#888780" fontFamily="monospace">6</text>
      <line x1="80" y1="350" x2="225" y2="350" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arrow-wiz)"/>
      <text x="152" y="344" textAnchor="middle" fontSize="11" fill="#5F5E5A">결제 수단 선택</text>

      {/* 9. 결제 요청 */}
      <text x="30" y="377" fontSize="11" fill="#888780" fontFamily="monospace">7</text>
      <line x1="233" y1="380" x2="383" y2="380" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#arrow-wiz)"/>
      <text x="308" y="374" textAnchor="middle" fontSize="11" fill="#5F5E5A">결제 요청 (선택 정보 포함)</text>

      {/* 10. 카드사 승인 요청 */}
      <text x="30" y="407" fontSize="11" fill="#888780" fontFamily="monospace">8</text>
      <line x1="391" y1="410" x2="541" y2="410" stroke="#BA7517" strokeWidth="1.5" markerEnd="url(#arrow-wiz)"/>
      <text x="466" y="404" textAnchor="middle" fontSize="11" fill="#5F5E5A">카드사 승인 요청</text>

      {/* 11. 승인 응답 */}
      <text x="30" y="437" fontSize="11" fill="#888780" fontFamily="monospace">9</text>
      <line x1="541" y1="440" x2="399" y2="440" stroke="#BA7517" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrow-wiz)"/>
      <text x="466" y="434" textAnchor="middle" fontSize="11" fill="#5F5E5A">승인 결과 응답</text>

      {/* 12. 결제 완료 응답 */}
      <text x="30" y="467" fontSize="11" fill="#888780" fontFamily="monospace">10</text>
      <line x1="383" y1="470" x2="241" y2="470" stroke="#7F77DD" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrow-wiz)"/>
      <text x="312" y="464" textAnchor="middle" fontSize="11" fill="#5F5E5A">결제 완료 응답</text>

      {/* 13. 완료 화면 표시 */}
      <text x="30" y="497" fontSize="11" fill="#888780" fontFamily="monospace">11</text>
      <line x1="225" y1="500" x2="88" y2="500" stroke="#1D9E75" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrow-wiz)"/>
      <text x="152" y="494" textAnchor="middle" fontSize="11" fill="#5F5E5A">결제 완료 화면 표시</text>

      {/* ── Legend ── */}
      <line x1="90"  y1="538" x2="116" y2="538" stroke="#888780" strokeWidth="1.5"/>
      <text x="122" y="542" dominantBaseline="central" fontSize="11" fill="#888780">요청</text>
      <line x1="180" y1="538" x2="206" y2="538" stroke="#888780" strokeWidth="1.5" strokeDasharray="5 3"/>
      <text x="212" y="542" dominantBaseline="central" fontSize="11" fill="#888780">응답</text>
    </svg>
  );
}

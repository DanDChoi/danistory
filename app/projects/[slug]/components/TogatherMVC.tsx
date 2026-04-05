// app/projects/[slug]/components/TogatherMVC.tsx

export default function TogatherMVC() {
  return (
    <svg width="100%" viewBox="0 0 720 460" className="w-full">
      <defs>
        <marker id="arr-mvc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* ── 레이어 배경 ── */}
      {/* Browser */}
      <rect x="16" y="16" width="100" height="428" rx="10" fill="#F7F6F3" stroke="#D6D4CE" strokeWidth="0.8"/>
      <text x="66" y="36" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="600" fill="#888780">Client</text>

      {/* Controller */}
      <rect x="136" y="16" width="130" height="428" rx="10" fill="#EBF4FF" stroke="#378ADD" strokeWidth="0.8"/>
      <text x="201" y="36" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="600" fill="#185FA5">Controller</text>

      {/* Service */}
      <rect x="286" y="16" width="130" height="428" rx="10" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.8"/>
      <text x="351" y="36" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="600" fill="#085041">Service</text>

      {/* DAO / MyBatis */}
      <rect x="436" y="16" width="130" height="428" rx="10" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.8"/>
      <text x="501" y="36" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="600" fill="#3C3489">DAO · MyBatis</text>

      {/* DB */}
      <rect x="586" y="16" width="118" height="428" rx="10" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.8"/>
      <text x="645" y="36" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="600" fill="#2C2C2A">Oracle DB</text>

      {/* ── 기능 블록 ── */}
      {/* 1. 로그인/회원가입 */}
      <text x="26" y="72" fontSize="10" fill="#888780" fontFamily="monospace">①</text>
      <rect x="26"  y="56" width="80" height="36" rx="6" fill="#fff" stroke="#D6D4CE" strokeWidth="0.5"/>
      <text x="66"  y="68" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#2C2C2A">로그인</text>
      <text x="66"  y="84" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#888780">회원가입</text>

      <rect x="146" y="56" width="110" height="36" rx="6" fill="#EBF4FF" stroke="#378ADD" strokeWidth="0.5"/>
      <text x="201" y="68" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#185FA5">MemberController</text>
      <text x="201" y="84" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#378ADD">Session 처리</text>

      <rect x="296" y="56" width="110" height="36" rx="6" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="351" y="68" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#085041">MemberService</text>
      <text x="351" y="84" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#1D9E75">비밀번호 검증</text>

      <rect x="446" y="56" width="110" height="36" rx="6" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="501" y="68" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#3C3489">MemberDAO</text>
      <text x="501" y="84" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#7F77DD">selectByEmail</text>

      <rect x="596" y="56" width="98" height="36" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5"/>
      <text x="645" y="68" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#2C2C2A">MEMBER</text>
      <text x="645" y="84" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#888780">SELECT</text>

      <line x1="106" y1="74" x2="144" y2="74" stroke="#378ADD" strokeWidth="1.5" markerEnd="url(#arr-mvc)"/>
      <line x1="256" y1="74" x2="294" y2="74" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arr-mvc)"/>
      <line x1="406" y1="74" x2="444" y2="74" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#arr-mvc)"/>
      <line x1="556" y1="74" x2="594" y2="74" stroke="#B4B2A9" strokeWidth="1.5" markerEnd="url(#arr-mvc)"/>

      {/* 2. 모임 개설/참여 */}
      <text x="26" y="140" fontSize="10" fill="#888780" fontFamily="monospace">②</text>
      <rect x="26"  y="124" width="80" height="36" rx="6" fill="#fff" stroke="#D6D4CE" strokeWidth="0.5"/>
      <text x="66"  y="136" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#2C2C2A">모임 개설</text>
      <text x="66"  y="152" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#888780">참여 신청</text>

      <rect x="146" y="124" width="110" height="36" rx="6" fill="#EBF4FF" stroke="#378ADD" strokeWidth="0.5"/>
      <text x="201" y="136" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#185FA5">MeetingController</text>
      <text x="201" y="152" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#378ADD">권한 체크</text>

      <rect x="296" y="124" width="110" height="36" rx="6" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="351" y="136" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#085041">MeetingService</text>
      <text x="351" y="152" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#1D9E75">정원 초과 검증</text>

      <rect x="446" y="124" width="110" height="36" rx="6" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="501" y="136" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#3C3489">MeetingDAO</text>
      <text x="501" y="152" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#7F77DD">insert / select</text>

      <rect x="596" y="124" width="98" height="36" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5"/>
      <text x="645" y="136" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#2C2C2A">MEETING</text>
      <text x="645" y="152" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#888780">MEETING_MEMBER</text>

      <line x1="106" y1="142" x2="144" y2="142" stroke="#378ADD" strokeWidth="1.5" markerEnd="url(#arr-mvc)"/>
      <line x1="256" y1="142" x2="294" y2="142" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arr-mvc)"/>
      <line x1="406" y1="142" x2="444" y2="142" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#arr-mvc)"/>
      <line x1="556" y1="142" x2="594" y2="142" stroke="#B4B2A9" strokeWidth="1.5" markerEnd="url(#arr-mvc)"/>

      {/* 3. 게시판 */}
      <text x="26" y="210" fontSize="10" fill="#888780" fontFamily="monospace">③</text>
      <rect x="26"  y="194" width="80" height="36" rx="6" fill="#fff" stroke="#D6D4CE" strokeWidth="0.5"/>
      <text x="66"  y="206" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#2C2C2A">게시판</text>
      <text x="66"  y="222" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#888780">사진첩</text>

      <rect x="146" y="194" width="110" height="36" rx="6" fill="#EBF4FF" stroke="#378ADD" strokeWidth="0.5"/>
      <text x="201" y="206" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#185FA5">BoardController</text>
      <text x="201" y="222" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#378ADD">접근 권한 분기</text>

      <rect x="296" y="194" width="110" height="36" rx="6" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="351" y="206" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#085041">BoardService</text>
      <text x="351" y="222" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#1D9E75">board_type 분기</text>

      <rect x="446" y="194" width="110" height="36" rx="6" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="501" y="206" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#3C3489">BoardDAO</text>
      <text x="501" y="222" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#7F77DD">CRUD + 사진</text>

      <rect x="596" y="194" width="98" height="36" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5"/>
      <text x="645" y="206" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#2C2C2A">BOARD</text>
      <text x="645" y="222" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#888780">PHOTO / COMMENT</text>

      <line x1="106" y1="212" x2="144" y2="212" stroke="#378ADD" strokeWidth="1.5" markerEnd="url(#arr-mvc)"/>
      <line x1="256" y1="212" x2="294" y2="212" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arr-mvc)"/>
      <line x1="406" y1="212" x2="444" y2="212" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#arr-mvc)"/>
      <line x1="556" y1="212" x2="594" y2="212" stroke="#B4B2A9" strokeWidth="1.5" markerEnd="url(#arr-mvc)"/>

      {/* 4. 검색/목록 */}
      <text x="26" y="278" fontSize="10" fill="#888780" fontFamily="monospace">④</text>
      <rect x="26"  y="262" width="80" height="36" rx="6" fill="#fff" stroke="#D6D4CE" strokeWidth="0.5"/>
      <text x="66"  y="274" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#2C2C2A">모임 검색</text>
      <text x="66"  y="290" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#888780">지역 · 관심사</text>

      <rect x="146" y="262" width="110" height="36" rx="6" fill="#EBF4FF" stroke="#378ADD" strokeWidth="0.5"/>
      <text x="201" y="274" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#185FA5">SearchController</text>
      <text x="201" y="290" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#378ADD">파라미터 바인딩</text>

      <rect x="296" y="262" width="110" height="36" rx="6" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="351" y="274" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#085041">MeetingService</text>
      <text x="351" y="290" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#1D9E75">조건 필터링</text>

      <rect x="446" y="262" width="110" height="36" rx="6" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="501" y="274" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#3C3489">MeetingDAO</text>
      <text x="501" y="290" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#7F77DD">동적 WHERE 절</text>

      <rect x="596" y="262" width="98" height="36" rx="6" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5"/>
      <text x="645" y="274" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="500" fill="#2C2C2A">MEETING</text>
      <text x="645" y="290" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#888780">SELECT + JOIN</text>

      <line x1="106" y1="280" x2="144" y2="280" stroke="#378ADD" strokeWidth="1.5" markerEnd="url(#arr-mvc)"/>
      <line x1="256" y1="280" x2="294" y2="280" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arr-mvc)"/>
      <line x1="406" y1="280" x2="444" y2="280" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#arr-mvc)"/>
      <line x1="556" y1="280" x2="594" y2="280" stroke="#B4B2A9" strokeWidth="1.5" markerEnd="url(#arr-mvc)"/>

      {/* ── MyBatis Mapper 표시 ── */}
      <rect x="446" y="348" width="110" height="52" rx="6" fill="#FAEEDA" stroke="#BA7517" strokeWidth="0.5"/>
      <text x="501" y="364" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="600" fill="#633806">MyBatis</text>
      <text x="501" y="380" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#854F0B">Mapper XML</text>
      <text x="501" y="394" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#854F0B">SQL 분리 관리</text>

      <line x1="501" y1="330" x2="501" y2="346" stroke="#BA7517" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arr-mvc)"/>

      {/* ── View (JSP) ── */}
      <rect x="26" y="348" width="80" height="52" rx="6" fill="#F7F6F3" stroke="#D6D4CE" strokeWidth="0.5"/>
      <text x="66"  y="364" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="600" fill="#2C2C2A">View</text>
      <text x="66"  y="380" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#888780">JSP / JSTL</text>
      <text x="66"  y="394" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#888780">Model 렌더링</text>

      {/* Controller → View 응답 */}
      <path d="M201 330 Q201 400 108 374" fill="none" stroke="#378ADD" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr-mvc)"/>
      <text x="148" y="390" fontSize="10" fill="#378ADD">ModelAndView</text>

      {/* ── 범례 ── */}
      <rect x="20"  y="450" width="10" height="10" rx="2" fill="#EBF4FF" stroke="#378ADD" strokeWidth="0.5"/>
      <text x="36"  y="455" dominantBaseline="central" fontSize="10" fill="#888780">Controller</text>
      <rect x="130" y="450" width="10" height="10" rx="2" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="146" y="455" dominantBaseline="central" fontSize="10" fill="#888780">Service</text>
      <rect x="210" y="450" width="10" height="10" rx="2" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="226" y="455" dominantBaseline="central" fontSize="10" fill="#888780">DAO</text>
      <rect x="270" y="450" width="10" height="10" rx="2" fill="#FAEEDA" stroke="#BA7517" strokeWidth="0.5"/>
      <text x="286" y="455" dominantBaseline="central" fontSize="10" fill="#888780">MyBatis</text>
      <rect x="350" y="450" width="10" height="10" rx="2" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5"/>
      <text x="366" y="455" dominantBaseline="central" fontSize="10" fill="#888780">Oracle DB</text>
    </svg>
  );
}

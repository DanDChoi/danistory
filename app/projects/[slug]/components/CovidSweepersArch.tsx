// app/projects/[slug]/components/CovidSweepersArch.tsx

export default function CovidSweepersArch() {
  return (
    <svg width="100%" viewBox="0 0 720 500" className="w-full">
      <defs>
        <marker id="arr-cv" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* ── JVM Process 배경 ── */}
      <rect x="16" y="16" width="688" height="444" rx="12" fill="#F7F6F3" stroke="#D6D4CE" strokeWidth="1"/>
      <text x="360" y="36" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="600" fill="#888780">JVM Process · Java Swing Application</text>

      {/* ══ Client Side ══ */}
      <rect x="36" y="54" width="300" height="380" rx="10" fill="#EBF4FF" stroke="#378ADD" strokeWidth="0.8"/>
      <text x="186" y="74" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="600" fill="#185FA5">Client</text>

      {/* Main Thread (EDT) */}
      <rect x="56" y="88" width="260" height="100" rx="8" fill="#fff" stroke="#378ADD" strokeWidth="0.8"/>
      <text x="186" y="108" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="600" fill="#185FA5">Main Thread (EDT)</text>
      <text x="186" y="128" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#2C2C2A">JFrame · GameBoard 렌더링</text>
      <text x="186" y="146" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#2C2C2A">마우스 클릭 이벤트 처리</text>
      <text x="186" y="162" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#2C2C2A">타이머 · 깃발 · 지뢰 UI 갱신</text>

      {/* Chat Receiver Thread */}
      <rect x="56" y="204" width="260" height="82" rx="8" fill="#fff" stroke="#7F77DD" strokeWidth="0.8"/>
      <text x="186" y="222" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="600" fill="#3C3489">ChatReceiver Thread</text>
      <text x="186" y="242" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#2C2C2A">Socket InputStream 수신 대기</text>
      <text x="186" y="260" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#2C2C2A">메시지 수신 → EDT 전달</text>
      <text x="186" y="276" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#7F77DD">SwingUtilities.invokeLater()</text>

      {/* Socket (Client) */}
      <rect x="56" y="302" width="260" height="62" rx="8" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.8"/>
      <text x="186" y="322" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="600" fill="#3C3489">Socket (Client)</text>
      <text x="186" y="342" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#534AB7">InputStream / OutputStream</text>
      <text x="186" y="358" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#7F77DD">BufferedReader · PrintWriter</text>

      {/* Chat 입력 UI */}
      <rect x="56" y="380" width="260" height="44" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.8"/>
      <text x="186" y="396" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="600" fill="#085041">Chat Input Panel</text>
      <text x="186" y="412" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#1D9E75">JTextField + 전송 버튼</text>

      {/* Client 내부 화살표 */}
      <line x1="186" y1="188" x2="186" y2="202" stroke="#378ADD" strokeWidth="1.5" markerEnd="url(#arr-cv)"/>
      <line x1="186" y1="286" x2="186" y2="300" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#arr-cv)"/>
      <line x1="186" y1="364" x2="186" y2="378" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arr-cv)"/>

      {/* ══ Server Side ══ */}
      <rect x="384" y="54" width="304" height="380" rx="10" fill="#FCEBEB" stroke="#E24B4A" strokeWidth="0.8"/>
      <text x="536" y="74" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="600" fill="#A32D2D">Server</text>

      {/* ServerSocket (Main) */}
      <rect x="404" y="88" width="264" height="64" rx="8" fill="#fff" stroke="#E24B4A" strokeWidth="0.8"/>
      <text x="536" y="108" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="600" fill="#A32D2D">ServerSocket Main Thread</text>
      <text x="536" y="128" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#2C2C2A">accept() 대기 · 클라이언트 연결 수락</text>
      <text x="536" y="144" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#E24B4A">ServerSocket.accept() → Socket</text>

      {/* ClientHandler Thread Pool */}
      <rect x="404" y="168" width="264" height="106" rx="8" fill="#fff" stroke="#E24B4A" strokeWidth="0.8"/>
      <text x="536" y="186" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="600" fill="#A32D2D">ClientHandler Thread (1인당 1개)</text>
      <text x="536" y="206" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#2C2C2A">각 클라이언트 전용 Runnable</text>
      <text x="536" y="224" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#2C2C2A">메시지 수신 → 전체 브로드캐스트</text>
      <text x="536" y="242" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#2C2C2A">연결 종료 시 목록에서 제거</text>
      <text x="536" y="258" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#E24B4A">new Thread(handler).start()</text>

      {/* Client List */}
      <rect x="404" y="290" width="264" height="62" rx="8" fill="#FAEEDA" stroke="#BA7517" strokeWidth="0.8"/>
      <text x="536" y="310" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="600" fill="#633806">ClientList (공유 자원)</text>
      <text x="536" y="330" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#854F0B">List&lt;PrintWriter&gt; 동기화 관리</text>
      <text x="536" y="344" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#BA7517">synchronized 블록으로 thread-safe</text>

      {/* Broadcast 메모 */}
      <rect x="404" y="368" width="264" height="56" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.8"/>
      <text x="536" y="386" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="600" fill="#085041">broadcast()</text>
      <text x="536" y="404" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#1D9E75">ClientList 순회 → 전체 전송</text>
      <text x="536" y="418" textAnchor="middle" dominantBaseline="central" fontSize="10" fill="#1D9E75">닉네임 + 메시지 포맷 전송</text>

      {/* Server 내부 화살표 */}
      <line x1="536" y1="152" x2="536" y2="166" stroke="#E24B4A" strokeWidth="1.5" markerEnd="url(#arr-cv)"/>
      <line x1="536" y1="274" x2="536" y2="288" stroke="#E24B4A" strokeWidth="1.5" markerEnd="url(#arr-cv)"/>
      <line x1="536" y1="352" x2="536" y2="366" stroke="#BA7517" strokeWidth="1.5" markerEnd="url(#arr-cv)"/>

      {/* ══ Socket 연결 화살표 (Client ↔ Server) ══ */}
      {/* Client Socket → Server */}
      <line x1="318" y1="330" x2="402" y2="240" stroke="#7F77DD" strokeWidth="2" markerEnd="url(#arr-cv)"/>
      <text x="330" y="276" fontSize="10" fill="#7F77DD" transform="rotate(-35, 330, 276)">connect()</text>

      {/* Server → Client (broadcast) */}
      <line x1="402" y1="260" x2="318" y2="340" stroke="#1D9E75" strokeWidth="2" strokeDasharray="5 3" markerEnd="url(#arr-cv)"/>
      <text x="360" y="325" fontSize="10" fill="#1D9E75" transform="rotate(-35, 358, 320)">broadcast</text>

      {/* ── 범례 ── */}
      <rect x="36"  y="486" width="10" height="10" rx="2" fill="#EBF4FF" stroke="#378ADD" strokeWidth="0.5"/>
      <text x="52"  y="491" dominantBaseline="central" fontSize="10" fill="#888780">EDT · Main Thread</text>
      <rect x="185" y="486" width="10" height="10" rx="2" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="201" y="491" dominantBaseline="central" fontSize="10" fill="#888780">소켓 통신</text>
      <rect x="280" y="486" width="10" height="10" rx="2" fill="#FCEBEB" stroke="#E24B4A" strokeWidth="0.5"/>
      <text x="296" y="491" dominantBaseline="central" fontSize="10" fill="#888780">서버 스레드</text>
      <rect x="390" y="486" width="10" height="10" rx="2" fill="#FAEEDA" stroke="#BA7517" strokeWidth="0.5"/>
      <text x="406" y="491" dominantBaseline="central" fontSize="10" fill="#888780">공유 자원 (동기화)</text>
      <rect x="530" y="486" width="10" height="10" rx="2" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="546" y="491" dominantBaseline="central" fontSize="10" fill="#888780">브로드캐스트</text>
    </svg>
  );
}

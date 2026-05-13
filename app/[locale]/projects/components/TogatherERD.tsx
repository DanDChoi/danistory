// app/projects/[slug]/components/TogatherERD.tsx

export default function TogatherERD({ locale }: { locale: string }) {
  const e = locale === "en";
  return (
    <svg width="100%" viewBox="0 0 740 520" className="w-full">
      <defs>
        <marker id="arr-erd" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* ── MEMBER ── */}
      <rect x="20" y="30" width="160" height="200" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="1"/>
      <rect x="20" y="30" width="160" height="36" rx="8" fill="#1D9E75"/>
      <rect x="20" y="52" width="160" height="14" fill="#1D9E75"/>
      <text x="100" y="52" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="600" fill="#fff">MEMBER</text>
      <text x="36"  y="82"  dominantBaseline="central" fontSize="11" fill="#085041">🔑 member_id</text>
      <text x="36"  y="100" dominantBaseline="central" fontSize="11" fill="#2C2C2A">member_email</text>
      <text x="36"  y="118" dominantBaseline="central" fontSize="11" fill="#2C2C2A">member_pw</text>
      <text x="36"  y="136" dominantBaseline="central" fontSize="11" fill="#2C2C2A">member_name</text>
      <text x="36"  y="154" dominantBaseline="central" fontSize="11" fill="#2C2C2A">region</text>
      <text x="36"  y="172" dominantBaseline="central" fontSize="11" fill="#2C2C2A">interest_category</text>
      <text x="36"  y="190" dominantBaseline="central" fontSize="11" fill="#2C2C2A">profile_img</text>
      <text x="36"  y="208" dominantBaseline="central" fontSize="11" fill="#2C2C2A">joined_at</text>

      {/* ── MEETING ── */}
      <rect x="290" y="30" width="170" height="220" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="1"/>
      <rect x="290" y="30" width="170" height="36" rx="8" fill="#1D9E75"/>
      <rect x="290" y="52" width="170" height="14" fill="#1D9E75"/>
      <text x="375" y="52" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="600" fill="#fff">MEETING</text>
      <text x="306" y="82"  dominantBaseline="central" fontSize="11" fill="#085041">🔑 meeting_id</text>
      <text x="306" y="100" dominantBaseline="central" fontSize="11" fill="#5F5E5A">🔗 host_member_id</text>
      <text x="306" y="118" dominantBaseline="central" fontSize="11" fill="#2C2C2A">title</text>
      <text x="306" y="136" dominantBaseline="central" fontSize="11" fill="#2C2C2A">category</text>
      <text x="306" y="154" dominantBaseline="central" fontSize="11" fill="#2C2C2A">region</text>
      <text x="306" y="172" dominantBaseline="central" fontSize="11" fill="#2C2C2A">max_members</text>
      <text x="306" y="190" dominantBaseline="central" fontSize="11" fill="#2C2C2A">meeting_date</text>
      <text x="306" y="208" dominantBaseline="central" fontSize="11" fill="#2C2C2A">status</text>
      <text x="306" y="226" dominantBaseline="central" fontSize="11" fill="#2C2C2A">created_at</text>

      {/* ── MEETING_MEMBER (join table) ── */}
      <rect x="560" y="30" width="160" height="130" rx="8" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="1"/>
      <rect x="560" y="30" width="160" height="36" rx="8" fill="#888780"/>
      <rect x="560" y="52" width="160" height="14" fill="#888780"/>
      <text x="640" y="52" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="600" fill="#fff">MEETING_MEMBER</text>
      <text x="576" y="82"  dominantBaseline="central" fontSize="11" fill="#085041">🔑 id</text>
      <text x="576" y="100" dominantBaseline="central" fontSize="11" fill="#5F5E5A">🔗 meeting_id</text>
      <text x="576" y="118" dominantBaseline="central" fontSize="11" fill="#5F5E5A">🔗 member_id</text>
      <text x="576" y="136" dominantBaseline="central" fontSize="11" fill="#2C2C2A">joined_at</text>

      {/* ── BOARD ── */}
      <rect x="290" y="310" width="170" height="180" rx="8" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="1"/>
      <rect x="290" y="310" width="170" height="36" rx="8" fill="#7F77DD"/>
      <rect x="290" y="332" width="170" height="14" fill="#7F77DD"/>
      <text x="375" y="332" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="600" fill="#fff">BOARD</text>
      <text x="306" y="362" dominantBaseline="central" fontSize="11" fill="#3C3489">🔑 board_id</text>
      <text x="306" y="380" dominantBaseline="central" fontSize="11" fill="#534AB7">🔗 meeting_id</text>
      <text x="306" y="398" dominantBaseline="central" fontSize="11" fill="#534AB7">🔗 writer_member_id</text>
      <text x="306" y="416" dominantBaseline="central" fontSize="11" fill="#2C2C2A">board_type</text>
      <text x="306" y="434" dominantBaseline="central" fontSize="11" fill="#2C2C2A">title / content</text>
      <text x="306" y="452" dominantBaseline="central" fontSize="11" fill="#2C2C2A">created_at</text>
      <text x="306" y="470" dominantBaseline="central" fontSize="11" fill="#2C2C2A">access_role</text>

      {/* ── PHOTO ── */}
      <rect x="560" y="230" width="160" height="150" rx="8" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="1"/>
      <rect x="560" y="230" width="160" height="36" rx="8" fill="#7F77DD"/>
      <rect x="560" y="252" width="160" height="14" fill="#7F77DD"/>
      <text x="640" y="252" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="600" fill="#fff">PHOTO</text>
      <text x="576" y="282" dominantBaseline="central" fontSize="11" fill="#3C3489">🔑 photo_id</text>
      <text x="576" y="300" dominantBaseline="central" fontSize="11" fill="#534AB7">🔗 board_id</text>
      <text x="576" y="318" dominantBaseline="central" fontSize="11" fill="#534AB7">🔗 uploader_id</text>
      <text x="576" y="336" dominantBaseline="central" fontSize="11" fill="#2C2C2A">img_url</text>
      <text x="576" y="354" dominantBaseline="central" fontSize="11" fill="#2C2C2A">uploaded_at</text>

      {/* ── COMMENT ── */}
      <rect x="20" y="310" width="160" height="150" rx="8" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="1"/>
      <rect x="20" y="310" width="160" height="36" rx="8" fill="#888780"/>
      <rect x="20" y="332" width="160" height="14" fill="#888780"/>
      <text x="100" y="332" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="600" fill="#fff">COMMENT</text>
      <text x="36" y="362" dominantBaseline="central" fontSize="11" fill="#2C2C2A">🔑 comment_id</text>
      <text x="36" y="380" dominantBaseline="central" fontSize="11" fill="#5F5E5A">🔗 board_id</text>
      <text x="36" y="398" dominantBaseline="central" fontSize="11" fill="#5F5E5A">🔗 writer_member_id</text>
      <text x="36" y="416" dominantBaseline="central" fontSize="11" fill="#2C2C2A">content</text>
      <text x="36" y="434" dominantBaseline="central" fontSize="11" fill="#2C2C2A">created_at</text>

      {/* ── Relations ── */}
      <line x1="180" y1="100" x2="290" y2="100" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arr-erd)"/>
      <text x="218" y="92" fontSize="10" fill="#1D9E75">1</text>
      <text x="270" y="92" fontSize="10" fill="#1D9E75">N</text>

      <line x1="460" y1="80" x2="558" y2="80" stroke="#888780" strokeWidth="1.5" markerEnd="url(#arr-erd)"/>
      <text x="468" y="72" fontSize="10" fill="#888780">1</text>
      <text x="540" y="72" fontSize="10" fill="#888780">N</text>

      <path d="M100 230 Q100 260 560 110" fill="none" stroke="#888780" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr-erd)"/>
      <text x="310" y="255" fontSize="10" fill="#888780">{e ? "N:M Join" : "N:M 참여"}</text>

      <line x1="375" y1="250" x2="375" y2="308" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#arr-erd)"/>
      <text x="383" y="272" fontSize="10" fill="#7F77DD">1</text>
      <text x="383" y="296" fontSize="10" fill="#7F77DD">N</text>

      <line x1="460" y1="380" x2="558" y2="320" stroke="#7F77DD" strokeWidth="1.5" markerEnd="url(#arr-erd)"/>
      <text x="490" y="342" fontSize="10" fill="#7F77DD">1:N</text>

      <line x1="290" y1="400" x2="182" y2="400" stroke="#888780" strokeWidth="1.5" markerEnd="url(#arr-erd)"/>
      <text x="222" y="392" fontSize="10" fill="#888780">1</text>
      <text x="278" y="392" fontSize="10" fill="#888780">N</text>

      {/* ── Legend ── */}
      <rect x="20" y="500" width="10" height="10" rx="2" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="36"  y="505" dominantBaseline="central" fontSize="10" fill="#888780">{e ? "Member / Meeting" : "회원 / 모임"}</text>
      <rect x="140" y="500" width="10" height="10" rx="2" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5"/>
      <text x="156" y="505" dominantBaseline="central" fontSize="10" fill="#888780">{e ? "Board / Photo" : "게시판 / 사진"}</text>
      <rect x="270" y="500" width="10" height="10" rx="2" fill="#F1EFE8" stroke="#B4B2A9" strokeWidth="0.5"/>
      <text x="286" y="505" dominantBaseline="central" fontSize="10" fill="#888780">{e ? "Link / Comment" : "연결 / 댓글"}</text>
      <text x="390" y="505" dominantBaseline="central" fontSize="10" fill="#085041">🔑 PK</text>
      <text x="450" y="505" dominantBaseline="central" fontSize="10" fill="#534AB7">🔗 FK</text>
    </svg>
  );
}

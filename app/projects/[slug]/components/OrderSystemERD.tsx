// app/projects/[slug]/components/OrderSystemERD.tsx

export default function OrderSystemERD() {
  return (
    <svg width="100%" viewBox="0 0 760 550" className="w-full">
      <defs>
        <marker id="arr-ord" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* ── CUSTOMER ── */}
      <rect x="20" y="30" width="155" height="185" rx="8" fill="#EBF4FF" stroke="#378ADD" strokeWidth="1"/>
      <rect x="20" y="30" width="155" height="36" rx="8" fill="#378ADD"/>
      <rect x="20" y="52" width="155" height="14" fill="#378ADD"/>
      <text x="97"  y="52" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="600" fill="#fff">CUSTOMER</text>
      <text x="36"  y="82"  dominantBaseline="central" fontSize="11" fill="#0C447C">🔑 customer_id</text>
      <text x="36"  y="100" dominantBaseline="central" fontSize="11" fill="#2C2C2A">customer_name</text>
      <text x="36"  y="118" dominantBaseline="central" fontSize="11" fill="#2C2C2A">phone</text>
      <text x="36"  y="136" dominantBaseline="central" fontSize="11" fill="#2C2C2A">email</text>
      <text x="36"  y="154" dominantBaseline="central" fontSize="11" fill="#2C2C2A">address</text>
      <text x="36"  y="172" dominantBaseline="central" fontSize="11" fill="#2C2C2A">joined_at</text>

      {/* ── RESTAURANT ── */}
      <rect x="295" y="30" width="170" height="185" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="1"/>
      <rect x="295" y="30" width="170" height="36" rx="8" fill="#1D9E75"/>
      <rect x="295" y="52" width="170" height="14" fill="#1D9E75"/>
      <text x="380"  y="52" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="600" fill="#fff">RESTAURANT</text>
      <text x="311"  y="82"  dominantBaseline="central" fontSize="11" fill="#085041">🔑 restaurant_id</text>
      <text x="311"  y="100" dominantBaseline="central" fontSize="11" fill="#2C2C2A">name</text>
      <text x="311"  y="118" dominantBaseline="central" fontSize="11" fill="#2C2C2A">category</text>
      <text x="311"  y="136" dominantBaseline="central" fontSize="11" fill="#2C2C2A">address</text>
      <text x="311"  y="154" dominantBaseline="central" fontSize="11" fill="#2C2C2A">phone</text>
      <text x="311"  y="172" dominantBaseline="central" fontSize="11" fill="#2C2C2A">min_order_price</text>

      {/* ── MENU ── */}
      <rect x="575" y="30" width="160" height="165" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="1"/>
      <rect x="575" y="30" width="160" height="36" rx="8" fill="#1D9E75"/>
      <rect x="575" y="52" width="160" height="14" fill="#1D9E75"/>
      <text x="655" y="52" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="600" fill="#fff">MENU</text>
      <text x="591" y="82"  dominantBaseline="central" fontSize="11" fill="#085041">🔑 menu_id</text>
      <text x="591" y="100" dominantBaseline="central" fontSize="11" fill="#5F5E5A">🔗 restaurant_id</text>
      <text x="591" y="118" dominantBaseline="central" fontSize="11" fill="#2C2C2A">menu_name</text>
      <text x="591" y="136" dominantBaseline="central" fontSize="11" fill="#2C2C2A">price</text>
      <text x="591" y="154" dominantBaseline="central" fontSize="11" fill="#2C2C2A">description</text>
      <text x="591" y="172" dominantBaseline="central" fontSize="11" fill="#2C2C2A">is_available</text>

      {/* ── ORDER ── (중앙) */}
      <rect x="210" y="280" width="170" height="205" rx="8" fill="#FAEEDA" stroke="#BA7517" strokeWidth="1.5"/>
      <rect x="210" y="280" width="170" height="36" rx="8" fill="#BA7517"/>
      <rect x="210" y="302" width="170" height="14" fill="#BA7517"/>
      <text x="295"  y="302" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="600" fill="#fff">ORDERS</text>
      <text x="226"  y="332" dominantBaseline="central" fontSize="11" fill="#633806">🔑 order_id</text>
      <text x="226"  y="350" dominantBaseline="central" fontSize="11" fill="#854F0B">🔗 customer_id</text>
      <text x="226"  y="368" dominantBaseline="central" fontSize="11" fill="#854F0B">🔗 restaurant_id</text>
      <text x="226"  y="386" dominantBaseline="central" fontSize="11" fill="#2C2C2A">total_price</text>
      <text x="226"  y="404" dominantBaseline="central" fontSize="11" fill="#2C2C2A">status</text>
      <text x="226"  y="422" dominantBaseline="central" fontSize="11" fill="#2C2C2A">delivery_address</text>
      <text x="226"  y="440" dominantBaseline="central" fontSize="11" fill="#2C2C2A">ordered_at</text>
      <text x="226"  y="458" dominantBaseline="central" fontSize="11" fill="#2C2C2A">payment_method</text>

      {/* ── ORDER_ITEM ── */}
      <rect x="430" y="280" width="160" height="165" rx="8" fill="#FAEEDA" stroke="#BA7517" strokeWidth="1"/>
      <rect x="430" y="280" width="160" height="36" rx="8" fill="#BA7517"/>
      <rect x="430" y="302" width="160" height="14" fill="#BA7517"/>
      <text x="510" y="302" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="600" fill="#fff">ORDER_ITEM</text>
      <text x="446" y="332" dominantBaseline="central" fontSize="11" fill="#633806">🔑 item_id</text>
      <text x="446" y="350" dominantBaseline="central" fontSize="11" fill="#854F0B">🔗 order_id</text>
      <text x="446" y="368" dominantBaseline="central" fontSize="11" fill="#854F0B">🔗 menu_id</text>
      <text x="446" y="386" dominantBaseline="central" fontSize="11" fill="#2C2C2A">quantity</text>
      <text x="446" y="404" dominantBaseline="central" fontSize="11" fill="#2C2C2A">unit_price</text>
      <text x="446" y="422" dominantBaseline="central" fontSize="11" fill="#2C2C2A">subtotal</text>

      {/* ── DELIVERY ── */}
      <rect x="20" y="280" width="160" height="185" rx="8" fill="#FCEBEB" stroke="#E24B4A" strokeWidth="1"/>
      <rect x="20" y="280" width="160" height="36" rx="8" fill="#E24B4A"/>
      <rect x="20" y="302" width="160" height="14" fill="#E24B4A"/>
      <text x="100" y="302" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="600" fill="#fff">DELIVERY</text>
      <text x="36"  y="332" dominantBaseline="central" fontSize="11" fill="#A32D2D">🔑 delivery_id</text>
      <text x="36"  y="350" dominantBaseline="central" fontSize="11" fill="#E24B4A">🔗 order_id</text>
      <text x="36"  y="368" dominantBaseline="central" fontSize="11" fill="#E24B4A">🔗 rider_id</text>
      <text x="36"  y="386" dominantBaseline="central" fontSize="11" fill="#2C2C2A">pickup_time</text>
      <text x="36"  y="404" dominantBaseline="central" fontSize="11" fill="#2C2C2A">delivered_time</text>
      <text x="36"  y="422" dominantBaseline="central" fontSize="11" fill="#2C2C2A">status</text>
      <text x="36"  y="440" dominantBaseline="central" fontSize="11" fill="#2C2C2A">distance_km</text>

      {/* ── RIDER ── */}
      <rect x="600" y="280" width="140" height="165" rx="8" fill="#FCEBEB" stroke="#E24B4A" strokeWidth="1"/>
      <rect x="600" y="280" width="140" height="36" rx="8" fill="#E24B4A"/>
      <rect x="600" y="302" width="140" height="14" fill="#E24B4A"/>
      <text x="670" y="302" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="600" fill="#fff">RIDER</text>
      <text x="616" y="332" dominantBaseline="central" fontSize="11" fill="#A32D2D">🔑 rider_id</text>
      <text x="616" y="350" dominantBaseline="central" fontSize="11" fill="#2C2C2A">rider_name</text>
      <text x="616" y="368" dominantBaseline="central" fontSize="11" fill="#2C2C2A">phone</text>
      <text x="616" y="386" dominantBaseline="central" fontSize="11" fill="#2C2C2A">vehicle_type</text>
      <text x="616" y="404" dominantBaseline="central" fontSize="11" fill="#2C2C2A">is_available</text>
      <text x="616" y="422" dominantBaseline="central" fontSize="11" fill="#2C2C2A">region</text>

      {/* ── Relations ── */}
      {/* CUSTOMER → ORDER */}
      <line x1="97" y1="215" x2="255" y2="280" stroke="#378ADD" strokeWidth="1.5" markerEnd="url(#arr-ord)"/>
      <text x="128" y="244" fontSize="10" fill="#378ADD">1 : N</text>

      {/* RESTAURANT → ORDER */}
      <line x1="340" y1="215" x2="320" y2="280" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arr-ord)"/>
      <text x="338" y="244" fontSize="10" fill="#1D9E75">1 : N</text>

      {/* RESTAURANT → MENU */}
      <line x1="465" y1="120" x2="573" y2="120" stroke="#1D9E75" strokeWidth="1.5" markerEnd="url(#arr-ord)"/>
      <text x="488" y="112" fontSize="10" fill="#1D9E75">1</text>
      <text x="555" y="112" fontSize="10" fill="#1D9E75">N</text>

      {/* ORDER → ORDER_ITEM */}
      <line x1="380" y1="360" x2="428" y2="360" stroke="#BA7517" strokeWidth="1.5" markerEnd="url(#arr-ord)"/>
      <text x="390" y="352" fontSize="10" fill="#BA7517">1</text>
      <text x="412" y="352" fontSize="10" fill="#BA7517">N</text>

      {/* MENU → ORDER_ITEM */}
      <line x1="655" y1="195" x2="530" y2="280" stroke="#1D9E75" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr-ord)"/>
      <text x="614" y="232" fontSize="10" fill="#1D9E75">1 : N</text>

      {/* ORDER → DELIVERY */}
      <line x1="210" y1="370" x2="182" y2="370" stroke="#E24B4A" strokeWidth="1.5" markerEnd="url(#arr-ord)"/>
      <text x="188" y="362" fontSize="10" fill="#E24B4A">1</text>
      <text x="204" y="362" fontSize="10" fill="#E24B4A">1</text>

      {/* RIDER → DELIVERY */}
      <line x1="600" y1="360" x2="182" y2="390" stroke="#E24B4A" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr-ord)"/>
      <text x="420" y="372" fontSize="10" fill="#E24B4A">1 : N</text>

      {/* ── Trigger/Procedure 메모 ── */}
      <rect x="20" y="532" width="720" height="22" rx="4" fill="#F7F6F3"/>
      <text x="30" y="543" dominantBaseline="central" fontSize="10" fill="#888780">📌 Trigger: 주문 상태 변경 시 DELIVERY.status 자동 갱신</text>
      <text x="370" y="543" dominantBaseline="central" fontSize="10" fill="#888780">📌 Procedure: 월별 매출 집계 / 라이더 배달 건수 통계</text>

      {/* ── Legend ── */}
      <rect x="20"  y="506" width="10" height="10" rx="2" fill="#EBF4FF" stroke="#378ADD" strokeWidth="0.5"/>
      <text x="36"  y="511" dominantBaseline="central" fontSize="10" fill="#888780">고객</text>
      <rect x="80"  y="506" width="10" height="10" rx="2" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="96"  y="511" dominantBaseline="central" fontSize="10" fill="#888780">식당 · 메뉴</text>
      <rect x="180" y="506" width="10" height="10" rx="2" fill="#FAEEDA" stroke="#BA7517" strokeWidth="0.5"/>
      <text x="196" y="511" dominantBaseline="central" fontSize="10" fill="#888780">주문 · 주문항목</text>
      <rect x="310" y="506" width="10" height="10" rx="2" fill="#FCEBEB" stroke="#E24B4A" strokeWidth="0.5"/>
      <text x="326" y="511" dominantBaseline="central" fontSize="10" fill="#888780">배달 · 라이더</text>
      <text x="440" y="511" dominantBaseline="central" fontSize="10" fill="#085041">🔑 PK</text>
      <text x="490" y="511" dominantBaseline="central" fontSize="10" fill="#854F0B">🔗 FK</text>
    </svg>
  );
}

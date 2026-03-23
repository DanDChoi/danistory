export default function CareerSection() {
    return (
        <section id="career" className="border-t pt-10">
            <h2 className="text-2xl font-semibold mb-4 tracking-tight leading-tight">Career</h2>
            <div>
                <p className="font-semibold text-lg">(주)엑시온그룹</p>
                <p className="text-sm text-gray-500">패션 이커머스 플랫폼 WIZWID 운영 및 기능 개선</p>
                <p className="text-sm text-gray-400">2022.10 ~ 2025.05</p>
                <ul className="list-disc ml-5 text-gray-700 mt-3 space-y-1">
                    <li>주문·결제·상품 전시 등 사용자 흐름 전반 유지 및 고도화</li>
                    <li>BackOffice / PartnerOffice 실무 기능 개발 및 운영 편의성 향상</li>
                    <li>PostgreSQL 슬로우 쿼리 튜닝, 인덱스 최적화, 반복 쿼리 제거</li>
                    <li>MD 상품평 / 자체페이(WIZpay) / 대량 엑셀 처리 기능 등 프로젝트 수행</li>
                </ul>
            </div>
        </section>
    );
}
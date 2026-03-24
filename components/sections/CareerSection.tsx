export default function CareerSection() {
  const achievements = [
    "주문·결제·상품 전시 등 사용자 흐름 전반 유지 및 고도화",
    "BackOffice / PartnerOffice 실무 기능 개발 및 운영 편의성 향상",
    "PostgreSQL 슬로우 쿼리 튜닝, 인덱스 최적화, 반복 쿼리 제거",
    "MD 상품평 / 자체페이(WIZpay) / 대량 엑셀 처리 기능 등 프로젝트 수행",
  ];

  return (
    <section id="career" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">Career</h2>

        <div className="relative bg-white border border-gray-200/70 rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

          {/* Award Badge */}
          <div className="absolute top-6 right-6">
            <div className="px-3 py-1.5 rounded-full bg-blue-600 text-white text-sm font-medium shadow-lg">
              🏆 2023 우수사원
            </div>
          </div>

          {/* Company Info */}
          <div className="flex gap-6 mb-10">

            <div className="w-16 h-16 rounded-xl bg-blue-50/70 flex items-center justify-center text-blue-600 text-2xl">
              🏢
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                (주)엑시온그룹
              </h3>

              <p className="text-blue-600 font-medium mb-2">
                패션 이커머스 플랫폼 WIZWID 운영 및 기능 개선
              </p>

              <p className="text-sm text-gray-500">
                2022.10 - 2025.05 (2년 7개월)
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <p className="text-sm font-semibold text-gray-400 mb-4">주요 성과</p>

            <div className="space-y-4">
              {achievements.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✔</span>
                  <p className="text-gray-700 leading-relaxed text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
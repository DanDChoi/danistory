export default function SkillsSection() {
  const skillCategories = [
    {
      icon: "🖥️",
      title: "Back-End",
      items: [
        { name: "Java / Spring MVC", desc: "이커머스 플랫폼 전반의 주문·결제 로직 및 API 개발" },
        { name: "Spring Batch", desc: "정기 배치 작업 및 자동화 처리 로직 구현" },
        { name: "MyBatis", desc: "복잡한 비즈니스 로직 쿼리 처리 및 XML 기반 매핑" },
        { name: "Gradle / Maven", desc: "프로젝트 환경에 따른 빌드 설정 및 의존성 관리" },
      ],
    },
    {
      icon: "🧩",
      title: "Front-End",
      items: [
        { name: "HTML / CSS / JSTL", desc: "관리자 화면 구성 및 유지보수 중심의 UI 설계" },
        { name: "JavaScript / jQuery", desc: "BackOffice/PartnerOffice UI 동작 구현" },
        { name: "Ajax", desc: "비동기 통신 기반의 데이터 처리 및 화면 반영" },
      ],
    },
    {
      icon: "☁️",
      title: "DevOps",
      items: [
        { name: "AWS EC2 / RDS", desc: "운영 환경에서 EC2 기반 WAS와 RDS PostgreSQL 운용" },
        { name: "AWS S3", desc: "상품 이미지 및 첨부파일 업로드 처리" },
        { name: "PostgreSQL", desc: "슬로우 쿼리 튜닝, 인덱스 설계, 대량 트랜잭션 처리" },
        { name: "Jennifer APM", desc: "WAS 병목 구간 분석 및 응답 지연 원인 파악" },
        { name: "CloudWatch / GTM", desc: "로그 모니터링 및 전환 추적 태그 관리" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-18 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white border border-gray-200/70 rounded-xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50/70 flex items-center justify-center text-blue-600">
                  <span className="text-lg">{cat.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{cat.title}</h3>
              </div>
              {/* Items */}
              <div className="space-y-5">
                {cat.items.map((it) => (
                  <div key={it.name}>
                    <p className="text-sm font-semibold text-gray-900 mb-1">{it.name}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{it.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
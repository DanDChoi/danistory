import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  데이터                                                               */
/* ------------------------------------------------------------------ */

const wizwidProjects = [
  {
    slug: "slow-query",
    index: "01",
    category: "성능 최적화",
    title: "슬로우 쿼리 개선",
    period: "2023.10 – 2023.12",
    description:
        "로그인, 마이페이지, 주문 상세 등 주요 페이지의 응답 속도를 평균 90% 이상 개선했습니다. 단순 튜닝을 넘어 업무 흐름을 고려한 쿼리 로직 재설계를 진행했습니다.",
    type: "PERFORMANCE",
    typeStyle: "bg-blue-50 text-blue-800",
    accentColor: "before:bg-blue-500",
    metrics: [
      { value: "97.7%", label: "최대 응답속도 개선" },
      { value: "3,000→70ms", label: "마이페이지 리뷰" },
      { value: "90%+", label: "주요 페이지 평균" },
    ],
    tech: ["PostgreSQL", "EXPLAIN ANALYZE", "pgBadger", "AWS RDS", "CloudWatch"],
  },
  {
    slug: "wizpay",
    index: "02",
    category: "결제 시스템",
    title: "자체페이 (WIZpay) 개발",
    period: "2023.01 – 2023.04",
    description:
        "주문서 진입 시 회원의 카드 정보를 외부 API로 실시간 조회하여 카드사별 무이자·할부 옵션을 자동 분기하는 결제 시스템을 개발했습니다. PC/모바일 웹/앱 전 환경에서 일관된 결제 경험을 제공합니다.",
    type: "FEATURE",
    typeStyle: "bg-violet-50 text-violet-800",
    accentColor: "before:bg-violet-500",
    metrics: [
      { value: "3-in-1", label: "PC / 모바일 / 앱" },
      { value: "자동화", label: "카드사별 옵션 분기" },
      { value: "CS 감소", label: "수동 대응 부담 완화" },
    ],
    tech: ["Java", "Spring MVC", "PostgreSQL", "REST API", "jQuery"],
  },
  {
    slug: "md-review",
    index: "03",
    category: "기능 개발",
    title: "MD 상품평 기능 개발",
    period: "2023.05",
    description:
        "사이트 리뉴얼 이후 사라졌던 MD 상품평 기능을 복구·개선하여 BackOffice에 신규 관리 기능을 구현했습니다. AWS S3 이중 버킷 구조로 이미지 처리 흐름을 설계했습니다.",
    type: "FEATURE",
    typeStyle: "bg-emerald-50 text-emerald-800",
    accentColor: "before:bg-emerald-500",
    metrics: [
      { value: "S3", label: "이중 버킷 이미지 처리" },
      { value: "일괄", label: "BackOffice 등록 지원" },
      { value: "전시", label: "프론트 모듈 연동" },
    ],
    tech: ["Java", "Spring MVC", "AWS S3", "PostgreSQL", "jQuery", "JSTL"],
  },
  {
    slug: "bo-po-improvement",
    index: "04",
    category: "운영 자동화",
    title: "BO/PO 사용성 개선",
    period: "2022.10 – 2022.12",
    description:
        "브랜드 담당 MD 일괄변경 기능과 입점사 퇴점관리 기능을 신규 도입하여 BackOffice/PartnerOffice의 운영 효율성을 높였습니다. 기존 수작업을 엑셀 업로드 기반으로 자동화했습니다.",
    type: "AUTOMATION",
    typeStyle: "bg-amber-50 text-amber-800",
    accentColor: "before:bg-amber-500",
    metrics: [
      { value: "대량", label: "엑셀 일괄 변경 처리" },
      { value: "자동화", label: "퇴점 프로세스 설계" },
      { value: "BO/PO", label: "운영 효율성 향상" },
    ],
    tech: ["Java", "Spring MVC", "Apache POI", "PostgreSQL", "jQuery"],
  },
];

const kosmoProjects = [
  {
    slug: "togather",
    index: "01",
    category: "팀 프로젝트",
    title: "Togather",
    period: "2022.03 – 2022.04",
    description:
        "지역별·관심사별 오프라인 모임을 할 수 있는 웹 커뮤니티 플랫폼입니다. 관심사 기반 정기 모임 기능을 설계·구현하고, 프론트페이지 구조 설계 및 git 형상관리를 총괄했습니다.",
    type: "TEAM",
    typeStyle: "bg-emerald-50 text-emerald-800",
    accentColor: "before:bg-emerald-500",
    metrics: [
      { value: "팀장", label: "형상관리 총괄" },
      { value: "모임", label: "관심사 기반 기능" },
      { value: "게시판", label: "사진첩 · 권한 설계" },
    ],
    tech: ["Java", "Spring", "OracleDB", "MyBatis", "Maven"],
    links: {
      github: "https://github.com/DanDChoi/Projects/tree/main/Togather-Dan",
      youtube: "https://youtu.be/qxBty3xQ-WU",
    },
  },
  {
    slug: "order-system-db",
    index: "02",
    category: "개인 프로젝트",
    title: "주문 시스템 데이터베이스 구축",
    period: "2021.12 – 2022.01",
    description:
        "Oracle Database를 활용한 배달주문 시스템 DB 설계 및 구축 프로젝트입니다. DDL/DML, 트리거, 프로시저 등 실무 중심 SQL을 작성하며 데이터베이스 전반의 이해도를 높였습니다.",
    type: "DATABASE",
    typeStyle: "bg-blue-50 text-blue-800",
    accentColor: "before:bg-blue-500",
    metrics: [
      { value: "DB", label: "전체 설계 · 구축" },
      { value: "트리거", label: "프로시저 작성" },
      { value: "관계", label: "테이블 간 흐름 설계" },
    ],
    tech: ["Oracle DB", "DDL/DML", "Trigger", "Procedure"],
    links: {
      github: "https://github.com/DanDChoi/Projects/tree/main/OracleDB",
    },
  },
  {
    slug: "covid-sweepers",
    index: "03",
    category: "개인 프로젝트",
    title: "Covid-Sweepers",
    period: "2021.12",
    description:
        "Java Swing 기반으로 구현한 지뢰찾기 게임입니다. GUI 요소 설계 및 이벤트 처리, Multi-Thread와 Socket을 이용한 다자간 채팅 기능까지 구현했습니다.",
    type: "GAME",
    typeStyle: "bg-rose-50 text-rose-800",
    accentColor: "before:bg-rose-500",
    metrics: [
      { value: "GUI", label: "Swing 게임 구현" },
      { value: "멀티", label: "Thread · Socket" },
      { value: "채팅", label: "다자간 채팅 기능" },
    ],
    tech: ["Java", "Swing", "Multi-Thread", "Socket"],
    links: {
      github: "https://github.com/DanDChoi/Projects/tree/main/covid-sweepers",
    },
  },
];

/* ------------------------------------------------------------------ */
/*  공통 카드 컴포넌트                                                    */
/* ------------------------------------------------------------------ */

type Project = {
  slug: string;
  index: string;
  category: string;
  title: string;
  period: string;
  description: string;
  type: string;
  typeStyle: string;
  accentColor: string;
  metrics: { value: string; label: string }[];
  tech: string[];
  links?: { github?: string; youtube?: string };
};

function ProjectCard({ project }: { project: Project }) {
  return (
      <Link
          href={`/projects/${project.slug}`}
          className={[
            "group relative block bg-white rounded-2xl border border-gray-100",
            "px-5 py-6 md:px-7 md:py-7",
            "transition-all duration-200",
            "hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-sm",
            "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px]",
            "before:rounded-l-2xl before:opacity-0 before:transition-opacity before:duration-200",
            "hover:before:opacity-100",
            project.accentColor,
          ].join(" ")}
      >
        {/* Top */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <p className="font-mono text-[11px] text-gray-400 tracking-wide shrink-0">
                {project.index} / {project.category}
              </p>
              <span className="font-mono text-[11px] text-gray-300 hidden sm:inline">·</span>
              <p className="font-mono text-[11px] text-gray-400 hidden sm:block">
                {project.period}
              </p>
            </div>
            <h2 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight leading-snug">
              {project.title}
            </h2>
            <p className="font-mono text-[11px] text-gray-400 mt-0.5 sm:hidden">
              {project.period}
            </p>
          </div>
          <span
              className={[
                "font-mono text-[10px] tracking-widest font-medium",
                "px-2.5 py-1 rounded-full shrink-0 mt-0.5",
                project.typeStyle,
              ].join(" ")}
          >
          {project.type}
        </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 md:gap-3 mb-5">
          {project.metrics.map((metric) => (
              <div
                  key={metric.label}
                  className="bg-gray-50 rounded-xl px-3 py-2.5 md:px-4 md:py-3"
              >
                <p className="font-mono text-sm md:text-base font-medium text-gray-900 leading-none mb-1 truncate">
                  {metric.value}
                </p>
                <p className="text-[10px] md:text-[11px] text-gray-400 leading-tight">
                  {metric.label}
                </p>
              </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
                <span
                    key={t}
                    className="font-mono text-[10px] md:text-[11px] text-gray-400 border border-gray-200 rounded px-2 py-0.5"
                >
              {t}
            </span>
            ))}
          </div>
          <span className="text-xs font-medium text-gray-400 flex items-center gap-1 group-hover:text-gray-600 transition-colors shrink-0">
          자세히 보기
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
        </div>
      </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  섹션 헤더                                                            */
/* ------------------------------------------------------------------ */

function SectionHeader({
                         label,
                         company,
                         period,
                       }: {
  label: string;
  company: string;
  period: string;
}) {
  return (
      <div className="flex items-center gap-4 mb-6">
        <div className="w-1 h-10 rounded-full bg-gray-200 shrink-0" />
        <div>
          <p className="font-mono text-[11px] text-gray-400 tracking-widest mb-0.5">
            {label}
          </p>
          <p className="text-base font-bold text-gray-800 tracking-tight leading-none">
            {company}
            <span className="font-mono text-xs text-gray-400 font-normal ml-2">
            {period}
          </span>
          </p>
        </div>
      </div>
  );
}

/* ------------------------------------------------------------------ */
/*  페이지                                                               */
/* ------------------------------------------------------------------ */

export default function ProjectsPage() {
  return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">

          {/* Page Header */}
          <header className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-3">
              Projects
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
              실무와 교육 과정에서 진행한 프로젝트를 정리했습니다.
              성능 최적화, 결제 시스템 개발, 운영 자동화, 커뮤니티 플랫폼까지 다양한 경험을 담았습니다.
            </p>
          </header>

          {/* WIZWID 섹션 */}
          <section className="mb-12 md:mb-16">
            <SectionHeader
                label="WORK EXPERIENCE"
                company="(주)엑시온그룹 · WIZWID"
                period="2022.10 – 2025.05"
            />
            <div className="flex flex-col gap-4 md:gap-5">
              {wizwidProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>

          {/* 구분선 */}
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="font-mono text-[11px] text-gray-400 tracking-widest shrink-0">
            EDUCATION
          </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* KOSMO 섹션 */}
          <section>
            <SectionHeader
                label="TRAINING PROJECT"
                company="한국소프트웨어 인재개발원 (KOSMO)"
                period="2021.11 – 2022.04"
            />
            <div className="flex flex-col gap-4 md:gap-5">
              {kosmoProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>

        </div>
      </main>
  );
}


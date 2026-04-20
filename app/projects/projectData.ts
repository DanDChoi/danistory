// app/projects/[slug]/projectData.ts

export type Metric = {
  value: string;
  label: string;
};

export type Section = {
  title: string;
  items: string[];
};

export type Project = {
  slug: string;
  index: string;
  category: string;
  company: string;
  companyPeriod: string;
  title: string;
  period: string;
  type: string;
  typeStyle: string;
  accentClass: string;
  accentHex: string;
  summary: string;
  metrics: Metric[];
  tech: string[];
  sections: Section[];
  links?: {
    github?: string;
    youtube?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "slow-query",
    index: "01",
    category: "성능 최적화",
    company: "(주)엑시온그룹 · WIZWID",
    companyPeriod: "2022.10 – 2025.05",
    title: "슬로우 쿼리 개선",
    period: "2023.10 – 2023.12",
    type: "PERFORMANCE",
    typeStyle: "bg-blue-50 text-blue-800",
    accentClass: "bg-blue-500",
    accentHex: "#378ADD",
    summary:
      "로그인, 마이페이지, 주문 상세 등 주요 페이지에서 발생하는 응답 지연을 분석하고,쿼리 로직 재설계 및 인덱스 최적화를 통해 평균 90% 이상의 응답속도 개선을 달성했습니다.",
    metrics: [
      { value: "97.7%", label: "최대 응답속도 개선" },
      { value: "3,000→70ms", label: "마이페이지 리뷰" },
      { value: "90%+", label: "주요 페이지 평균" },
    ],
    tech: ["PostgreSQL", "EXPLAIN ANALYZE", "pgBadger", "DataGrip", "AWS RDS", "CloudWatch", "pg_stat_statements", "auto_explain"],
    sections: [
      {
        title: "성과",
        items: [
          "로그인, 마이페이지, 주문 상세 등 주요 페이지 응답 속도 평균 90% 이상 개선",
          "마이페이지 상품 리뷰: 3,000ms → 70ms (약 97.7% 향상)",
          "클레임 조회: 2,600ms → 117ms (약 95.5% 향상)",
          "쿠폰 발급 Count: 500ms → 29ms (약 94.2% 향상)",
          "전체 페이지 로딩 성능 향상으로 사용자 이탈률 감소 및 고객사 만족도 증가",
        ],
      },
      {
        title: "역할",
        items: [
          "PostgreSQL 기반 대형 트랜잭션 쿼리에 대해 실행 계획(Execution Plan) 분석 및 인덱스 최적화 설계",
          "공통 모듈에서 반복 호출되던 중복 쿼리 제거, 필요한 데이터만 조회하도록 SELECT 범위 제한",
          "단순 튜닝을 넘어 업무 흐름을 고려한 쿼리 로직 재설계 및 적용",
        ],
      },
      {
        title: "기술 상세",
        items: [
          "pg_stat_statements, auto_explain 모듈을 활용한 슬로우 쿼리 로그 수집",
          "EXPLAIN ANALYZE, pgBadger, DataGrip을 통한 실행 계획 상세 분석",
          "개발 환경에서 쿼리 튜닝 A/B 테스트 진행 후 운영 서버에 점진적 반영",
          "AWS RDS Slow Query Log + CloudWatch 지표 연동으로 장기적인 모니터링 체계 구성",
        ],
      },
    ],
  },
  {
    slug: "wizpay",
    index: "02",
    category: "결제 시스템",
    company: "(주)엑시온그룹 · WIZWID",
    companyPeriod: "2022.10 – 2025.05",
    title: "자체페이 (WIZpay) 개발",
    period: "2023.01 – 2023.04",
    type: "FEATURE",
    typeStyle: "bg-violet-50 text-violet-800",
    accentClass: "bg-violet-500",
    accentHex: "#7F77DD",
    summary:
      "주문서 진입 시 회원의 카드 정보를 외부 API로 실시간 조회하여 카드사별 무이자·할부 옵션을 자동 분기하는 자체 결제 시스템을 개발했습니다. PC·모바일 웹·앱 전 환경에서 일관된 결제 경험을 제공합니다.",
    metrics: [
      { value: "3-in-1", label: "PC / 모바일 / 앱" },
      { value: "자동화", label: "카드사별 옵션 분기" },
      { value: "CS 감소", label: "수동 대응 부담 완화" },
    ],
    tech: ["Java", "Spring MVC", "PostgreSQL", "REST API", "jQuery", "Postman"],
    sections: [
      {
        title: "성과",
        items: [
          "주문서 진입 시, 회원이 등록한 카드 정보를 외부 API로 실시간 조회하여 사용자 맞춤 결제 옵션 제공",
          "카드사별 무이자, 일반 할부, 체크/신용카드 여부에 따라 자동 분기된 UI로 사용자 편의성 향상",
          "PC / 모바일 웹 / 앱 환경에서 동일한 결제 경험 제공, 플랫폼별 UX 일관성 확보",
          "복잡한 카드사 정책을 자동화하여 CS 감소 및 영업팀의 수동 대응 부담 완화",
        ],
      },
      {
        title: "역할",
        items: [
          "외부 카드사 API 연동 및 응답 데이터 파싱 처리",
          "카드 조건에 따라 결제 옵션을 동적으로 구성하는 로직 구현",
          "주문서 진입 시점에 카드 정보 조회 및 UI에 자동 반영되도록 API 연동 설계",
          "jQuery 기반 UI 요소(select box 등) 동작 로직 구현 및 PC/Mobile/App 플랫폼별 이벤트 처리 분기",
        ],
      },
      {
        title: "기술 상세",
        items: [
          "Java 및 Spring MVC 기반의 주문서 API 설계 및 카드사 연동 로직 구현",
          "PostgreSQL을 활용한 카드 정보 및 결제 조건 저장/조회 처리",
          "jQuery를 활용한 UI 요소의 동적 렌더링 및 사용자 선택 이벤트 처리",
          "REST API 통신을 위한 요청/응답 처리 및 Postman 기반 테스트 수행",
          "다양한 디바이스 환경을 고려한 이벤트 흐름 제어 및 반응형 대응",
        ],
      },
    ],
  },
  {
    slug: "md-review",
    index: "03",
    category: "기능 개발",
    company: "(주)엑시온그룹 · WIZWID",
    companyPeriod: "2022.10 – 2025.05",
    title: "MD 상품평 기능 개발",
    period: "2023.05",
    type: "FEATURE",
    typeStyle: "bg-emerald-50 text-emerald-800",
    accentClass: "bg-emerald-500",
    accentHex: "#1D9E75",
    summary:
      "사이트 리뉴얼 이후 사라졌던 MD 상품평 기능을 복구·개선하여 BackOffice에 신규 관리 기능을 구현했습니다. AWS S3 이중 버킷 구조로 안전한 이미지 처리 흐름을 설계하고 전시 모듈과 연동했습니다.",
    metrics: [
      { value: "S3", label: "이중 버킷 이미지 처리" },
      { value: "일괄", label: "BackOffice 등록 지원" },
      { value: "전시", label: "프론트 모듈 연동" },
    ],
    tech: ["Java", "Spring MVC", "AWS S3", "PostgreSQL", "jQuery", "JSTL", "Git"],
    sections: [
      {
        title: "성과",
        items: [
          "사이트 리뉴얼 이후 사라졌던 기능을 복구 및 개선하여 BackOffice에 신규 MD 상품평 관리 기능 구현",
          "텍스트와 이미지 기반의 상품평 등록 기능 제공으로 브랜드 홍보 및 전환율 개선에 기여",
          "BackOffice에서 일괄 등록 가능해지며 운영 효율 향상",
        ],
      },
      {
        title: "역할",
        items: [
          "상품평 등록 화면 및 데이터 처리 로직 전체 설계",
          "AWS S3 임시 버킷에 이미지 업로드 → 등록 시 메인 버킷으로 복사되는 파일 처리 흐름 구현",
          "관리자 화면 UI/UX 구현 및 저장/조회 API 개발 (jQuery + Spring MVC 기반)",
          "등록된 상품평이 프론트에 반영되도록 전시 모듈 연동 담당",
        ],
      },
      {
        title: "기술 상세",
        items: [
          "Java, Spring MVC 기반의 상품평 등록/조회 API 개발",
          "AWS S3를 활용한 이미지 업로드 및 버킷 간 복사 처리 구현",
          "jQuery와 JSTL을 활용한 BackOffice 내 동적 UI 구성",
          "PostgreSQL 기반 데이터 저장 및 연동",
          "Git 및 SourceTree를 활용한 버전 관리, IntelliJ 기반 개발",
        ],
      },
    ],
  },
  {
    slug: "bo-po-improvement",
    index: "04",
    category: "운영 자동화",
    company: "(주)엑시온그룹 · WIZWID",
    companyPeriod: "2022.10 – 2025.05",
    title: "BO/PO 사용성 개선",
    period: "2022.10 – 2022.12",
    type: "AUTOMATION",
    typeStyle: "bg-amber-50 text-amber-800",
    accentClass: "bg-amber-500",
    accentHex: "#BA7517",
    summary:
      "브랜드 담당 MD 일괄변경 기능과 입점사 퇴점관리 기능을 신규 도입하여 BackOffice/PartnerOffice의 운영 효율성을 높였습니다. 기존 수작업 방식을 엑셀 업로드 기반 자동화로 전환했습니다.",
    metrics: [
      { value: "대량", label: "엑셀 일괄 변경 처리" },
      { value: "자동화", label: "퇴점 프로세스 설계" },
      { value: "BO/PO", label: "운영 효율성 향상" },
    ],
    tech: ["Java", "Spring MVC", "Apache POI", "PostgreSQL", "jQuery", "Git", "Notion"],
    sections: [
      {
        title: "성과",
        items: [
          "브랜드 담당 MD 일괄변경 기능으로 기존 수작업 방식에서 벗어나 엑셀 업로드만으로 수십~수백 건의 변경 요청을 빠르게 반영",
          "입점사 퇴점관리 기능을 신규로 도입하여 퇴점 업체를 시스템 내에서 자동으로 구분/관리 가능",
          "BackOffice/PartnerOffice 사용자들의 운영 효율성 및 데이터 일관성 향상에 기여",
        ],
      },
      {
        title: "역할",
        items: [
          "브랜드/MD 정보 변경 요청 흐름 파악 후, 엑셀 기반 대량 변경 등록 기능 설계 및 구현",
          "엑셀 데이터 유효성 검증 및 변경 내역 로깅 처리",
          "입점사 상태 및 계약 만료 여부에 따른 퇴점 프로세스 설계 및 업무 흐름 반영",
          "관리자 화면에서 퇴점 업체를 식별 및 관리할 수 있도록 데이터 모델 및 전시 로직 설계",
        ],
      },
      {
        title: "기술 상세",
        items: [
          "Java, Spring MVC 기반의 엑셀 업로드 처리 및 데이터 반영 로직 구현",
          "Apache POI를 활용한 엑셀 파일 파싱 및 유효성 검사",
          "PostgreSQL 기반의 상태값 관리 및 업체별 퇴점 플래그 로직 처리",
          "jQuery 기반의 관리자 화면 UI 처리 및 결과 피드백 표시",
          "Git, IntelliJ, Notion을 통한 이슈 관리 및 커뮤니케이션",
        ],
      },
    ],
  },
  {
    slug: "togather",
    index: "01",
    category: "팀 프로젝트",
    company: "한국소프트웨어 인재개발원 (KOSMO)",
    companyPeriod: "2021.11 – 2022.04",
    title: "Togather",
    period: "2022.03 – 2022.04",
    type: "TEAM",
    typeStyle: "bg-emerald-50 text-emerald-800",
    accentClass: "bg-emerald-500",
    accentHex: "#1D9E75",
    summary:
      "지역별·관심사별 오프라인 모임을 할 수 있는 웹 커뮤니티 플랫폼입니다. 관심사 기반 정기 모임 기능을 설계·구현하고, 프론트 구조 설계 및 Git 형상관리를 총괄했습니다.",
    metrics: [
      { value: "팀장", label: "형상관리 총괄" },
      { value: "모임", label: "관심사 기반 기능" },
      { value: "게시판", label: "사진첩 · 권한 설계" },
    ],
    tech: ["Java", "Spring", "OracleDB", "MyBatis", "Maven", "Git", "Notion"],
    links: {
      github: "https://github.com/DanDChoi/Projects/tree/main/Togather-Dan",
      youtube: "https://youtu.be/qxBty3xQ-WU",
    },
    sections: [
      {
        title: "프로젝트 개요",
        items: [
          "지역별, 관심사별 오프라인 모임을 할 수 있는 웹 커뮤니티 플랫폼 서비스",
          "팀 프로젝트로 진행, 형상관리 및 전반적인 진행 총괄 담당",
        ],
      },
      {
        title: "담당 역할",
        items: [
          "관심사 기반 정기 모임 기능 설계 및 구현",
          "모임 게시판, 사진첩, 접근 권한 설정 기능 개발",
          "필요 데이터 접근을 위한 Query문 설계",
          "프론트페이지 구조 설계 및 화면 구성 총괄",
          "Git/GitHub을 통한 프로젝트 형상관리 총괄",
          "Notion으로 전체적인 진행사항 관리",
        ],
      },
      {
        title: "기술 스택",
        items: [
          "Java, Spring 기반의 MVC 패턴 웹 애플리케이션 구현",
          "OracleDB + MyBatis를 활용한 데이터 접근 레이어 설계",
          "Maven을 통한 프로젝트 의존성 관리",
          "Git/GitHub을 통한 팀 형상관리",
        ],
      },
    ],
  },
  {
    slug: "order-system-db",
    index: "02",
    category: "개인 프로젝트",
    company: "한국소프트웨어 인재개발원 (KOSMO)",
    companyPeriod: "2021.11 – 2022.04",
    title: "주문 시스템 데이터베이스 구축",
    period: "2021.12 – 2022.01",
    type: "DATABASE",
    typeStyle: "bg-blue-50 text-blue-800",
    accentClass: "bg-blue-500",
    accentHex: "#378ADD",
    summary:
      "Oracle Database를 활용한 배달주문 시스템 DB 설계 및 구축 프로젝트입니다. DDL/DML, 트리거, 프로시저 등 실무 중심 SQL을 작성하며 데이터베이스 전반의 이해도를 높였습니다.",
    metrics: [
      { value: "DB", label: "전체 설계 · 구축" },
      { value: "트리거", label: "프로시저 작성" },
      { value: "관계", label: "테이블 간 흐름 설계" },
    ],
    tech: ["Oracle DB", "DDL/DML", "Trigger", "Procedure", "SQL"],
    links: {
      github: "https://github.com/DanDChoi/Projects/tree/main/OracleDB",
    },
    sections: [
      {
        title: "프로젝트 개요",
        items: [
          "Oracle Database를 활용한 배달주문 시스템 DB 설계 및 구축",
          "데이터베이스의 전반적인 이해도 및 숙련도 향상을 목표로 진행한 개인 프로젝트",
        ],
      },
      {
        title: "담당 역할",
        items: [
          "배달주문 시스템의 전체 ERD 설계 및 테이블 간 관계 정의",
          "DDL/DML, 트리거, 프로시저 등 실무 중심 SQL 작성",
          "테이블 간 관계 및 데이터 흐름 설계",
          "주문, 배달, 사용자, 메뉴 등 도메인별 데이터 모델링",
        ],
      },
    ],
  },
  {
    slug: "danistory",
    index: "01",
    category: "사이드 프로젝트",
    company: "개인 프로젝트",
    companyPeriod: "2025 – 현재",
    title: "Danistory",
    period: "2025 – 현재",
    type: "SIDE PROJECT",
    typeStyle: "bg-teal-50 text-teal-800",
    accentClass: "bg-teal-500",
    accentHex: "#0D9488",
    summary:
      "이력서·포트폴리오·블로그를 하나로 합친 개인 웹사이트입니다. Claude Code(AI)를 활용한 바이브코딩 방식으로 개발했으며, 기획·구조 설계·콘텐츠 작성은 직접 담당했습니다.",
    metrics: [
      { value: "바이브코딩", label: "AI 협업 개발" },
      { value: "Supabase", label: "OAuth + 방명록 DB" },
      { value: "Vercel", label: "CI/CD 자동 배포" },
    ],
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Supabase", "Vercel", "React"],
    sections: [
      {
        title: "개발 방식",
        items: [
          "Claude Code(AI)를 활용한 바이브코딩(Vibe Coding) 방식으로 구현",
          "기획, 사이트 구조 설계, 콘텐츠 작성, 피드백 및 방향 결정은 직접 담당",
          "AI가 생성한 코드를 검토·수정하며 Next.js App Router / Supabase 동작 원리를 학습",
        ],
      },
      {
        title: "주요 기능",
        items: [
          "이력서·포트폴리오·블로그를 하나의 사이트에 통합",
          "Markdown 기반 블로그: remark → rehype-highlight 파이프라인으로 서버사이드 렌더링 및 코드 하이라이팅",
          "프로젝트 페이지: 아코디언 UI와 다이어그램 컴포넌트로 기술 상세 시각화",
          "방명록: Supabase Auth(Google/Kakao OAuth) 연동, 본인 글만 삭제 가능",
          "방문자 수 카운터, sitemap/robots.ts 자동 생성",
        ],
      },
      {
        title: "기술 상세",
        items: [
          "Next.js 16 App Router 기반의 파일 시스템 라우팅 및 서버 컴포넌트 활용",
          "Tailwind CSS v4 유틸리티 클래스만 사용 (CSS 모듈 미사용)",
          "Supabase 클라이언트 단일 인스턴스로 인증·DB 처리 통합",
          "gray-matter로 Markdown frontmatter 파싱, 빌드 타임에 정적 생성",
          "Google/Kakao OAuth → /auth/callback 흐름 설계 및 구현",
        ],
      },
      {
        title: "배운 점",
        items: [
          "Java/Spring 백엔드 경험을 바탕으로 Next.js의 서버/클라이언트 컴포넌트 경계를 이해하며 프론트엔드 구조 학습",
          "App Router 기반 파일 시스템 라우팅, 정적 생성(SSG) 흐름 파악",
          "Supabase RLS(Row Level Security) 정책을 통한 데이터 접근 제어 개념 습득",
        ],
      },
    ],
    links: {
      github: "https://github.com/DanDChoi/danistory",
    },
  },
  {
    slug: "covid-sweepers",
    index: "03",
    category: "개인 프로젝트",
    company: "한국소프트웨어 인재개발원 (KOSMO)",
    companyPeriod: "2021.11 – 2022.04",
    title: "Covid-Sweepers",
    period: "2021.12",
    type: "GAME",
    typeStyle: "bg-rose-50 text-rose-800",
    accentClass: "bg-rose-500",
    accentHex: "#D85A30",
    summary:
      "Java Swing 기반으로 구현한 지뢰찾기 게임입니다. GUI 요소 설계와 이벤트 처리부터 Multi-Thread와 Socket을 이용한 다자간 채팅 기능까지 구현했습니다.",
    metrics: [
      { value: "GUI", label: "Swing 게임 구현" },
      { value: "멀티", label: "Thread · Socket" },
      { value: "채팅", label: "다자간 채팅 기능" },
    ],
    tech: ["Java", "Swing", "Multi-Thread", "Socket"],
    links: {
      github: "https://github.com/DanDChoi/Projects/tree/main/covid-sweepers",
    },
    sections: [
      {
        title: "프로젝트 개요",
        items: [
          "Java GUI를 이용한 지뢰찾기 게임 구현 프로젝트",
          "코로나 테마를 적용한 지뢰찾기 게임에 실시간 채팅 기능을 결합",
        ],
      },
      {
        title: "담당 역할",
        items: [
          "Java Swing 기반 지뢰찾기 게임 전체 구현",
          "GUI 요소 설계 및 이벤트 처리",
          "Multi-Thread를 활용한 게임 로직과 채팅의 동시 처리",
          "Socket을 이용한 다자간 실시간 채팅 구현",
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

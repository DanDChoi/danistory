// import Link from "next/link";
//
// const projects = [
//   {
//     slug: "wizwid-platform",
//     title: "WIZWID 플랫폼 개선",
//     description: "주문/결제/상품 흐름 개선 및 성능 최적화",
//     tech: ["Java", "Spring", "PostgreSQL"],
//     image: "/img/default-thumbnail.jpg",
//   },
//   {
//     slug: "slow-query",
//     title: "슬로우 쿼리 개선",
//     description: "응답속도 3,000ms → 70ms 개선",
//     tech: ["PostgreSQL", "Index", "Tuning"],
//     image: "/img/default-thumbnail.jpg",
//   },
//   {
//     slug: "excel-processing",
//     title: "대량 엑셀 처리 기능",
//     description: "운영 업무 자동화를 위한 엑셀 업로드/다운로드",
//     tech: ["Apache POI", "Spring"],
//     image: "/img/default-thumbnail.jpg",
//   },
// ];
//
// export default function ProjectsPage() {
//   return (
//     <main className="min-h-screen bg-gray-50">
//       <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
//         <div className="mb-10">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Projects
//           </h1>
//           <p className="text-gray-500 mt-2">
//             실무에서 진행한 프로젝트와 개선 작업을 정리했습니다.
//           </p>
//         </div>
//
//         <div className="space-y-8">
//           {projects.map((project) => (
//             <Link
//               key={project.slug}
//               href={`/projects/${project.slug}`}
//               className="group block rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
//             >
//               <div className="flex flex-col md:flex-row">
//                 <div className="md:w-1/2 aspect-[16/10] bg-gray-100 overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition"
//                   />
//                 </div>
//
//                 <div className="p-6 md:w-1/2 flex flex-col justify-between">
//                   <div>
//                     <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
//                       {project.title}
//                     </h2>
//
//                     <p className="text-gray-600 mb-4 leading-relaxed">
//                       {project.description}
//                     </p>
//
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tech.map((t) => (
//                         <span
//                           key={t}
//                           className="text-xs px-2 py-1 rounded-md bg-blue-50 text-blue-600"
//                         >
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//
//                   <div className="text-sm text-blue-600 font-medium group-hover:underline">
//                     자세히 보기 →
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

import Link from "next/link";

const projects = [
  {
    slug: "wizwid-platform",
    index: "01",
    category: "플랫폼 개선",
    title: "WIZWID 플랫폼 개선",
    description:
        "주문·결제·상품 플로우 전반의 로직을 재검토하고, 성능 병목 구간을 식별해 개선했습니다. 반복되는 레거시 코드 패턴을 정리하고 유지보수성을 높이는 데 초점을 뒀습니다.",
    type: "BACKEND",
    typeStyle: "bg-emerald-50 text-emerald-800",
    accentColor: "before:bg-emerald-500",
    metrics: [
      { value: "3곳", label: "핵심 플로우 개선" },
      { value: "레거시", label: "코드 패턴 정리" },
      { value: "운영", label: "안정성 향상" },
    ],
    tech: ["Java", "Spring", "PostgreSQL"],
  },
  {
    slug: "slow-query",
    index: "02",
    category: "성능 최적화",
    title: "슬로우 쿼리 개선",
    description:
        "실서비스에서 응답 지연을 유발하던 쿼리를 분석하고, 인덱스 전략과 쿼리 구조 개선을 통해 응답속도를 대폭 단축했습니다.",
    type: "PERFORMANCE",
    typeStyle: "bg-blue-50 text-blue-800",
    accentColor: "before:bg-blue-500",
    metrics: [
      { value: "3,000ms", label: "개선 전 응답속도" },
      { value: "70ms", label: "개선 후 응답속도" },
      { value: "97.7%", label: "응답시간 단축" },
    ],
    tech: ["PostgreSQL", "Index", "Tuning"],
  },
  {
    slug: "excel-processing",
    index: "03",
    category: "운영 자동화",
    title: "대량 엑셀 처리 기능",
    description:
        "운영팀의 반복 업무를 분석하고, 대용량 데이터의 업로드·다운로드를 안정적으로 처리하는 엑셀 자동화 기능을 설계·구현했습니다.",
    type: "AUTOMATION",
    typeStyle: "bg-amber-50 text-amber-800",
    accentColor: "before:bg-amber-500",
    metrics: [
      { value: "대용량", label: "파일 처리" },
      { value: "업/다운", label: "양방향 지원" },
      { value: "운영", label: "업무 자동화" },
    ],
    tech: ["Apache POI", "Spring"],
  },
];

export default function ProjectsPage() {
  return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">

          {/* Header */}
          <header className="mb-14">
            <p className="font-mono text-xs text-gray-400 tracking-widest mb-3">
              {"// "}<span className="text-emerald-600">projects</span>{" — 실무 경험 기반"}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-3">
              Projects
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              이커머스 플랫폼에서 직접 경험한 문제 정의와 기술적 해결 과정을 정리했습니다.
            </p>
          </header>

          {/* Project List */}
          <div className="flex flex-col gap-5">
            {projects.map((project) => (
                <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className={[
                      "group relative block bg-white rounded-2xl border border-gray-100",
                      "px-7 py-7 transition-all duration-200",
                      "hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-sm",
                      "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px]",
                      "before:rounded-l-2xl before:opacity-0 before:transition-opacity before:duration-200",
                      "hover:before:opacity-100",
                      project.accentColor,
                    ].join(" ")}
                >
                  {/* Card Top */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <p className="font-mono text-[11px] text-gray-400 mb-1 tracking-wide">
                        {project.index} / {project.category}
                      </p>
                      <h2 className="text-xl font-bold text-gray-900 tracking-tight leading-snug">
                        {project.title}
                      </h2>
                    </div>
                    <span
                        className={[
                          "font-mono text-[10px] tracking-widest font-medium",
                          "px-3 py-1 rounded-full shrink-0 mt-0.5",
                          project.typeStyle,
                        ].join(" ")}
                    >
                  {project.type}
                </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {project.metrics.map((metric) => (
                        <div
                            key={metric.label}
                            className="bg-gray-50 rounded-xl px-4 py-3"
                        >
                          <p className="font-mono text-base font-medium text-gray-900 leading-none mb-1">
                            {metric.value}
                          </p>
                          <p className="text-[11px] text-gray-400">{metric.label}</p>
                        </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                          <span
                              key={t}
                              className="font-mono text-[11px] text-gray-400 border border-gray-200 rounded px-2 py-0.5"
                          >
                      {t}
                    </span>
                      ))}
                    </div>
                    <span className="text-xs font-medium text-gray-400 flex items-center gap-1 group-hover:text-gray-600 transition-colors">
                  자세히 보기
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </main>
  );
}

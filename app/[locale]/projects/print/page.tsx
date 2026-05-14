// // app/projects/print/page.tsx
// // 브라우저에서 Ctrl+P → PDF로 저장하면 제출용 PDF가 생성됩니다.
//
// "use client";
//
// import { projects } from "../projectData";
// import type { Project } from "../projectData";
//
// import SlowQueryExecutionPlan from "../components/SlowQueryExecutionPlan";
// import SlowQueryChart from "../components/SlowQueryChart";
// import WizpaySequenceDiagram from "../components/WizpaySequenceDiagram";
// import WizpayPlatformFlow from "../components/WizpayPlatformFlow";
// import MdReviewS3Flow from "../components/MdReviewS3Flow";
// import MdReviewArchitecture from "../components/MdReviewArchitecture";
// import BoPoExcelFlow from "../components/BoPoExcelFlow";
// import BoPoStateDiagram from "../components/BoPoStateDiagram";
// import TogatherERD from "../components/TogatherERD";
// import TogatherMVC from "../components/TogatherMVC";
// import OrderSystemERD from "../components/OrderSystemERD";
// import CovidSweepersArch from "../components/CovidSweepersArch";
//
// /* ------------------------------------------------------------------ */
// /*  slug별 시각화 컴포넌트                                                */
// /* ------------------------------------------------------------------ */
//
// function ProjectVisuals({ slug }: { slug: string }) {
//     const wrap = "bg-gray-50 rounded-lg border border-gray-100 px-4 py-4 mb-3";
//     const label = "font-mono text-[10px] text-gray-400 tracking-widest mb-3";
//
//     if (slug === "slow-query") return (
//         <div className="flex flex-col gap-3">
//             <div className={wrap}><p className={label}>EXECUTION PLAN ANALYSIS</p><SlowQueryExecutionPlan /></div>
//             <div className={wrap}><p className={label}>RESPONSE TIME IMPROVEMENT</p><SlowQueryChart /></div>
//         </div>
//     );
//     if (slug === "wizpay") return (
//         <div className="flex flex-col gap-3">
//             <div className={wrap}><p className={label}>PAYMENT FLOW — SEQUENCE DIAGRAM</p><WizpaySequenceDiagram /></div>
//             <div className={wrap}><p className={label}>PLATFORM BRANCH FLOW</p><WizpayPlatformFlow /></div>
//         </div>
//     );
//     if (slug === "md-review") return (
//         <div className="flex flex-col gap-3">
//             <div className={wrap}><p className={label}>S3 IMAGE PROCESSING FLOW</p><MdReviewS3Flow /></div>
//             <div className={wrap}><p className={label}>SYSTEM ARCHITECTURE</p><MdReviewArchitecture /></div>
//         </div>
//     );
//     if (slug === "bo-po-improvement") return (
//         <div className="flex flex-col gap-3">
//             <div className={wrap}><p className={label}>EXCEL UPLOAD PROCESSING FLOW</p><BoPoExcelFlow /></div>
//             <div className={wrap}><p className={label}>VENDOR STATUS STATE DIAGRAM</p><BoPoStateDiagram /></div>
//         </div>
//     );
//     if (slug === "togather") return (
//         <div className="flex flex-col gap-3">
//             <div className={wrap}><p className={label}>SPRING MVC LAYER ARCHITECTURE</p><TogatherMVC /></div>
//             <div className={wrap}><p className={label}>ENTITY RELATIONSHIP DIAGRAM</p><TogatherERD /></div>
//         </div>
//     );
//     if (slug === "order-system-db") return (
//         <div className={wrap}><p className={label}>DELIVERY ORDER SYSTEM ERD</p><OrderSystemERD /></div>
//     );
//     if (slug === "covid-sweepers") return (
//         <div className={wrap}><p className={label}>MULTI-THREAD · SOCKET ARCHITECTURE</p><CovidSweepersArch /></div>
//     );
//     return null;
// }
//
// /* ------------------------------------------------------------------ */
// /*  개별 프로젝트 블록                                                    */
// /* ------------------------------------------------------------------ */
//
// function ProjectBlock({ project }: { project: Project }) {
//     return (
//         <div
//             className="mb-8 border border-gray-200 rounded-xl overflow-hidden"
//         >
//             {/* 헤더 */}
//             <div
//                 className="relative px-6 py-5"
//                 style={{ borderLeft: `4px solid ${project.accentHex}` }}
//             >
//                 <div className="flex items-start justify-between gap-3 mb-2">
//                     <div>
//                         <p className="font-mono text-[10px] text-gray-400 tracking-wide mb-0.5">
//                             {project.company} · {project.index} / {project.category} · {project.period}
//                         </p>
//                         <h2 className="text-lg font-bold text-gray-900 tracking-tight leading-snug">
//                             {project.title}
//                         </h2>
//                     </div>
//                     <span
//                         className={`font-mono text-[10px] tracking-widest font-medium px-2.5 py-1 rounded-full shrink-0 ${project.typeStyle}`}
//                     >
//             {project.type}
//           </span>
//                 </div>
//                 <p className="text-xs text-gray-500 leading-relaxed mt-2">
//                     {project.summary}
//                 </p>
//             </div>
//
//             {/* 메트릭 */}
//             <div className="grid grid-cols-3 gap-2 px-6 py-4 bg-gray-50 border-t border-gray-100">
//                 {project.metrics.map((m) => (
//                     <div key={m.label} className="bg-white rounded-lg px-3 py-2 border border-gray-100">
//                         <p className="font-mono text-sm font-semibold text-gray-900 leading-none mb-0.5">{m.value}</p>
//                         <p className="text-[10px] text-gray-400">{m.label}</p>
//                     </div>
//                 ))}
//             </div>
//
//             {/* 기술 스택 */}
//             <div className="px-6 py-3 border-t border-gray-100 flex items-center gap-2 flex-wrap">
//                 <span className="font-mono text-[10px] text-gray-400 tracking-widest shrink-0">TECH</span>
//                 {project.tech.map((t) => (
//                     <span key={t} className="font-mono text-[10px] text-gray-600 border border-gray-200 rounded px-2 py-0.5 bg-gray-50">
//             {t}
//           </span>
//                 ))}
//             </div>
//
//             {/* 링크 */}
//             {project.links && (
//                 <div className="px-6 py-3 border-t border-gray-100 flex items-center gap-3 flex-wrap">
//                     <span className="font-mono text-[10px] text-gray-400 tracking-widest shrink-0">LINKS</span>
//                     {project.links.github && (
//                         <span className="font-mono text-[10px] text-gray-500">GitHub: {project.links.github}</span>
//                     )}
//                     {project.links.youtube && (
//                         <span className="font-mono text-[10px] text-gray-500">YouTube: {project.links.youtube}</span>
//                     )}
//                 </div>
//             )}
//
//             {/* 시각화 */}
//             <div className="px-6 py-4 border-t border-gray-100">
//                 <p className="font-mono text-[10px] text-gray-400 tracking-widest mb-3">VISUALS</p>
//                 <div style={{ maxHeight: "280px", overflow: "hidden" }}>
//                     <ProjectVisuals slug={project.slug} />
//                 </div>
//             </div>
//
//             {/* 상세 섹션 */}
//             <div className="px-6 py-4 border-t border-gray-100 flex flex-col gap-4">
//                 {project.sections.map((section) => (
//                     <div key={section.title}>
//                         <p className="font-mono text-[10px] text-gray-400 tracking-widest mb-2">
//                             {section.title.toUpperCase()}
//                         </p>
//                         <ul className="flex flex-col gap-1.5">
//                             {section.items.map((item, i) => (
//                                 <li key={i} className="flex items-start gap-2.5">
//                   <span
//                       className="mt-[6px] w-1.5 h-1.5 rounded-full shrink-0"
//                       style={{ backgroundColor: project.accentHex }}
//                   />
//                                     <span className="text-xs text-gray-600 leading-relaxed">{item}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
//
// /* ------------------------------------------------------------------ */
// /*  섹션 헤더                                                            */
// /* ------------------------------------------------------------------ */
//
// function SectionHeader({ label, company, period }: { label: string; company: string; period: string }) {
//     return (
//         <div className="flex items-center gap-3 mb-5 mt-2">
//             <div className="w-1 h-8 rounded-full bg-gray-300 shrink-0" />
//             <div>
//                 <p className="font-mono text-[10px] text-gray-400 tracking-widest mb-0.5">{label}</p>
//                 <p className="text-sm font-bold text-gray-800 tracking-tight leading-none">
//                     {company}
//                     <span className="font-mono text-xs text-gray-400 font-normal ml-2">{period}</span>
//                 </p>
//             </div>
//         </div>
//     );
// }
//
// /* ------------------------------------------------------------------ */
// /*  페이지                                                               */
// /* ------------------------------------------------------------------ */
//
// const WIZWID_SLUGS = ["slow-query", "wizpay", "md-review", "bo-po-improvement"];
// const KOSMO_SLUGS  = ["togather", "order-system-db", "covid-sweepers"];
//
// export default function PrintPage() {
//     const wizwidProjects = projects.filter((p) => WIZWID_SLUGS.includes(p.slug));
//     const kosmoProjects  = projects.filter((p) => KOSMO_SLUGS.includes(p.slug));
//
//     return (
//         <>
//             {/* 프린트 스타일 */}
//             <style>{`
//         @media print {
//           .no-print { display: none !important; }
//           header, nav { display: none !important; }
//           @page {
//             margin: 16mm 14mm;
//             size: A4;
//           }
//           body {
//             -webkit-print-color-adjust: exact;
//             print-color-adjust: exact;
//           }
//         }
//         @media screen {
//           body { background: #f3f4f6; }
//           .print-wrap { max-width: 794px; margin: 0 auto; padding: 32px 24px; }
//         }
//       `}</style>
//
//             {/* 프린트 안내 버튼 (화면에서만 보임) */}
//             <div className="no-print fixed top-4 right-4 z-50 flex items-center gap-3">
//         <span className="text-xs text-gray-500 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
//           Ctrl + P  →  PDF로 저장
//         </span>
//                 <button
//                     onClick={() => window.print()}
//                     className="font-mono text-xs bg-gray-900 text-white rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors shadow-sm"
//                 >
//                     PDF 저장
//                 </button>
//             </div>
//
//             <div className="print-wrap">
//                 {/* 문서 헤더 */}
//                 <div className="mb-8 pb-6 border-b-2 border-gray-900">
//                     <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-1">
//                         Projects
//                     </h1>
//                     <p className="text-xs text-gray-500">
//                         실무와 교육 과정에서 진행한 프로젝트 포트폴리오
//                     </p>
//                 </div>
//
//                 {/* WIZWID 섹션 */}
//                 <section>
//                     <SectionHeader
//                         label="WORK EXPERIENCE"
//                         company="(주)엑시온그룹 · WIZWID"
//                         period="2022.10 – 2025.05"
//                     />
//                     {wizwidProjects.map((p) => (
//                         <ProjectBlock key={p.slug} project={p} />
//                     ))}
//                 </section>
//
//                 {/* 구분선 */}
//                 <div className="flex items-center gap-4 my-8">
//                     <div className="flex-1 h-px bg-gray-300" />
//                     <span className="font-mono text-[10px] text-gray-400 tracking-widest shrink-0">
//             EDUCATION
//           </span>
//                     <div className="flex-1 h-px bg-gray-300" />
//                 </div>
//
//                 {/* KOSMO 섹션 */}
//                 <section>
//                     <SectionHeader
//                         label="TRAINING PROJECT"
//                         company="한국소프트웨어 인재개발원 (KOSMO)"
//                         period="2021.11 – 2022.04"
//                     />
//                     {kosmoProjects.map((p) => (
//                         <ProjectBlock key={p.slug} project={p} />
//                     ))}
//                 </section>
//             </div>
//         </>
//     );
// }

// app/projects/print/page.tsx
// 브라우저에서 Ctrl+P → PDF로 저장하면 제출용 PDF가 생성됩니다.

"use client";

import { projects } from "../projectData";
import type { Project } from "../projectData";

import SlowQueryExecutionPlan from "../components/SlowQueryExecutionPlan";
import SlowQueryChart from "../components/SlowQueryChart";
import WizpaySequenceDiagram from "../components/WizpaySequenceDiagram";
import WizpayPlatformFlow from "../components/WizpayPlatformFlow";
import MdReviewS3Flow from "../components/MdReviewS3Flow";
import MdReviewArchitecture from "../components/MdReviewArchitecture";
import BoPoExcelFlow from "../components/BoPoExcelFlow";
import BoPoStateDiagram from "../components/BoPoStateDiagram";
import TogatherERD from "../components/TogatherERD";
import TogatherMVC from "../components/TogatherMVC";
import OrderSystemERD from "../components/OrderSystemERD";
import CovidSweepersArch from "../components/CovidSweepersArch";

/* ------------------------------------------------------------------ */
/*  slug별 시각화 컴포넌트                                                */
/* ------------------------------------------------------------------ */

function ProjectVisuals({ slug }: { slug: string }) {
    // 2개 → 가로 병렬 (각각 절반 너비 → SVG가 비율대로 작아짐)
    const row2 = "flex flex-row gap-3";
    const wrap2 = "bg-gray-50 rounded-lg border border-gray-100 px-3 py-3 flex-1 min-w-0";

    // 1개 → 중앙 60% 너비로 축소
    const wrap1 = "bg-gray-50 rounded-lg border border-gray-100 px-3 py-3 max-w-[60%] mx-auto";

    const label = "font-mono text-[10px] text-gray-400 tracking-widest mb-2";

    if (slug === "slow-query") return (
        <div className={row2}>
            <div className={wrap2}><p className={label}>EXECUTION PLAN ANALYSIS</p><SlowQueryExecutionPlan locale="ko" /></div>
            <div className={wrap2}><p className={label}>RESPONSE TIME IMPROVEMENT</p><SlowQueryChart locale="ko" /></div>
        </div>
    );
    if (slug === "wizpay") return (
        <div className={row2}>
            <div className={wrap2}><p className={label}>PAYMENT FLOW — SEQUENCE DIAGRAM</p><WizpaySequenceDiagram locale="ko" /></div>
            <div className={wrap2}><p className={label}>PLATFORM BRANCH FLOW</p><WizpayPlatformFlow locale="ko" /></div>
        </div>
    );
    if (slug === "md-review") return (
        <div className={row2}>
            <div className={wrap2}><p className={label}>S3 IMAGE PROCESSING FLOW</p><MdReviewS3Flow locale="ko" /></div>
            <div className={wrap2}><p className={label}>SYSTEM ARCHITECTURE</p><MdReviewArchitecture locale="ko" /></div>
        </div>
    );
    if (slug === "bo-po-improvement") return (
        <div className={row2}>
            <div className={wrap2}><p className={label}>EXCEL UPLOAD PROCESSING FLOW</p><BoPoExcelFlow locale="ko" /></div>
            <div className={wrap2}><p className={label}>VENDOR STATUS STATE DIAGRAM</p><BoPoStateDiagram locale="ko" /></div>
        </div>
    );
    if (slug === "togather") return (
        <div className={row2}>
            <div className={wrap2}><p className={label}>SPRING MVC LAYER ARCHITECTURE</p><TogatherMVC locale="ko" /></div>
            <div className={wrap2}><p className={label}>ENTITY RELATIONSHIP DIAGRAM</p><TogatherERD locale="ko" /></div>
        </div>
    );
    if (slug === "order-system-db") return (
        <div className={wrap1}><p className={label}>DELIVERY ORDER SYSTEM ERD</p><OrderSystemERD locale="ko" /></div>
    );
    if (slug === "covid-sweepers") return (
        <div className={wrap1}><p className={label}>MULTI-THREAD · SOCKET ARCHITECTURE</p><CovidSweepersArch locale="ko" /></div>
    );
    return null;
}

/* ------------------------------------------------------------------ */
/*  개별 프로젝트 블록                                                    */
/* ------------------------------------------------------------------ */

function ProjectBlock({ project }: { project: Project }) {
    return (
        <div
            className="mb-8 border border-gray-200 rounded-xl overflow-hidden"
            style={{ pageBreakBefore: "always", breakBefore: "page" }}
        >
            {/* 헤더 */}
            <div
                className="relative px-6 py-5"
                style={{ borderLeft: `4px solid ${project.accentHex}` }}
            >
                <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                        <p className="font-mono text-[10px] text-gray-400 tracking-wide mb-0.5">
                            {project.company} · {project.index} / {project.category} · {project.period}
                        </p>
                        <h2 className="text-lg font-bold text-gray-900 tracking-tight leading-snug">
                            {project.title}
                        </h2>
                    </div>
                    <span
                        className={`font-mono text-[10px] tracking-widest font-medium px-2.5 py-1 rounded-full shrink-0 ${project.typeStyle}`}
                    >
            {project.type}
          </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mt-2">
                    {project.summary}
                </p>
            </div>

            {/* 메트릭 */}
            <div className="grid grid-cols-3 gap-2 px-6 py-4 bg-gray-50 border-t border-gray-100">
                {project.metrics.map((m) => (
                    <div key={m.label} className="bg-white rounded-lg px-3 py-2 border border-gray-100">
                        <p className="font-mono text-sm font-semibold text-gray-900 leading-none mb-0.5">{m.value}</p>
                        <p className="text-[10px] text-gray-400">{m.label}</p>
                    </div>
                ))}
            </div>

            {/* 기술 스택 */}
            <div className="px-6 py-3 border-t border-gray-100 flex items-center gap-2 flex-wrap">
                <span className="font-mono text-[10px] text-gray-400 tracking-widest shrink-0">TECH</span>
                {project.tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] text-gray-600 border border-gray-200 rounded px-2 py-0.5 bg-gray-50">
            {t}
          </span>
                ))}
            </div>

            {/* 링크 */}
            {project.links && (
                <div className="px-6 py-3 border-t border-gray-100 flex items-center gap-3 flex-wrap">
                    <span className="font-mono text-[10px] text-gray-400 tracking-widest shrink-0">LINKS</span>
                    {project.links.github && (
                        <span className="font-mono text-[10px] text-gray-500">GitHub: {project.links.github}</span>
                    )}
                    {project.links.youtube && (
                        <span className="font-mono text-[10px] text-gray-500">YouTube: {project.links.youtube}</span>
                    )}
                </div>
            )}

            {/* 시각화 */}
            <div className="px-6 py-4 border-t border-gray-100">
                <p className="font-mono text-[10px] text-gray-400 tracking-widest mb-3">VISUALS</p>
                <ProjectVisuals slug={project.slug} />
            </div>

            {/* 상세 섹션 */}
            <div className="px-6 py-4 border-t border-gray-100 flex flex-col gap-4">
                {project.sections.map((section) => (
                    <div key={section.title}>
                        <p className="font-mono text-[10px] text-gray-400 tracking-widest mb-2">
                            {section.title.toUpperCase()}
                        </p>
                        <ul className="flex flex-col gap-1.5">
                            {section.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                  <span
                      className="mt-[6px] w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: project.accentHex }}
                  />
                                    <span className="text-xs text-gray-600 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  섹션 헤더                                                            */
/* ------------------------------------------------------------------ */

function SectionHeader({ label, company, period }: { label: string; company: string; period: string }) {
    return (
        <div className="flex items-center gap-3 mb-5 mt-2">
            <div className="w-1 h-8 rounded-full bg-gray-300 shrink-0" />
            <div>
                <p className="font-mono text-[10px] text-gray-400 tracking-widest mb-0.5">{label}</p>
                <p className="text-sm font-bold text-gray-800 tracking-tight leading-none">
                    {company}
                    <span className="font-mono text-xs text-gray-400 font-normal ml-2">{period}</span>
                </p>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  페이지                                                               */
/* ------------------------------------------------------------------ */

const WIZWID_SLUGS = ["slow-query", "wizpay", "md-review", "bo-po-improvement"];
const KOSMO_SLUGS  = ["togather", "order-system-db", "covid-sweepers"];

export default function PrintPage() {
    const wizwidProjects = projects.filter((p) => WIZWID_SLUGS.includes(p.slug));
    const kosmoProjects  = projects.filter((p) => KOSMO_SLUGS.includes(p.slug));

    return (
        <>
            {/* 프린트 스타일 */}
            <style>{`
        @media print {
          .no-print { display: none !important; }
          header, nav, footer { display: none !important; }
          @page {
            margin: 16mm 14mm;
            size: A4;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
        @media screen {
          body { background: #f3f4f6; }
          .print-wrap { max-width: 794px; margin: 0 auto; padding: 32px 24px; }
        }
      `}</style>

            {/* 프린트 안내 버튼 (화면에서만 보임) */}
            <div className="no-print fixed top-4 right-4 z-50 flex items-center gap-3">
                {/*<span className="text-xs text-gray-500 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">*/}
                {/*  Ctrl + P  →  PDF로 저장*/}
                {/*</span>*/}
                <button
                    onClick={() => window.print()}
                    className="font-mono text-xs bg-gray-900 text-white rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors shadow-sm"
                >
                    Print
                </button>
                <a
                    href="/portfolio.pdf"
                    className="font-mono text-xs bg-gray-900 text-white rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors shadow-sm"
                    download="Dan_Choi_Portfolio.pdf"
                >
                    PDF Download
                </a>
            </div>

            <div className="print-wrap">
                {/* 문서 헤더 */}
                <div className="mb-8 pb-6 border-b-2 border-gray-900">
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-1">
                        Projects
                    </h1>
                    <p className="text-xs text-gray-500">
                        실무와 교육 과정에서 진행한 프로젝트 포트폴리오
                    </p>
                </div>

                {/* WIZWID 섹션 */}
                <section>
                    <SectionHeader
                        label="WORK EXPERIENCE"
                        company="(주)엑시온그룹 · WIZWID"
                        period="2022.10 – 2025.05"
                    />
                    {wizwidProjects.map((p) => (
                        <ProjectBlock key={p.slug} project={p} />
                    ))}
                </section>

                {/* 구분선 */}
                <div className="flex items-center gap-4 my-8">
                    <div className="flex-1 h-px bg-gray-300" />
                    <span className="font-mono text-[10px] text-gray-400 tracking-widest shrink-0">
            EDUCATION
          </span>
                    <div className="flex-1 h-px bg-gray-300" />
                </div>

                {/* KOSMO 섹션 */}
                <section>
                    <SectionHeader
                        label="TRAINING PROJECT"
                        company="한국소프트웨어 인재개발원 (KOSMO)"
                        period="2021.11 – 2022.04"
                    />
                    {kosmoProjects.map((p) => (
                        <ProjectBlock key={p.slug} project={p} />
                    ))}
                </section>
            </div>
        </>
    );
}
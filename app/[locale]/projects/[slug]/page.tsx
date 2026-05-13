// app/projects/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../projectData";
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
/*  정적 경로 생성                                                        */
/* ------------------------------------------------------------------ */

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

/* ------------------------------------------------------------------ */
/*  메타데이터                                                            */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string; locale: string }>;
}) {
    const { slug, locale } = await params;
    const project = getProjectBySlug(slug, locale);
    if (!project) return {};
    return {
        title: `${project.title} | Projects`,
        description: project.summary,
    };
}

/* ------------------------------------------------------------------ */
/*  페이지                                                               */
/* ------------------------------------------------------------------ */

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string; locale: string }>;
}) {
    const { slug, locale } = await params;
    const project = getProjectBySlug(slug, locale);
    if (!project) notFound();

    const isEn = locale === "en";

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-16">

                {/* 뒤로가기 */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-gray-400 hover:text-gray-600 transition-colors mb-8 md:mb-10 group"
                >
                    <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">←</span>
                    {isEn ? "Back to Projects" : "Projects로 돌아가기"}
                </Link>

                {/* 헤더 카드 */}
                <div className="bg-white rounded-2xl border border-gray-100 px-6 py-7 md:px-8 md:py-8 mb-6 relative overflow-hidden">
                    <div className={`absolute left-0 top-0 h-full w-[3px] ${project.accentClass}`} />

                    <div className="flex items-start justify-between gap-3 mb-5">
                        <div>
                            <p className="font-mono text-[11px] text-gray-400 tracking-wide mb-1">
                                {project.company}
                            </p>
                            <div className="flex items-center gap-2 flex-wrap">
                                <p className="font-mono text-[11px] text-gray-400">
                                    {project.index} / {project.category}
                                </p>
                                <span className="font-mono text-[11px] text-gray-300">·</span>
                                <p className="font-mono text-[11px] text-gray-400">
                                    {project.period}
                                </p>
                            </div>
                        </div>
                        <span
                            className={[
                                "font-mono text-[10px] tracking-widest font-medium",
                                "px-2.5 py-1 rounded-full shrink-0",
                                project.typeStyle,
                            ].join(" ")}
                        >
                            {project.type}
                        </span>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
                        {project.title}
                    </h1>

                    <p className="text-sm text-gray-500 leading-relaxed mb-6">
                        {project.summary}
                    </p>

                    <div className="grid grid-cols-3 gap-2 md:gap-3">
                        {project.metrics.map((m) => (
                            <div key={m.label} className="bg-gray-50 rounded-xl px-3 py-2.5 md:px-4 md:py-3">
                                <p className="font-mono text-sm md:text-base font-medium text-gray-900 leading-none mb-1 truncate">
                                    {m.value}
                                </p>
                                <p className="text-[10px] md:text-[11px] text-gray-400 leading-tight">
                                    {m.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 기술 스택 */}
                <div className="bg-white rounded-2xl border border-gray-100 px-6 py-5 md:px-8 md:py-6 mb-6">
                    <p className="font-mono text-[11px] text-gray-400 tracking-widest mb-3">TECH STACK</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span key={t} className="font-mono text-xs text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 bg-gray-50">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 링크 */}
                {project.links && (
                    <div className="bg-white rounded-2xl border border-gray-100 px-6 py-5 md:px-8 md:py-6 mb-6">
                        <p className="font-mono text-[11px] text-gray-400 tracking-widest mb-3">LINKS</p>
                        <div className="flex flex-wrap gap-3">
                            {project.links.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 font-mono text-xs text-gray-600 border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-colors"
                                >
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                    GitHub
                                </a>
                            )}
                            {project.links.youtube && (
                                <a
                                    href={project.links.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 font-mono text-xs text-gray-600 border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 hover:border-red-300 hover:text-red-600 transition-colors"
                                >
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                    {isEn ? "Demo Video" : "시연 영상"}
                                </a>
                            )}
                        </div>
                    </div>
                )}

                {/* 다이어그램 */}
                <div className="flex flex-col gap-4 mb-6">
                    {project.slug === "slow-query" && (
                        <>
                            <div className="bg-white rounded-2xl border border-gray-100 px-6 py-6 md:px-8 md:py-7">
                                <p className="font-mono text-[11px] text-gray-400 tracking-widest mb-5">EXECUTION PLAN — BEFORE / AFTER</p>
                                <SlowQueryExecutionPlan locale={locale} />
                            </div>
                            <div className="bg-white rounded-2xl border border-gray-100 px-6 py-6 md:px-8 md:py-7">
                                <p className="font-mono text-[11px] text-gray-400 tracking-widest mb-5">RESPONSE TIME IMPROVEMENT</p>
                                <SlowQueryChart locale={locale} />
                            </div>
                        </>
                    )}

                    {project.slug === "wizpay" && (
                        <>
                            <div className="bg-white rounded-2xl border border-gray-100 px-6 py-6 md:px-8 md:py-7">
                                <p className="font-mono text-[11px] text-gray-400 tracking-widest mb-5">PAYMENT FLOW — SEQUENCE DIAGRAM</p>
                                <WizpaySequenceDiagram locale={locale} />
                            </div>
                            <div className="bg-white rounded-2xl border border-gray-100 px-6 py-6 md:px-8 md:py-7">
                                <p className="font-mono text-[11px] text-gray-400 tracking-widest mb-5">PLATFORM BRANCH FLOW</p>
                                <WizpayPlatformFlow locale={locale} />
                            </div>
                        </>
                    )}

                    {project.slug === "md-review" && (
                        <>
                            <div className="bg-white rounded-2xl border border-gray-100 px-6 py-6 md:px-8 md:py-7">
                                <p className="font-mono text-[11px] text-gray-400 tracking-widest mb-5">S3 IMAGE PROCESSING FLOW</p>
                                <MdReviewS3Flow locale={locale} />
                            </div>
                            <div className="bg-white rounded-2xl border border-gray-100 px-6 py-6 md:px-8 md:py-7">
                                <p className="font-mono text-[11px] text-gray-400 tracking-widest mb-5">SYSTEM ARCHITECTURE</p>
                                <MdReviewArchitecture locale={locale} />
                            </div>
                        </>
                    )}

                    {project.slug === "bo-po-improvement" && (
                        <>
                            <div className="bg-white rounded-2xl border border-gray-100 px-6 py-6 md:px-8 md:py-7">
                                <p className="font-mono text-[11px] text-gray-400 tracking-widest mb-5">EXCEL UPLOAD PROCESSING FLOW</p>
                                <BoPoExcelFlow locale={locale} />
                            </div>
                            <div className="bg-white rounded-2xl border border-gray-100 px-6 py-6 md:px-8 md:py-7">
                                <p className="font-mono text-[11px] text-gray-400 tracking-widest mb-5">VENDOR STATUS STATE DIAGRAM</p>
                                <BoPoStateDiagram locale={locale} />
                            </div>
                        </>
                    )}

                    {project.slug === "togather" && (
                        <>
                            <div className="bg-white rounded-2xl border border-gray-100 px-6 py-6 md:px-8 md:py-7">
                                <p className="font-mono text-[11px] text-gray-400 tracking-widest mb-5">SPRING MVC LAYER ARCHITECTURE</p>
                                <TogatherMVC locale={locale} />
                            </div>
                            <div className="bg-white rounded-2xl border border-gray-100 px-6 py-6 md:px-8 md:py-7">
                                <p className="font-mono text-[11px] text-gray-400 tracking-widest mb-5">ENTITY RELATIONSHIP DIAGRAM</p>
                                <TogatherERD locale={locale} />
                            </div>
                        </>
                    )}

                    {project.slug === "order-system-db" && (
                        <div className="bg-white rounded-2xl border border-gray-100 px-6 py-6 md:px-8 md:py-7">
                            <p className="font-mono text-[11px] text-gray-400 tracking-widest mb-5">DELIVERY ORDER SYSTEM ERD</p>
                            <OrderSystemERD locale={locale} />
                        </div>
                    )}

                    {project.slug === "covid-sweepers" && (
                        <div className="bg-white rounded-2xl border border-gray-100 px-6 py-6 md:px-8 md:py-7">
                            <p className="font-mono text-[11px] text-gray-400 tracking-widest mb-5">MULTI-THREAD · SOCKET ARCHITECTURE</p>
                            <CovidSweepersArch locale={locale} />
                        </div>
                    )}
                </div>

                {/* 상세 섹션들 */}
                <div className="flex flex-col gap-4">
                    {project.sections.map((section) => (
                        <div key={section.title} className="bg-white rounded-2xl border border-gray-100 px-6 py-5 md:px-8 md:py-6">
                            <p className="font-mono text-[11px] text-gray-400 tracking-widest mb-4">
                                {section.title.toUpperCase()}
                            </p>
                            <ul className="flex flex-col gap-2.5">
                                {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${project.accentClass}`} />
                                        <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* 하단 네비게이션 */}
                <div className="mt-10 pt-8 border-t border-gray-200 flex items-center justify-between">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-gray-400 hover:text-gray-600 transition-colors group"
                    >
                        <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">←</span>
                        {isEn ? "All Projects" : "모든 프로젝트"}
                    </Link>
                    <span className="font-mono text-[11px] text-gray-300">
                        {project.index} / {project.category}
                    </span>
                </div>

            </div>
        </main>
    );
}

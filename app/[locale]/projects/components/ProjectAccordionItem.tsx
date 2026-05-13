"use client";

// app/projects/components/ProjectAccordionItem.tsx

import { useState } from "react";
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

function ProjectVisuals({ slug, accentClass, locale }: { slug: string; accentClass: string; locale: string }) {
    const card = "bg-gray-50 rounded-xl border border-gray-100 px-5 py-5 md:px-6 md:py-6";
    const label = "font-mono text-[10px] text-gray-400 tracking-widest mb-4";

    if (slug === "slow-query") return (
        <div className="flex flex-col gap-3">
            <div className={card}>
                <p className={label}>EXECUTION PLAN ANALYSIS</p>
                <SlowQueryExecutionPlan locale={locale} />
            </div>
            <div className={card}>
                <p className={label}>RESPONSE TIME IMPROVEMENT</p>
                <SlowQueryChart locale={locale} />
            </div>
        </div>
    );

    if (slug === "wizpay") return (
        <div className="flex flex-col gap-3">
            <div className={card}>
                <p className={label}>PAYMENT FLOW — SEQUENCE DIAGRAM</p>
                <WizpaySequenceDiagram locale={locale} />
            </div>
            <div className={card}>
                <p className={label}>PLATFORM BRANCH FLOW</p>
                <WizpayPlatformFlow locale={locale} />
            </div>
        </div>
    );

    if (slug === "md-review") return (
        <div className="flex flex-col gap-3">
            <div className={card}>
                <p className={label}>S3 IMAGE PROCESSING FLOW</p>
                <MdReviewS3Flow locale={locale} />
            </div>
            <div className={card}>
                <p className={label}>SYSTEM ARCHITECTURE</p>
                <MdReviewArchitecture locale={locale} />
            </div>
        </div>
    );

    if (slug === "bo-po-improvement") return (
        <div className="flex flex-col gap-3">
            <div className={card}>
                <p className={label}>EXCEL UPLOAD PROCESSING FLOW</p>
                <BoPoExcelFlow locale={locale} />
            </div>
            <div className={card}>
                <p className={label}>VENDOR STATUS STATE DIAGRAM</p>
                <BoPoStateDiagram locale={locale} />
            </div>
        </div>
    );

    if (slug === "togather") return (
        <div className="flex flex-col gap-3">
            <div className={card}>
                <p className={label}>SPRING MVC LAYER ARCHITECTURE</p>
                <TogatherMVC locale={locale} />
            </div>
            <div className={card}>
                <p className={label}>ENTITY RELATIONSHIP DIAGRAM</p>
                <TogatherERD locale={locale} />
            </div>
        </div>
    );

    if (slug === "order-system-db") return (
        <div className={card}>
            <p className={label}>DELIVERY ORDER SYSTEM ERD</p>
            <OrderSystemERD locale={locale} />
        </div>
    );

    if (slug === "covid-sweepers") return (
        <div className={card}>
            <p className={label}>MULTI-THREAD · SOCKET ARCHITECTURE</p>
            <CovidSweepersArch locale={locale} />
        </div>
    );

    return null;
}

export default function ProjectAccordionItem({ project, locale }: { project: Project; locale: string }) {
    const [open, setOpen] = useState(false);
    const isEn = locale === "en";

    return (
        <div
            className={[
                "bg-white rounded-2xl border overflow-hidden transition-all duration-200",
                open ? "border-gray-200 shadow-sm" : "border-gray-100",
            ].join(" ")}
        >
            {/* ── 헤더 (클릭 영역) ── */}
            <button
                onClick={() => setOpen((v) => !v)}
                className={[
                    "w-full text-left relative",
                    "px-5 py-5 md:px-7 md:py-6",
                    "transition-colors duration-150",
                    open ? "bg-white" : "hover:bg-gray-50/60",
                    "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-l-2xl",
                    open ? "before:opacity-100" : "before:opacity-0 hover:before:opacity-60",
                    project.accentClass.replace("bg-", "before:bg-"),
                ].join(" ")}
                aria-expanded={open}
            >
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
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

                    <div className="flex items-center gap-2.5 shrink-0 mt-0.5">
            <span
                className={[
                    "font-mono text-[10px] tracking-widest font-medium",
                    "px-2.5 py-1 rounded-full hidden sm:inline-block",
                    project.typeStyle,
                ].join(" ")}
            >
              {project.type}
            </span>
                        <span
                            className={[
                                "w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center",
                                "text-gray-400 transition-all duration-300 shrink-0",
                                open ? "rotate-180 border-gray-300 text-gray-600" : "",
                            ].join(" ")}
                        >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
                    </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mt-3 pr-2 line-clamp-2">
                    {project.summary}
                </p>

                {!open && (
                    <div className="mt-4 flex items-end justify-between gap-3 flex-wrap">
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
                        <span className="font-mono text-[11px] text-gray-400 shrink-0">
              {isEn ? "Expand ↓" : "펼쳐보기 ↓"}
            </span>
                    </div>
                )}
            </button>

            {/* ── 상세 내용 (펼침) ── */}
            {open && (
                <div className="px-5 pb-6 md:px-7 md:pb-7 flex flex-col gap-5">

                    <div className="h-px bg-gray-100" />

                    {/* 메트릭 */}
                    <div className="grid grid-cols-3 gap-2 md:gap-3">
                        {project.metrics.map((m) => (
                            <div
                                key={m.label}
                                className="bg-gray-50 rounded-xl px-3 py-2.5 md:px-4 md:py-3"
                            >
                                <p className="font-mono text-sm md:text-base font-medium text-gray-900 leading-none mb-1 truncate">
                                    {m.value}
                                </p>
                                <p className="text-[10px] md:text-[11px] text-gray-400 leading-tight">
                                    {m.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* 기술 스택 */}
                    <div>
                        <p className="font-mono text-[10px] text-gray-400 tracking-widest mb-2.5">
                            TECH STACK
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="font-mono text-xs text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 bg-gray-50"
                                >
                  {t}
                </span>
                            ))}
                        </div>
                    </div>

                    {/* 링크 */}
                    {project.links && (
                        <div>
                            <p className="font-mono text-[10px] text-gray-400 tracking-widest mb-2.5">
                                LINKS
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 font-mono text-xs text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-colors"
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
                                        className="inline-flex items-center gap-2 font-mono text-xs text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-colors"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                        YouTube
                                    </a>
                                )}
                            </div>
                        </div>
                    )}

                    {/* 시각화 자료 */}
                    <div>
                        <p className="font-mono text-[10px] text-gray-400 tracking-widest mb-2.5">
                            VISUALS
                        </p>
                        <ProjectVisuals slug={project.slug} accentClass={project.accentClass} locale={locale} />
                    </div>

                    {/* 상세 섹션 */}
                    <div className="flex flex-col gap-3">
                        {project.sections.map((section) => (
                            <div
                                key={section.title}
                                className="bg-gray-50 rounded-xl border border-gray-100 px-5 py-4 md:px-6 md:py-5"
                            >
                                <p className="font-mono text-[10px] text-gray-400 tracking-widest mb-3">
                                    {section.title.toUpperCase()}
                                </p>
                                <ul className="flex flex-col gap-2">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                      <span
                          className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${project.accentClass}`}
                      />
                                            <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* 접기 버튼 */}
                    <button
                        onClick={() => setOpen(false)}
                        className="self-center font-mono text-[11px] text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1.5 pt-1"
                    >
                        <span className="inline-block rotate-180">↓</span>
                        {isEn ? "Collapse" : "접기"}
                    </button>

                </div>
            )}
        </div>
    );
}

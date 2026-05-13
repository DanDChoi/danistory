"use client";

// app/projects/page.tsx

import { useState, useMemo } from "react";
import { useLocale } from "next-intl";
import { getProjects } from "./projectData";
import ProjectAccordionItem from "./components/ProjectAccordionItem";
import Link from "next/link";

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
      <div className="flex items-center gap-4 mb-5">
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
  const locale = useLocale();
  const projects = getProjects(locale);

  const isEn = locale === "en";

  const GROUPS = [
    {
      id: "wizwid",
      label: "WORK EXPERIENCE",
      company: "Axion Group · WIZWID",
      period: "2022.10 – 2025.05",
      slugs: ["slow-query", "wizpay", "md-review", "bo-po-improvement"],
    },
    {
      id: "kosmo",
      label: "TRAINING PROJECT",
      company: isEn ? "Korea Software Institute (KOSMO)" : "한국소프트웨어 인재개발원 (KOSMO)",
      period: "2021.11 – 2022.04",
      slugs: ["togather", "order-system-db", "covid-sweepers"],
    },
    {
      id: "side",
      label: "SIDE PROJECT",
      company: isEn ? "Personal Project" : "개인 프로젝트",
      period: isEn ? "2025 – Present" : "2025 – 현재",
      slugs: ["danistory"],
    },
  ];

  const [companyFilter, setCompanyFilter] = useState<string>("all");
  const [techFilter, setTechFilter] = useState<string[]>([]);

  const allTechTags = useMemo(() => {
    const counter = new Map<string, number>();
    projects.forEach((p) =>
        p.tech.forEach((t) => counter.set(t, (counter.get(t) ?? 0) + 1))
    );
    return [...counter.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([tag]) => tag);
  }, [projects]);

  const filteredSlugs = useMemo(() => {
    return new Set(
        projects
            .filter((p) => {
              const matchCompany =
                  companyFilter === "all" ||
                  GROUPS.find((g) => g.id === companyFilter)?.slugs.includes(p.slug);
              const matchTech =
                  techFilter.length === 0 ||
                  techFilter.every((t) => p.tech.includes(t));
              return matchCompany && matchTech;
            })
            .map((p) => p.slug)
    );
  }, [companyFilter, techFilter, projects]);

  const toggleTech = (tag: string) => {
    setTechFilter((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const resetFilters = () => {
    setCompanyFilter("all");
    setTechFilter([]);
  };

  const isFiltered = companyFilter !== "all" || techFilter.length > 0;
  const visibleCount = filteredSlugs.size;

  const labelMap = {
    all: isEn ? "All" : "전체",
    wizwid: "WIZWID",
    kosmo: "KOSMO",
    side: "SIDE",
  };

  return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">

          {/* ── 페이지 헤더 ── */}
          <header className="mb-10 md:mb-12">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-3">
                  Projects
                </h1>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
                  {isEn
                    ? "A collection of projects from professional work and training. Covers performance optimization, payment system development, operations automation, and community platforms."
                    : "실무와 교육 과정에서 진행한 프로젝트를 정리했습니다. 성능 최적화, 결제 시스템 개발, 운영 자동화, 커뮤니티 플랫폼까지 다양한 경험을 담았습니다."}
                </p>
              </div>
              <Link
                  href="/projects/print"
                  target="_blank"
                  className="font-mono text-[11px] text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:border-gray-400 hover:text-gray-700 transition-colors flex items-center gap-1.5"
              >
                {isEn ? "Save PDF ↗" : "PDF 저장 ↗"}
              </Link>
            </div>
          </header>

          {/* ── 필터 영역 ── */}
          <div className="bg-white rounded-2xl border border-gray-100 px-5 py-5 md:px-6 md:py-5 mb-8">

            {/* 회사 필터 */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="font-mono text-[10px] text-gray-400 tracking-widest shrink-0 w-16">
              COMPANY
            </span>
              {(["all", "wizwid", "kosmo", "side"] as const).map((id) => {
                const active = companyFilter === id;
                return (
                    <button
                        key={id}
                        onClick={() => setCompanyFilter(id)}
                        className={[
                          "font-mono text-[11px] px-3 py-1.5 rounded-full border transition-all duration-150",
                          active
                              ? "bg-gray-900 text-white border-gray-900"
                              : "text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700",
                        ].join(" ")}
                    >
                      {labelMap[id]}
                    </button>
                );
              })}
            </div>

            {/* 구분선 */}
            <div className="h-px bg-gray-100 mb-4" />

            {/* 기술 스택 필터 */}
            <div className="flex items-start gap-2 flex-wrap">
            <span className="font-mono text-[10px] text-gray-400 tracking-widest shrink-0 w-16 mt-[7px]">
              TECH
            </span>
              <div className="flex flex-wrap gap-1.5">
                {allTechTags.map((tag) => {
                  const active = techFilter.includes(tag);
                  return (
                      <button
                          key={tag}
                          onClick={() => toggleTech(tag)}
                          className={[
                            "font-mono text-[11px] px-2.5 py-1 rounded border transition-all duration-150",
                            active
                                ? "bg-gray-900 text-white border-gray-900"
                                : "text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700",
                          ].join(" ")}
                      >
                        {tag}
                      </button>
                  );
                })}
              </div>
            </div>

            {/* 필터 결과 + 초기화 */}
            {isFiltered && (
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <span className="font-mono text-[11px] text-gray-400">
                {isEn ? `${visibleCount} projects` : `${visibleCount}개 프로젝트`}
              </span>
                  <button
                      onClick={resetFilters}
                      className="font-mono text-[11px] text-gray-400 hover:text-gray-700 transition-colors flex items-center gap-1"
                  >
                    {isEn ? "× Reset" : "× 필터 초기화"}
                  </button>
                </div>
            )}
          </div>

          {/* ── 프로젝트 목록 ── */}
          {GROUPS.map((group, groupIdx) => {
            const groupProjects = projects.filter(
                (p) => group.slugs.includes(p.slug) && filteredSlugs.has(p.slug)
            );
            if (groupProjects.length === 0) return null;

            return (
                <section key={group.id} className={groupIdx > 0 ? "mt-12 md:mt-16" : ""}>
                  {groupIdx > 0 && (
                      <div className="flex items-center gap-4 mb-10 md:mb-12">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="font-mono text-[11px] text-gray-400 tracking-widest shrink-0">
                          {group.id === "kosmo" ? "EDUCATION" : group.label}
                        </span>
                        <div className="flex-1 h-px bg-gray-200" />
                      </div>
                  )}

                  <SectionHeader
                      label={group.label}
                      company={group.company}
                      period={group.period}
                  />

                  <div className="flex flex-col gap-3 md:gap-4">
                    {groupProjects.map((project) => (
                        <ProjectAccordionItem key={project.slug} project={project} locale={locale} />
                    ))}
                  </div>
                </section>
            );
          })}

          {/* 결과 없음 */}
          {visibleCount === 0 && (
              <div className="text-center py-20">
                <p className="font-mono text-sm text-gray-400 mb-3">
                  {isEn ? "No matching projects found" : "조건에 맞는 프로젝트가 없습니다"}
                </p>
                <button
                    onClick={resetFilters}
                    className="font-mono text-[11px] text-gray-500 hover:text-gray-700 border border-gray-200 rounded-lg px-4 py-2 transition-colors"
                >
                  {isEn ? "Reset Filters" : "필터 초기화"}
                </button>
              </div>
          )}

        </div>
      </main>
  );
}

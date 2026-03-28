"use client";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CareerSection from "@/components/sections/CareerSection";
import ContactSection from "@/components/sections/ContactSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import SideNav from "@/components/common/SideNav";

import React, { useState, useEffect } from "react";

export default function Home() {

    const [openId, setOpenId] = useState<string | null>(null);
    const [visibleSections, setVisibleSections] = useState<string[]>([]);

    useEffect(() => {
      const ids = ["hero","about","skills","career","projects","education","contact"];

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => [...new Set([...prev, entry.target.id])]);
            }
          });
        },
        { threshold: 0.2 }
      );

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    }, []);

    const projects = [
        {
            id: "1",
            title: "슬로우 쿼리 개선",
            period: "2023.10 - 2023.12",
            summary: "PostgreSQL 기반의 대형 트랜잭션 쿼리들에 대해 실행 계획 분석 및 인덱스 최적화",
            detail: {
                result: [
                    "로그인, 마이페이지, 주문 상세 등 주요 페이지의 응답 속도 평균 90% 이상 개선",
                    "마이페이지 상품 리뷰: 3,000ms → 70ms (약 97.7% 향상)",
                    "클레임 조회: 2,600ms → 117ms (약 95.5% 향상)",
                    "쿠폰 발급 Count: 500ms → 29ms (약 94.2% 향상)",
                    "전체 페이지 로딩 성능 향상으로 사용자 이탈률 감소 및 고객사 만족도 증가",
                ],
                role: [
                    "PostgreSQL 기반의 대형 트랜잭션 쿼리들에 대해 실행 계획(Execution Plan) 분석 및 인덱스 최적화 설계",
                    "공통 모듈에서 반복 호출되던 중복 쿼리 제거, 필요한 데이터만 조회하도록 SELECT 범위 제한",
                    "단순 튜닝을 넘어 업무 흐름을 고려한 쿼리 로직 재설계 및 적용",
                    "pg_stat_statements, auto_explain 모듈을 활용한 슬로우 쿼리 로그 수집",
                ],
                techDetail: [
                    "EXPLAIN ANALYZE, pgBadger, DataGrip를 통한 실행 계획 상세 분석",
                    "개발 환경에서 쿼리 튜닝 A/B 테스트 진행 후 운영 서버에 점진적 반영",
                    "AWS RDS Slow Query Log + CloudWatch 지표 연동으로 장기적인 모니터링 체계 구성",
                ],
            },
            tech: ["PostgreSQL", "Query Tuning", "AWS RDS"]
        },
        {
            id: "2",
            title: "자체페이(WIZpay) 개발",
            period: "2023.01 - 2023.04",
            summary: "주문서 진입 시 회원이 등록한 카드 정보를 외부 API로 실시간 조회하여 사용자 맞춤 결제 옵션 제공",
            detail: {
                result: [
                    "주문서 진입 시, 회원이 등록한 카드 정보를 외부 API로 실시간 조회하여 사용자 맞춤 결제 옵션 제공",
                    "카드사별 무이자, 일반 할부, 체크/신용카드 여부에 따라 자동 분기된 UI를 통해 사용자 편의성 향상",
                    "PC / 모바일 웹 / 앱 환경에서 동일한 결제 경험을 제공하며 플랫폼별 UX 일관성 확보",
                    "복잡한 카드사 정책을 자동화하여 CS 감소 및 영업팀의 수동 대응 부담 완화",
                ],
                role: [
                    "외부 카드사 API 연동 및 응답 데이터 파싱 처리",
                    "카드 조건에 따라 결제 옵션을 동적으로 구성하는 로직 구현",
                    "주문서 진입 시점에 카드 정보 조회 및 UI에 자동 반영되도록 API 연동 설계",
                    "jQuery 기반 UI 요소(select box 등) 동작 로직 구현 및 PC/Mobile/App 플랫폼별 이벤트 처리 분기",
                ],
                techDetail: [
                    "Java 및 Spring MVC 기반의 주문서 API 설계 및 카드사 연동 로직 구현",
                    "PostgreSQL을 활용한 카드 정보 및 결제 조건 저장/조회 처리",
                    "jQuery를 활용한 UI 요소의 동적 렌더링 및 사용자 선택 이벤트 처리",
                    "REST API 통신을 위한 요청/응답 처리 및 Postman 기반 테스트 수행",
                    "다양한 디바이스 환경을 고려한 이벤트 흐름 제어 및 반응형 대응",
                ]
            },
            tech: ["Java", "Spring MVC", "REST API"]
        },
        {
            id: "3",
            title: "MD상품평 기능 개발",
            period: "2023.05",
            summary: "사이트 리뉴얼 이후 사라졌던 MD상품평 기능을 복구 및 개선하여 개발 요청 반영",
            detail: {
                result: [
                    "사이트 리뉴얼 이후 사라졌던 기능을 복구 및 개선",
                    "영업팀 요청에 따라 BackOffice에 신규 MD상품평 관리 기능 구현",
                    "텍스트와 이미지 기반의 상품평 등록 기능 제공으로 브랜드 홍보 및 전환율 개선에 기여",
                    "BackOffice에서 일괄 등록 가능해지며 운영 효율 향상",
                ],
                role: [
                    "상품평 등록 화면 및 데이터 처리 로직 전체 설계",
                    "AWS S3 임시 버킷에 이미지 업로드 → 등록 시 메인 버킷으로 복사되는 파일 처리 흐름 구현",
                    "관리자 화면 UI/UX 구현 및 저장/조회 API 개발 (jQuery + Spring MVC 기반)",
                    "등록된 상품평이 프론트에 반영되도록 전시 모듈 연동 담당",
                ],
                techDetail: [
                    "Java, Spring MVC 기반의 상품평 등록/조회 API 개발",
                    "AWS S3를 활용한 이미지 업로드 및 버킷 간 복사 처리 구현",
                    "jQuery와 JSTL을 활용한 BackOffice 내 동적 UI 구성",
                    "PostgreSQL 기반 데이터 저장 및 연동",
                    "Git 및 SourceTree를 활용한 버전 관리, IntelliJ 기반 개발",
                ]
            },
            tech: ["Java", "Spring MVC", "REST API"]
        },
        {
            id: "4",
            title: "BO/PO 사용성 개선",
            period: "2022.10 - 2022.12",
            summary: "BackOffice/PartnerOffice 사용자들의 운영 효율성 및 데이터 일관성 향상",
            detail: {
                result: [
                    "브랜드/MD 정보 변경 요청 흐름 파악 후, 엑셀 기반 대량 변경 등록 기능 설계 및 구현",
                    "엑셀 데이터 유효성 검증 및 변경 내역 로깅 처리",
                    "입점사 상태 및 계약 만료 여부에 따른 퇴점 프로세스 설계 및 업무 흐름 반영",
                    "관리자 화면에서 퇴점 업체를 식별 및 관리할 수 있도록 데이터 모델 및 전시 로직 설계",
                ],
                role: [
                    "Java, Spring MVC 기반의 엑셀 업로드 처리 및 데이터 반영 로직 구현",
                    "Apache POI를 활용한 엑셀 파일 파싱 및 유효성 검사",
                    "PostgreSQL 기반의 상태값 관리 및 업체별 퇴점 플래그 로직 처리",
                    "jQuery 기반의 관리자 화면 UI 처리 및 결과 피드백 표시",
                    "Git, IntelliJ, Notion을 통한 이슈 관리 및 커뮤니케이션",
                ],
                techDetail: [
                    "Spring MVC 기반 결제 API 설계",
                    "REST API 통신 및 테스트"
                ]
            },
            tech: ["Java", "Spring MVC", "REST API"]
        }
    ];

    return (
        <>
            <SideNav />
            <main className="min-h-screen bg-white text-gray-900 px-4 md:px-6 py-6 md:py-8 scroll-smooth [scroll-behavior:smooth]">
                <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">

                    <div
                      id="hero"
                      className={`scroll-mt-20 transition-all duration-700 ease-out ${visibleSections.includes("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                      <HeroSection />
                    </div>
                    <div
                      id="about"
                      className={`scroll-mt-20 transition-all duration-700 ease-out ${visibleSections.includes("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                      <AboutSection />
                    </div>
                    <div
                      id="skills"
                      className={`scroll-mt-20 transition-all duration-700 ease-out ${visibleSections.includes("skills") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                      <SkillsSection />
                    </div>
                    <div
                      id="career"
                      className={`scroll-mt-20 transition-all duration-700 ease-out ${visibleSections.includes("career") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                      <CareerSection />
                    </div>
                    <div
                      id="projects"
                      className={`scroll-mt-20 transition-all duration-700 ease-out ${visibleSections.includes("projects") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                      <ProjectsSection
                        projects={projects}
                        openId={openId}
                        setOpenId={setOpenId}
                      />
                    </div>
                    <div
                      id="education"
                      className={`scroll-mt-20 transition-all duration-700 ease-out ${visibleSections.includes("education") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                      <EducationSection />
                    </div>
                    <div
                      id="contact"
                      className={`scroll-mt-20 transition-all duration-700 ease-out ${visibleSections.includes("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                      <ContactSection />
                    </div>
                </div>
            </main>
        </>
    );
}
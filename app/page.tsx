"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function HeroSection() {
    return (
        <section className="space-y-6">
            <Image
                src="/profile.jpg"
                alt="profile"
                width={120}
                height={120}
                className="rounded-full"
            />
            <h1 className="text-5xl font-bold tracking-tight">Dan</h1>
            <p className="text-lg text-gray-500">
                기록하고 개선하는 백엔드 개발자
            </p>
        </section>
    );
}

function AboutSection() {
    return (
        <section className="border-t pt-10">
            <h2 className="text-2xl font-semibold mb-4 tracking-tight">About</h2>
            <p className="text-gray-700 leading-relaxed">
                작은 문제를 반복해서 마주치며, 개선의 실마리를 찾는 개발자입니다.
                <br />
                쇼핑몰 플랫폼을 운영하며 사용자 흐름 전반을 안정적으로 관리해왔고,
                더 나은 경험을 설계하는 데 집중했습니다.
            </p>
        </section>
    );
}

function SkillsSection() {
    return (
        <section className="border-t pt-10">
            <h2 className="text-2xl font-semibold mb-4 tracking-tight">Skills</h2>
            <div className="flex flex-wrap gap-2">
                {["Java", "Spring", "PostgreSQL", "AWS", "Next.js"].map((skill) => (
                    <span key={skill} className="text-sm bg-gray-100 px-3 py-1 rounded">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}

function CareerSection() {
    return (
        <section className="border-t pt-10">
            <h2 className="text-2xl font-semibold mb-4 tracking-tight">Career</h2>
            <div>
                <p className="font-semibold text-lg">(주)엑시온그룹</p>
                <p className="text-sm text-gray-400">2022.10 ~ 2025.05</p>
                <ul className="list-disc ml-5 text-gray-700 mt-3 space-y-1">
                    <li>이커머스 플랫폼 WIZWID 운영</li>
                    <li>주문/결제/상품 전시 흐름 개선</li>
                    <li>PostgreSQL 쿼리 튜닝 및 성능 개선</li>
                </ul>
            </div>
        </section>
    );
}

function ContactSection() {
    return (
        <section className="border-t pt-10">
            <h2 className="text-2xl font-semibold mb-4 tracking-tight">Contact</h2>
            <p className="text-gray-700">your@email.com</p>
        </section>
    );
}

export default function Home() {
    const [openId, setOpenId] = useState<string | null>(null);

    const projects = [
        {
            id: "1",
            title: "슬로우 쿼리 개선",
            period: "2023.10 - 2023.12",
            description: "PostgreSQL 기반의 대형 트랜잭션 쿼리들에 대해 실행 계획 분석 및 인덱스 최적화",
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
            title: "WIZpay 결제 시스템",
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
            <header className="max-w-3xl mx-auto mb-12 flex justify-between">
                <p className="font-semibold">Danistory</p>

                <div className="space-x-4 text-sm text-gray-500 [&>*]:hover:text-black transition">
                    <Link href="/">Home</Link>
                    <Link href="/guestbook">Guestbook</Link>
                </div>
            </header>
            <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-16">
                <div className="max-w-4xl mx-auto space-y-20">

                    <HeroSection />
                    <AboutSection />
                    <SkillsSection />
                    <CareerSection />

                    <section className="border-t pt-10">
                        <h2 className="text-2xl font-semibold mb-4 tracking-tight">Projects</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((item) => (
                                <div
                                    key={item.id}
                                    className="border border-gray-200 p-6 rounded-2xl cursor-pointer hover:shadow-md hover:border-gray-300 transition bg-white"
                                    onClick={() =>
                                        setOpenId(openId === item.id ? null : item.id)
                                    }
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                                                💻
                                            </div>
                                            <div>
                                                <p className="font-semibold text-lg">{item.title}</p>
                                                <p className="text-sm text-gray-400">{item.period}</p>
                                            </div>
                                        </div>
                                        <span
                                            className={`text-gray-400 transition-transform duration-300 ${
                                                openId === item.id ? "rotate-180" : ""
                                            }`}
                                        >
                                            ▼
                                        </span>
                                    </div>

                                    <p className="text-sm text-gray-600 mt-3">
                                        {item.summary}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {item.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs bg-gray-100 px-2 py-1 rounded"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${
                                            openId === item.id ? "max-h-[500px] mt-4 pt-4 border-t" : "max-h-0"
                                        } text-sm text-gray-700 space-y-4`}
                                    >
                                        {openId === item.id && (
                                            <>
                                                <div>
                                                    <p className="font-semibold text-blue-500">성과</p>
                                                    {item.detail.result.map((d, idx) => (
                                                        <p key={idx}>• {d}</p>
                                                    ))}
                                                </div>

                                                <div>
                                                    <p className="font-semibold text-blue-500">역할</p>
                                                    {item.detail.role.map((d, idx) => (
                                                        <p key={idx}>• {d}</p>
                                                    ))}
                                                </div>

                                                <div>
                                                    <p className="font-semibold text-blue-500">기술</p>
                                                    {item.detail.techDetail.map((d, idx) => (
                                                        <p key={idx}>• {d}</p>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <ContactSection />

                </div>
            </main>
        </>
    );
}
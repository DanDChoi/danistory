export default function EducationSection() {
    return (
        <section id="education" className="py-12 md:py-20">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10">Education</h2>

                {/* 교육 1 */}
                <div className="bg-white border border-gray-200/70 rounded-xl p-4 md:p-6 mb-4 md:mb-6 flex flex-col md:flex-row gap-4 hover:shadow-md active:scale-[0.98] transition">
                    {/* 아이콘 영역 */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary text-sm md:text-base">
                        🎓
                    </div>

                    {/* 내용 */}
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 md:gap-0">
                            <h3 className="text-base md:text-lg font-semibold leading-snug">
                                프로젝트 중심의 풀스택 개발자 양성과정
                            </h3>

                            <div className="text-xs md:text-sm text-gray-400 flex items-center gap-2 flex-wrap">
                                <span>2021.11 - 2022.04</span>
                                <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">
                                    6개월
                                </span>
                            </div>
                        </div>

                        <p className="text-blue-600 font-medium mt-1 md:mt-2 text-sm md:text-base">
                            KOSMO (한국소프트웨어인재개발원)
                        </p>

                        <ul className="mt-3 md:mt-4 space-y-1.5 md:space-y-2 text-[13px] md:text-sm text-gray-600">
                            <li>• Java / Spring / Oracle DB 중심 4개 팀 프로젝트 수행</li>
                            <li>• 파이널 프로젝트: Spring 기반 웹 애플리케이션 개발</li>
                            <li>• 최우수 프로젝트상, 100% 출석(열정상) 수상</li>
                        </ul>
                    </div>
                </div>

                {/* 교육 2 */}
                <div className="bg-white border border-gray-200/70 rounded-xl p-4 md:p-6 flex flex-col md:flex-row gap-4 hover:shadow-md active:scale-[0.98] transition">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary text-sm md:text-base">
                        🎓
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 md:gap-0">
                            <h3 className="text-base md:text-lg font-semibold leading-snug">서울신학대학교</h3>

                            <div className="text-xs md:text-sm text-gray-400">
                                2008.03 - 2014.02
                            </div>
                        </div>

                        <p className="text-blue-600 font-medium mt-1 md:mt-2 text-sm md:text-base">
                            4년제 졸업
                        </p>
                    </div>
                </div>

                {/* 자격증 */}
                <div className="mt-8 md:mt-10">
                    <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">자격증</h3>

                    <div className="inline-flex items-center gap-2 bg-muted px-3 md:px-4 py-2 rounded-lg hover:bg-primary/10 transition text-sm">
                        <span>🏅</span>
                        <span className="font-medium">정보처리기사</span>
                        <span className="text-sm text-gray-500">(필기합격)</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
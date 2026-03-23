export default function EducationSection() {
    return (
        <section className="border-t pt-10">
            <h2 className="text-2xl font-semibold mb-4 tracking-tight leading-tight">Education</h2>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-lg">프로젝트 중심의 풀스택 개발자 양성과정</p>
                <p className="text-sm text-gray-400 mt-1">2021.11 - 2022.04</p>

                <p className="text-gray-700 mt-3">
                    <b>KOSMO (한국소프트웨어인재개발원)</b>
                    <br />
                    • Java / Spring / Oracle DB 중심 4개 팀 프로젝트 수행
                    <br />
                    • 파이널 프로젝트: Spring 기반 웹 애플리케이션 개발
                    <br />
                    • 최우수 프로젝트상, 100% 출석(열정상) 수상
                </p>
            </div>

            <br/>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-lg">서울신학대학교</p>
                <p className="text-sm text-gray-400 mt-1">2008.03 - 2014.02</p>

                <p className="text-gray-700 mt-3">
                    4년제 졸업
                </p>
            </div>
        </section>

    );
}
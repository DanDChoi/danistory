export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">About Me</h2>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {/* Card 1 */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-7 text-center shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-lg">
              💼
            </div>
            <h3 className="text-lg font-bold text-gray-900 mt-1">2년 7개월</h3>
            <p className="text-sm text-gray-500 mt-1">WIZWID 이커머스 플랫폼 운영</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-7 text-center shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-lg">
              🏆
            </div>
            <h3 className="text-lg font-bold text-gray-900 mt-1">2023 우수사원</h3>
            <p className="text-sm text-gray-500 mt-1">성과 기반 문제해결 역량 인정</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200/70 rounded-xl p-7 text-center shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-lg">
              🌏
            </div>
            <h3 className="text-lg font-bold text-gray-900 mt-1">호주 5년 거주</h3>
            <p className="text-sm text-gray-500 mt-1">영어 일상 회화 가능</p>
          </div>

        </div>

        {/* Description Card */}
        <div className="bg-white border border-gray-200/70 rounded-xl p-9 shadow-sm hover:shadow-md transition-all duration-300">

          <p className="text-lg leading-relaxed text-gray-900 mb-4">
            작은 문제를 반복해서 마주치며, <span className="text-blue-600 font-semibold">개선의 실마리를 찾는 개발자</span>입니다.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            장기적으로 유지되는 쇼핑몰 플랫폼을 운영하며 백오피스와 파트너오피스 등 실무 부서와 긴밀히 협업해왔고,
            상품 노출, 주문, 결제까지 사용자 여정 전반을 안정적으로 관리하며, 더 나은 경험을 설계하는 데 집중했습니다.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            단순 기능 구현을 넘어서, 현업의 맥락을 이해하고 흐름에 맞는 개발을 지향해왔습니다.
            특히, <span className="font-semibold text-gray-900">속도 개선·데이터 최적화·운영 안정성</span> 등 반복적이지만 중요한 영역에서 지속적인 개선을 만들어낸 경험이 많습니다.
          </p>

          <p className="text-gray-600 leading-relaxed">
            결국 좋은 서비스는 작은 디테일과 소통에서 시작된다는 것을 믿고, 그렇게 실천해왔습니다.
          </p>

        </div>

      </div>
    </section>
  );
}
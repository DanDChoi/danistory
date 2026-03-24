import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center pt-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-100 shadow-xl">
                <Image
                  src="/img/profile.jpg"
                  alt="profile"
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                🏆 2023 우수사원
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-blue-600 font-medium mb-2">Backend Developer</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Dan | <span className="bg-gradient-to-r from-blue-800 to-blue-300 bg-clip-text text-transparent">
                최대현
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 mb-6 leading-relaxed">
              기록과 커뮤니케이션을 무기로
              <br className="hidden sm:block" />
              <span className="text-gray-900 font-medium">문제를 해결하는 개발자</span>
            </p>

            {/* Contact pills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
              <a
                href="mailto:danchoi.dev@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
              >
                ✉️ danchoi.dev@gmail.com
              </a>

              <a
                href="tel:01028487276"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
              >
                📞 010-2848-7276
              </a>

              <a
                href="https://github.com/DanDChoi"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
              >
                🐙 GitHub
              </a>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/resume.pdf"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                이력서 다운로드
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border rounded-lg font-medium hover:bg-gray-100 transition"
              >
                연락하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
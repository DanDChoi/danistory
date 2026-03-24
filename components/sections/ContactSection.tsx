import Image from "next/image";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Contact</h2>

                <p className="text-gray-500 mb-10">
                    새로운 기회에 대해 이야기 나누고 싶습니다.
                    <br />
                    언제든지 편하게 연락 주세요!
                </p>

                {/* 카드 영역 */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {/* Email */}
                    <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 transition group-hover:scale-110">
                            ✉️
                        </div>
                        <p className="text-sm text-gray-400 mb-2">Email</p>
                        <a
                            href="mailto:danchoi.dev@gmail.com"
                            className="font-medium hover:text-primary transition"
                        >
                            danchoi.dev@gmail.com
                        </a>
                    </div>

                    {/* QR (Phone 대체) */}
                    <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 transition group-hover:scale-110">
                            📱
                        </div>
                        <p className="text-sm text-gray-400 mb-2">Contact</p>

                        <div className="flex justify-center">
                            <Image
                                src="/img/contact_qr.PNG"
                                alt="contact_qr"
                                width={80}
                                height={80}
                                className="rounded-md border border-gray-200 p-2 bg-white"
                            />
                        </div>
                    </div>

                    {/* GitHub */}
                    <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 transition group-hover:scale-110">
                            🐙
                        </div>
                        <p className="text-sm text-gray-400 mb-2">GitHub</p>
                        <a
                            href="https://github.com/DanDChoi"
                            target="_blank"
                            className="font-medium hover:text-primary transition"
                        >
                            github.com/DanDChoi
                        </a>
                    </div>
                </div>

                {/* 버튼 */}
                <div>
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg active:scale-95 transition"
                    >
                        이력서 다운로드
                    </a>
                </div>
            </div>
        </section>
    );
}
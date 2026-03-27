import Image from "next/image";
import { Mail, Smartphone, Copy, Check } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useState } from "react";

export default function ContactSection() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText("danchoi.dev@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        console.error("copy failed", e);
      }
    };

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
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-50/70 group-hover:bg-blue-100 text-blue-800 flex items-center justify-center mb-4 transition">
                            <Mail className="w-5 h-5 text-current transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <p className="text-sm text-gray-400 mb-2">Email</p>
                        <span className="font-medium text-gray-900">
                            danchoi.dev@gmail.com
                        </span>
                        <br />
                        <button
                          onClick={handleCopy}
                          className="mt-2 inline-flex items-center gap-1 text-xs text-gray-400 hover:text-blue-600 cursor-pointer transition px-2 py-1 rounded-md hover:bg-gray-100"
                        >
                          {copied ? (
                            <>
                              <span className="text-blue-600 flex items-center gap-1">
                                <Check className="w-3 h-3" />
                                복사됨
                              </span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              복사
                            </>
                          )}
                        </button>
                    </div>

                    {/* QR (Phone 대체) */}
                    <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-50/70 group-hover:bg-blue-100 text-blue-800 flex items-center justify-center mb-4 transition">
                            <Smartphone className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <p className="text-sm text-gray-400 mb-2">Phone</p>

                        <div className="flex justify-center">
                            <Image
                                src="/img/contact_qr.png"
                                alt="contact_qr"
                                width={80}
                                height={80}
                                className="rounded-md border border-gray-200 p-2 bg-white"
                            />
                        </div>
                    </div>

                    {/* GitHub */}
                    <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-50/70 group-hover:bg-blue-100 text-blue-800 flex items-center justify-center mb-4 transition">
                            <SiGithub className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <p className="text-sm text-gray-400 mb-2">GitHub</p>
                        <a
                            href="https://github.com/DanDChoi"
                            target="_blank"
                            className="font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"
                        >
                            github.com/DanDChoi
                        </a>
                    </div>
                </div>

                {/* 이력서 버튼 */}
                {/*<div>*/}
                {/*    <a*/}
                {/*        href="/resume.zip"*/}
                {/*        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"*/}
                {/*        download="Dan_Choi_Resume_Portfolio.zip"*/}
                {/*    >*/}
                {/*        이력서 다운로드*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
        </section>
    );
}
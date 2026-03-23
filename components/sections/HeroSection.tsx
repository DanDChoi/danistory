import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="space-y-8 pt-6">
            <Image
                src="/profile.jpg"
                alt="profile"
                width={120}
                height={120}
                className="rounded-full"
            />

            <div className="space-y-2">
                <h1 className="text-5xl font-bold tracking-tight">Dan | 최대현</h1>
                <p className="text-lg text-gray-500">
                    기록과 커뮤니케이션을 무기로
                </p>
                <p className="text-lg text-gray-500">
                    문제를 해결하는 개발자
                </p>
                <p className="text-sm text-gray-400">
                    기록하고 성장하는 개발 여정
                </p>
            </div>
            <div className="flex gap-3 pt-2 flex-wrap">
                <a
                    href="https://github.com/DanDChoi"
                    target="_blank"
                    className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800"
                >
                    GitHub
                </a>
                <a
                    href="mailto:danchoi.dev@gmail.com"
                    className="px-4 py-2 border text-sm rounded hover:bg-gray-100"
                >
                    danchoi.dev@gmail.com
                </a>
            </div>
        </section>
    );
}
export default function ProjectsSection({
                             projects,
                             openId,
                             setOpenId,
                         }: {
    projects: any[];
    openId: string | null;
    setOpenId: (id: string | null) => void;
}) {
    return (
        <section id="projects" className="py-16 md:py-20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white border border-gray-200/70 rounded-xl p-7 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        onClick={() =>
                            setOpenId(openId === item.id ? null : item.id)
                        }
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-50/70 rounded-lg flex items-center justify-center text-blue-600">
                                    💻
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{item.title}</p>
                                    <p className="text-sm text-gray-500">{item.period}</p>
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

                        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                            {item.summary}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-3">
                            {item.tech.map((t: string) => (
                                <span
                                    key={t}
                                    className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                openId === item.id ? "max-h-[600px] mt-6 pt-6 border-t border-gray-200/70" : "max-h-0"
                            } text-sm text-gray-700 space-y-5 leading-relaxed`}
                        >
                            {openId === item.id && (
                                <>
                                    <div>
                                        <p className="text-xs font-semibold text-blue-600 mb-2">성과</p>
                                        {item.detail.result.map((d: string, idx: number) => (
                                            <p
                                                key={idx}
                                                className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-300 leading-relaxed"
                                            >
                                                {d}
                                            </p>
                                        ))}
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-blue-600 mb-2">역할</p>
                                        {item.detail.role.map((d: string, idx: number) => (
                                            <p
                                                key={idx}
                                                className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-300 leading-relaxed"
                                            >
                                                {d}
                                            </p>
                                        ))}
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-blue-600 mb-2">기술</p>
                                        {item.detail.techDetail.map((d: string, idx: number) => (
                                            <p
                                                key={idx}
                                                className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-300 leading-relaxed"
                                            >
                                                {d}
                                            </p>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
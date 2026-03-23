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
        <section id="projects" className="border-t pt-10">
            <h2 className="text-2xl font-semibold mb-4 tracking-tight leading-tight">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((item) => (
                    <div
                        key={item.id}
                        className="border border-gray-200 p-6 rounded-2xl cursor-pointer hover:shadow-lg hover:border-gray-300 transition bg-white hover:-translate-y-1"
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

                        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                            {item.summary}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-3">
                            {item.tech.map((t: string) => (
                                <span
                                    key={t}
                                    className="text-xs bg-gray-100 px-2 py-1 rounded"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                openId === item.id ? "max-h-[600px] mt-5 pt-5 border-t" : "max-h-0"
                            } text-sm text-gray-700 space-y-5 leading-relaxed`}
                        >
                            {openId === item.id && (
                                <>
                                    <div>
                                        <p className="font-semibold text-blue-500">성과</p>
                                        {item.detail.result.map((d: string, idx: number) => (
                                            <p
                                                key={idx}
                                                className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400"
                                            >
                                                {d}
                                            </p>
                                        ))}
                                    </div>

                                    <div>
                                        <p className="font-semibold text-blue-500">역할</p>
                                        {item.detail.role.map((d: string, idx: number) => (
                                            <p
                                                key={idx}
                                                className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400"
                                            >
                                                {d}
                                            </p>
                                        ))}
                                    </div>

                                    <div>
                                        <p className="font-semibold text-blue-500">기술</p>
                                        {item.detail.techDetail.map((d: string, idx: number) => (
                                            <p
                                                key={idx}
                                                className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400"
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
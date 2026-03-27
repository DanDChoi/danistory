import { Code2, CreditCard, ShoppingCart, FileText, ChevronDown } from "lucide-react";

export default function ProjectsSection({
                             projects,
                             openId,
                             setOpenId,
                         }: {
    projects: any[];
    openId: string | null;
    setOpenId: (id: string | null) => void;
}) {
    const iconMap: Record<string, any> = {
      "슬로우 쿼리 개선": Code2,
      "자체페이(WIZpay) 개발": CreditCard,
      "MD상품평 기능 개발": ShoppingCart,
      "BO/PO 사용성 개선": FileText,
    };
    const colorMap: Record<string, { bg: string; hoverBg: string; text: string; titleHover: string }> = {
      "슬로우 쿼리 개선": {
        bg: "bg-blue-50/70",
        hoverBg: "group-hover:bg-blue-100",
        text: "text-blue-600",
        titleHover: "group-hover:text-blue-600",
      },
      "자체페이(WIZpay) 개발": {
        bg: "bg-indigo-50/70",
        hoverBg: "group-hover:bg-indigo-100",
        text: "text-indigo-600",
        titleHover: "group-hover:text-indigo-600",
      },
      "MD상품평 기능 개발": {
        bg: "bg-purple-50/70",
        hoverBg: "group-hover:bg-purple-100",
        text: "text-purple-600",
        titleHover: "group-hover:text-purple-600",
      },
      "BO/PO 사용성 개선": {
        bg: "bg-sky-50/70",
        hoverBg: "group-hover:bg-sky-100",
        text: "text-sky-600",
        titleHover: "group-hover:text-sky-600",
      },
    };
    return (
        <section id="projects" className="py-12 md:py-20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {projects.map((item) => {
                    const c = colorMap[item.title] || { bg: "bg-blue-50/70", hoverBg: "group-hover:bg-blue-100", text: "text-blue-600", titleHover: "group-hover:text-blue-600" };
                    return (
                    <div
                        key={item.id}
                        className="group bg-white border border-gray-200/70 rounded-xl p-4 md:p-7 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        onClick={() =>
                            setOpenId(openId === item.id ? null : item.id)
                        }
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 md:gap-3">
                                <div className={`w-9 h-9 md:w-10 md:h-10 ${c.bg} ${c.hoverBg} rounded-lg flex items-center justify-center ${c.text} transition-colors duration-300`}>
                                    {(() => {
                                      const Icon = iconMap[item.title] || Code2;
                                      return <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 text-current" />;
                                    })()}
                                </div>
                                <div>
                                    <p className={`font-bold text-gray-900 ${c.titleHover} transition-colors duration-300`}>{item.title}</p>
                                    <p className="text-sm text-gray-500">{item.period}</p>
                                </div>
                            </div>
                            <ChevronDown
                                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                                    openId === item.id ? "rotate-180" : ""
                                }`}
                            />
                        </div>

                        <p className="text-sm text-gray-600 mt-3 md:mt-4 leading-relaxed">
                            {item.summary}
                        </p>

                        <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3">
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
                                openId === item.id ? "max-h-[1000px] mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200/70" : "max-h-0"
                            } text-sm text-gray-700 space-y-4 md:space-y-5 leading-relaxed`}
                        >
                            {openId === item.id && (
                                <>
                                    <div>
                                        <p className="text-xs font-semibold text-blue-600 mb-1.5 md:mb-2">성과</p>
                                        {item.detail.result.map((d: string, idx: number) => (
                                            <p
                                                key={idx}
                                                className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-300 leading-relaxed text-[13px] md:text-sm"
                                            >
                                                {d}
                                            </p>
                                        ))}
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-blue-600 mb-1.5 md:mb-2">역할</p>
                                        {item.detail.role.map((d: string, idx: number) => (
                                            <p
                                                key={idx}
                                                className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-300 leading-relaxed text-[13px] md:text-sm"
                                            >
                                                {d}
                                            </p>
                                        ))}
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-blue-600 mb-1.5 md:mb-2">기술</p>
                                        {item.detail.techDetail.map((d: string, idx: number) => (
                                            <p
                                                key={idx}
                                                className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-300 leading-relaxed text-[13px] md:text-sm"
                                            >
                                                {d}
                                            </p>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )})}
            </div>
        </section>
    );
}
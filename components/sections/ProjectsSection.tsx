"use client";

import { Code2, CreditCard, ShoppingCart, FileText, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

const colorMap: Record<string, { bg: string; hoverBg: string; text: string; titleHover: string }> = {
  blue: {
    bg: "bg-blue-50/70",
    hoverBg: "group-hover:bg-blue-100",
    text: "text-blue-600",
    titleHover: "group-hover:text-blue-600",
  },
  indigo: {
    bg: "bg-indigo-50/70",
    hoverBg: "group-hover:bg-indigo-100",
    text: "text-indigo-600",
    titleHover: "group-hover:text-indigo-600",
  },
  purple: {
    bg: "bg-purple-50/70",
    hoverBg: "group-hover:bg-purple-100",
    text: "text-purple-600",
    titleHover: "group-hover:text-purple-600",
  },
  sky: {
    bg: "bg-sky-50/70",
    hoverBg: "group-hover:bg-sky-100",
    text: "text-sky-600",
    titleHover: "group-hover:text-sky-600",
  },
};

const iconList = [Code2, CreditCard, ShoppingCart, FileText];

export default function ProjectsSection({
  openId,
  setOpenId,
}: {
  openId: string | null;
  setOpenId: (id: string | null) => void;
}) {
  const t = useTranslations("projects");
  const projects = t.raw("items") as {
    id: string;
    colorKey: string;
    title: string;
    period: string;
    summary: string;
    tech: string[];
    result: string[];
    role: string[];
    techDetail: string[];
  }[];

  return (
    <section id="projects" className="py-12 md:py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">{t("title")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((item, index) => {
          const c = colorMap[item.colorKey] ?? colorMap.blue;
          const Icon = iconList[index] ?? Code2;
          return (
            <div
              key={item.id}
              className="group bg-white border border-gray-200/70 rounded-xl p-4 md:p-7 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className={`w-9 h-9 md:w-10 md:h-10 ${c.bg} ${c.hoverBg} rounded-lg flex items-center justify-center ${c.text} transition-colors duration-300`}>
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 text-current" />
                  </div>
                  <div>
                    <p className={`font-bold text-gray-900 ${c.titleHover} transition-colors duration-300`}>{item.title}</p>
                    <p className="text-sm text-gray-500">{item.period}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openId === item.id ? "rotate-180" : ""}`}
                />
              </div>

              <p className="text-sm text-gray-600 mt-3 md:mt-4 leading-relaxed">
                {item.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3">
                {item.tech.map((tech) => (
                  <span key={tech} className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                    {tech}
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
                      <p className="text-xs font-semibold text-blue-600 mb-1.5 md:mb-2">{t("resultLabel")}</p>
                      {item.result.map((d, idx) => (
                        <p key={idx} className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-300 leading-relaxed text-[13px] md:text-sm">
                          {d}
                        </p>
                      ))}
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-blue-600 mb-1.5 md:mb-2">{t("roleLabel")}</p>
                      {item.role.map((d, idx) => (
                        <p key={idx} className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-300 leading-relaxed text-[13px] md:text-sm">
                          {d}
                        </p>
                      ))}
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-blue-600 mb-1.5 md:mb-2">{t("techLabel")}</p>
                      {item.techDetail.map((d, idx) => (
                        <p key={idx} className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-300 leading-relaxed text-[13px] md:text-sm">
                          {d}
                        </p>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

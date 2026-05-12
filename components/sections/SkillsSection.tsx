"use client";

import { Server, Layout, Cloud } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SkillsSection() {
  const t = useTranslations("skills");

  const skillCategories = [
    {
      icon: Server,
      title: "Back-End",
      items: t.raw("backendItems") as { name: string; desc: string }[],
    },
    {
      icon: Layout,
      title: "Front-End",
      items: t.raw("frontendItems") as { name: string; desc: string }[],
    },
    {
      icon: Cloud,
      title: "DevOps",
      items: t.raw("devopsItems") as { name: string; desc: string }[],
    },
  ];

  return (
    <section id="skills" className="py-18 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">{t("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-white border border-gray-200/70 rounded-xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50/70 flex items-center justify-center text-blue-600">
                  <cat.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{cat.title}</h3>
              </div>
              <div className="space-y-5">
                {cat.items.map((it) => (
                  <div key={it.name}>
                    <p className="text-sm font-semibold text-gray-900 mb-1">{it.name}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{it.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

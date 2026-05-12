"use client";

import { Building2, Award, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CareerSection() {
  const t = useTranslations("career");
  const achievements = t.raw("achievements") as string[];

  return (
    <section id="career" className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">{t("title")}</h2>

        <div className="relative group bg-white border border-gray-200/70 rounded-xl p-4 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] transition-all duration-300">

          <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <div className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-blue-600 text-white text-xs md:text-sm font-medium shadow-lg">
              <span className="flex items-center gap-1">
                <Award className="w-3 h-3 md:w-4 md:h-4" />
                {t("award")}
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-6 md:mb-10">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-blue-50/70 flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:bg-blue-100">
              <Building2 className="w-5 h-5 md:w-7 md:h-7" />
            </div>

            <div className="max-w-[90%] md:max-w-none">
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                {t("company")}
              </h3>
              <p className="text-blue-600 font-medium mb-1 md:mb-2 text-sm md:text-base">
                {t("role")}
              </p>
              <p className="text-sm text-gray-500">
                {t("period")}
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-400 mb-3 md:mb-4">{t("achievementsTitle")}</p>
            <div className="space-y-3 md:space-y-4">
              {achievements.map((item) => (
                <div key={item} className="flex items-start md:items-center gap-2 md:gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-[2px] md:mt-0" />
                  <p className="text-gray-700 leading-relaxed text-[13px] md:text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

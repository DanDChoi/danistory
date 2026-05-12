"use client";

import { GraduationCap, Award } from "lucide-react";
import { useTranslations } from "next-intl";

export default function EducationSection() {
  const t = useTranslations("education");
  const edu1Items = t.raw("edu1Items") as string[];

  return (
    <section id="education" className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10">{t("title")}</h2>

        <div className="group bg-white border border-gray-200/70 rounded-xl p-4 md:p-6 mb-4 md:mb-6 flex flex-col md:flex-row gap-4 hover:shadow-md active:scale-[0.98] transition">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center flex-shrink-0 text-teal-600 transition-colors duration-300">
            <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 md:gap-0">
              <h3 className="text-base md:text-lg font-semibold leading-snug">
                {t("edu1Title")}
              </h3>
              <div className="text-xs md:text-sm text-gray-400 flex items-center gap-2 flex-wrap">
                <span>{t("edu1Period")}</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">
                  {t("edu1Duration")}
                </span>
              </div>
            </div>

            <p className="text-blue-500 font-medium mt-1 md:mt-2 text-sm md:text-base">
              {t("edu1Org")}
            </p>

            <ul className="mt-3 md:mt-4 space-y-1.5 md:space-y-2 text-[13px] md:text-sm text-gray-600">
              {edu1Items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="group bg-white border border-gray-200/70 rounded-xl p-4 md:p-6 flex flex-col md:flex-row gap-4 hover:shadow-md active:scale-[0.98] transition">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center flex-shrink-0 text-teal-600 transition-colors duration-300">
            <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 md:gap-0">
              <h3 className="text-base md:text-lg font-semibold leading-snug">{t("edu2Title")}</h3>
              <div className="text-xs md:text-sm text-gray-400">
                {t("edu2Period")}
              </div>
            </div>
            <p className="text-blue-500 font-medium mt-1 md:mt-2 text-sm md:text-base">
              {t("edu2Degree")}
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-10">
          <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">{t("certTitle")}</h3>
          <div className="inline-flex items-center gap-2 bg-muted px-3 md:px-4 py-2 rounded-lg hover:bg-primary/10 transition text-sm">
            <Award className="w-4 h-4 text-teal-600" />
            <span className="font-medium">{t("certName")}</span>
            <span className="text-sm text-gray-500">{t("certStatus")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

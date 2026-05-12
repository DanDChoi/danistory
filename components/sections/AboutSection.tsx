"use client";

import { Briefcase, Award, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">{t("title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">

          <div className="bg-white border border-gray-200/70 rounded-xl p-4 md:p-7 text-center shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-base md:text-lg">
              <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mt-1">{t("card1Title")}</h3>
            <p className="text-xs md:text-sm text-gray-500 mt-1">{t("card1Desc")}</p>
          </div>

          <div className="bg-white border border-gray-200/70 rounded-xl p-4 md:p-7 text-center shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-base md:text-lg">
              <Award className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mt-1">{t("card2Title")}</h3>
            <p className="text-xs md:text-sm text-gray-500 mt-1">{t("card2Desc")}</p>
          </div>

          <div className="bg-white border border-gray-200/70 rounded-xl p-4 md:p-7 text-center shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-base md:text-lg">
              <Globe className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 mt-1">{t("card3Title")}</h3>
            <p className="text-xs md:text-sm text-gray-500 mt-1">{t("card3Desc")}</p>
          </div>

        </div>

        <div className="bg-white border border-gray-200/70 rounded-xl p-5 md:p-9 shadow-sm hover:shadow-md transition-all duration-300">

          <p className="text-base md:text-lg leading-relaxed text-gray-900 mb-3 md:mb-4">
            {t("p1Lead")}
            <br className="block md:hidden" />
            <span className="text-blue-600 font-semibold"> {t("p1Highlight")}</span>
            {t("p1Tail")}
          </p>

          <p className="text-[14px] md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4">
            {t("p2")}
          </p>

          <p className="text-[14px] md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4">
            {t("p3")}
          </p>

          <p className="text-[14px] md:text-base text-gray-600 leading-relaxed">
            {t("p4")}
          </p>

        </div>

      </div>
    </section>
  );
}

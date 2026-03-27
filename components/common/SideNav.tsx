"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Introduce" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "career", label: "Career" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function SideNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActive("hero");
        return;
      }

      let current = "";

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const triggerLine = window.innerHeight * 0.3;

        if (rect.top <= triggerLine && rect.bottom >= triggerLine) {
          current = section.id;
        }
      });

      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollBottom >= docHeight - 50) {
        current = "contact";
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    requestAnimationFrame(handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden lg:flex fixed top-1/2 -translate-y-1/2 flex-col gap-4 z-40 right-[calc((100vw-56rem)/2-15rem)]">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById(section.id);
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          className={`text-sm transition-all duration-300 ease-out cursor-pointer
            ${
              active === section.id
                ? "text-blue-600 scale-110 font-semibold tracking-wide"
                : "text-gray-400 hover:text-gray-700 hover:scale-105"
            }
          `}
        >
          <span className="flex items-center gap-2">
            <span className="w-3 inline-block text-blue-600 text-xs">
              {active === section.id ? "●" : ""}
            </span>
            {section.label}
          </span>
        </a>
      ))}
    </div>
  );
}
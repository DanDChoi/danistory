"use client";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CareerSection from "@/components/sections/CareerSection";
import ContactSection from "@/components/sections/ContactSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import SideNav from "@/components/common/SideNav";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      console.log("session init:", data);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("auth change:", event, session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const ids = ["hero", "about", "skills", "career", "projects", "education", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, entry.target.id])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SideNav />
      <main className="min-h-screen bg-white text-gray-900 px-4 md:px-6 py-6 md:py-8 scroll-smooth [scroll-behavior:smooth]">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">

          <div id="hero" className={`scroll-mt-20 transition-all duration-700 ease-out ${visibleSections.includes("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <HeroSection />
          </div>
          <div id="about" className={`scroll-mt-20 transition-all duration-700 ease-out ${visibleSections.includes("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <AboutSection />
          </div>
          <div id="skills" className={`scroll-mt-20 transition-all duration-700 ease-out ${visibleSections.includes("skills") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <SkillsSection />
          </div>
          <div id="career" className={`scroll-mt-20 transition-all duration-700 ease-out ${visibleSections.includes("career") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <CareerSection />
          </div>
          <div id="projects" className={`scroll-mt-20 transition-all duration-700 ease-out ${visibleSections.includes("projects") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <ProjectsSection openId={openId} setOpenId={setOpenId} />
          </div>
          <div id="education" className={`scroll-mt-20 transition-all duration-700 ease-out ${visibleSections.includes("education") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <EducationSection />
          </div>
          <div id="contact" className={`scroll-mt-20 transition-all duration-700 ease-out ${visibleSections.includes("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <ContactSection />
          </div>

        </div>
      </main>
    </>
  );
}

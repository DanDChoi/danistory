import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  metadataBase: new URL("https://danistory.vercel.app"),
  title: {
    default: "Danistory | Dan의 개발 블로그 & 포트폴리오",
    template: "%s | Danistory",
  },
  description: "백엔드 개발자 Dan의 기술 블로그 & 포트폴리오. Java, Spring, PostgreSQL, 쿼리 최적화 등 실무 경험을 기록합니다.",
  keywords: ["개발 블로그", "포트폴리오", "백엔드 개발자", "Java", "Spring", "PostgreSQL", "쿼리 최적화"],
  authors: [{ name: "Dan Choi" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://danistory.vercel.app",
    siteName: "Danistory",
    title: "Danistory | Dan의 개발 블로그 & 포트폴리오",
    description: "백엔드 개발자 Dan의 기술 블로그 & 포트폴리오. Java, Spring, PostgreSQL, 쿼리 최적화 등 실무 경험을 기록합니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danistory | Dan의 개발 블로그 & 포트폴리오",
    description: "백엔드 개발자 Dan의 기술 블로그 & 포트폴리오.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "gTN-suPQVO1C4qpPeYjKM8ooWVuqqyhr4HOKLiX3cKk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = getAllPosts();




  const categories = [...new Set(posts.map(p => p.category))]
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
  return (
    <html lang="en">
      <body className="antialiased">
        <Header categories={categories} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

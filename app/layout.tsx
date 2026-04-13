import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Danistory",
  description: "Dan의 개발 블로그",
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
      </body>
    </html>
  );
}

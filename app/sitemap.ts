import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { projects } from "@/app/projects/projectData";

const BASE_URL = "https://danistory.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const categories = [...new Set(posts.map((p) => p.category).filter(Boolean))];

  const blogCategoryUrls: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/blog/${encodeURIComponent(category)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const blogPostUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${encodeURIComponent(post.category)}/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const projectUrls: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...blogCategoryUrls,
    ...blogPostUrls,
    ...projectUrls,
  ];
}

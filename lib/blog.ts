export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description?: string;
  category: string;
  thumbnail: string;
}
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

function extractFirstImage(content: string): string | null {
  const match = content.match(/!\[.*?\]\((.*?)\)/);
  return match ? match[1] : null;
}

export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.category === category);
}
export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));

  return files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);
    const firstImage = extractFirstImage(content);

    return {
      slug,
      title: data.title ?? "",
      date: data.date ?? "",
      description: data.description ?? "",
      category: data.category ?? "",
      thumbnail: data.thumbnail ?? firstImage ?? "/img/default-thumbnail.jpg",
    };
  });
}

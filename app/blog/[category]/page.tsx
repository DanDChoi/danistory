

import { getPostsByCategory } from "@/lib/blog";
import Link from "next/link";

interface Props {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const posts = getPostsByCategory(category);

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10">
        {category}
      </h1>

      {posts.length === 0 ? (
        <p className="text-gray-500">작성된 글이 없습니다.</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${category}/${post.slug}`}
              className="block p-6 border border-gray-200 rounded-xl hover:shadow-md transition group"
            >
              <h2 className="text-xl font-semibold group-hover:text-blue-600 transition">
                {post.title}
              </h2>

              <p className="text-gray-400 text-sm mt-2">
                {new Date(post.date).toLocaleDateString()}
              </p>

              {post.description && (
                <p className="text-gray-600 mt-3">
                  {post.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
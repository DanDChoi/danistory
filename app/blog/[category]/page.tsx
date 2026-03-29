import { getPostsByCategory } from "@/lib/blog";
import PostGrid from "@/components/blog/PostGrid";

interface Props {
  params: Promise<{ category: string }>;
  searchParams?: Promise<{ page?: string }>;
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = await params;
  const sp = await searchParams;

  const posts = getPostsByCategory(category);

  // 최신순 정렬
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // pagination
  const pageSize = 6;
  const currentPage = Math.max(1, Number(sp?.page || 1));
  const totalPages = Math.max(1, Math.ceil(sortedPosts.length / pageSize));
  const start = (currentPage - 1) * pageSize;
  const paginatedPosts = sortedPosts.slice(start, start + pageSize);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {category}
          </h1>
          <p className="text-gray-500 mt-2">
            {category} 관련 글 모음입니다.
          </p>
        </div>

        {paginatedPosts.length === 0 ? (
          <p className="text-gray-500">작성된 글이 없습니다.</p>
        ) : (
          <PostGrid
            posts={paginatedPosts}
            currentPage={currentPage}
            totalPages={totalPages}
            basePath={`/blog/${category}`}
          />
        )}
      </div>
    </main>
  );
}
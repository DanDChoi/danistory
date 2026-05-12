import { getAllPosts } from "@/lib/blog";
import PostGrid from "@/components/blog/PostGrid";

interface BlogPageProps {
    searchParams?: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const posts = getAllPosts();

    const sortedPosts = [...posts].sort((a, b) => {
      const da = new Date(a.date).getTime();
      const db = new Date(b.date).getTime();
      return db - da; // newest first
    });

    const pageSize = 6;
    const params = await searchParams;
    const currentPage = Math.max(1, Number(params?.page || 1));
    const totalPages = Math.max(1, Math.ceil(sortedPosts.length / pageSize));
    const start = (currentPage - 1) * pageSize;
    const paginatedPosts = sortedPosts.slice(start, start + pageSize);

    return (
        <main className="min-h-screen bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Blog</h1>
                <p className="text-gray-500 mt-2">개발 기록과 실험들을 정리합니다.</p>
            </div>

            <PostGrid
              posts={paginatedPosts}
              currentPage={currentPage}
              totalPages={totalPages}
              basePath="/blog"
            />
          </div>
        </main>
    );
}

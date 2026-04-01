import Link from "next/link";
import { BlogPost } from "@/lib/blog";

function getCategoryColor(category: string) {
    const colors = [
        "bg-blue-50 text-blue-600",
        "bg-green-50 text-green-600",
        "bg-purple-50 text-purple-600",
        "bg-orange-50 text-orange-600",
        "bg-pink-50 text-pink-600",
        "bg-indigo-50 text-indigo-600",
    ];

    let hash = 0;
    for (let i = 0; i < category.length; i++) {
        hash = category.charCodeAt(i) + ((hash << 5) - hash);
    }

    const index = Math.abs(hash) % colors.length;
    return colors[index];
}

interface PostGridProps {
    posts: BlogPost[];
    currentPage: number;
    totalPages: number;
    basePath: string;
}

export default function PostGrid({
                                     posts,
                                     currentPage,
                                     totalPages,
                                     basePath,
                                 }: PostGridProps) {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={basePath === "/blog" ? `/blog/${post.category}/${post.slug}` : `${basePath}/${post.slug}`}
                        className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                    >
                        <div className="w-full h-36 bg-gray-200 overflow-hidden">
                            <img
                                src={post.thumbnail}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-4">
                            <div className="mb-2">
                <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(post.category)}`}
                >
                  {post.category}
                </span>
                            </div>

                            <h2 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition line-clamp-2">
                                {post.title}
                            </h2>

                            {post.description && (
                                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                                    {post.description}
                                </p>
                            )}

                            <p className="text-gray-400 text-xs mt-3">
                                {new Date(post.date).toLocaleDateString()}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex justify-center items-center mt-10 gap-2 flex-wrap">
                {currentPage > 1 && (
                    <Link
                        href={`${basePath}?page=${currentPage - 1}`}
                        className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md hover:bg-gray-100"
                    >
                        Prev
                    </Link>
                )}

                {Array.from({ length: totalPages }).map((_, i) => {
                    const page = i + 1;

                    const isEdge = page === 1 || page === totalPages;
                    const isNear = Math.abs(page - currentPage) <= 1;

                    if (!isEdge && !isNear) {
                        if (page === currentPage - 2 || page === currentPage + 2) {
                            return (
                                <span key={page} className="px-2 text-gray-400">
                  ...
                </span>
                            );
                        }
                        return null;
                    }

                    const isActive = page === currentPage;

                    return (
                        <Link
                            key={page}
                            href={`${basePath}?page=${page}`}
                            className={`px-3 py-1 rounded-md text-sm ${
                                isActive
                                    ? "bg-blue-600 text-white"
                                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            {page}
                        </Link>
                    );
                })}

                {currentPage < totalPages && (
                    <Link
                        href={`${basePath}?page=${currentPage + 1}`}
                        className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md hover:bg-gray-100"
                    >
                        Next
                    </Link>
                )}
            </div>
        </>
    );
}
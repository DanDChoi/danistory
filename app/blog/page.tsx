import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <main className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold mb-10">Blog</h1>

            <div className="space-y-6">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.category}/${post.slug}`}
                        className="block p-6 border rounded-xl hover:shadow-md transition"
                    >
                        <h2 className="text-xl font-semibold">{post.title}</h2>

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
        </main>
    );
}
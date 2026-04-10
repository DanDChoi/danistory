import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import CodeBlockCopy from "@/components/blog/CodeBlockCopy";

interface Props {
  params: Promise<{ slug: string }>;
}

const postsDirectory = path.join(process.cwd(), "content/blog");

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent.toString();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {data.title}
        </h1>

        <p className="text-gray-400 text-sm mb-10">
          {data.date
            ? new Date(data.date).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : ""}
        </p>

        <div
          className="prose max-w-none text-gray-900 prose-headings:text-gray-900 prose-p:text-gray-900 prose-li:text-gray-900 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-gray-900 prose-pre:bg-gray-900 prose-pre:text-gray-100"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <div className="mt-10">
          <CodeBlockCopy />
        </div>
      </div>
    </main>
  );
}
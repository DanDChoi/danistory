import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
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
        .use(remarkRehype)
        .use(rehypeHighlight)
        .use(rehypeStringify)
        .process(content);

    const contentHtml = processedContent.toString();

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-400 text-sm mb-8">
        {data.date ? new Date(data.date).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }) : ""}
      </p>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
      <CodeBlockCopy />
    </main>
  );
}
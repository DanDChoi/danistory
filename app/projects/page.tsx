import Link from "next/link";

const projects = [
  {
    slug: "wizwid-platform",
    title: "WIZWID 플랫폼 개선",
    description: "주문/결제/상품 흐름 개선 및 성능 최적화",
    tech: ["Java", "Spring", "PostgreSQL"],
    image: "/img/default-thumbnail.jpg",
  },
  {
    slug: "slow-query",
    title: "슬로우 쿼리 개선",
    description: "응답속도 3,000ms → 70ms 개선",
    tech: ["PostgreSQL", "Index", "Tuning"],
    image: "/img/default-thumbnail.jpg",
  },
  {
    slug: "excel-processing",
    title: "대량 엑셀 처리 기능",
    description: "운영 업무 자동화를 위한 엑셀 업로드/다운로드",
    tech: ["Apache POI", "Spring"],
    image: "/img/default-thumbnail.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Projects
          </h1>
          <p className="text-gray-500 mt-2">
            실무에서 진행한 프로젝트와 개선 작업을 정리했습니다.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 aspect-[16/10] bg-gray-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded-md bg-blue-50 text-blue-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm text-blue-600 font-medium group-hover:underline">
                    자세히 보기 →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
export default function SkillsSection() {
    const skills = {
        Backend: ["Java", "Spring MVC"],
        Database: ["PostgreSQL"],
        Infra: ["AWS RDS", "S3", "CloudWatch"],
        Frontend: ["Next.js", "jQuery", "Tailwind"],
    };

    return (
        <section id="skills" className="border-t pt-10">
            <h2 className="text-2xl font-semibold mb-6 tracking-tight leading-tight">Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="bg-white border border-gray-200 rounded-xl p-5">
                        <p className="text-sm font-semibold text-gray-500 mb-3">{category}</p>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className="text-sm bg-gray-100 px-3 py-1 rounded"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/common/Section";

const skills = [
    { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
    { name: "Backend", items: ["Node.js", "Express", "GraphQL", "PostgreSQL", "Redis"] },
    { name: "Tools", items: ["Git", "Docker", "VS Code", "Premiere Pro"] },
];

export function Skills() {
    return (
        <Section id="skills" className="bg-muted/50 rounded-lg">
            <div className="space-y-12 text-center md:text-left px-6 lg:px-20">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Technologies</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto md:mx-0">
                        A list of the technologies I work with on a daily basis. I'm always learning new things to stay up-to-date.
                    </p>
                </div>

                <div className="grid gap-8 grid-cols-2 lg:grid-cols-3 text-left">
                    {skills.map((category) => (
                        <div key={category.name} className="space-y-4">
                            <h3 className="text-xl font-bold tracking-tight">{category.name}</h3>
                            <ul className="grid gap-2">
                                {category.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
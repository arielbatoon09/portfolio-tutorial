
import { Section } from "@/components/common/Section";

const experiences = [
    {
        title: "Senior Full Stack Developer",
        company: "Tech Solutions Inc.",
        period: "2023 - Present",
        description: "Leading the development of a complex SaaS platform, mentoring junior developers, and implementing CI/CD pipelines.",
    },
    {
        title: "Frontend Developer",
        company: "Creative Agency",
        period: "2021 - 2023",
        description: "Built responsive and interactive websites for various clients, focusing on performance and accessibility.",
    },
    {
        title: "Junior Web Developer",
        company: "StartUp Co.",
        period: "2020 - 2021",
        description: "Assisted in the development of the main product, fixed bugs, and collaborated with the design team.",
    },
];

export function Experience() {
    return (
        <Section className="space-y-12">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
                <p className="text-muted-foreground md:text-lg/relaxed max-w-[700px]">
                    My professional journey and the roles I've held.
                </p>
            </div>

            <div className="relative border-l border-border ml-3 md:ml-6 space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="ml-6 relative">
                        <span className="absolute -left-[1.85rem] top-1 h-3 w-3 rounded-full border border-primary bg-background ring-4 ring-background" />
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">{exp.period}</span>
                        </div>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
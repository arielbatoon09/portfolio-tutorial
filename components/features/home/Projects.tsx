import { Section } from "@/components/common/Section";
import { ProjectCard } from "@/components/common/ProjectCard";
import { PROJECTS } from "@/constants/project";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Projects() {
    return (
        <Section id="projects" className="space-y-12">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
                <p className="text-muted-foreground md:text-lg/relaxed max-w-[700px]">
                    Here are some of the projects I've worked on recently. Each one presented unique challenges and learning opportunities.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.slice(0, 3).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            <div className="flex justify-center">
                <Link href="/projects">
                    <Button variant="outline" size="lg" className="group">
                        Check out all projects
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
        </Section>
    );
}
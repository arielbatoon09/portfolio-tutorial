
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";

export function AboutHero() {
    return (
        <Section className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center lg:items-start justify-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gradient">
                        About Me
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        I'm a passionate developer driven by the challenge of creating efficient, scalable, and user-friendly web applications.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                    <Button size="lg" className="group" asChild>
                        <a href="/resume.pdf" download>
                            <Download className="mr-2 h-4 w-4" />
                            Download Resume
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <a href="mailto:hello@example.com">
                            <Mail className="mr-2 h-4 w-4" />
                            Contact Me
                        </a>
                    </Button>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Coding Environment"
                    className="rounded-2xl shadow-2xl object-cover w-full max-w-[500px] aspect-square transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
            </div>
        </Section>
    );
}
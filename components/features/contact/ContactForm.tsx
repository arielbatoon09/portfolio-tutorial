"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group";
import { Section } from "@/components/common/Section";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must be at most 500 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        console.log("Form submitted:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert("Message sent successfully!");
        form.reset();
    };

    return (
        <Section className="min-h-screen">
            <div className="grid lg:grid-cols-2 lg:gap-24 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        Let's Work Together
                    </h1>
                    <p className="text-muted-foreground md:text-xl/relaxed">
                        Have a project in mind or just want to chat? Fill out the form or reach out directly. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Send className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="font-medium">Email</p>
                                <p className="text-muted-foreground">hello@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Contact Me</CardTitle>
                        <CardDescription>
                            Fill out the form below to send me a message.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
                            <FieldGroup>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Controller
                                        name="name"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel htmlFor="name">Name</FieldLabel>
                                                <Input
                                                    {...field}
                                                    id="name"
                                                    aria-invalid={fieldState.invalid}
                                                    placeholder="John Doe"
                                                    autoComplete="name"
                                                />
                                                {fieldState.invalid && (
                                                    <FieldError errors={[fieldState.error]} />
                                                )}
                                            </Field>
                                        )}
                                    />
                                    <Controller
                                        name="email"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                                <Input
                                                    {...field}
                                                    id="email"
                                                    type="email"
                                                    aria-invalid={fieldState.invalid}
                                                    placeholder="john@example.com"
                                                    autoComplete="email"
                                                />
                                                {fieldState.invalid && (
                                                    <FieldError errors={[fieldState.error]} />
                                                )}
                                            </Field>
                                        )}
                                    />
                                </div>

                                <Controller
                                    name="subject"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="subject">Subject</FieldLabel>
                                            <Input
                                                {...field}
                                                id="subject"
                                                aria-invalid={fieldState.invalid}
                                                placeholder="Project Inquiry"
                                            />
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name="message"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="message">Message</FieldLabel>
                                            <InputGroup>
                                                <InputGroupTextarea
                                                    {...field}
                                                    id="message"
                                                    placeholder="Tell me about your project..."
                                                    rows={6}
                                                    className="min-h-24 resize-none"
                                                    aria-invalid={fieldState.invalid}
                                                />
                                                <InputGroupAddon align="block-end">
                                                    <InputGroupText className="tabular-nums">
                                                        {field.value.length}/500 characters
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                            </InputGroup>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                            </FieldGroup>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" form="contact-form" className="w-full" size="lg" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </Section>
    );
}

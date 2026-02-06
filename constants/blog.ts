export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string[];
  date: string;
  author: string;
};

export type BlogCategory = {
  slug: string;
  name: string;
  parent?: string; // for nested categories e.g. "tech" -> "react"
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "tech", name: "Technology" },
  { slug: "design", name: "Design" },
  { slug: "life", name: "Life" },
  { slug: "react", name: "React", parent: "tech" },
  { slug: "nextjs", name: "Next.js", parent: "tech" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and build your first app.",
    content: "Next.js is a React framework that makes it easy to build full-stack applications. It provides file-based routing, server components, and more.",
    category: ["tech", "nextjs"],
    date: "2025-02-01",
    author: "Jane Doe",
  },
  {
    id: "2",
    slug: "react-hooks-deep-dive",
    title: "React Hooks Deep Dive",
    excerpt: "Understanding useState, useEffect, and custom hooks.",
    content: "React Hooks let you use state and other React features without writing a class. This post explores the most common hooks and patterns.",
    category: ["tech", "react"],
    date: "2025-02-03",
    author: "John Smith",
  },
  {
    id: "3",
    slug: "minimal-design-principles",
    title: "Minimal Design Principles",
    excerpt: "Why less is more in UI and product design.",
    content: "Minimal design focuses on clarity and purpose. We look at how to remove noise and highlight what matters.",
    category: ["design"],
    date: "2025-02-05",
    author: "Jane Doe",
  },
  {
    id: "4",
    slug: "work-life-balance",
    title: "Work-Life Balance in Tech",
    excerpt: "Tips for staying healthy while building products.",
    content: "Balancing deadlines with rest and relationships is a skill. Here are practical habits that have worked for many developers.",
    category: ["life", "tech"],
    date: "2025-02-06",
    author: "John Smith",
  },
  {
    id: "5",
    slug: "nextjs-app-router",
    title: "Next.js App Router Explained",
    excerpt: "File-based routing, layouts, and server components.",
    content: "The App Router in Next.js uses folders and special files to define routes and layouts. Server Components are the default for better performance.",
    category: ["tech", "nextjs"],
    date: "2025-02-07",
    author: "Jane Doe",
  },
];

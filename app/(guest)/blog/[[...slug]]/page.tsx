import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/constants/blog";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug?: string[] }> };

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params;
  const segments = slug ?? [];

  // No slug -> show blog list
  if (segments.length === 0) {
    return (
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <ul className="space-y-4">
          {BLOG_POSTS.map((post) => (
            <li key={post.id} className="border rounded-lg p-4 hover:bg-muted/50">
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="font-semibold text-lg">{post.title}</h2>
                <p className="text-muted-foreground text-sm mt-1">{post.excerpt}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  {post.date} · {post.author}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href="/blog/category/tech">
            <Button variant="outline">Browse by category</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Single segment -> treat as post slug
  const postSlug = segments[0];
  const post = BLOG_POSTS.find((p) => p.slug === postSlug);

  if (!post) notFound();

  return (
    <article className="py-8 max-w-2xl">
      <Link href="/blog" className="text-sm text-muted-foreground hover:underline mb-4 inline-block">
        ← Back to blog
      </Link>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-muted-foreground text-sm mb-6">
        {post.date} · {post.author} · {post.category.join(", ")}
      </p>
      <p className="prose dark:prose-invert">{post.content}</p>
    </article>
  );
}
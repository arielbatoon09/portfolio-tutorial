import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/constants/blog";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/constants/blog";

type Props = { params: Promise<{ category: string[] }> };

function postsInCategoryPath(posts: BlogPost[], categoryPath: string[]): BlogPost[] {
  return posts.filter((post) => {
    for (let i = 0; i < categoryPath.length; i++) {
      if (!post.category.includes(categoryPath[i])) return false;
    }
    return true;
  });
}

function categoryDisplayName(path: string[]): string {
  return path
    .map((slug) => BLOG_CATEGORIES.find((c) => c.slug === slug)?.name ?? slug)
    .join(" / ");
}

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;

  // [...category] is required, so we should always have at least one segment when we're in this route
  if (!category || category.length === 0) {
    notFound();
  }

  const filtered = postsInCategoryPath(BLOG_POSTS, category);

  return (
    <div className="py-8">
      <Link href="/blog" className="text-sm text-muted-foreground hover:underline mb-4 inline-block">
        ← Back to blog
      </Link>
      <h1 className="text-3xl font-bold mb-2">Category: {categoryDisplayName(category)}</h1>
      <p className="text-muted-foreground mb-6">
        {filtered.length} post{filtered.length !== 1 ? "s" : ""} in this category
      </p>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground">No posts found in this category.</p>
      ) : (
        <ul className="space-y-4">
          {filtered.map((post) => (
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
      )}

      <div className="mt-6 flex gap-3">
        <Link href="/blog">
          <Button variant="outline">All posts</Button>
        </Link>
        <Link href="/blog/category/tech">
          <Button variant="outline">Tech</Button>
        </Link>
        <Link href="/blog/category/design">
          <Button variant="outline">Design</Button>
        </Link>
        <Link href="/blog/category/life">
          <Button variant="outline">Life</Button>
        </Link>
      </div>
    </div>
  );
}
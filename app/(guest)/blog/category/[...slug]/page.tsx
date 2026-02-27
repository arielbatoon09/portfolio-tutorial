import Link from "next/link";
import { BLOG_POSTS } from "@/constants/blog";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string[] }> };

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params;
  
  // slug is an array of segments, e.g. ["tech", "nextjs"] from /blog/category/tech/nextjs
  const activeCategories = slug || [];
  
  // Filter posts that have ALL specified categories (or any, depending on preference)
  // For this demo, let's filter by the last category in the slug
  const mainCategory = activeCategories[activeCategories.length - 1];
  const filteredPosts = BLOG_POSTS.filter((post) => 
    post.category.some(cat => cat.toLowerCase() === mainCategory.toLowerCase())
  );

  return (
    <div className="container py-12 max-w-5xl mx-auto">
      <Link 
        href="/blog" 
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Blog
      </Link>

      <div className="flex flex-col gap-4 mb-12">
        <h1 className="text-4xl font-bold capitalize">
          Category: {activeCategories.join(" / ")}
        </h1>
        <p className="text-muted-foreground">
          Showing posts in <span className="font-semibold text-foreground underline decoration-primary decoration-2">{mainCategory}</span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:border-primary transition-all">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {post.category.map((cat) => (
                      <Badge key={cat} variant={cat === mainCategory ? "default" : "secondary"}>
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-12 text-center border rounded-xl bg-muted/20">
            <p className="text-muted-foreground">No posts found in this category.</p>
          </div>
        )}
      </div>

      <div className="mt-16 p-8 rounded-2xl bg-blue-500/5 border border-blue-500/20">
        <h3 className="text-lg font-semibold mb-2">How this works:</h3>
        <p className="text-sm text-muted-foreground mb-4">
          This page uses a <code className="bg-muted p-1 rounded">[...slug]</code> (Catch-all) route. 
          It captures all segments after <code className="bg-muted p-1 rounded">/blog/category/</code> into an array.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-background rounded-lg border">
            <p className="text-xs font-mono text-muted-foreground mb-1">URL:</p>
            <p className="text-sm font-mono break-all text-blue-500">/blog/category/{activeCategories.join("/")}</p>
          </div>
          <div className="p-4 bg-background rounded-lg border">
            <p className="text-xs font-mono text-muted-foreground mb-1">Params Object:</p>
            <pre className="text-xs font-mono">{JSON.stringify({ slug: activeCategories }, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

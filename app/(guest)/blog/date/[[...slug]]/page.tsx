import Link from "next/link";
import { BLOG_POSTS } from "@/constants/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";

type Props = { params: Promise<{ slug?: string[] }> };

export default async function BlogDatePage({ params }: Props) {
  const { slug } = await params;
  
  // optional slug is undefined or an array
  const segments = slug || [];
  const year = segments[0];
  const month = segments[1];
  const day = segments[2];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (!year) return true; // Show all if no date specified
    const postDate = new Date(post.date);
    const postYear = postDate.getFullYear().toString();
    const postMonth = (postDate.getMonth() + 1).toString().padStart(2, "0");
    const postDay = postDate.getDate().toString().padStart(2, "0");

    if (day) return postYear === year && postMonth === month && postDay === day;
    if (month) return postYear === year && postMonth === month;
    return postYear === year;
  });

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
        <div className="flex items-center gap-3 text-purple-500 font-medium">
          <Calendar size={24} />
          <h1 className="text-4xl font-bold">
            Archive: {segments.length > 0 ? segments.join(" / ") : "All Dates"}
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Filter blog posts by year, month, or day using optional catch-all routes.
        </p>
      </div>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {!year && (
          <div className="flex gap-2">
            <Link href="/blog/date/2025"><Button variant="outline">Year 2025</Button></Link>
            <Link href="/blog/date/2024"><Button variant="outline">Year 2024</Button></Link>
          </div>
        )}
        {year && !month && (
          <div className="flex gap-2">
            <Link href={`/blog/date/${year}/02`}><Button variant="outline">February</Button></Link>
            <Link href={`/blog/date/${year}/01`}><Button variant="outline">January</Button></Link>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="block">
              <div className="group flex flex-col md:flex-row md:items-center justify-between p-6 border rounded-xl hover:bg-muted/30 transition-all">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">{post.title}</h3>
                  <p className="text-muted-foreground line-clamp-1">{post.excerpt}</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <span className="text-sm font-mono bg-muted px-2 py-1 rounded">{post.date}</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="py-20 text-center border-2 border-dashed rounded-3xl">
            <p className="text-muted-foreground">No posts found for this specific date range.</p>
            <Link href="/blog/date" className="mt-4 text-primary hover:underline block text-sm">
              Clear filters
            </Link>
          </div>
        )}
      </div>

      <div className="mt-16 p-8 rounded-2xl bg-purple-500/5 border border-purple-500/20">
        <h3 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-400">How this works:</h3>
        <p className="text-sm text-muted-foreground mb-4">
          This page uses an <code className="bg-muted p-1 rounded">[[...slug]]</code> (Optional Catch-all) route. 
          Unlinke the standard catch-all, this also matches the root path <code className="bg-muted p-1 rounded">/blog/date</code>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-background rounded-lg border">
            <p className="text-xs font-mono text-muted-foreground mb-1">URL:</p>
            <p className="text-sm font-mono break-all text-purple-500">
              /blog/date{segments.length > 0 ? `/${segments.join("/")}` : ""}
            </p>
          </div>
          <div className="p-4 bg-background rounded-lg border">
            <p className="text-xs font-mono text-muted-foreground mb-1">Params Object:</p>
            <pre className="text-xs font-mono">{JSON.stringify({ slug: segments }, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
import Link from "next/link";
import { BlogPost, BLOG_POSTS } from "@/constants/blog";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/common/Section";

export function BlogLandingContent() {
  return (
    <Section className="py-12">
      <div className="flex flex-col gap-4 mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Blog Tutorial</h1>
        <p className="text-xl text-muted-foreground">
          Learn how Next.js App Router handles different dynamic routing patterns.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-16">
        {/* Dynamic Route 1 */}
        <Card className="border-primary/20 bg-primary/5 transition-all hover:shadow-lg">
          <CardHeader>
            <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary text-xs font-mono mb-2">
              [slug]
            </div>
            <CardTitle>Dynamic Segment</CardTitle>
            <CardDescription>
              Exact match for single segments. Used for individual blog posts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <code className="text-sm bg-muted p-1 rounded font-mono block mb-4">
              /blog/getting-started-with-nextjs
            </code>
            <Link href="/blog/getting-started-with-nextjs" className="text-primary hover:underline text-sm font-medium">
              View Example →
            </Link>
          </CardContent>
        </Card>

        {/* Dynamic Route 2 */}
        <Card className="border-blue-500/20 bg-blue-500/5 transition-all hover:shadow-lg">
          <CardHeader>
            <div className="p-2 w-fit rounded-lg bg-blue-500/10 text-blue-500 text-xs font-mono mb-2">
              [...slug]
            </div>
            <CardTitle>Catch-all Segment</CardTitle>
            <CardDescription>
              Matches one or more segments. Great for nested categories or crumbs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <code className="text-sm bg-muted p-1 rounded font-mono block mb-4">
              /blog/category/tech/nextjs
            </code>
            <Link href="/blog/category/tech/nextjs" className="text-blue-500 hover:underline text-sm font-medium">
              View Example →
            </Link>
          </CardContent>
        </Card>

        {/* Dynamic Route 3 */}
        <Card className="border-purple-500/20 bg-purple-500/5 transition-all hover:shadow-lg">
          <CardHeader>
            <div className="p-2 w-fit rounded-lg bg-purple-500/10 text-purple-500 text-xs font-mono mb-2">
              [[...slug]]
            </div>
            <CardTitle>Optional Catch-all</CardTitle>
            <CardDescription>
              Matches zero or more segments. Perfect for filterable archives or dates.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <code className="text-sm bg-muted p-1 rounded font-mono block mb-4">
              /blog/date/2025/02
            </code>
            <Link href="/blog/date/2025/02" className="text-purple-500 hover:underline text-sm font-medium">
              View Example →
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Latest Posts</h2>
        <div className="grid gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="group p-6 border rounded-2xl hover:border-primary/50 hover:bg-muted/30 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{post.date}</span>
                </div>
                <p className="text-muted-foreground line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex gap-2">
                  {post.category.map((cat) => (
                    <Badge key={cat} variant="secondary">
                      {cat}
                    </Badge>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
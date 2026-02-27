import Link from "next/link";
import { BlogPost } from "@/constants/blog";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/common/Section";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <Section className="py-12">
      <Link 
        href="/blog" 
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Blog
      </Link>

      <div className="space-y-4 mb-8">
        <div className="flex gap-2">
          {post.category.map((cat) => (
            <Badge key={cat} variant="outline" className="capitalize">
              {cat}
            </Badge>
          ))}
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="text-lg leading-relaxed space-y-4">
          {post.content}
        </div>
      </div>

      <div className="mt-16 p-6 rounded-2xl bg-muted/50 border border-dashed text-center">
        <p className="text-sm font-mono text-muted-foreground">
          Route Strategy: <span className="text-primary">[slug]</span>
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          This matches an exact segment. Variable: slug = "{post.slug}"
        </p>
      </div>
    </Section>
  );
}

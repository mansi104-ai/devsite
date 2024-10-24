import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blogs";
import Link from "next/link";
import Head from "next/head";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
  ogImage: "/path/to/your-default-og-image.jpg", // Add a default OG image here
};

const BLUR_FADE_DELAY = 0.05;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content={metadata.ogImage} />
      </Head>
      <section>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="font-medium text-2xl mb-8 tracking-tighter">Blogs</h1>
        </BlurFade>
        {posts
          .sort((a, b) => {
            if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link className="flex flex-col space-y-1 mb-4" href={`/blogs/${post.slug}`}>
                <div className="w-full flex flex-col">
                  <p className="tracking-tight">{post.metadata.title}</p>
                  <p className="h-6 text-xs text-muted-foreground">
                    {post.metadata.publishedAt}
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))}
      </section>
    </>
  );
}

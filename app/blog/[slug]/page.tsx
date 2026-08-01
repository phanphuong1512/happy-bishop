"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "../data";
import { useLanguage } from "@/context/language-context";

const logoSrc = "https://assets.happybishops.com/hb-assets/logo.webp";

export default function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { language } = useLanguage();
  const isVie = language === "VIE";

  const [post, setPost] = React.useState<any | null>(() => {
    return blogPosts.find((p) => p.slug === slug) || null;
  });
  const [loading, setLoading] = React.useState(!post);

  React.useEffect(() => {
    if (!post) {
      fetch(`/api/blogs/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.data) {
            setPost(data.data);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [slug, post]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fff6e3]">
        <p className="text-base font-bold text-[#8e2b2b] [font-family:var(--font-lexend)]">
          {isVie ? "Đang tải bài viết..." : "Loading article..."}
        </p>
      </main>
    );
  }

  if (!post) {
    notFound();
  }

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const prevPost = postIndex < blogPosts.length - 1 && postIndex !== -1 ? blogPosts[postIndex + 1] : null;

  return (
    <main className="relative mx-auto mt-[0.6rem] mb-20 min-h-screen w-[calc(100%-1.2rem)] max-w-[1000px] overflow-visible max-[680px]:w-[calc(100%-0.8rem)] max-[680px]:mt-[0.4rem]">
      {/* Header Bar */}
      <header className="relative grid min-h-[82px] grid-cols-1 items-center pb-4 max-[680px]:min-h-[68px] max-[680px]:pb-3">
        <div
          className="col-start-1 row-start-1 h-[52px] w-full rounded-2xl bg-linear-to-r from-[#f18a8a] via-[#f78181] to-[#ee7b7b] shadow-[0_10px_20px_rgba(158,26,51,0.12)] max-[680px]:h-[44px]"
          aria-hidden="true"
        />

        <Link
          href="/"
          className="col-start-1 row-start-1 z-30 ml-[0.8rem] inline-flex w-fit max-[680px]:ml-[0.6rem]"
        >
          <Image
            src={logoSrc}
            alt="Happy Bishops logo"
            width={90}
            height={106}
            priority
            className="w-[52px] h-auto max-[680px]:w-[44px]"
          />
        </Link>

        <nav className="col-start-1 row-start-1 z-20 flex items-center min-h-[52px] justify-center px-20">
          <div className="flex gap-6 max-[530px]:gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:underline underline-offset-4"
            >
              <ArrowLeft className="w-4 h-4" /> {isVie ? "Quay lại danh sách Tin tức" : "Back to News List"}
            </Link>
          </div>
        </nav>
      </header>

      {/* Back Button */}
      <div className="mt-6 mb-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#8e2b2b] hover:text-[#f78181] transition-colors [font-family:var(--font-lexend)]"
        >
          <ArrowLeft className="w-4 h-4" /> {isVie ? "Tất cả bài viết" : "All Articles"}
        </Link>
      </div>

      {/* Article Content Container */}
      <article className="rounded-3xl border border-[rgba(142,43,43,0.2)] bg-[#fff6e3] p-8 shadow-xs max-[680px]:p-5">
        {/* Cover Image */}
        <div className="relative aspect-16/9 w-full overflow-hidden rounded-2xl border border-[rgba(142,43,43,0.15)] shadow-xs">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="1000px"
          />
        </div>

        {/* Date & Tag */}
        <div className="mt-6 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#8e2b2b]/10 px-3 py-1 text-xs font-bold text-[#8e2b2b] [font-family:var(--font-lexend)]">
            <Calendar className="w-3.5 h-3.5" />
            {isVie ? "Ngày đăng:" : "Date:"} {post.date}
          </span>
          <span className="text-xs font-semibold text-[#f78181] [font-family:var(--font-lexend)]">
            Happy Bishops Blog #{post.id}
          </span>
        </div>

        {/* Article Title */}
        <h1 className="mt-4 text-[36px] font-bold leading-tight [font-family:var(--font-lexend)] text-[#8e2b2b] max-[680px]:text-[24px]">
          {post.title}
        </h1>

        <div className="my-6 h-px w-full bg-[rgba(88,10,10,0.2)]" />

        {/* Article Body Content */}
        <div className="space-y-5 text-[17px] leading-relaxed [font-family:var(--font-source-serif-4)] italic text-[#580a0a] max-[680px]:text-[15px]">
          {(Array.isArray(post.content) ? post.content : [post.content]).map((paragraph: string, idx: number) => (
            <p key={`p-${idx}`} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Target Recap Link (if available) */}
        {post.recapLink && (
          <div className="mt-8 rounded-2xl bg-[#eb979b]/20 p-6 border border-[#8e2b2b]/20">
            <p className="text-sm font-semibold text-[#8e2b2b] [font-family:var(--font-lexend)] mb-2">
              {isVie ? "Đọc bài viết liên quan:" : "Read related article:"}
            </p>
            <Link
              href={`/blog/${post.recapLink.targetSlug}`}
              className="inline-flex items-center gap-2 text-base font-bold text-[#8e2b2b] underline hover:text-[#f78181] [font-family:var(--font-lexend)]"
            >
              {post.recapLink.text} →
            </Link>
          </div>
        )}

        {/* Article Navigation Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(88,10,10,0.2)] pt-6 text-sm font-bold [font-family:var(--font-lexend)]">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="inline-flex items-center gap-2 text-[#8e2b2b] hover:text-[#f78181] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> {isVie ? "Bài trước" : "Previous Article"}
            </Link>
          ) : (
            <span />
          )}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="inline-flex items-center gap-2 text-[#8e2b2b] hover:text-[#f78181] transition-colors"
            >
              {isVie ? "Bài tiếp theo" : "Next Article"} <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </article>
    </main>
  );
}

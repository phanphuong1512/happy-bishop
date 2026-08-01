"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { blogPosts } from "./data";

import { useLanguage } from "@/context/language-context";

const logoSrc = "https://assets.happybishops.com/hb-assets/logo.webp";
const newsRookSrc = "https://assets.happybishops.com/hb-assets/rook.webp";
const floatingPawnSrc = "https://assets.happybishops.com/hb-assets/pawn.webp";

export default function BlogIndexPage() {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isVie = language === "VIE";

  return (
    <main className="relative mx-auto mt-[0.6rem] mb-20 min-h-screen w-[calc(100%-1.2rem)] max-w-[1320px] overflow-visible max-[680px]:w-[calc(100%-0.8rem)] max-[680px]:mt-[0.4rem]">
      {/* Header Navigation - Matching Homepage */}
      <header className="relative grid min-h-[82px] grid-cols-1 items-center pb-4 max-[680px]:min-h-[68px] max-[680px]:pb-3">
        <div
          className="col-start-1 row-start-1 h-[52px] w-full rounded-2xl bg-linear-to-r from-[#f18a8a] via-[#f78181] to-[#ee7b7b] shadow-[0_10px_20px_rgba(158,26,51,0.12)] max-[680px]:h-[44px]"
          aria-hidden="true"
        />

        <Link
          href="/"
          prefetch={false}
          className="col-start-1 row-start-1 z-30 ml-[0.8rem] inline-flex w-fit max-[680px]:ml-[0.6rem]"
          aria-label={isVie ? "Trang chủ" : "Home"}
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

        <nav
          className="col-start-1 row-start-1 z-20 flex items-center min-h-[52px] px-[9.8rem] py-[0.25rem] pr-[12.8rem] max-[1080px]:min-h-[48px] max-[1080px]:px-[4.8rem] max-[1080px]:pr-[7.7rem] max-[530px]:min-h-[44px] max-[530px]:px-[4.2rem]"
          aria-label={isVie ? "Điều hướng chính" : "Main navigation"}
        >
          <div className="flex h-[52px] w-full items-center justify-center gap-[clamp(1rem,2.2vw,2.6rem)] max-[1080px]:h-[48px] max-[1080px]:gap-4 max-[1080px]:overflow-x-auto max-[1080px]:[scrollbar-width:none] max-[1080px]:[&::-webkit-scrollbar]:hidden max-[530px]:hidden">
            <Link
              href="/gioi-thieu"
              className="inline-flex items-center whitespace-nowrap text-[1.08rem] leading-[1.1] font-bold tracking-[0.01em] text-white underline-offset-2 hover:underline max-[1080px]:text-[0.56rem]"
            >
              {isVie ? "Giới thiệu" : "About"}
            </Link>
            <Link
              href="/#su-kien"
              className="inline-flex items-center whitespace-nowrap text-[1.08rem] leading-[1.1] font-bold tracking-[0.01em] text-white underline-offset-2 hover:underline max-[1080px]:text-[0.56rem]"
            >
              {isVie ? "Sự kiện" : "Events"}
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center whitespace-nowrap text-[1.08rem] leading-[1.1] font-bold tracking-[0.01em] text-white underline underline-offset-4 max-[1080px]:text-[0.56rem]"
            >
              {isVie ? "Tin tức" : "News"}
            </Link>
            <Link
              href="/#cong-dong"
              className="inline-flex items-center whitespace-nowrap text-[1.08rem] leading-[1.1] font-bold tracking-[0.01em] text-white underline-offset-2 hover:underline max-[1080px]:text-[0.56rem]"
            >
              {isVie ? "Cộng đồng" : "Community"}
            </Link>
            <Link
              href="/#lien-he"
              className="inline-flex items-center whitespace-nowrap text-[1.08rem] leading-[1.1] font-bold tracking-[0.01em] text-white underline-offset-2 hover:underline max-[1080px]:text-[0.56rem]"
            >
              {isVie ? "Liên hệ" : "Contact"}
            </Link>
          </div>
        </nav>

        {/* Language Switcher */}
        <div
          className="col-start-1 row-start-1 z-20 mr-[0.8rem] grid min-h-[52px] justify-self-end [grid-template-columns:4.2rem_3px_4.2rem] items-center gap-x-[0.28rem] max-[1080px]:mr-[0.5rem] max-[1080px]:min-h-[48px] max-[1080px]:[grid-template-columns:3.35rem_2px_3.35rem] max-[1080px]:gap-x-[0.2rem] max-[530px]:hidden"
          aria-label="Ngôn ngữ"
        >
          <button
            type="button"
            className={`inline-flex w-full cursor-pointer items-center justify-center rounded-xl border-[2px] bg-transparent px-[0.42rem] py-[0.25rem] text-[1rem] leading-none font-bold text-white transition-colors duration-200 max-[1080px]:px-[0.3rem] max-[1080px]:py-[0.15rem] max-[1080px]:text-[0.6rem] max-[1080px]:border-[1.5px] ${
              language === "VIE"
                ? "border-white bg-white/10"
                : "border-transparent"
            }`}
            onClick={() => setLanguage("VIE")}
          >
            VIE
          </button>
          <span
            className="block h-[31px] w-[3px] rounded-full bg-white/95 max-[1080px]:h-[18px] max-[1080px]:w-[2px]"
            aria-hidden="true"
          />
          <button
            type="button"
            className={`inline-flex w-full cursor-pointer items-center justify-center rounded-xl border-[2px] bg-transparent px-[0.42rem] py-[0.25rem] text-[1rem] leading-none font-bold text-white transition-colors duration-200 max-[1080px]:px-[0.3rem] max-[1080px]:py-[0.15rem] max-[1080px]:text-[0.6rem] max-[1080px]:border-[1.5px] ${
              language === "ENG"
                ? "border-white bg-white/10"
                : "border-transparent"
            }`}
            onClick={() => setLanguage("ENG")}
          >
            ENG
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="col-start-1 row-start-1 z-30 justify-self-end mr-[0.6rem] hidden min-h-[44px] w-[44px] flex-col items-center justify-center gap-[6px] rounded-lg bg-white/10 transition-colors duration-200 hover:bg-white/20 max-[530px]:flex"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block h-[2px] w-[24px] bg-white transition-all duration-300 ${
              isMenuOpen ? "translate-y-[10px] rotate-45" : ""
            }`}
            aria-hidden="true"
          />
          <span
            className={`block h-[2px] w-[24px] bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
            aria-hidden="true"
          />
          <span
            className={`block h-[2px] w-[24px] bg-white transition-all duration-300 ${
              isMenuOpen ? "-translate-y-[10px] -rotate-45" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </header>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-30 bg-black/50 max-[530px]:block hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed right-4 top-[70px] z-40 w-[280px] max-[530px]:block hidden rounded-3xl bg-[#f78181] shadow-lg">
            <nav className="flex flex-col border-b border-white/20">
              <Link
                href="/gioi-thieu"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-4 text-[16px] font-bold text-white hover:bg-white/15 first:rounded-t-3xl"
              >
                Giới thiệu
              </Link>
              <Link
                href="/#su-kien"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-4 text-[16px] font-bold text-white hover:bg-white/15"
              >
                Sự kiện
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-4 text-[16px] font-bold text-white hover:bg-white/15"
              >
                Tin tức
              </Link>
              <Link
                href="/#cong-dong"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-4 text-[16px] font-bold text-white hover:bg-white/15"
              >
                Cộng đồng
              </Link>
            </nav>
            <div className="flex items-center justify-center gap-3 px-4 py-4">
              <button
                type="button"
                className={`flex-1 rounded-lg border-2 py-2 text-center text-sm font-bold text-white ${
                  language === "VIE" ? "border-white bg-white/20" : "border-white/40"
                }`}
                onClick={() => {
                  setLanguage("VIE");
                  setIsMenuOpen(false);
                }}
              >
                VIE
              </button>
              <button
                type="button"
                className={`flex-1 rounded-lg border-2 py-2 text-center text-sm font-bold text-white ${
                  language === "ENG" ? "border-white bg-white/20" : "border-white/40"
                }`}
                onClick={() => {
                  setLanguage("ENG");
                  setIsMenuOpen(false);
                }}
              >
                ENG
              </button>
            </div>
          </div>
        </>
      )}

      {/* Page Header Banner */}
      <section className="relative pt-10 pb-8 max-[680px]:pt-6 max-[680px]:pb-4">
        <p className="m-0 text-[42px] leading-none font-normal [font-family:var(--font-comfortaa)] tracking-[1em] lowercase text-[var(--hb-primary)] max-[1080px]:text-[32px] max-[680px]:text-[24px] max-[680px]:tracking-[0.6em]">
          happy bishops
        </p>
        <h1 className="mt-2 text-[88px] leading-none font-bold [font-family:var(--font-lexend)] tracking-[0.08em] text-[var(--hb-deep-red)] max-[1080px]:text-[64px] max-[680px]:text-[42px]">
          {isVie ? "TIN TỨC & BLOG" : "NEWS & BLOG"}
        </h1>
        <div className="mt-6 h-px w-full bg-[rgba(88,10,10,0.35)]" />
      </section>

      {/* Blog Cards Grid Container */}
      <section className="relative z-10 mt-8">
        <div className="grid grid-cols-2 gap-8 max-[850px]:grid-cols-1">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[rgba(142,43,43,0.18)] bg-[#fff6e3] p-6 shadow-xs transition-all duration-300 hover:shadow-md max-[680px]:p-5"
            >
              <div>
                {/* Thumbnail Image Frame */}
                <div className="relative h-[240px] w-full overflow-hidden rounded-2xl bg-[#eb979b]/20 max-[680px]:h-[190px]">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 850px) 100vw, 50vw"
                  />
                  <span className="absolute top-3 right-3 rounded-full bg-[#8e2b2b]/85 px-3 py-1 text-xs font-medium text-white [font-family:var(--font-lexend)] backdrop-blur-xs">
                    {post.date}
                  </span>
                </div>

                {/* Article Title */}
                <h2 className="mt-5 text-[22px] font-bold leading-snug [font-family:var(--font-lexend)] text-[#8e2b2b] group-hover:text-[#f78181] transition-colors max-[680px]:text-[18px]">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                {/* Summary text */}
                <p className="mt-3 text-[15px] leading-relaxed [font-family:var(--font-source-serif-4)] italic text-[#580a0a] line-clamp-3">
                  {post.summary}
                </p>
              </div>

              {/* Read More Link */}
              <div className="mt-6 flex items-center justify-between border-t border-[rgba(142,43,43,0.15)] pt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#8e2b2b] [font-family:var(--font-lexend)] hover:text-[#f78181] transition-colors"
                >
                  {isVie ? "Đọc chi tiết →" : "Read More →"}
                </Link>
                <span className="text-xs font-semibold text-[#f78181] [font-family:var(--font-lexend)]">
                  # {post.id}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Decorative Floating Chess Pieces */}
      <Image
        src={floatingPawnSrc}
        alt=""
        width={130}
        height={130}
        aria-hidden="true"
        className="pointer-events-none absolute right-[3%] top-[14%] z-0 h-auto w-24 opacity-80 drop-shadow-[0_12px_16px_rgba(94,10,24,0.18)] max-[1080px]:hidden"
      />
      <Image
        src={newsRookSrc}
        alt=""
        width={160}
        height={260}
        aria-hidden="true"
        className="pointer-events-none absolute right-[-3%] top-[65%] z-0 h-auto w-36 opacity-70 drop-shadow-[0_14px_20px_rgba(94,10,24,0.18)] max-[1080px]:hidden"
      />
    </main>
  );
}

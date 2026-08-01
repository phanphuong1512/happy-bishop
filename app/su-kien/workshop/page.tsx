"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { workshops } from "../data";

type Language = "VIE" | "ENG";

const logoSrc = "https://assets.happybishops.com/hb-assets/logo.webp";

export default function WorkshopListPage() {
  const [activeLanguage, setActiveLanguage] = useState<Language>("VIE");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isVie = activeLanguage === "VIE";

  return (
    <main className="relative mx-auto mt-[0.6rem] mb-20 min-h-screen w-[calc(100%-1.2rem)] max-w-[1100px] overflow-visible max-[680px]:w-[calc(100%-0.8rem)] max-[680px]:mt-[0.4rem]">
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
              href="/su-kien"
              className="text-sm font-bold text-white hover:underline underline-offset-4"
            >
              ← Quay lại Sự kiện
            </Link>
          </div>
        </nav>
      </header>

      {/* Back Button */}
      <div className="mt-6 mb-4">
        <Link
          href="/su-kien"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#8e2b2b] hover:text-[#f78181] transition-colors [font-family:var(--font-lexend)]"
        >
          ← Trang Tổng Quan Sự Kiện
        </Link>
      </div>

      {/* Page Title */}
      <section className="mb-8">
        <h1 className="text-[48px] font-bold [font-family:var(--font-lexend)] text-[#8e2b2b] max-[680px]:text-[32px]">
          Các Buổi Workshop
        </h1>
        <p className="mt-2 text-[16px] [font-family:var(--font-source-serif-4)] italic text-[#580a0a]">
          Các buổi chia sẻ kiến thức, kỹ năng tổ chức và trọng tài cờ vua do Happy Bishops thực hiện.
        </p>
        <div className="mt-4 h-px w-full bg-[rgba(88,10,10,0.25)]" />
      </section>

      {/* Workshops List */}
      <div className="space-y-12">
        {workshops.map((w) => (
          <article
            key={w.id}
            id={w.slug}
            className="rounded-3xl border border-[rgba(142,43,43,0.2)] bg-[#fff6e3] p-8 shadow-xs max-[680px]:p-5"
          >
            {/* Title */}
            <h2 className="text-[28px] font-bold leading-tight [font-family:var(--font-lexend)] text-[#8e2b2b] max-[680px]:text-[22px]">
              {w.title}
            </h2>

            {/* Quick Info Grid */}
            <div className="mt-5 grid grid-cols-2 gap-3 text-[14.5px] [font-family:var(--font-lexend)] text-[#8e2b2b] bg-[#f78181]/15 p-4 rounded-2xl border border-[rgba(142,43,43,0.1)] max-[680px]:grid-cols-1">
              <p>📅 <strong>Thời gian:</strong> {w.time}</p>
              <p>📍 <strong>Địa điểm:</strong> {w.location}</p>
              <p>🏫 <strong>Hình thức:</strong> {w.format}</p>
              <p>👥 <strong>Số người tham gia:</strong> {w.participants}</p>
            </div>

            {/* Intro Paragraphs */}
            <div className="mt-6 space-y-4 text-[16.5px] leading-relaxed [font-family:var(--font-source-serif-4)] italic text-[#580a0a] max-[680px]:text-[14.5px]">
              <h3 className="text-[18px] not-italic font-bold [font-family:var(--font-lexend)] text-[#8e2b2b] border-b border-[rgba(142,43,43,0.15)] pb-1">
                Giới thiệu
              </h3>
              {w.intro.map((p, idx) => (
                <p key={`intro-${idx}`}>{p}</p>
              ))}
            </div>

            {/* Content Bullets */}
            <div className="mt-6">
              <h3 className="text-[18px] font-bold [font-family:var(--font-lexend)] text-[#8e2b2b] border-b border-[rgba(142,43,43,0.15)] pb-1 mb-3">
                Nội dung workshop
              </h3>
              <p className="text-[16px] [font-family:var(--font-source-serif-4)] italic text-[#580a0a] mb-3">
                Workshop diễn ra trong không khí cởi mở và tương tác, bắt đầu bằng một hoạt động ice breaker nhẹ nhàng để các thành viên làm quen với nhau trước khi bước vào phần nội dung chính. Trong buổi workshop, các CLB đã cùng tìm hiểu:
              </p>
              <ul className="space-y-2 text-[15.5px] [font-family:var(--font-lexend)] text-[#8e2b2b] pl-5 list-disc">
                {w.contents.map((item, idx) => (
                  <li key={`content-${idx}`}>{item}</li>
                ))}
              </ul>
              <p className="mt-3 text-[16px] [font-family:var(--font-source-serif-4)] italic text-[#580a0a]">
                Buổi workshop kết thúc bằng một minigame tổng hợp kiến thức, mang lại không khí vui vẻ và giúp các thành viên ôn lại những nội dung vừa học.
              </p>
            </div>

            {/* Highlights Section */}
            <div className="mt-6">
              <h3 className="text-[18px] font-bold [font-family:var(--font-lexend)] text-[#8e2b2b] border-b border-[rgba(142,43,43,0.15)] pb-1 mb-3">
                Khoảnh khắc của workshop
              </h3>
              <p className="text-[16px] leading-relaxed [font-family:var(--font-source-serif-4)] italic text-[#580a0a]">
                {w.highlightsText}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

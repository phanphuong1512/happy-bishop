"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Calendar, MapPin, Trophy, Users, Award, ArrowLeft } from "lucide-react";
import { tournaments } from "../data";

type Language = "VIE" | "ENG";

const logoSrc = "https://assets.happybishops.com/hb-assets/logo.webp";

import { useLanguage } from "@/context/language-context";

export default function TournamentsListPage() {
  const { language } = useLanguage();
  const isVie = language === "VIE";

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
              className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:underline underline-offset-4"
            >
              <ArrowLeft className="w-4 h-4" /> {isVie ? "Quay lại Sự kiện" : "Back to Events"}
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
          <ArrowLeft className="w-4 h-4" /> {isVie ? "Trang Tổng Quan Sự Kiện" : "Events Overview Page"}
        </Link>
      </div>

      {/* Page Title */}
      <section className="mb-8">
        <h1 className="text-[48px] font-bold [font-family:var(--font-lexend)] text-[#8e2b2b] max-[680px]:text-[32px]">
          {isVie ? "Các Giải Đấu Cờ Vua" : "Chess Tournaments"}
        </h1>
        <p className="mt-2 text-[16px] [font-family:var(--font-source-serif-4)] italic text-[#580a0a]">
          {isVie
            ? "Danh sách các giải đấu do Happy Bishops tổ chức cho cộng đồng cờ vua phong trào tại Hà Nội."
            : "List of chess tournaments organized by Happy Bishops for the Hanoi amateur chess community."}
        </p>
        <div className="mt-4 h-px w-full bg-[rgba(88,10,10,0.25)]" />
      </section>

      {/* List of Tournaments */}
      <div className="space-y-12">
        {tournaments.map((t) => (
          <article
            key={t.id}
            id={t.slug}
            className="rounded-3xl border border-[rgba(142,43,43,0.2)] bg-[#fff6e3] p-8 shadow-xs max-[680px]:p-5"
          >
            {/* Title */}
            <h2 className="text-[28px] font-bold leading-tight [font-family:var(--font-lexend)] text-[#8e2b2b] max-[680px]:text-[22px]">
              {t.title}
            </h2>

            {/* Quick Info Grid */}
            <div className="mt-5 grid grid-cols-2 gap-3.5 text-[14.5px] [font-family:var(--font-lexend)] text-[#8e2b2b] bg-[#eb979b]/15 p-4 rounded-2xl border border-[rgba(142,43,43,0.1)] max-[680px]:grid-cols-1">
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4 shrink-0 text-[#8e2b2b]/70" />
                <span><strong>{isVie ? "Thời gian:" : "Date & Time:"}</strong> {t.time}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-[#8e2b2b]/70" />
                <span><strong>{isVie ? "Địa điểm:" : "Venue:"}</strong> {t.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Trophy className="w-4 h-4 shrink-0 text-[#8e2b2b]/70" />
                <span><strong>{isVie ? "Thể thức:" : "Format:"}</strong> {t.format}</span>
              </p>
              <p className="flex items-center gap-2">
                <Users className="w-4 h-4 shrink-0 text-[#8e2b2b]/70" />
                <span><strong>{isVie ? "Số người tham gia:" : "Participants:"}</strong> {t.participants}</span>
              </p>
            </div>

            {/* Intro Paragraphs */}
            <div className="mt-6 space-y-4 text-[16.5px] leading-relaxed [font-family:var(--font-source-serif-4)] italic text-[#580a0a] max-[680px]:text-[14.5px]">
              <h3 className="text-[18px] not-italic font-bold [font-family:var(--font-lexend)] text-[#8e2b2b] border-b border-[rgba(142,43,43,0.15)] pb-1">
                {isVie ? "Giới thiệu" : "Introduction"}
              </h3>
              {t.intro.map((p, idx) => (
                <p key={`intro-${idx}`}>{p}</p>
              ))}
            </div>

            {/* Links if available */}
            {(t.workshopLink || t.drawLink) && (
              <div className="mt-6 space-y-2 rounded-2xl bg-white/70 p-4 border border-[rgba(142,43,43,0.15)] text-[14px] [font-family:var(--font-lexend)]">
                {t.workshopLink && (
                  <p className="flex items-center gap-2">
                    <span className="font-bold">Thông tin workshop:</span>{" "}
                    <Link href={t.workshopLink} className="font-bold text-[#8e2b2b] underline hover:text-[#f78181]">
                      Đọc thêm tại đây →
                    </Link>
                  </p>
                )}
                {t.drawLink && (
                  <p className="flex items-center gap-2">
                    <span className="font-bold">Kết quả chia bảng đấu:</span>{" "}
                    <Link href={t.drawLink} className="font-bold text-[#8e2b2b] underline hover:text-[#f78181]">
                      Đọc thêm tại đây →
                    </Link>
                  </p>
                )}
              </div>
            )}

            {/* Results Section */}
            {t.results && (
              <div className="mt-6">
                <h3 className="text-[18px] font-bold [font-family:var(--font-lexend)] text-[#8e2b2b] border-b border-[rgba(142,43,43,0.15)] pb-1">
                  {isVie ? "Kết quả giải đấu" : "Tournament Results"}
                </h3>
                <div className="mt-3 space-y-2 text-[15px] [font-family:var(--font-lexend)] font-medium text-[#8e2b2b]">
                  {t.results.first && (
                    <p className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-amber-500" />
                      <span><strong>{isVie ? "Giải Nhất:" : "1st Place:"}</strong> {t.results.first}</span>
                    </p>
                  )}
                  {t.results.second && (
                    <p className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-slate-400" />
                      <span><strong>{isVie ? "Giải Nhì:" : "2nd Place:"}</strong> {t.results.second}</span>
                    </p>
                  )}
                  {t.results.third && (
                    <p className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-700" />
                      <span><strong>{isVie ? "Giải Ba:" : "3rd Place:"}</strong> {t.results.third}</span>
                    </p>
                  )}
                  {t.results.femaleBest && (
                    <p className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-rose-500" />
                      <span><strong>{isVie ? "Giải Nhất Nữ:" : "Top Female Player:"}</strong> {t.results.femaleBest}</span>
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Side Prizes Section */}
            {t.sidePrizes && t.sidePrizes.length > 0 && (
              <div className="mt-6">
                <h3 className="text-[18px] font-bold [font-family:var(--font-lexend)] text-[#8e2b2b] border-b border-[rgba(142,43,43,0.15)] pb-1">
                  {isVie ? "Giải phụ" : "Special Prizes"}
                </h3>
                <div className="mt-3 space-y-1 text-[15px] [font-family:var(--font-lexend)] text-[#8e2b2b]">
                  {t.sidePrizes.map((prize, idx) => (
                    <p key={`prize-${idx}`} className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#f78181]" />
                      <span>{prize}</span>
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights Section */}
            {t.highlightsText && (
              <div className="mt-6">
                <h3 className="text-[18px] font-bold [font-family:var(--font-lexend)] text-[#8e2b2b] border-b border-[rgba(142,43,43,0.15)] pb-1 mb-3">
                  {isVie ? "Khoảnh khắc của giải đấu" : "Event Highlights"}
                </h3>
                <p className="text-[16px] leading-relaxed [font-family:var(--font-source-serif-4)] italic text-[#580a0a]">
                  {t.highlightsText}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}

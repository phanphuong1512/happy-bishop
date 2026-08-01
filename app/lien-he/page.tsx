"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Language = "VIE" | "ENG";

const logoSrc = "https://assets.happybishops.com/hb-assets/logo.webp";
const floatingBishopSrc = "https://assets.happybishops.com/hb-assets/bishop.webp";
const floatingPawnSrc = "https://assets.happybishops.com/hb-assets/pawn.webp";
const newsRookSrc = "https://assets.happybishops.com/hb-assets/rook.webp";

export default function ContactPage() {
  const [activeLanguage, setActiveLanguage] = useState<Language>("VIE");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isVie = activeLanguage === "VIE";

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
              href="/su-kien"
              className="inline-flex items-center whitespace-nowrap text-[1.08rem] leading-[1.1] font-bold tracking-[0.01em] text-white underline-offset-2 hover:underline max-[1080px]:text-[0.56rem]"
            >
              {isVie ? "Sự kiện" : "Events"}
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center whitespace-nowrap text-[1.08rem] leading-[1.1] font-bold tracking-[0.01em] text-white underline-offset-2 hover:underline max-[1080px]:text-[0.56rem]"
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
              href="/lien-he"
              className="inline-flex items-center whitespace-nowrap text-[1.08rem] leading-[1.1] font-bold tracking-[0.01em] text-white underline underline-offset-4 max-[1080px]:text-[0.56rem]"
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
              activeLanguage === "VIE"
                ? "border-white bg-white/10"
                : "border-transparent"
            }`}
            onClick={() => setActiveLanguage("VIE")}
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
              activeLanguage === "ENG"
                ? "border-white bg-white/10"
                : "border-transparent"
            }`}
            onClick={() => setActiveLanguage("ENG")}
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
                href="/su-kien"
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
                href="/lien-he"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-4 text-[16px] font-bold text-white hover:bg-white/15"
              >
                Liên hệ
              </Link>
            </nav>
            <div className="flex items-center justify-center gap-3 px-4 py-4">
              <button
                type="button"
                className={`flex-1 rounded-lg border-2 py-2 text-center text-sm font-bold text-white ${
                  activeLanguage === "VIE" ? "border-white bg-white/20" : "border-white/40"
                }`}
                onClick={() => {
                  setActiveLanguage("VIE");
                  setIsMenuOpen(false);
                }}
              >
                VIE
              </button>
              <button
                type="button"
                className={`flex-1 rounded-lg border-2 py-2 text-center text-sm font-bold text-white ${
                  activeLanguage === "ENG" ? "border-white bg-white/20" : "border-white/40"
                }`}
                onClick={() => {
                  setActiveLanguage("ENG");
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
      <section className="relative pt-10 pb-6 text-center max-[680px]:pt-6 max-[680px]:pb-4">
        <p className="m-0 text-[42px] leading-none font-normal [font-family:var(--font-comfortaa)] tracking-[1em] lowercase text-[var(--hb-primary)] max-[1080px]:text-[32px] max-[680px]:text-[24px] max-[680px]:tracking-[0.6em]">
          happy bishops
        </p>
        <h1 className="mt-2 text-[72px] leading-none font-bold [font-family:var(--font-lexend)] tracking-[0.05em] text-[var(--hb-deep-red)] max-[1080px]:text-[56px] max-[680px]:text-[38px]">
          {isVie ? "LIÊN HỆ VỚI CHÚNG MÌNH" : "CONTACT US"}
        </h1>
        <p className="mt-4 max-w-[700px] mx-auto text-[16.5px] leading-relaxed [font-family:var(--font-source-serif-4)] italic text-[#580a0a] max-[680px]:text-[14.5px]">
          {isVie
            ? "Chúng mình rất vui khi được lắng nghe bạn! Hãy nhắn tin cho Happy Bishops nếu bạn có bất kỳ thắc mắc, câu hỏi hay muốn đăng ký tham gia giao lưu và giải đấu cờ vua."
            : "We'd love to hear from you! Feel free to reach out for any inquiries, feedback, or to learn more about our chess club and events."}
        </p>

        {/* Global Community Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="https://zalo.me/g/jvjnze574"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#8e2b2b] px-6 py-3 text-white font-bold text-[15px] hover:opacity-90 transition-opacity [font-family:var(--font-lexend)] shadow-xs"
          >
            💬 Nhóm Zalo Cộng Đồng
          </a>
          <a
            href="https://www.facebook.com/happy.bishops.community"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1877f2] px-6 py-3 text-white font-bold text-[15px] hover:opacity-90 transition-opacity [font-family:var(--font-lexend)] shadow-xs"
          >
            👍 Fanpage Facebook
          </a>
        </div>

        <div className="mt-8 h-px w-full bg-[rgba(88,10,10,0.35)]" />
      </section>

      {/* 2 Co-Founder Contact Cards Grid */}
      <section className="relative z-10 mt-6">
        <h2 className="text-[28px] font-bold [font-family:var(--font-lexend)] text-[#8e2b2b] mb-6 text-center max-[680px]:text-[22px]">
          {isVie ? "Liên hệ Ban Quản Trị" : "Contact Co-Founders"}
        </h2>

        <div className="grid grid-cols-2 gap-8 max-[850px]:grid-cols-1">
          {/* Card 1: Vũ Hiền Thanh */}
          <div className="rounded-3xl border border-[rgba(142,43,43,0.2)] bg-[#fff6e3] p-8 shadow-xs flex flex-col justify-between items-center text-center max-[680px]:p-6">
            <div className="flex flex-col items-center w-full">
              {/* Photo Frame */}
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#eb979b]/40 border border-[#8e2b2b]/20 text-4xl mb-4">
                ♟
              </div>

              <h3 className="text-[24px] font-bold [font-family:var(--font-lexend)] text-[#8e2b2b]">
                Vũ Hiền Thanh
              </h3>
              <p className="text-[14px] font-semibold italic [font-family:var(--font-source-serif-4)] text-[#f78181] mb-2">
                Co-Founder – Happy Bishops
              </p>

              <div className="my-4 h-px w-3/4 bg-[rgba(88,10,10,0.15)]" />

              {/* Contact Details */}
              <div className="w-full space-y-3 text-left text-[14.5px] [font-family:var(--font-lexend)] text-[#8e2b2b]">
                <p className="flex items-center gap-2">
                  <span>✉️</span> <strong>Email:</strong> hienthanh.hb@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <span>📱</span> <strong>Hotline / Zalo:</strong> 098 765 4321
                </p>
                <p className="flex items-center gap-2">
                  <span>📍</span> <strong>Địa điểm giao lưu:</strong> Urban Station Coffee
                </p>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-8 flex w-full flex-wrap gap-3">
              <a
                href="https://zalo.me/g/jvjnze574"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#8e2b2b] px-4 py-2.5 text-xs font-bold text-white hover:opacity-90 transition-opacity [font-family:var(--font-lexend)]"
              >
                💬 Nhắn Zalo
              </a>
              <a
                href="https://www.facebook.com/happy.bishops.community"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1877f2] px-4 py-2.5 text-xs font-bold text-white hover:opacity-90 transition-opacity [font-family:var(--font-lexend)]"
              >
                👍 Facebook
              </a>
            </div>
          </div>

          {/* Card 2: Trịnh Thành Long */}
          <div className="rounded-3xl border border-[rgba(142,43,43,0.2)] bg-[#fff6e3] p-8 shadow-xs flex flex-col justify-between items-center text-center max-[680px]:p-6">
            <div className="flex flex-col items-center w-full">
              {/* Photo Frame */}
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#eb979b]/40 border border-[#8e2b2b]/20 text-4xl mb-4">
                ♟
              </div>

              <h3 className="text-[24px] font-bold [font-family:var(--font-lexend)] text-[#8e2b2b]">
                Trịnh Thành Long
              </h3>
              <p className="text-[14px] font-semibold italic [font-family:var(--font-source-serif-4)] text-[#f78181] mb-2">
                Co-Founder – Happy Bishops
              </p>

              <div className="my-4 h-px w-3/4 bg-[rgba(88,10,10,0.15)]" />

              {/* Contact Details */}
              <div className="w-full space-y-3 text-left text-[14.5px] [font-family:var(--font-lexend)] text-[#8e2b2b]">
                <p className="flex items-center gap-2">
                  <span>✉️</span> <strong>Email:</strong> thanhlong.hb@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <span>📱</span> <strong>Hotline / Zalo:</strong> 091 234 5678
                </p>
                <p className="flex items-center gap-2">
                  <span>📍</span> <strong>Địa điểm giao lưu:</strong> Urban Station Coffee
                </p>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-8 flex w-full flex-wrap gap-3">
              <a
                href="https://zalo.me/g/jvjnze574"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#8e2b2b] px-4 py-2.5 text-xs font-bold text-white hover:opacity-90 transition-opacity [font-family:var(--font-lexend)]"
              >
                💬 Nhắn Zalo
              </a>
              <a
                href="https://www.facebook.com/happy.bishops.community"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1877f2] px-4 py-2.5 text-xs font-bold text-white hover:opacity-90 transition-opacity [font-family:var(--font-lexend)]"
              >
                👍 Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Floating Chess Pieces */}
      <Image
        src={floatingPawnSrc}
        alt=""
        width={130}
        height={130}
        aria-hidden="true"
        className="pointer-events-none absolute right-[4%] top-[12%] z-0 h-auto w-24 opacity-80 drop-shadow-[0_12px_16px_rgba(94,10,24,0.18)] max-[1080px]:hidden"
      />
      <Image
        src={floatingBishopSrc}
        alt=""
        width={200}
        height={200}
        aria-hidden="true"
        className="pointer-events-none absolute left-[-4%] top-[45%] z-0 h-auto w-40 opacity-75 drop-shadow-[0_16px_22px_rgba(94,10,24,0.2)] max-[1080px]:hidden"
      />
      <Image
        src={newsRookSrc}
        alt=""
        width={160}
        height={260}
        aria-hidden="true"
        className="pointer-events-none absolute right-[-3%] top-[75%] z-0 h-auto w-36 opacity-70 drop-shadow-[0_14px_20px_rgba(94,10,24,0.18)] max-[1080px]:hidden"
      />
    </main>
  );
}

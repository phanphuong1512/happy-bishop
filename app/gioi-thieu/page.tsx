"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Language = "VIE" | "ENG";

const logoSrc = "https://assets.happybishops.com/hb-assets/logo.webp";
const floatingBishopSrc = "https://assets.happybishops.com/hb-assets/bishop.webp";
const floatingPawnSrc = "https://assets.happybishops.com/hb-assets/pawn.webp";
const newsRookSrc = "https://assets.happybishops.com/hb-assets/rook.webp";

export default function AboutPage() {
  const [activeLanguage, setActiveLanguage] = useState<Language>("VIE");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isVie = activeLanguage === "VIE";

  return (
    <main className="relative mx-auto mt-[0.6rem] mb-16 min-h-screen w-[calc(100%-1.2rem)] max-w-[1320px] overflow-visible max-[680px]:w-[calc(100%-0.8rem)] max-[680px]:mt-[0.4rem]">
      {/* Header Navigation - Exact match to Homepage */}
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
              className="inline-flex items-center whitespace-nowrap text-[1.08rem] leading-[1.1] font-bold tracking-[0.01em] text-white underline underline-offset-4 max-[1080px]:text-[0.56rem]"
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
              href="/#tin-tuc"
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

        {/* Hamburger Menu Button (Mobile) */}
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
                href="/#tin-tuc"
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

      {/* Page Hero Header */}
      <section className="relative pt-8 pb-6 max-[680px]:pt-4 max-[680px]:pb-4">
        <p className="m-0 text-[36px] leading-none font-normal [font-family:var(--font-comfortaa)] tracking-[0.8em] lowercase text-[var(--hb-primary)] max-[680px]:text-[24px] max-[680px]:tracking-[0.5em]">
          happy bishops
        </p>
        <h1 className="mt-2 text-[64px] leading-none font-bold [font-family:var(--font-lexend)] tracking-[0.05em] text-[var(--hb-deep-red)] max-[1080px]:text-[48px] max-[680px]:text-[36px]">
          Giới thiệu
        </h1>
        <div className="mt-4 h-px w-full bg-[rgba(88,10,10,0.3)]" />
      </section>

      {/* Main Content Body */}
      <div className="relative z-10 space-y-16 mt-8 max-[680px]:space-y-12">
        {/* Section 1: Câu chuyện thành lập */}
        <section className="relative rounded-3xl bg-white/40 p-8 border border-[rgba(142,43,43,0.12)] backdrop-blur-xs max-[680px]:p-5">
          <h2 className="text-[36px] leading-tight font-bold [font-family:var(--font-lexend)] text-[var(--hb-deep-red)] max-[680px]:text-[24px]">
            Câu chuyện thành lập Happy Bishops
          </h2>
          <div className="mt-5 space-y-4 text-[16.5px] leading-relaxed [font-family:var(--font-source-serif-4)] italic text-[#580a0a] max-[680px]:text-[14.5px]">
            <p>
              Sau một khoảng thời gian ấp ủ, vào tháng 6 năm 2025, chúng mình quyết định bắt đầu một hành trình mới mang tên Happy Bishops.
            </p>
            <p>
              Happy Bishops là một cộng đồng cờ vua dành cho những người yêu thích cờ – không phân biệt trình độ hay độ tuổi. Dù bạn là người mới làm quen với bàn cờ hay đã chơi cờ từ lâu, bạn đều có thể tham gia giao lưu và tận hưởng những ván cờ cùng mọi người.
            </p>
            <p>
              Chúng mình đã có nhiều năm tham gia và xây dựng các hoạt động giao lưu cờ vua tại Hà Nội. Từ những trải nghiệm đó, Happy Bishops ra đời với mong muốn tạo nên một không gian chơi cờ vui vẻ, thân thiện và cởi mở, nơi mọi người có thể gặp gỡ, học hỏi và kết nối với nhau thông qua những ván cờ.
            </p>
          </div>
        </section>

        {/* Section 2: Tại sao là "Happy Bishops"? */}
        <section className="relative rounded-3xl bg-white/40 p-8 border border-[rgba(142,43,43,0.12)] backdrop-blur-xs max-[680px]:p-5">
          <h2 className="text-[36px] leading-tight font-bold [font-family:var(--font-lexend)] text-[var(--hb-deep-red)] max-[680px]:text-[24px]">
            Tại sao là “Happy Bishops”?
          </h2>
          <div className="mt-5 space-y-4 text-[16.5px] leading-relaxed [font-family:var(--font-source-serif-4)] italic text-[#580a0a] max-[680px]:text-[14.5px]">
            <p>
              Tên Happy Bishops xuất phát từ chính quân cờ mà chúng mình yêu thích – quân Tượng (Bishop).
            </p>
            <p>
              Trên bàn cờ, một quân Tượng khi đứng một mình có những giới hạn nhất định: nó chỉ di chuyển trên một màu ô. Nhưng khi hai quân Tượng phối hợp với nhau, chúng lại trở thành một cặp quân rất mạnh và có thể kiểm soát toàn bộ bàn cờ.
            </p>
            <p>
              Hình ảnh đó cũng giống với cách chúng mình nhìn về cộng đồng: khi những người yêu cờ kết nối với nhau, cùng chia sẻ và cùng chơi cờ, sức mạnh của cộng đồng sẽ trở nên lớn hơn rất nhiều.
            </p>
          </div>
        </section>

        {/* Section 3: Tầm nhìn - Sứ mệnh (2 Cards side by side) */}
        <section className="space-y-6">
          <h2 className="text-[36px] leading-tight font-bold [font-family:var(--font-lexend)] text-[var(--hb-deep-red)] max-[680px]:text-[24px]">
            Tầm nhìn & Sứ mệnh
          </h2>

          <div className="grid grid-cols-2 gap-8 max-[900px]:grid-cols-1 max-[680px]:gap-6">
            {/* Sứ mệnh Card */}
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-b from-[#eb979b]/25 to-[#f78181]/15 p-8 border border-[#f78181]/30 shadow-xs max-[680px]:p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#8e2b2b] text-white text-xl">
                  🎯
                </span>
                <h3 className="text-[28px] font-bold [font-family:var(--font-lexend)] text-[#8e2b2b] max-[680px]:text-[22px]">
                  Sứ mệnh
                </h3>
              </div>
              <div className="space-y-4 text-[16px] leading-relaxed [font-family:var(--font-source-serif-4)] italic text-[#580a0a] max-[680px]:text-[14px]">
                <p>
                  Happy Bishops được xây dựng với mong muốn tạo ra một môi trường cờ vua thân thiện và cởi mở, nơi mọi người có thể gặp gỡ, giao lưu và chia sẻ niềm yêu thích với cờ vua.
                </p>
                <p>
                  Chúng mình mong rằng bất kỳ ai, dù mới bắt đầu hay đã chơi cờ lâu năm, đều có thể tìm thấy ở đây một không gian thoải mái để chơi cờ, học hỏi và kết nối với những người bạn cùng sở thích.
                </p>
                <p>
                  Thông qua các buổi giao lưu, những giải đấu định kỳ và các hoạt động cộng đồng khác, Happy Bishops hy vọng có thể lan tỏa niềm vui của cờ vua đến nhiều người hơn.
                </p>
              </div>
            </div>

            {/* Tầm nhìn Card */}
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-b from-[#f78181]/20 to-[#eb979b]/30 p-8 border border-[#f78181]/30 shadow-xs max-[680px]:p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#8e2b2b] text-white text-xl">
                  🔭
                </span>
                <h3 className="text-[28px] font-bold [font-family:var(--font-lexend)] text-[#8e2b2b] max-[680px]:text-[22px]">
                  Tầm nhìn
                </h3>
              </div>
              <div className="space-y-4 text-[16px] leading-relaxed [font-family:var(--font-source-serif-4)] italic text-[#580a0a] max-[680px]:text-[14px]">
                <p>
                  Trong những năm tới, Happy Bishops mong muốn phát triển thành một cộng đồng cờ vua năng động và bền vững tại Hà Nội.
                </p>
                <p>
                  Bên cạnh các buổi giao lưu thường xuyên, chúng mình hướng tới việc tổ chức nhiều giải đấu chất lượng hơn, cũng như từng bước xây dựng thêm những hoạt động chia sẻ chuyên môn và các workshop về cờ vua để mọi người có cơ hội học hỏi và phát triển kỹ năng.
                </p>
                <p>
                  Trong tương lai, chúng mình hy vọng Happy Bishops có thể từng bước trở thành một nền tảng kết nối nhiều hoạt động liên quan đến cờ vua, từ giao lưu cộng đồng đến các chương trình học tập và chia sẻ chuyên môn.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Đội ngũ sáng lập (2 Founder Cards cạnh nhau) */}
        <section className="space-y-6 pt-4">
          <h2 className="text-[36px] leading-tight font-bold [font-family:var(--font-lexend)] text-[var(--hb-deep-red)] max-[680px]:text-[24px]">
            Đội ngũ sáng lập
          </h2>

          <div className="grid grid-cols-2 gap-8 max-[900px]:grid-cols-1 max-[680px]:gap-6">
            {/* Founder 1: Vũ Hiền Thanh */}
            <div className="relative flex flex-col rounded-3xl bg-white/70 p-8 border border-[rgba(142,43,43,0.18)] shadow-md transition-all duration-300 hover:shadow-lg max-[680px]:p-6">
              <div className="flex flex-col items-center text-center">
                {/* Photo Placeholder Frame */}
                <div className="relative mb-5 flex h-[160px] w-[160px] items-center justify-center overflow-hidden rounded-full border-4 border-[#f78181] bg-linear-to-b from-[#ffdcd9] to-[#f78181]/40 shadow-inner">
                  <span className="text-[64px]" role="img" aria-label="chess bishop">
                    ♟
                  </span>
                </div>

                <h3 className="text-[26px] font-bold [font-family:var(--font-lexend)] text-[#8e2b2b] max-[680px]:text-[22px]">
                  Vũ Hiền Thanh
                </h3>
                <p className="mt-1 text-[15px] font-semibold [font-family:var(--font-lexend)] text-[#f78181]">
                  Co-Founder – Happy Bishops
                </p>

                {/* Badges / Credentials */}
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full bg-[#8e2b2b]/10 px-3.5 py-1 text-[12.5px] font-semibold [font-family:var(--font-lexend)] text-[#8e2b2b]">
                    🎓 Đại học Ngoại thương
                  </span>
                  <span className="rounded-full bg-[#8e2b2b]/10 px-3.5 py-1 text-[12.5px] font-semibold [font-family:var(--font-lexend)] text-[#8e2b2b]">
                    🏆 National Arbiter
                  </span>
                  <span className="rounded-full bg-[#8e2b2b]/10 px-3.5 py-1 text-[12.5px] font-semibold [font-family:var(--font-lexend)] text-[#8e2b2b]">
                    ♟ FIDE School Instructor – Batch 29
                  </span>
                </div>

                <div className="my-4 h-px w-3/4 bg-[#8e2b2b]/15" />

                <p className="text-[15px] leading-relaxed [font-family:var(--font-source-serif-4)] italic text-[#580a0a] text-left max-[680px]:text-[14px]">
                  Thanh tham gia tổ chức nhiều hoạt động giao lưu và giải đấu cờ vua tại Hà Nội, đồng thời hỗ trợ các công việc chuyên môn như trọng tài, bốc thăm thi đấu và chia sẻ kinh nghiệm về tổ chức giải. Thanh cũng thường đứng sau các hoạt động học tập và workshop của Happy Bishops.
                </p>
              </div>
            </div>

            {/* Founder 2: Trịnh Thành Long */}
            <div className="relative flex flex-col rounded-3xl bg-white/70 p-8 border border-[rgba(142,43,43,0.18)] shadow-md transition-all duration-300 hover:shadow-lg max-[680px]:p-6">
              <div className="flex flex-col items-center text-center">
                {/* Photo Placeholder Frame */}
                <div className="relative mb-5 flex h-[160px] w-[160px] items-center justify-center overflow-hidden rounded-full border-4 border-[#f78181] bg-linear-to-b from-[#ffdcd9] to-[#f78181]/40 shadow-inner">
                  <span className="text-[64px]" role="img" aria-label="chess bishop">
                    ♟
                  </span>
                </div>

                <h3 className="text-[26px] font-bold [font-family:var(--font-lexend)] text-[#8e2b2b] max-[680px]:text-[22px]">
                  Trịnh Thành Long
                </h3>
                <p className="mt-1 text-[15px] font-semibold [font-family:var(--font-lexend)] text-[#f78181]">
                  Co-Founder – Happy Bishops
                </p>

                {/* Badges / Credentials */}
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full bg-[#8e2b2b]/10 px-3.5 py-1 text-[12.5px] font-semibold [font-family:var(--font-lexend)] text-[#8e2b2b]">
                    🎓 Đại học Y Hà Nội
                  </span>
                  <span className="rounded-full bg-[#8e2b2b]/10 px-3.5 py-1 text-[12.5px] font-semibold [font-family:var(--font-lexend)] text-[#8e2b2b]">
                    ♟ FIDE School Instructor – Batch 29
                  </span>
                </div>

                <div className="my-4 h-px w-3/4 bg-[#8e2b2b]/15" />

                <p className="text-[15px] leading-relaxed [font-family:var(--font-source-serif-4)] italic text-[#580a0a] text-left max-[680px]:text-[14px]">
                  Long có nhiều năm tham gia tổ chức các hoạt động giao lưu và cộng đồng cờ vua tại Hà Nội. Tại Happy Bishops, Long vừa phụ trách các hoạt động sinh hoạt và giải đấu, vừa thường xuyên hỗ trợ các bạn trong cộng đồng về chuyên môn đồng thời cũng là người gieo tiếng cười trong những buổi chơi cờ của chúng mình
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Decorative Floating Chess Pieces */}
      <Image
        src={floatingPawnSrc}
        alt=""
        width={130}
        height={130}
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] top-[12%] z-0 h-auto w-24 opacity-80 drop-shadow-[0_12px_16px_rgba(94,10,24,0.18)] max-[1080px]:hidden"
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

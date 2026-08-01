"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Language = "VIE" | "ENG";

const logoSrc = "https://assets.happybishops.com/hb-assets/logo.webp";
const heroBoardSrc = "https://assets.happybishops.com/hb-assets/hero.webp";
const floatingPawnSrc = "https://assets.happybishops.com/hb-assets/pawn.webp";
const floatingBishopSrc =
  "https://assets.happybishops.com/hb-assets/bishop.webp";
const galleryImg1 = "https://assets.happybishops.com/hb-assets/1.webp";
const galleryImg2 = "https://assets.happybishops.com/hb-assets/2.webp";
const galleryImg3 = "https://assets.happybishops.com/hb-assets/3.webp";
const galleryImg4 = "https://assets.happybishops.com/hb-assets/4.webp";
const galleryImg5 = "https://assets.happybishops.com/hb-assets/5.webp";
const galleryImg6 = "https://assets.happybishops.com/hb-assets/6.webp";
const viewMoreIconSrc = "/go_to_button.svg";
const scheduleCalendarIconSrc = "/calendar.svg";
const schedulePinIconSrc = "/map.svg";
const newsRookSrc = "https://assets.happybishops.com/hb-assets/rook.webp";
const newsCard1Src = "https://assets.happybishops.com/hb-assets/1.webp";
const newsCard2Src = "https://assets.happybishops.com/hb-assets/2.webp";
const newsCard3Src = "https://assets.happybishops.com/hb-assets/3.webp";
const newsArrowSrc = "/go_to_button_white.svg";

const localizedText: Record<
  Language,
  {
    navLabels: string[];
    navAriaLabel: string;
    languageSwitcherAriaLabel: string;
    heroImageAlt: string;
    heroSubtitle: string;
    heroDescription: string;
    communityTitle: string;
    communityDescription: string;
    joinNowLabel: string;
    sectionCaption: string;
    scheduleSectionAriaLabel: string;
    scheduleDayAriaPrefix: string;
    weekdayLabels: string[];
    newsSectionAriaLabel: string;
    newsTitle: string;
    newsCards: {
      title: string;
      summary: string;
      slug: string;
    }[];
  }
> = {
  VIE: {
    navLabels: ["Giới thiệu", "Sự kiện", "Tin tức", "Cộng đồng", "Liên hệ"],
    navAriaLabel: "Điều hướng chính",
    languageSwitcherAriaLabel: "Ngôn ngữ",
    heroImageAlt: "Bàn cờ và quân cờ Happy Bishops",
    heroSubtitle: "Không chỉ đơn thuần là một câu lạc bộ",
    heroDescription:
      "Happy Bishops là cộng đồng cờ vua dành cho những ai yêu thích cảm giác vui vẻ, kết nối và trải nghiệm cờ vua một cách thân thiện. Ở đây chúng mình tôn trọng lẫn nhau, không quá đặt nặng trình độ.",
    communityTitle: "Cộng đồng lành mạnh",
    communityDescription:
      "Chúng mình đặc biệt chú trọng vào việc tạo ra một môi trường học tập và giao lưu không áp lực, phù hợp cho cả học sinh, sinh viên và những người đi làm bận rộn.\n\nBạn sẽ được tham gia vào các buổi offline giao lưu hàng tuần tại những không gian thư giãn, thử sức mình qua các giải đấu phong trào hàng tháng với thể thức sáng tạo, cùng hàng loạt hoạt động ngoại khóa thú vị khác giúp gắn kết các thành viên.",
    joinNowLabel: "tham gia ngay",
    sectionCaption:
      "Tại đây, chúng mình tổ chức các buổi giao lưu hàng tuần, giải đấu hàng tháng và nhiều hoạt động thú vị khác, phù hợp với người đi làm, sinh viên, học sinh và cả những người mới bắt đầu.",
    scheduleSectionAriaLabel: "Lịch sự kiện",
    scheduleDayAriaPrefix: "Ngày",
    weekdayLabels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    newsSectionAriaLabel: "Tin tức",
    newsTitle: "NEWS",
    newsCards: [
      {
        title: "KHÉP LẠI GIẢI ĐẤU – FCA 2 LÊN NGÔI VÔ ĐỊCH 🏆",
        summary:
          "Tiếp nối diễn biến buổi sáng với 8 đội góp mặt tại Vòng Chung Kết, các trận đấu buổi chiều đã diễn ra với nhịp độ cao và liên tục có những chuyển biến đáng chú ý.",
        slug: "/blog/fca-2-vo-dich-happy-bishops-2025",
      },
      {
        title: "LỘ DIỆN 8 ĐỘI VÀO VÒNG CHUNG KẾT 🏆",
        summary:
          "Sau 9 vòng thi đấu buổi sáng, chúng ta đã xác định được 8 đội xuất sắc nhất góp mặt tại Vòng Chung Kết của Happy Bishops Chess Club Championship 2025 🔥",
        slug: "/blog/8-doi-vao-chung-ket-happy-bishops-2025",
      },
      {
        title: "Chặng 2: Bốc thăm chia bảng – khoảnh khắc định hình",
        summary:
          "Sau khi danh sách đăng ký chính thức khép lại, Giải cờ vua Đồng đội tranh cup Happy Bishops 2025 bước vào Chặng 2: Họp kỹ thuật & bốc thăm chia bảng.",
        slug: "/blog/boc-tham-chia-bang-happy-bishops-2025",
      },
    ],
  },
  ENG: {
    navLabels: ["About", "Events", "News", "Community", "Contact"],
    navAriaLabel: "Main navigation",
    languageSwitcherAriaLabel: "Language",
    heroImageAlt: "Happy Bishops chess board and pieces",
    heroSubtitle: "More than just a chess club",
    heroDescription:
      "Happy Bishops is a chess community for people who love joy, connection, and a friendly chess experience. Here, we respect one another and do not place too much pressure on skill level.",
    communityTitle: "A healthy community",
    communityDescription:
      "We focus on building a low-pressure learning and social space for students and busy professionals alike. You can join weekly offline meetups in relaxing venues, challenge yourself in monthly grassroots tournaments with creative formats, and enjoy many extracurricular activities that help members connect.",
    joinNowLabel: "join now",
    sectionCaption:
      "Here, we host weekly meetups, monthly tournaments, and many other exciting activities for professionals, university students, school students, and complete beginners.",
    scheduleSectionAriaLabel: "Event schedule",
    scheduleDayAriaPrefix: "Day",
    weekdayLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    newsSectionAriaLabel: "News",
    newsTitle: "NEWS",
    newsCards: [
      {
        title: "FINALS RECAP – FCA 2 CROWNED CHAMPION 🏆",
        summary:
          "Following the morning rounds with 8 teams making it to the Finals, the afternoon matches took place with high intensity and dramatic shifts.",
        slug: "/blog/fca-2-vo-dich-happy-bishops-2025",
      },
      {
        title: "TOP 8 TEAMS ADVANCE TO THE FINALS 🏆",
        summary:
          "After 9 morning rounds, the top 8 teams have been officially identified for the Finals of Happy Bishops Championship 2025 🔥",
        slug: "/blog/8-doi-vao-chung-ket-happy-bishops-2025",
      },
      {
        title: "Stage 2: Technical Meeting & Group Draw",
        summary:
          "With the official team list finalized, the Happy Bishops Team Championship enters Stage 2: Technical Meeting & Group Draw.",
        slug: "/blog/boc-tham-chia-bang-happy-bishops-2025",
      },
    ],
  },
};

const navHrefs = [
  "/gioi-thieu",
  "/su-kien",
  "/blog",
  "/#cong-dong",
  "/lien-he",
];

const scheduleEventTemplatesByLanguage: Record<
  Language,
  {
    wednesday: {
      time: string;
      place: string;
      address: string;
    };
  }
> = {
  VIE: {
    wednesday: {
      time: "[19h30 - 22h30]",
      place: "Urban Station Coffee",
      address: "số 7 ngõ 82 phố Phạm Ngọc Thạch",
    },
  },
  ENG: {
    wednesday: {
      time: "[7:30 PM - 10:30 PM]",
      place: "Urban Station Coffee",
      address: "No. 7, Alley 82, Pham Ngoc Thach Street",
    },
  },
};

import { useLanguage } from "@/context/language-context";

export default function HomePage() {
  const { language: activeLanguage, setLanguage: setActiveLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileGalleryIndex, setMobileGalleryIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const text = localizedText[activeLanguage];
  const scheduleTemplates = scheduleEventTemplatesByLanguage[activeLanguage];
  const navItems = text.navLabels.map((label, index) => ({
    label,
    href: navHrefs[index],
  }));
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonthIndex = now.getMonth();
  const scheduleMonthLabel =
    activeLanguage === "VIE"
      ? `Tháng ${currentMonthIndex + 1}/${currentYear}`
      : new Intl.DateTimeFormat("en-US", {
          month: "long",
          year: "numeric",
        }).format(now);

  const calendarCells = useMemo(() => {
    const daysInMonth = new Date(
      currentYear,
      currentMonthIndex + 1,
      0,
    ).getDate();
    const firstDay = new Date(currentYear, currentMonthIndex, 1).getDay();
    const leadingEmpty = (firstDay + 6) % 7;

    const cells: Array<{
      id: string;
      day: number | null;
      dayOfWeek: number | null;
    }> = [];

    for (let i = 0; i < leadingEmpty; i += 1) {
      cells.push({
        id: `calendar-empty-start-${i + 1}`,
        day: null,
        dayOfWeek: null,
      });
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      cells.push({
        id: `calendar-day-${day}`,
        day,
        dayOfWeek: new Date(currentYear, currentMonthIndex, day).getDay(),
      });
    }

    const trailingEmpty = (7 - (cells.length % 7)) % 7;
    for (let i = 0; i < trailingEmpty; i += 1) {
      cells.push({
        id: `calendar-empty-end-${i + 1}`,
        day: null,
        dayOfWeek: null,
      });
    }

    return cells;
  }, [currentYear, currentMonthIndex]);
  const wednesdayDays = useMemo(
    () =>
      calendarCells
        .filter((cell) => cell.day !== null && cell.dayOfWeek === 3)
        .map((cell) => cell.day as number),
    [calendarCells],
  );
  const newsCards = [
    { ...text.newsCards[0], imageSrc: newsCard1Src },
    { ...text.newsCards[1], imageSrc: newsCard2Src },
    { ...text.newsCards[2], imageSrc: newsCard3Src },
  ];
  const mobileGallerySlides = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
  ];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setMobileGalleryIndex((prev) => (prev + 1) % mobileGallerySlides.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [mobileGalleryIndex, mobileGallerySlides.length]);

  return (
    <main
      className="relative mx-auto mt-[0.6rem] mb-0 min-h-screen w-[calc(100%-1.2rem)] max-w-[1320px] overflow-visible max-[680px]:w-[calc(100%-0.8rem)] max-[680px]:mt-[0.4rem]"
      data-node-id="1:4"
    >
      <header className="relative grid min-h-[82px] grid-cols-1 items-center pb-4 max-[680px]:min-h-[68px] max-[680px]:pb-3">
        <div
          className="col-start-1 row-start-1 h-[52px] w-full rounded-2xl bg-linear-to-r from-[#f18a8a] via-[#f78181] to-[#ee7b7b] shadow-[0_10px_20px_rgba(158,26,51,0.12)] max-[680px]:h-[44px]"
          aria-hidden="true"
        />

        <Link
          href="/"
          prefetch={false}
          className="col-start-1 row-start-1 z-30 ml-[0.8rem] inline-flex w-fit max-[680px]:ml-[0.6rem]"
          aria-label={activeLanguage === "VIE" ? "Trang chủ" : "Home"}
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
          aria-label={text.navAriaLabel}
        >
          <div className="flex h-[52px] w-full items-center justify-center gap-[clamp(1rem,2.2vw,2.6rem)] max-[1080px]:h-[48px] max-[1080px]:gap-4 max-[1080px]:overflow-x-auto max-[1080px]:[scrollbar-width:none] max-[1080px]:[&::-webkit-scrollbar]:hidden max-[530px]:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className="inline-flex items-center whitespace-nowrap text-[1.08rem] leading-[1.1] font-bold tracking-[0.01em] text-white underline-offset-2 hover:underline max-[1080px]:text-[0.56rem]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden h-full w-full items-center justify-center gap-2 max-[530px]:flex">
            <Link
              href="/"
              prefetch={false}
              className="inline-flex items-center whitespace-nowrap rounded-lg bg-white/14 px-2.5 py-1.5 text-[0.72rem] leading-[1] font-bold tracking-[0.01em] text-white underline-offset-2 hover:underline"
            >
              {activeLanguage === "VIE" ? "Trang chủ" : "Home"}
            </Link>
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className="inline-flex items-center whitespace-nowrap rounded-lg bg-white/14 px-2.5 py-1.5 text-[0.72rem] leading-[1] font-bold tracking-[0.01em] text-white underline-offset-2 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div
          className="col-start-1 row-start-1 z-20 mr-[0.8rem] grid min-h-[52px] justify-self-end [grid-template-columns:4.2rem_3px_4.2rem] items-center gap-x-[0.28rem] max-[1080px]:mr-[0.5rem] max-[1080px]:min-h-[48px] max-[1080px]:[grid-template-columns:3.35rem_2px_3.35rem] max-[1080px]:gap-x-[0.2rem] max-[530px]:hidden"
          aria-label={text.languageSwitcherAriaLabel}
        >
          <button
            type="button"
            className={`inline-flex w-full cursor-pointer items-center justify-center rounded-xl border-[2px] bg-transparent px-[0.42rem] py-[0.25rem] text-[1rem] leading-none font-bold text-white transition-colors duration-200 max-[1080px]:px-[0.3rem] max-[1080px]:py-[0.15rem] max-[1080px]:text-[0.6rem] max-[1080px]:border-[1.5px] focus-visible:outline-none focus-visible:border-white ${
              activeLanguage === "VIE"
                ? "border-white bg-white/10"
                : "border-transparent"
            }`}
            aria-pressed={activeLanguage === "VIE"}
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
            className={`inline-flex w-full cursor-pointer items-center justify-center rounded-xl border-[2px] bg-transparent px-[0.42rem] py-[0.25rem] text-[1rem] leading-none font-bold text-white transition-colors duration-200 max-[1080px]:px-[0.3rem] max-[1080px]:py-[0.15rem] max-[1080px]:text-[0.6rem] max-[1080px]:border-[1.5px] focus-visible:outline-none focus-visible:border-white ${
              activeLanguage === "ENG"
                ? "border-white bg-white/10"
                : "border-transparent"
            }`}
            aria-pressed={activeLanguage === "ENG"}
            onClick={() => setActiveLanguage("ENG")}
          >
            ENG
          </button>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="col-start-1 row-start-1 z-30 justify-self-end mr-[0.6rem] hidden min-h-[44px] w-[44px] flex-col items-center justify-center gap-[6px] rounded-lg bg-white/10 transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white max-[530px]:flex"
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

      {/* Mobile Menu Sidebar */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-30 bg-black/50 max-[530px]:block hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="col-start-1 row-start-1 fixed right-0 top-[70px] z-40 w-[280px] max-[530px]:block hidden rounded-3xl bg-[#f78181] shadow-lg">
            <nav className="flex flex-col space-y-0 border-b border-white/20">
              {navItems.slice(2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-6 py-4 text-[16px] font-bold text-white hover:bg-white/15 transition-colors first:rounded-t-3xl"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-center gap-3 border-t border-white/20 px-4 py-4">
              <button
                type="button"
                className={`inline-flex flex-1 cursor-pointer items-center justify-center rounded-lg border-[2px] bg-transparent px-3 py-2 text-[14px] font-bold text-white transition-colors duration-200 focus-visible:outline-none focus-visible:border-white ${
                  activeLanguage === "VIE"
                    ? "border-white bg-white/20"
                    : "border-white/40"
                }`}
                aria-pressed={activeLanguage === "VIE"}
                onClick={() => {
                  setActiveLanguage("VIE");
                  setIsMenuOpen(false);
                }}
              >
                VIE
              </button>
              <button
                type="button"
                className={`inline-flex flex-1 cursor-pointer items-center justify-center rounded-lg border-[2px] bg-transparent px-3 py-2 text-[14px] font-bold text-white transition-colors duration-200 focus-visible:outline-none focus-visible:border-white ${
                  activeLanguage === "ENG"
                    ? "border-white bg-white/20"
                    : "border-white/40"
                }`}
                aria-pressed={activeLanguage === "ENG"}
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

      <section className="relative grid min-h-[760px] overflow-visible gap-3 min-[1081px]:grid-cols-[minmax(340px,1fr)_minmax(420px,1.25fr)] max-[1080px]:min-h-auto max-[680px]:gap-0">
        <div className="relative z-20 max-w-[540px] pl-[0.35rem] pt-[2.75rem] max-[1080px]:max-w-full max-[1080px]:pl-[0.1rem] max-[1080px]:pt-[1.7rem] max-[680px]:pl-[0.2rem] max-[680px]:pt-[1.2rem]">
          <p className="m-0 text-[48px] leading-none font-normal [font-family:var(--font-comfortaa)] tracking-[1em] lowercase text-[var(--hb-primary)] max-[1080px]:text-[36px] max-[1080px]:tracking-[0.86em] max-[680px]:text-[32px] max-[680px]:tracking-[0.68em]">
            happy
          </p>
          <h1 className="relative -left-[3px] mt-[0.35rem] mb-12 whitespace-nowrap text-[96px] leading-none font-bold [font-family:var(--font-lexend)] tracking-[0.1em] text-[var(--hb-deep-red)] max-[1080px]:mb-8 max-[1080px]:text-[72px] max-[680px]:mb-[1.4rem] max-[680px]:text-[48px] max-[680px]:tracking-[0.08em]">
            BISHOPS
          </h1>

          <h2 className="mb-[0.7rem] text-[24px] leading-[1.2] font-medium [font-family:var(--font-lexend)] text-[var(--hb-deep-red)] max-[680px]:text-[18px]">
            {text.heroSubtitle}
          </h2>
          <p className="my-[0.7rem] max-w-[640px] text-[16px] leading-[1.25] [font-family:var(--font-source-serif-4)] font-normal italic text-[var(--hb-deep-red)] max-[680px]:text-[14px] max-[680px]:leading-[1.3]">
            {text.heroDescription}
          </p>
        </div>

        <div className="relative min-h-[940px] overflow-visible max-[1080px]:mt-[-1.5rem] max-[1080px]:min-h-[740px] max-[680px]:mt-[-4.5rem] max-[680px]:min-h-[470px] [&>span]:!overflow-visible">
          <Image
            src={heroBoardSrc}
            alt={text.heroImageAlt}
            fill
            priority
            className="!absolute !top-[-335px] !left-1/2 !right-auto !bottom-auto !w-[150%] !h-[150%] max-w-none -translate-x-1/2  object-contain object-center drop-shadow-[0_22px_26px_rgba(94,10,24,0.2)] min-[1081px]:!top-[-410px] min-[1081px]:scale-[1.66] max-[1080px]:!top-[-255px] max-[1080px]:!w-[145%] max-[1080px]:!h-[145%] max-[680px]:!top-[-238px] max-[680px]:!w-[173%] max-[680px]:!h-[173%]"
            sizes="(max-width: 900px) 100vw, 62vw"
          />
        </div>
      </section>

      <section className="relative mt-8 grid gap-8 min-[1081px]:grid-cols-[minmax(340px,1fr)_minmax(902px,1fr)] max-[1080px]:mt-6 max-[680px]:mt-4 max-[680px]:gap-2 max-[680px]:grid-cols-1">
        <div className="relative -top-[200px] z-20 w-[560px] max-w-none pl-[0.35rem] max-[1080px]:w-full max-[1080px]:max-w-[640px] max-[680px]:-top-[44px] max-[680px]:w-full max-[680px]:pl-[0.2rem]">
          <h3 className="text-[48px] leading-none font-medium [font-family:var(--font-lexend)] text-[var(--hb-deep-red)] max-[680px]:text-[32px]">
            {text.communityTitle}
          </h3>
          <p className="mt-5 whitespace-pre-line text-[16px] leading-normal [font-family:var(--font-source-serif-4)] font-normal italic text-[#8E2B2B] max-[680px]:text-[14px] max-[680px]:leading-[1.4]">
            {text.communityDescription}
          </p>

          <button
            type="button"
            className="mt-8 inline-flex h-[56px] min-w-[300px] items-center justify-center rounded-full border border-[#c86a6c] bg-linear-to-b from-[#b63d3f] via-[#a43638] to-[#8f2a2d] px-8 text-[24px] leading-none font-medium [font-family:var(--font-lexend)] text-[#fff6e3] shadow-[0_8px_0_#6f1f22,0_16px_22px_rgba(116,27,38,0.28)] transition-[transform,box-shadow,filter] duration-150 ease-out hover:brightness-105 active:translate-y-[4px] active:shadow-[0_4px_0_#6f1f22,0_8px_14px_rgba(116,27,38,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b63d3f]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff8ec] max-[680px]:mt-5 max-[680px]:block max-[680px]:h-[48px] max-[680px]:min-w-[200px] max-[680px]:w-fit max-[680px]:px-6 max-[680px]:text-[18px] max-[680px]:mx-auto"
          >
            {text.joinNowLabel}
          </button>
        </div>

        <div className="relative z-20 w-full max-w-[902px] justify-self-center min-[1081px]:justify-self-end">
          <div className="relative hidden aspect-[902/503] w-full min-[1081px]:block">
            <div className="absolute left-[52.44%] top-0 h-[46.52%] w-[23.50%] overflow-hidden rounded-[10px]">
              <Image
                src={galleryImg2}
                alt=""
                fill
                aria-hidden="true"
                className="object-cover"
                sizes="(max-width: 680px) 24vw, (max-width: 1080px) 22vw, 212px"
              />
            </div>

            <div className="absolute left-[76.61%] top-0 h-[39.17%] w-[23.39%] overflow-hidden rounded-[10px]">
              <Image
                src={galleryImg3}
                alt=""
                fill
                aria-hidden="true"
                className="object-cover"
                sizes="(max-width: 680px) 24vw, (max-width: 1080px) 22vw, 211px"
              />
            </div>

            <div className="absolute left-[28.38%] top-[20.28%] h-[39.17%] w-[23.39%] overflow-hidden rounded-[10px]">
              <Image
                src={galleryImg1}
                alt=""
                fill
                aria-hidden="true"
                className="object-cover"
                sizes="(max-width: 680px) 24vw, (max-width: 1080px) 22vw, 211px"
              />
            </div>

            <div className="absolute left-[76.50%] top-[40.36%] h-[39.56%] w-[23.50%] overflow-hidden rounded-[10px]">
              <Image
                src={galleryImg6}
                alt=""
                fill
                aria-hidden="true"
                className="object-cover"
                sizes="(max-width: 680px) 24vw, (max-width: 1080px) 22vw, 212px"
              />
            </div>

            <div className="absolute left-0 top-[60.83%] h-[39.17%] w-[51.66%] overflow-hidden rounded-[10px]">
              <Image
                src={galleryImg4}
                alt=""
                fill
                aria-hidden="true"
                className="object-cover"
                sizes="(max-width: 680px) 52vw, (max-width: 1080px) 48vw, 466px"
              />
            </div>

            <div className="absolute left-[52.44%] top-[47.91%] h-[52.09%] w-[23.28%] overflow-hidden rounded-[10px]">
              <Image
                src={galleryImg5}
                alt=""
                fill
                aria-hidden="true"
                className="object-cover"
                sizes="(max-width: 680px) 23vw, (max-width: 1080px) 21vw, 210px"
              />
            </div>

            <Link
              href="/#su-kien"
              aria-label="Xem thêm"
              className="absolute right-[4.2%] bottom-[2.4%] z-20 block h-auto w-[10.1%] transition-all duration-200 ease-out hover:scale-110 hover:brightness-110 active:scale-95 active:translate-y-[2px] max-[680px]:right-[3%] max-[680px]:bottom-[2%] max-[680px]:w-[11.4%]"
            >
              <Image
                src={viewMoreIconSrc}
                alt="Xem thêm"
                width={152}
                height={56}
                className="h-auto w-full"
              />
            </Link>
          </div>

          <div
            className="relative mt-4 overflow-hidden rounded-2xl min-[1081px]:hidden max-[680px]:mt-1"
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) {
                return;
              }

              const touchEndX =
                event.changedTouches[0]?.clientX ?? touchStartX.current;
              const deltaX = touchEndX - touchStartX.current;
              const swipeThreshold = 40;

              if (deltaX <= -swipeThreshold) {
                setMobileGalleryIndex(
                  (prev) => (prev + 1) % mobileGallerySlides.length,
                );
              } else if (deltaX >= swipeThreshold) {
                setMobileGalleryIndex(
                  (prev) =>
                    (prev - 1 + mobileGallerySlides.length) %
                    mobileGallerySlides.length,
                );
              }

              touchStartX.current = null;
            }}
          >
            <div className="relative aspect-[4/3] w-full">
              {mobileGallerySlides.map((slideSrc, index) => (
                <Image
                  key={`mobile-gallery-${index}`}
                  src={slideSrc}
                  alt=""
                  fill
                  aria-hidden="true"
                  className={`object-cover transition-opacity duration-500 ${
                    mobileGalleryIndex === index
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                  sizes="(max-width: 1080px) 100vw, 0px"
                />
              ))}
            </div>

            <div className="absolute right-3 bottom-3 flex items-center gap-1.5 rounded-full bg-[#1f1f1f]/40 px-2.5 py-1.5">
              {mobileGallerySlides.map((_, index) => (
                <span
                  key={`mobile-gallery-dot-${index}`}
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    mobileGalleryIndex === index
                      ? "w-5 bg-white"
                      : "w-1.5 bg-white/60"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>

        <Image
          src={floatingPawnSrc}
          alt=""
          width={130}
          height={130}
          aria-hidden="true"
          className="pointer-events-none absolute left-[30%] top-[-90%] z-10 h-auto w21 opacity-95 drop-shadow-[0_12px_16px_rgba(94,10,24,0.18)] max-[1080px]:left-[52%] max-[1080px]:top-[4%] max-[1080px]:w-[72px] max-[680px]:hidden"
        />
        <Image
          src={floatingBishopSrc}
          alt=""
          width={240}
          height={240}
          aria-hidden="true"
          className="pointer-events-none absolute left-[-8%] top-[80%] z-10 h-auto opacity-95 drop-shadow-[0_16px_22px_rgba(94,10,24,0.22)] max-[1080px]:w-[110px] max-[680px]:hidden"
        />
      </section>

      <section className="mt-10">
        <div className="h-px w-full bg-[rgba(88,10,10,0.45)]" />
        <p className="mt-4 text-right whitespace-pre-line text-[20px] leading-[1.2] [font-family:var(--font-source-serif-4)] italic text-[#580a0a] max-[1080px]:text-[16px] max-[680px]:text-[13px] max-[680px]:leading-[1.3]">
          {text.sectionCaption}
        </p>
      </section>

      <section
        className="mt-10 max-[1080px]:mt-10 max-[680px]:mt-8"
        aria-label={text.scheduleSectionAriaLabel}
      >
        <div className="relative overflow-x-auto scroll-smooth max-[680px]:hidden">
          <div className="relative min-w-[996px] rounded-2xl">
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl bg-[#f78181] opacity-5"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute top-[121px] right-0 bottom-0 left-0 rounded-2xl bg-[#f78181] opacity-10"
              aria-hidden="true"
            />

            <div className="relative z-10 px-5 pt-4 pb-0 max-[680px]:px-3 max-[680px]:pt-3">
              <h3 className="text-[37px] leading-none font-bold [font-family:var(--font-lexend)] text-[#ad4257] max-[680px]:text-[28px]">
                {scheduleMonthLabel}
              </h3>

              <div className="mt-6 mb-2 grid grid-cols-7 text-center text-[31px] leading-none font-bold [font-family:var(--font-lexend)] text-[#ad4257] max-[680px]:text-[18px] max-[680px]:mt-4 max-[680px]:mb-1">
                {text.weekdayLabels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-7 overflow-hidden rounded-2xl border border-[#8e2b2b80]">
              {calendarCells.map((cell, index) => {
                const event =
                  cell.dayOfWeek === 3
                    ? scheduleTemplates.wednesday
                    : undefined;
                const isEventDay = Boolean(event);

                return (
                  <div
                    key={cell.id}
                    className={`relative min-h-[110px] border-t border-r border-[#8e2b2b80] px-[6px] pt-[5px] pb-[5px] ${
                      index < 7 ? "border-t-0" : ""
                    } ${index % 7 === 6 ? "border-r-0" : ""} ${
                      isEventDay
                        ? "-m-px z-10 rounded-[12px] border-3 border-[#ad4257] bg-[#fff6e3]/60 shadow-xs"
                        : ""
                    }`}
                    aria-label={
                      cell.day
                        ? `${text.scheduleDayAriaPrefix} ${cell.day}`
                        : ""
                    }
                  >
                    {cell.day && (
                      <p className="text-[16px] leading-none font-bold [font-family:var(--font-lexend)] text-[#ad4257]">
                        {cell.day}
                      </p>
                    )}

                    {event && (
                      <div className="mt-[8px] space-y-[6px] text-[#580a0a]">
                        <div className="flex items-center gap-[6px]">
                          <Image
                            src={scheduleCalendarIconSrc}
                            alt=""
                            width={22}
                            height={20}
                            aria-hidden="true"
                            className="h-[18px] w-[20px] shrink-0"
                          />
                          <p className="text-[15px] leading-[1.1] font-bold [font-family:var(--font-source-serif-4)] text-[#8e2b2b]">
                            {event.time}
                          </p>
                        </div>

                        <div className="flex items-start gap-[6px]">
                          <Image
                            src={schedulePinIconSrc}
                            alt=""
                            width={22}
                            height={20}
                            aria-hidden="true"
                            className="mt-[2px] h-[20px] w-[20px] shrink-0"
                          />
                          <div>
                            <p className="text-[13px] leading-[1.15] font-semibold [font-family:var(--font-source-serif-4)] italic text-[#8e2b2b]">
                              {event.place}
                            </p>
                            <p className="text-[11px] leading-[1.2] [font-family:var(--font-source-serif-4)] italic text-[#580a0a]/85 mt-[1px]">
                              {event.address}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hidden rounded-2xl border border-[#8e2b2b4d] bg-[#f781810d] p-3 max-[680px]:block">
          <h3 className="text-[28px] leading-none font-bold [font-family:var(--font-lexend)] text-[#ad4257]">
            {scheduleMonthLabel}
          </h3>

          <div className="mt-3 grid grid-cols-7 text-center text-[12px] leading-none font-bold [font-family:var(--font-lexend)] text-[#ad4257]">
            {text.weekdayLabels.map((label) => (
              <span key={`mobile-weekday-${label}`}>{label}</span>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-7 gap-1">
            {calendarCells.map((cell) => {
              const isEventDay = cell.dayOfWeek === 3;

              return (
                <div
                  key={`mobile-${cell.id}`}
                  className={`flex h-9 items-center justify-center rounded-md border border-[#8e2b2b40] text-[11px] font-bold [font-family:var(--font-lexend)] ${
                    cell.day === null
                      ? "border-transparent text-transparent"
                      : isEventDay
                        ? "bg-[#ad4257] text-[#fff6e3]"
                        : "bg-[#fff6e3] text-[#8e2b2b]"
                  }`}
                  aria-label={
                    cell.day ? `${text.scheduleDayAriaPrefix} ${cell.day}` : ""
                  }
                >
                  {cell.day ?? ""}
                </div>
              );
            })}
          </div>
          <div className="mt-4 space-y-2">
            <article className="rounded-xl border border-[#8e2b2b40] bg-[#fff6e3] p-2.5 text-[#580a0a]">
              <p className="text-[11px] font-bold [font-family:var(--font-lexend)] text-[#ad4257]">
                {activeLanguage === "VIE" ? "Thứ 4" : "Wednesday"}:{" "}
                {wednesdayDays.join(", ")}
              </p>
              <p className="mt-1 text-[11px] leading-[1.2] font-semibold [font-family:var(--font-source-serif-4)]">
                {scheduleTemplates.wednesday.time}
              </p>
              <p className="text-[10px] leading-[1.2] [font-family:var(--font-source-serif-4)] italic">
                {scheduleTemplates.wednesday.place}
              </p>
              <p className="text-[9px] leading-[1.2] [font-family:var(--font-source-serif-4)] italic">
                {scheduleTemplates.wednesday.address}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="relative mt-16"
        aria-label={text.newsSectionAriaLabel}
      >
        <div className="mx-[56px] h-px bg-[rgba(88,10,10,0.55)] max-[1080px]:mx-0" />
        <h3 className="mt-[14px] ml-[52px] text-[96px] leading-none font-bold tracking-[0.1em] [font-family:var(--font-lexend)] text-[#8e2b2b] max-[1080px]:ml-0 max-[1080px]:text-[68px] max-[680px]:ml-6 max-[680px]:text-[42px] max-[680px]:tracking-[0.08em]">
          {text.newsTitle}
        </h3>

        <Image
          src={newsRookSrc}
          alt=""
          width={180}
          height={300}
          aria-hidden="true"
          className="pointer-events-none absolute top-[-60px] right-[-90px] z-20 hidden h-auto drop-shadow-[0_14px_20px_rgba(94,10,24,0.2)] min-[1081px]:block"
        />

        <div className="relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-x-clip">
          <div className="relative w-full overflow-hidden rounded-tl-[160px] bg-[#eb979b] px-[50px] pt-[58px] pb-[66px] min-[1081px]:min-h-[760px] max-[1080px]:rounded-tl-[80px] max-[1080px]:px-6 max-[1080px]:pt-10 max-[1080px]:pb-10 max-[680px]:rounded-tl-[40px] max-[680px]:px-4 max-[680px]:pt-6 max-[680px]:pb-6">
            <div className="relative hidden h-[530px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[1280px]:block">
              {newsCards.map((card, index) => {
                const leftClass =
                  index === 0
                    ? "left-0"
                    : index === 1
                      ? "left-[456px]"
                      : "left-[911px]";

                return (
                  <Link
                    key={`${card.title}-${index}`}
                    href={card.slug}
                    className={`absolute top-0 w-[376px] translate-x-[24px] translate-y-[24px] ${leftClass} group cursor-pointer`}
                  >
                    <article>
                      <div className="relative h-[373px] w-[376px] overflow-hidden rounded-[24px]">
                        <Image
                          src={card.imageSrc}
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="376px"
                        />
                      </div>
                      <h4 className="mt-[11px] text-[22px] leading-snug font-bold [font-family:var(--font-lexend)] text-[#580a0a] group-hover:text-[#f78181] transition-colors">
                        {card.title}
                      </h4>
                      <p className="mt-[9px] w-[374px] text-[15.5px] leading-[1.25] font-light [font-family:var(--font-lexend)] text-[#580a0a] line-clamp-3">
                        {card.summary}
                      </p>
                    </article>
                  </Link>
                );
              })}

              <Link
                href="/blog"
                aria-label="Xem thêm tin tức"
                className="absolute top-[184px] right-[8px] z-20 block h-[84px] w-[58px] transition-all duration-200 ease-out hover:scale-110 hover:translate-x-1 hover:brightness-110 active:scale-95 active:translate-y-[2px]"
              >
                <Image
                  src={newsArrowSrc}
                  alt="Xem thêm tin tức"
                  width={58}
                  height={84}
                  className="h-full w-full"
                />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 min-[1280px]:hidden">
              {newsCards.map((card, index) => (
                <Link key={`${card.title}-${index}`} href={card.slug} className="group">
                  <article className="relative z-10">
                    <div className="relative h-[312px] w-full overflow-hidden rounded-[20px]">
                      <Image
                        src={card.imageSrc}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 1080px) 100vw, 50vw"
                      />
                    </div>
                    <h4 className="mt-2 text-[20px] leading-snug font-bold [font-family:var(--font-lexend)] text-[#580a0a] group-hover:text-[#f78181] transition-colors max-[680px]:text-[16px]">
                      {card.title}
                    </h4>
                    <p className="mt-2 text-[14px] leading-[1.2] font-light [font-family:var(--font-lexend)] text-[#580a0a] line-clamp-3 max-[680px]:text-[13px]">
                      {card.summary}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

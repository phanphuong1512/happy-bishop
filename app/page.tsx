"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Language = "VIE" | "ENG";

const logoSrc =
  "https://www.figma.com/api/mcp/asset/5414bfae-90ad-4b28-98fb-e8de9ced4bad";
const heroBoardSrc =
  "https://www.figma.com/api/mcp/asset/e7f90656-f858-4cec-9091-bf14026e7983";
const floatingPawnSrc =
  "https://www.figma.com/api/mcp/asset/8fd70182-4766-47ce-9d94-b781211c52f6";
const floatingBishopSrc =
  "https://www.figma.com/api/mcp/asset/0f87e472-8e6b-4490-8090-cf825c19661d";
const galleryImg1 =
  "https://www.figma.com/api/mcp/asset/7a446f5e-c61a-4e65-aabd-e71284b08453";
const galleryImg2 =
  "https://www.figma.com/api/mcp/asset/e31ad684-2851-4cdf-b3ff-0c5ae2b50397";
const galleryImg3 =
  "https://www.figma.com/api/mcp/asset/bb200038-162f-4d89-99d8-4f278e5fdb37";
const galleryImg4 =
  "https://www.figma.com/api/mcp/asset/2a064ff3-2671-44dc-99c6-3b9618ff7cd2";
const galleryImg5 =
  "https://www.figma.com/api/mcp/asset/f3fb942c-b09c-40fc-b22c-eb3ce1b27bdf";
const galleryImg6 =
  "https://www.figma.com/api/mcp/asset/9813cf18-a4fd-46c6-a3f0-14a4470e3f6f";
const viewMoreIconSrc = "/go_to_button.svg";
const scheduleCalendarIconSrc = "/calendar.svg";
const schedulePinIconSrc = "/map.svg";
const newsRookSrc =
  "https://www.figma.com/api/mcp/asset/de0a0326-7215-498e-93d2-978a07ce2a93";
const newsCard1Src =
  "https://www.figma.com/api/mcp/asset/4981f416-1a4e-43de-a061-ca1cdd4b82a0";
const newsCard2Src =
  "https://www.figma.com/api/mcp/asset/cc5f6d25-ce9c-478d-9913-3a81163a5147";
const newsCard3Src =
  "https://www.figma.com/api/mcp/asset/fd4084b3-a70f-466b-9986-f423068172e7";
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
        title: "[01] TIÊU ĐỀ BLOG",
        summary:
          "Tóm tắt blog trong 5 đến 8 câu gây tò mò Tóm tắt blog trong 5 đến 8 câu gây tò mò Tóm tắt blog trong 5 đến 8 câu gây tò mò",
      },
      {
        title: "[02] TIÊU ĐỀ BLOG",
        summary:
          "Tóm tắt blog trong 5 đến 8 câu gây tò mò Tóm tắt blog trong 5 đến 8 câu gây tò mò Tóm tắt blog trong 5 đến 8 câu gây tò mò",
      },
      {
        title: "[03] TIÊU ĐỀ BLOG",
        summary:
          "Tóm tắt blog trong 5 đến 8 câu gây tò mò Tóm tắt blog trong 5 đến 8 câu gây tò mò Tóm tắt blog trong 5 đến 8 câu gây tò mò",
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
        title: "[01] BLOG TITLE",
        summary:
          "A short teaser in 5 to 8 sentences that sparks curiosity and encourages readers to open the full article.",
      },
      {
        title: "[02] BLOG TITLE",
        summary:
          "A short teaser in 5 to 8 sentences that sparks curiosity and encourages readers to open the full article.",
      },
      {
        title: "[03] BLOG TITLE",
        summary:
          "A short teaser in 5 to 8 sentences that sparks curiosity and encourages readers to open the full article.",
      },
    ],
  },
};

const navHrefs = [
  "/#gioi-thieu",
  "/#su-kien",
  "/#tin-tuc",
  "/#cong-dong",
  "/#lien-he",
];

const scheduleEventTemplatesByLanguage: Record<
  Language,
  {
    wednesday: {
      time: string;
      place: string;
      address: string;
    };
    sunday: {
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
    sunday: {
      time: "[15h00 - 18h00]",
      place: "Dzyn Coffee",
      address: "số 16 ngõ 84 phố Trần Quang Diệu",
    },
  },
  ENG: {
    wednesday: {
      time: "[7:30 PM - 10:30 PM]",
      place: "Urban Station Coffee",
      address: "No. 7, Alley 82, Pham Ngoc Thach Street",
    },
    sunday: {
      time: "[3:00 PM - 6:00 PM]",
      place: "Dzyn Coffee",
      address: "No. 16, Alley 84, Tran Quang Dieu Street",
    },
  },
};

export default function HomePage() {
  const [activeLanguage, setActiveLanguage] = useState<Language>("VIE");
  const text = localizedText[activeLanguage];
  const scheduleTemplates = scheduleEventTemplatesByLanguage[activeLanguage];
  const navItems = text.navLabels.map((label, index) => ({
    label,
    href: navHrefs[index],
  }));
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonthIndex = now.getMonth();
  const todayDate = now.getDate();
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
  const newsCards = [
    { ...text.newsCards[0], imageSrc: newsCard1Src },
    { ...text.newsCards[1], imageSrc: newsCard2Src },
    { ...text.newsCards[2], imageSrc: newsCard3Src },
  ];

  return (
    <main
      className="relative mx-auto mt-[0.6rem] mb-0 min-h-screen w-[calc(100%-1.2rem)] max-w-[1320px] overflow-visible"
      data-node-id="1:4"
    >
      <header className="relative grid min-h-[82px] grid-cols-1 items-center pb-4">
        <div
          className="col-start-1 row-start-1 h-[52px] w-full rounded-2xl bg-linear-to-r from-[#f18a8a] via-[#f78181] to-[#ee7b7b] shadow-[0_10px_20px_rgba(158,26,51,0.12)]"
          aria-hidden="true"
        />

        <Image
          src={logoSrc}
          alt="Happy Bishops logo"
          width={90}
          height={106}
          priority
          className="col-start-1 row-start-1 z-30 ml-[0.8rem] w-[52px] h-auto"
        />

        <nav
          className="col-start-1 row-start-1 z-20 flex min-h-[52px] items-center justify-center gap-[clamp(1rem,2.2vw,2.6rem)] px-[9.8rem] py-[0.25rem] pr-[12.8rem] max-[1080px]:min-h-[48px] max-[1080px]:justify-start max-[1080px]:gap-4 max-[1080px]:overflow-x-auto max-[1080px]:px-[4.8rem] max-[1080px]:pr-[7.7rem] max-[1080px]:[scrollbar-width:none] max-[1080px]:[&::-webkit-scrollbar]:hidden max-[680px]:min-h-[44px] max-[680px]:gap-[0.8rem] max-[680px]:px-16 max-[680px]:pr-[6.2rem]"
          aria-label={text.navAriaLabel}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="whitespace-nowrap text-[1.08rem] leading-none font-bold tracking-[0.01em] text-white underline-offset-2 hover:underline max-[1080px]:text-[0.56rem] max-[680px]:text-[0.5rem]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          className="col-start-1 row-start-1 z-20 mr-[0.8rem] grid min-h-[52px] justify-self-end [grid-template-columns:4.2rem_3px_4.2rem] items-center gap-x-[0.28rem] max-[1080px]:mr-[0.5rem] max-[1080px]:min-h-[48px] max-[1080px]:[grid-template-columns:3.35rem_2px_3.35rem] max-[1080px]:gap-x-[0.2rem] max-[680px]:mr-[0.4rem] max-[680px]:min-h-[44px] max-[680px]:[grid-template-columns:2.7rem_2px_2.7rem] max-[680px]:gap-x-[0.14rem]"
          aria-label={text.languageSwitcherAriaLabel}
        >
          <button
            type="button"
            className={`inline-flex w-full cursor-pointer items-center justify-center rounded-xl border-[2px] bg-transparent px-[0.42rem] py-[0.25rem] text-[1rem] leading-none font-bold text-white transition-colors duration-200 max-[1080px]:px-[0.3rem] max-[1080px]:py-[0.15rem] max-[1080px]:text-[0.6rem] max-[1080px]:border-[1.5px] max-[680px]:px-[0.24rem] max-[680px]:py-[0.1rem] max-[680px]:text-[0.48rem] max-[680px]:border-[1.2px] focus-visible:outline-none focus-visible:border-white ${
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
            className="block h-[31px] w-[3px] rounded-full bg-white/95 max-[1080px]:h-[18px] max-[1080px]:w-[2px] max-[680px]:h-[14px]"
            aria-hidden="true"
          />
          <button
            type="button"
            className={`inline-flex w-full cursor-pointer items-center justify-center rounded-xl border-[2px] bg-transparent px-[0.42rem] py-[0.25rem] text-[1rem] leading-none font-bold text-white transition-colors duration-200 max-[1080px]:px-[0.3rem] max-[1080px]:py-[0.15rem] max-[1080px]:text-[0.6rem] max-[1080px]:border-[1.5px] max-[680px]:px-[0.24rem] max-[680px]:py-[0.1rem] max-[680px]:text-[0.48rem] max-[680px]:border-[1.2px] focus-visible:outline-none focus-visible:border-white ${
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
      </header>

      <section className="relative grid min-h-[760px] overflow-visible gap-3 min-[1081px]:grid-cols-[minmax(340px,1fr)_minmax(420px,1.25fr)] max-[1080px]:min-h-auto">
        <div className="relative z-20 max-w-[540px] pl-[0.35rem] pt-[2.75rem] max-[1080px]:max-w-full max-[1080px]:pl-[0.1rem] max-[1080px]:pt-[1.7rem]">
          <p className="m-0 text-[48px] leading-none font-normal [font-family:var(--font-comfortaa)] tracking-[1em] lowercase text-[var(--hb-primary)] max-[1080px]:tracking-[0.86em] max-[680px]:tracking-[0.68em]">
            happy
          </p>
          <h1 className="relative -left-[3px] mt-[0.35rem] mb-12 whitespace-nowrap text-[96px] leading-none font-bold [font-family:var(--font-lexend)] tracking-[0.1em] text-[var(--hb-deep-red)] max-[1080px]:mb-8 max-[680px]:mb-[1.4rem] max-[680px]:tracking-[0.08em]">
            BISHOPS
          </h1>

          <h2 className="mb-[0.7rem] text-[24px] leading-[1.2] font-medium [font-family:var(--font-lexend)] text-[var(--hb-deep-red)]">
            {text.heroSubtitle}
          </h2>
          <p className="my-[0.7rem] max-w-[640px] text-[16px] leading-[1.25] [font-family:var(--font-source-serif-4)] font-normal italic text-[var(--hb-deep-red)] max-[680px]:leading-[1.3]">
            {text.heroDescription}
          </p>
        </div>

        <div className="relative min-h-[940px] overflow-visible max-[1080px]:mt-[-1.5rem] max-[1080px]:min-h-[740px] max-[680px]:mt-[-1rem] max-[680px]:min-h-[600px] [&>span]:!overflow-visible">
          <Image
            src={heroBoardSrc}
            alt={text.heroImageAlt}
            fill
            priority
            className="!absolute !top-[-335px] !left-1/2 !right-auto !bottom-auto !w-[150%] !h-[150%] max-w-none -translate-x-1/2 -rotate-[40deg] object-contain object-center drop-shadow-[0_22px_26px_rgba(94,10,24,0.2)] max-[1080px]:!top-[-255px] max-[1080px]:!w-[145%] max-[1080px]:!h-[145%] max-[680px]:!top-[-175px] max-[680px]:!w-[138%] max-[680px]:!h-[138%]"
            sizes="(max-width: 900px) 100vw, 62vw"
          />
        </div>
      </section>

      <section className="relative mt-8 grid gap-8 min-[1081px]:grid-cols-[minmax(340px,1fr)_minmax(902px,1fr)] max-[1080px]:mt-6">
        <div className="relative -top-[200px] z-20 w-[560px] max-w-none pl-[0.35rem] max-[1080px]:w-full max-[1080px]:max-w-[640px]">
          <h3 className="text-[24px] leading-none font-medium [font-family:var(--font-lexend)] text-[var(--hb-deep-red)]">
            {text.communityTitle}
          </h3>
          <p className="mt-5 whitespace-pre-line text-[16px] leading-normal [font-family:var(--font-source-serif-4)] font-normal italic text-[#8E2B2B]">
            {text.communityDescription}
          </p>

          <button
            type="button"
            className="mt-8 inline-flex h-[56px] min-w-[300px] items-center justify-center rounded-full border border-[#c86a6c] bg-linear-to-b from-[#b63d3f] via-[#a43638] to-[#8f2a2d] px-8 text-[24px] leading-none font-medium [font-family:var(--font-lexend)] text-[#fff6e3] shadow-[0_8px_0_#6f1f22,0_16px_22px_rgba(116,27,38,0.28)] transition-[transform,box-shadow,filter] duration-150 ease-out hover:brightness-105 active:translate-y-[4px] active:shadow-[0_4px_0_#6f1f22,0_8px_14px_rgba(116,27,38,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b63d3f]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff8ec]"
          >
            {text.joinNowLabel}
          </button>
        </div>

        <div className="relative z-20 hidden h-[503px] w-[902px] justify-self-end lg:block">
          <Image
            src={galleryImg2}
            alt=""
            width={212}
            height={234}
            aria-hidden="true"
            className="absolute left-[473px] top-0 h-[234px] w-[212px] rounded-[10px] object-cover"
          />
          <Image
            src={galleryImg3}
            alt=""
            width={211}
            height={197}
            aria-hidden="true"
            className="absolute left-[691px] top-0 h-[197px] w-[211px] rounded-[10px] object-cover"
          />
          <Image
            src={galleryImg1}
            alt=""
            width={211}
            height={197}
            aria-hidden="true"
            className="absolute left-[256px] top-[102px] h-[197px] w-[211px] rounded-[10px] object-cover"
          />
          <Image
            src={galleryImg6}
            alt=""
            width={212}
            height={199}
            aria-hidden="true"
            className="absolute left-[690px] top-[203px] h-[199px] w-[212px] rounded-[10px] object-cover"
          />
          <Image
            src={galleryImg4}
            alt=""
            width={466}
            height={197}
            aria-hidden="true"
            className="absolute left-0 top-[306px] h-[197px] w-[466px] rounded-[10px] object-cover"
          />
          <Image
            src={galleryImg5}
            alt=""
            width={210}
            height={262}
            aria-hidden="true"
            className="absolute left-[473px] top-[241px] h-[262px] w-[210px] rounded-[10px] object-cover"
          />
          <Image
            src={viewMoreIconSrc}
            alt=""
            width={152}
            height={56}
            aria-hidden="true"
            className="absolute right-0 bottom-0 h-[56px] w-[152px]"
          />
        </div>

        <Image
          src={floatingPawnSrc}
          alt=""
          width={130}
          height={130}
          aria-hidden="true"
          className="pointer-events-none absolute left-[20%] top-[-90%] z-10 h-auto w-[70px] rotate-[-40deg] opacity-95 max-[1080px]:left-[52%] max-[1080px]:top-[4%] max-[1080px]:w-[70px] max-[680px]:hidden"
        />
        <Image
          src={floatingBishopSrc}
          alt=""
          width={240}
          height={240}
          aria-hidden="true"
          className="pointer-events-none absolute left-[-5%] top-[80%] z-10 h-auto w-[130px] rotate-[30deg] opacity-95 max-[1080px]:w-[108px] max-[680px]:hidden"
        />
      </section>

      <section className="mt-10">
        <div className="h-px w-full bg-[rgba(88,10,10,0.45)]" />
        <p className="mt-4 text-right whitespace-pre-line text-[20px] leading-[1.2] [font-family:var(--font-source-serif-4)] italic text-[#580a0a] max-[1080px]:text-[16px]">
          {text.sectionCaption}
        </p>
      </section>

      <section
        className="mt-10 max-[1080px]:mt-10 max-[680px]:mt-8"
        aria-label={text.scheduleSectionAriaLabel}
      >
        <div className="relative overflow-x-auto">
          <div className="relative min-w-[996px] rounded-2xl">
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl bg-[#f78181] opacity-5"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute top-[121px] right-0 bottom-0 left-0 rounded-2xl bg-[#f78181] opacity-10"
              aria-hidden="true"
            />

            <div className="relative z-10 px-5 pt-4 pb-0">
              <h3 className="text-[37px] leading-none font-bold [font-family:var(--font-lexend)] text-[#ad4257]">
                {scheduleMonthLabel}
              </h3>

              <div className="mt-6 mb-2 grid grid-cols-7 text-center text-[31px] leading-none font-bold [font-family:var(--font-lexend)] text-[#ad4257]">
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
                    : cell.dayOfWeek === 0
                      ? scheduleTemplates.sunday
                      : undefined;
                const isToday = cell.day === todayDate;

                return (
                  <div
                    key={cell.id}
                    className={`relative min-h-[104px] border-t border-r border-[#8e2b2b80] px-[8px] pt-[6px] pb-[5px] ${
                      index < 7 ? "border-t-0" : ""
                    } ${index % 7 === 6 ? "border-r-0" : ""} ${
                      isToday
                        ? "-m-px z-10 rounded-[10px] border-3 border-[#ad4257] bg-transparent"
                        : ""
                    }`}
                    aria-label={
                      cell.day
                        ? `${text.scheduleDayAriaPrefix} ${cell.day}`
                        : ""
                    }
                  >
                    {cell.day && (
                      <p className="text-[13px] leading-none font-bold [font-family:var(--font-lexend)] text-[#f78181]">
                        {cell.day}
                      </p>
                    )}

                    {event && (
                      <div className="mt-[12px] space-y-[2px] text-[#580a0a]">
                        <div className="flex items-start gap-[5px]">
                          <Image
                            src={scheduleCalendarIconSrc}
                            alt=""
                            width={18}
                            height={16}
                            aria-hidden="true"
                            className="mt-[1px] h-[14px] w-[16px]"
                          />
                          <p className="text-[13px] leading-[1.1] font-semibold [font-family:var(--font-source-serif-4)]">
                            {event.time}
                          </p>
                        </div>

                        <div className="flex items-start gap-[5px]">
                          <Image
                            src={schedulePinIconSrc}
                            alt=""
                            width={18}
                            height={16}
                            aria-hidden="true"
                            className="mt-[1px] h-[14px] w-[16px]"
                          />
                          <div>
                            <p className="text-[10.5px] leading-[1.1] [font-family:var(--font-source-serif-4)] italic">
                              {event.place}
                            </p>
                            <p className="text-[8px] leading-[1.1] [font-family:var(--font-source-serif-4)] italic">
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
      </section>

      <section
        className="relative mt-16"
        aria-label={text.newsSectionAriaLabel}
      >
        <div className="mx-[56px] h-px bg-[rgba(88,10,10,0.55)] max-[1080px]:mx-0" />
        <h3 className="mt-[14px] ml-[52px] text-[96px] leading-none font-bold tracking-[0.1em] [font-family:var(--font-lexend)] text-[#8e2b2b] max-[1080px]:ml-0 max-[1080px]:text-[68px] max-[680px]:text-[46px]">
          {text.newsTitle}
        </h3>

        <Image
          src={newsRookSrc}
          alt=""
          width={172}
          height={300}
          aria-hidden="true"
          className="pointer-events-none absolute top-[-50px] -right-[80px] z-20 hidden h-auto w-[172px] rotate-[-10deg] min-[1081px]:block"
        />

        <div className="relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-x-clip">
          <div className="relative w-full overflow-hidden rounded-tl-[160px] bg-[#eb979b] px-[50px] pt-[58px] pb-[66px] min-[1081px]:min-h-[713px] max-[1080px]:rounded-tl-[80px] max-[1080px]:px-6 max-[1080px]:pt-10 max-[1080px]:pb-10">
            <div className="relative hidden h-[480px] min-[1280px]:block">
              {newsCards.map((card, index) => {
                const leftClass =
                  index === 0
                    ? "left-0"
                    : index === 1
                      ? "left-[410px]"
                      : "left-[820px]";

                return (
                  <article
                    key={`${card.title}-${index}`}
                    className={`absolute top-0 w-[338px] ${leftClass}`}
                  >
                    <div className="relative h-[336px] w-[338px] overflow-hidden rounded-[22px]">
                      <Image
                        src={card.imageSrc}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="338px"
                      />
                    </div>
                    <h4 className="mt-[10px] text-[20px] leading-none font-bold whitespace-nowrap [font-family:var(--font-lexend)] text-[#580a0a]">
                      {card.title}
                    </h4>
                    <p className="mt-[8px] w-[337px] text-[14px] leading-[1.2] font-light [font-family:var(--font-lexend)] text-[#580a0a]">
                      {card.summary}
                    </p>
                  </article>
                );
              })}

              <Image
                src={newsArrowSrc}
                alt=""
                width={52}
                height={76}
                aria-hidden="true"
                className="pointer-events-none absolute top-[166px] right-[6px] z-20 h-[76px] w-[52px]"
              />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 min-[1280px]:hidden">
              {newsCards.map((card, index) => (
                <article
                  key={`${card.title}-${index}`}
                  className="relative z-10"
                >
                  <div className="relative h-[312px] w-full overflow-hidden rounded-[20px]">
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1080px) 100vw, 50vw"
                    />
                  </div>
                  <h4 className="mt-2 text-[20px] leading-none font-bold whitespace-nowrap [font-family:var(--font-lexend)] text-[#580a0a] max-[680px]:text-[18px]">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-[14px] leading-[1.2] font-light [font-family:var(--font-lexend)] text-[#580a0a]">
                    {card.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

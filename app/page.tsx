import Image from "next/image";

const logoSrc =
  "https://www.figma.com/api/mcp/asset/3dbaf4b9-2ca2-48f5-9f0c-baff1bd3c988";
const heroBoardSrc =
  "https://www.figma.com/api/mcp/asset/e7f90656-f858-4cec-9091-bf14026e7983";
const accentPieceSrc =
  "https://www.figma.com/api/mcp/asset/e6cac19d-5900-480a-bd36-bbdf719b87d0";

const weekdayLabels = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const calendarCells = Array.from({ length: 35 }, (_, index) => {
  const day = index + 1;
  return day <= 30 ? day : null;
});

export default function HomePage() {
  return (
    <main className="hb-page" data-node-id="1:4">
      <header className="hb-header">
        <Image
          src={logoSrc}
          alt="Happy Bishops logo"
          width={90}
          height={106}
          priority
          className="hb-logo"
        />

        <nav className="hb-nav" aria-label="Điều hướng chính">
          <a href="#" className="hb-link">
            Giới thiệu
          </a>
          <a href="#" className="hb-link">
            Sự kiện
          </a>
          <a href="#" className="hb-link">
            Tin tức
          </a>
          <a href="#" className="hb-link">
            Cộng đồng
          </a>
          <a href="#" className="hb-link">
            Liên hệ
          </a>
        </nav>

        <div className="hb-language-switch" role="group" aria-label="Ngôn ngữ">
          <button
            type="button"
            className="hb-language hb-language--active"
            aria-pressed="true"
          >
            VIE
          </button>
          <button type="button" className="hb-language" aria-pressed="false">
            ENG
          </button>
        </div>
      </header>

      <section className="hb-hero">
        <div className="hb-copy">
          <p className="hb-kicker">happy</p>
          <h1>BISHOPS</h1>

          <h2>Happy Bishops không chỉ đơn thuần là một câu lạc bộ</h2>
          <p>
            Happy Bishops là cộng đồng cờ vua dành cho những ai yêu thích cảm
            giác vui vẻ, kết nối và trải nghiệm cờ vua một cách thân thiện. Ở
            đây chúng mình tôn trọng lẫn nhau, không quá đặt nặng trình độ.
          </p>

          <p>
            Chúng mình đặc biệt chú trọng vào việc tạo ra một môi trường học tập
            và giao lưu không áp lực, phù hợp cho cả học sinh, sinh viên và
            những người đi làm bận rộn.
          </p>

          <p>
            Bạn sẽ được tham gia vào các buổi offline giao lưu hàng tuần tại
            những không gian cafe thư giãn, thử sức mình qua các giải đấu phong
            trào hàng tháng với thể thức sáng tạo, cùng hàng loạt hoạt động
            ngoại khóa thú vị khác giúp gắn kết các thành viên.
          </p>

          <Image
            src={accentPieceSrc}
            alt="Quân cờ trang trí"
            width={131}
            height={99}
            className="hb-accent-piece"
          />
        </div>

        <div className="hb-hero-visual">
          <Image
            src={heroBoardSrc}
            alt="Bàn cờ và quân cờ Happy Bishops"
            fill
            priority
            className="hb-hero-image"
            sizes="(max-width: 900px) 100vw, 62vw"
          />
        </div>
      </section>

      <section className="hb-calendar" aria-label="Lịch sự kiện">
        <div className="hb-weekdays">
          {weekdayLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        <div className="hb-grid">
          {calendarCells.map((day, index) => (
            <div
              key={`day-${index}`}
              className={day === 17 ? "hb-cell hb-cell--highlight" : "hb-cell"}
              aria-label={day ? `Ngày ${day}` : ""}
            >
              {day}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

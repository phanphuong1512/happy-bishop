-- Database Schema for Cloudflare D1
CREATE TABLE IF NOT EXISTS blogs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  summary TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  content TEXT NOT NULL,
  recap_link_text TEXT,
  recap_link_target_slug TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Seed initial 4 blog posts
INSERT OR IGNORE INTO blogs (id, slug, title, date, summary, cover_image, content, recap_link_text, recap_link_target_slug)
VALUES 
(
  1,
  'fca-2-vo-dich-happy-bishops-2025',
  'FCA 2 Xuất Sắc Giành Cúp Vô Địch Giải Đồng Đội Happy Bishops 2025',
  '08/03/2025',
  'Trải qua 7 vòng đấu nghẹt thở, đội tuyển FCA 2 từ CLB Cờ vua Đại học Ngoại thương đã chính thức nâng cao cúp vô địch Giải cờ vua Đồng đội các CLB HSSV tranh cúp Happy Bishops 2025.',
  'https://assets.happybishops.com/media/blog_1.webp',
  '["Trải qua một ngày thi đấu vô cùng kịch tính và cảm xúc tại Urban Station Coffee, Giải cờ vua Đồng đội các CLB HSSV tranh cúp Happy Bishops 2025 đã chính thức khép lại với ngôi vương thuộc về đội tuyển FCA 2 (CLB Cờ vua Đại học Ngoại thương).", "Với phong độ thi đấu ổn định và chiến thuật đồng đội xuất sắc, FCA 2 đã vượt qua 35 đội tuyển mạnh đến từ 19 câu lạc bộ trên toàn địa bàn Hà Nội để xuất sắc cán đích ở vị trí số 1.", "Giải đấu lần này chứng kiến sự bùng nổ của nhiều tài năng trẻ phong trào. Bên cạnh chức vô địch thuộc về FCA 2, đội tuyển COC 1 (THPT Chuyên Nguyễn Huệ) giành vị trí Á quân và YCC 1 (THPT Yên Hòa) đứng ở vị trí thứ Ba.", "Ban Tổ Chức Happy Bishops xin gửi lời cảm ơn chân thành tới tất cả các câu lạc bộ, các kỳ thủ cùng lực lượng trọng tài đã cống hiến hết mình cho một giải đấu thành công rực rỡ."]',
  'Xem bài viết bốc thăm chia bảng trước giải',
  'boc-tham-chia-bang-happy-bishops-2025'
),
(
  2,
  '8-doi-vao-chung-ket-happy-bishops-2025',
  'Lộ Diện 8 Đội Tuyển Mạnh Nhất Bước Vào Vòng Chung Kết Happy Bishops 2025',
  '07/03/2025',
  'Vòng bảng Giải Đồng đội Happy Bishops 2025 đã diễn ra cực kỳ nảy lửa. 8 cái tên xuất sắc nhất đã chính thức ghi tên mình vào vòng chung kết tranh cúp vô địch.',
  'https://assets.happybishops.com/media/blog_2.webp',
  '["Sau những giờ phút cân não căng thẳng tại vòng bảng, 8 đội tuyển mạnh nhất đại diện cho các trường THPT và Đại học tại Hà Nội đã chính thức vượt qua khe cửa hẹp để tiến vào vòng chung kết.", "Danh sách 8 đội tuyển bước tiếp bao gồm: FCA 1, FCA 2, COC 1, ACA 1, YCC 1, Hội Bàn Cờ 1, MCIS 1 và HCC 1.", "Vòng chung kết hứa hẹn sẽ mang đến những cuộc đối đầu nảy lửa khi các đội tuyển đều sở hữu những kỳ thủ chủ lực có hệ số Elo phong trào rất cao.", "Hãy cùng chờ đón và cổ vũ cho các đội tuyển tại vòng chung kết diễn ra vào cuối tuần này!"]',
  'Xem lại danh sách 36 đội đăng ký ban đầu',
  '36-doi-tham-gia-giai-dong-doi-2025'
),
(
  3,
  'boc-tham-chia-bang-happy-bishops-2025',
  'Chính Thức Bốc Thăm Chia Bảng Giải Cờ Vua Đồng Đội Happy Bishops 2025',
  '05/03/2025',
  'Ban Tổ Chức Giải cờ vua Đồng đội Happy Bishops 2025 đã hoàn tất công tác bốc thăm chia bảng cho 36 đội tuyển tham dự.',
  'https://assets.happybishops.com/media/blog_3.webp',
  '["Chiều ngày 05/03/2025, Ban Tổ Chức Happy Bishops đã tiến hành buổi lễ bốc thăm chia bảng trực tiếp cho Giải cờ vua Đồng đội các CLB HSSV tranh cúp Happy Bishops 2025.", "Với 36 đội tuyển đăng ký tham dự, BTC đã chia thành 4 bảng đấu thi đấu theo thể thức hệ Thụy Sĩ 7 vòng để chọn ra các đội xuất sắc nhất bước vào vòng knock-out.", "Các bảng đấu đều ghi nhận sự góp mặt đồng đều của các đại diện mạnh đến từ khối THPT Chuyên và các trường Đại học lớn tại Hà Nội.", "Lịch thi đấu chi tiết và mã số bàn thi đấu đã được gửi tới Ban Chủ nhiệm các câu lạc bộ."]','', ''
),
(
  4,
  '36-doi-tham-gia-giai-dong-doi-2025',
  'Lộ Diện 36 Đội Tham Gia Giải Đồng Đội Happy Bishops 2025',
  '01/03/2025',
  'Giải cờ vua Đồng đội các CLB Học sinh Sinh viên tranh cup Happy Bishops 2025 chính thức ghi nhận sự góp mặt của 36 đội tuyển từ 19 câu lạc bộ trên địa bàn Hà Nội.',
  'https://assets.happybishops.com/media/blog_4.webp',
  '["Sau thời gian chuẩn bị, Giải cờ vua Đồng đội các CLB Học sinh Sinh viên tranh cup Happy Bishops 2025 đã chính thức ghi nhận sự góp mặt của 36 đội tuyển đến từ 19 câu lạc bộ và cộng đồng cờ vua trên địa bàn Hà Nội, với tổng cộng hơn 120 kỳ thủ tham gia.", "Danh sách các câu lạc bộ tham gia bao gồm: CLB Cờ vua THPT Chuyên Hà Nội Amsterdam (ACA), CLB THPT Chuyên Nguyễn Huệ (COC), CLB THPT Chuyên Sư phạm (Hội Bàn Cờ), CLB THPT Kim Liên (KCC), CLB THPT Chu Văn An (CVA), CLB THPT Yên Hòa (YCC), CLB THPT Marie Curie (MCIS), CLB Đại học Ngoại thương (FCA), CLB Đại học Hà Nội (HCC), CLB Đại học Quốc gia Hà Nội (VCC) cùng nhiều đơn vị khác.", "Đây là giải đấu đồng đội quy mô lớn đầu tiên trong năm 2025 do Happy Bishops tổ chức nhằm tạo sân chơi kết nối các bạn trẻ yêu cờ vua trên toàn thành phố."]','', ''
);

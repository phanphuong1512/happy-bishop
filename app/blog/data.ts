export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  summary: string;
  content: string[]; // Paragraphs or HTML sections
  recapLink?: {
    text: string;
    targetSlug: string;
  };
};

export const blogPosts: BlogPost[] = [
  {
    id: "4",
    slug: "fca-2-vo-dich-happy-bishops-2025",
    title: "KHÉP LẠI GIẢI ĐẤU – FCA 2 LÊN NGÔI VÔ ĐỊCH 🏆",
    date: "28/12/2025",
    coverImage: "https://assets.happybishops.com/hb-assets/1.webp",
    summary:
      "Tiếp nối diễn biến buổi sáng với 8 đội góp mặt tại Vòng Chung Kết, các trận đấu buổi chiều đã diễn ra với nhịp độ cao và liên tục có những chuyển biến đáng chú ý.",
    content: [
      "Tiếp nối diễn biến buổi sáng với 8 đội góp mặt tại Vòng Chung Kết, các trận đấu buổi chiều đã diễn ra với nhịp độ cao và liên tục có những chuyển biến đáng chú ý.",
      "Từ nhánh đấu đã được xác định, các đội lần lượt vượt qua vòng loại trực tiếp để tìm ra 4 cái tên góp mặt tại bán kết. Tại đây, cục diện dần rõ ràng hơn khi những đội giữ được phong độ ổn định tiếp tục đi sâu vào giải.",
      "Chung cuộc, trận Chung Kết là cuộc đối đầu giữa FCA 2 và CNTG - hai đội thể hiện sự chắc chắn xuyên suốt từ đầu giải.",
      "Trong trận đấu quyết định, FCA 2 đã tận dụng tốt cơ hội và duy trì được thế trận ổn định để giành chiến thắng, qua đó chính thức trở thành nhà vô địch của giải đấu năm nay.",
      "Kết quả chung cuộc:\n🥇 Vô địch: FCA 2\n🥈 Á quân: CNTG\n🥉 Hạng Ba: FCA 1",
      "Đáng chú ý, FCA là đơn vị có hai đội góp mặt trong top 3, cho thấy sự đồng đều về lực lượng và chất lượng chuyên môn. Giải đấu khép lại với nhiều trận đấu căng thẳng, những ván cờ chất lượng và sự tham gia tích cực từ các đội.",
      "Happy Bishops Chess Club Championship 2025 chính thức khép lại, để lại nhiều dấu ấn về chuyên môn cũng như sự kết nối trong cộng đồng cờ vua phong trào. Hẹn gặp lại ở những mùa giải tiếp theo.",
    ],
    recapLink: {
      text: "[Recap Happy Bishops Chess Club Championship 2025]",
      targetSlug: "36-doi-tham-gia-giai-dong-doi-2025",
    },
  },
  {
    id: "3",
    slug: "8-doi-vao-chung-ket-happy-bishops-2025",
    title: "LỘ DIỆN 8 ĐỘI VÀO VÒNG CHUNG KẾT 🏆",
    date: "28/12/2025",
    coverImage: "https://assets.happybishops.com/hb-assets/2.webp",
    summary:
      "Sau 9 vòng thi đấu buổi sáng, chúng ta đã xác định được 8 đội xuất sắc nhất góp mặt tại Vòng Chung Kết của Happy Bishops Chess Club Championship 2025 🔥",
    content: [
      "Sau 9 vòng thi đấu buổi sáng, chúng ta đã xác định được 8 đội xuất sắc nhất góp mặt tại Vòng Chung Kết của Happy Bishops Chess Club Championship 2025 🔥",
      "Danh sách và các cặp đấu đã được ấn định chính thức cho các trận đấu loại trực tiếp chiều nay.",
      "✨ Điểm đáng chú ý:\n• FCA và PQN đều có 2 đại diện tại vòng Chung Kết\n• Các cặp đấu khá cân bằng, hứa hẹn nhiều diễn biến căng thẳng",
      "⏳ Vòng Chung Kết sẽ diễn ra vào chiều nay – nơi mọi thứ sẽ được quyết định.",
    ],
  },
  {
    id: "2",
    slug: "boc-tham-chia-bang-happy-bishops-2025",
    title: "Chặng 2: Bốc thăm chia bảng – khoảnh khắc định hình mùa giải",
    date: "14/12/2025",
    coverImage: "https://assets.happybishops.com/hb-assets/3.webp",
    summary:
      "Sau khi danh sách đăng ký chính thức khép lại, Giải cờ vua Đồng đội các CLB Học sinh Sinh viên tranh cup Happy Bishops 2025 bước vào Chặng 2: Họp kỹ thuật & bốc thăm chia bảng – một cột mốc quan trọng trước ngày thi đấu.",
    content: [
      "Sau khi danh sách đăng ký chính thức khép lại, Giải cờ vua Đồng đội các CLB Học sinh Sinh viên tranh cup Happy Bishops 2025 bước vào Chặng 2: Họp kỹ thuật & bốc thăm chia bảng – một cột mốc quan trọng trước ngày thi đấu.",
      "Đây không chỉ là bước chuẩn bị về mặt tổ chức, mà còn là thời điểm các đội chính thức “chạm mặt” nhau và bắt đầu cảm nhận rõ hơn về hành trình phía trước.",
      "📌 Không chỉ là họp kỹ thuật\nTại buổi gặp mặt, BTC và đại diện các đội đã cùng nhau:\n• Thống nhất thể thức và các quy định thi đấu\n• Giải đáp những thắc mắc trước ngày thi đấu chính thức\n• Trao đổi về cách vận hành và phối hợp trong giải\n\nKhông khí diễn ra cởi mở nhưng cũng không kém phần tập trung, khi các đội đều hướng tới một mục tiêu chung: chuẩn bị tốt nhất cho mùa giải.",
      "💥 Cao trào: Bốc thăm chia bảng\nNếu phần họp kỹ thuật là bước chuẩn bị, thì bốc thăm chia bảng chính là khoảnh khắc được mong chờ nhất của Chặng 2.\nTừng lá thăm được rút ra không chỉ đơn thuần là việc sắp xếp bảng đấu, mà còn mang theo sự hồi hộp, kịch tính và cả những bất ngờ khó đoán.",
      "Những cái tên quen thuộc, những đội mạnh, những “ẩn số” của mùa giải dần được xếp vào cùng một bảng – tạo nên những cục diện ngay từ đầu đã rất đáng chờ đợi.\nNgay khi 4 bảng đấu được công bố, nhiều cặp đối đầu hấp dẫn đã lộ diện, hứa hẹn một vòng bảng đầy cạnh tranh.",
      "🚀 Hành trình chính thức bắt đầu\nChặng 2 khép lại cũng là lúc các đội rời khỏi trạng thái “chuẩn bị” để bước vào trạng thái thi đấu thực sự. Từ danh sách đội, đến bốc thăm bảng đấu, mọi thứ đã sẵn sàng.",
      "Phần còn lại là những gì sẽ diễn ra trên bàn cờ. Một mùa giải với 36 đội tuyển đã chính thức được thành. Và từ đây, hành trình chinh phục chiếc cúp vô địch thực sự bắt đầu.",
    ],
  },
  {
    id: "1",
    slug: "36-doi-tham-gia-giai-dong-doi-2025",
    title: "Lộ diện 36 đội tham gia Giải Đồng đội Happy Bishops 2025",
    date: "01/12/2025",
    coverImage: "https://assets.happybishops.com/hb-assets/4.webp",
    summary:
      "Sau thời gian chuẩn bị, Giải cờ vua Đồng đội các CLB Học sinh Sinh viên tranh cup Happy Bishops 2025 đã chính thức ghi nhận sự góp mặt của 36 đội tuyển đến từ 19 câu lạc bộ và cộng đồng cờ vua trên địa bàn Hà Nội, với tổng cộng hơn 120 kỳ thủ tham gia.",
    content: [
      "Sau thời gian chuẩn bị, Giải cờ vua Đồng đội các CLB Học sinh Sinh viên tranh cup Happy Bishops 2025 đã chính thức ghi nhận sự góp mặt của 36 đội tuyển đến từ 19 câu lạc bộ và cộng đồng cờ vua trên địa bàn Hà Nội, với tổng cộng hơn 120 kỳ thủ tham gia.",
      "Danh sách 19 câu lạc bộ tham gia:\n1. CLB Cờ vua THPT Chuyên Hà Nội Amsterdam – ACA\n2. CLB Cờ vua THPT Chuyên Nguyễn Huệ – COC\n3. CLB Cờ vua THPT Chuyên Sư phạm – Hội Bàn Cờ\n4. CLB Cờ vua THPT Kim Liên – KCC\n5. CLB Cờ vua THPT Chu Văn An – CVA Kings and Queens\n6. CLB Cờ vua THPT Yên Hòa – YCC\n7. CLB Thể thao THPT Marie Curie – MCIS\n8. CLB Cờ vua Đại học Ngoại thương – FCA\n9. CLB Cờ vua Đại học Hà Nội – HCC\n10. CLB Cờ vua Đại học Quốc gia Hà Nội – VCC\n11. CLB Cờ vua Đại học Kinh tế Quốc dân – CEN\n12. CLB Cờ vua Đại học Bách Khoa – BKC\n13. CLB Cờ vua Đại học Phenikaa – PCC\n14. CLB Cờ vua Đại học Mỏ Địa chất – HLC\n15. Đội cờ Học viện Y dược học cổ truyền – VUTG\n16. Hanoi Urban Team – HUT\n17. PQN – Cờ vua\n18. Đội cờ CNTG\n19. Happy Bishops Chess Community – HBS",
      "Sự góp mặt của đầy đủ các CLB lớn nhỏ – từ khối THPT đến đại học và các cộng đồng độc lập – tạo nên một bức tranh rất đa dạng cho mùa giải năm nay.",
      "🌟 Những điểm nhấn đáng chú ý:\nMùa giải năm nay không chỉ quy tụ các đội quen thuộc mà còn có thêm nhiều màu sắc mới. Bên cạnh những cái tên đã có kinh nghiệm thi đấu như HCC, VCC, CEN hay BKC, giải đấu còn chào đón những đội lần đầu tham gia như Phenikaa (PCC), Học viện Y dược học cổ truyền, hay THPT Marie Curie.",
      "Chất lượng chuyên môn của giải cũng được nâng lên với sự góp mặt của các kỳ thủ mạnh như IM Đào Minh Nhật, IM Bành Gia Huy và FM Ngô Đức Trí – hứa hẹn mang đến nhiều ván đấu đáng chờ đợi.",
      "Đặc biệt, PQN – đương kim vô địch mùa trước – quay trở lại với 3 đội hình, cho thấy sự chuẩn bị nghiêm túc và quyết tâm bảo vệ danh hiệu. Điều này cũng khiến cuộc đua năm nay trở nên khó đoán hơn, khi khoảng cách giữa các đội có thể được quyết định chỉ bằng một vài ván đấu.",
      "🏁 Sẵn sàng cho mùa giải\nVới lực lượng 36 đội đã hoàn thiện, giải đấu hứa hẹn sẽ mang đến một hành trình nhiều cảm xúc – nơi không chỉ có những ván cờ căng thẳng, mà còn là câu chuyện về tinh thần đồng đội, sự gắn kết và màu sắc riêng của từng câu lạc bộ.",
    ],
  },
];

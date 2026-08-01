export type Tournament = {
  id: string;
  slug: string;
  title: string;
  time: string;
  location: string;
  format: string;
  participants: string;
  intro: string[];
  results?: {
    first?: string;
    second?: string;
    third?: string;
    femaleBest?: string;
  };
  sidePrizes?: string[];
  highlightsText?: string;
  driveLink?: string;
  workshopLink?: string;
  drawLink?: string;
};

export type Workshop = {
  id: string;
  slug: string;
  title: string;
  time: string;
  location: string;
  format: string;
  participants: string;
  intro: string[];
  contents: string[];
  highlightsText: string;
};

export const tournaments: Tournament[] = [
  {
    id: "nhanh-nhu-chop-2026",
    slug: "nhanh-nhu-chop-2026",
    title: "Giải cờ vua “Nhanh Như Chớp” – Happy Bishops",
    time: "8:30 – 12:00, Chủ nhật ngày 01/02/2026",
    location: "Urban Station Coffee, 7 Nguyễn Ngọc Doãn, Đống Đa, Hà Nội",
    format: "Cờ nhanh 10|2 (3 ván) và cờ chớp 3|2 (4 ván)",
    participants: "30+ kỳ thủ",
    intro: [
      "Giải cờ vua “Nhanh Như Chớp” là một thử nghiệm thú vị của Happy Bishops khi kết hợp cờ nhanh và cờ chớp trong cùng một giải đấu. Format này mang đến nhịp độ thi đấu đa dạng, khi người chơi vừa phải duy trì sự tập trung và tính toán chiến thuật trong các ván cờ nhanh, vừa cần phản xạ nhanh và bản lĩnh trong những ván cờ chớp đầy áp lực thời gian.",
      "Việc chuyển đổi giữa hai thể loại trong cùng một giải đấu đã tạo nên nhiều tình huống bất ngờ và kịch tính, giúp các kỳ thủ có cơ hội thể hiện nhiều khía cạnh khác nhau trong phong cách chơi của mình.",
      "Giải đấu thu hút hơn 30 kỳ thủ tham gia, với nhiều ván đấu sôi động và những màn rượt đuổi điểm số đầy hấp dẫn.",
    ],
    results: {
      first: "Võ Lê Đức",
      second: "Nguyễn Phan Trọng Hiếu",
      third: "Nguyễn Sĩ Trọng Đức",
    },
    sidePrizes: ["🎁 Vận động viên may mắn: Giang Hải Long"],
    highlightsText:
      "Bên cạnh những ván cờ nhanh và đầy kịch tính, giải đấu cũng là dịp để các thành viên trong cộng đồng gặp gỡ, giao lưu và chia sẻ niềm đam mê cờ vua. Happy Bishops xin cảm ơn tất cả các kỳ thủ đã tham gia và góp phần tạo nên một giải đấu thú vị với format mới mẻ. “Nhanh Như Chớp” hứa hẹn sẽ là một ý tưởng đáng để tiếp tục phát triển trong các sự kiện tiếp theo của cộng đồng.",
  },
  {
    id: "dong-doi-hssv-2025",
    slug: "dong-doi-hssv-2025",
    title: "Giải Cờ vua Đồng đội các CLB Học sinh – Sinh viên tranh Cup Happy Bishops 2025",
    time: "28/12/2025",
    location: "Hà Nội",
    format: "Đồng đội các CLB Học sinh – Sinh viên",
    participants: "36 đội tuyển, 120+ kỳ thủ",
    intro: [
      "Giải Cờ vua Đồng đội các CLB Học sinh – Sinh viên tranh Cup Happy Bishops 2025 là sự kiện lớn nhất trong năm do Happy Bishops tổ chức, nhằm tạo ra một sân chơi cờ vua phong trào dành cho các câu lạc bộ học sinh – sinh viên trên địa bàn Hà Nội. Giải đấu hướng tới việc kết nối các cộng đồng cờ vua trẻ, đồng thời tạo cơ hội để các kỳ thủ giao lưu, thi đấu và phát triển phong trào cờ vua trong môi trường học đường.",
      "Mùa giải năm nay thu hút 36 đội tuyển đến từ nhiều câu lạc bộ học sinh – sinh viên, với hơn 120 kỳ thủ tham gia thi đấu. Các đội đại diện cho câu lạc bộ của mình tranh tài dưới hình thức đồng đội, mang đến một giải đấu sôi động với tinh thần cạnh tranh và gắn kết cộng đồng.",
      "Trước khi giải đấu chính thức diễn ra, Happy Bishops đã tổ chức workshop và buổi bốc thăm chia bảng dành cho trưởng đoàn và đại diện các đội. Đây là dịp để các đội gặp gỡ, nắm rõ điều lệ thi đấu cũng như hoàn tất việc chia bảng cho mùa giải.",
      "Ngày thi đấu chính thức diễn ra trong không khí sôi nổi với nhiều ván đấu hấp dẫn. Các đội đã thể hiện tinh thần thi đấu nghiêm túc, chiến thuật đồng đội rõ ràng và niềm đam mê cờ vua của cộng đồng học sinh – sinh viên.",
      "Sau các vòng thi đấu, FTU Chess Academy (FCA 2) đã xuất sắc giành chức vô địch của Giải Cờ vua Đồng đội các CLB Học sinh – Sinh viên tranh Cup Happy Bishops 2025. Giải đấu khép lại thành công, để lại nhiều khoảnh khắc đáng nhớ và tiếp tục khẳng định vai trò của Happy Bishops trong việc xây dựng một cộng đồng cờ vua phong trào năng động dành cho học sinh – sinh viên.",
    ],
    workshopLink: "/su-kien/workshop",
    drawLink: "/blog/boc-tham-chia-bang-happy-bishops-2025",
    driveLink: "https://drive.google.com/drive/folders/16OAIsNE4oEQynEY67a2hsYzABR0tVJab?usp=drive_link",
  },
  {
    id: "lady-chess-2025",
    slug: "lady-chess-2025",
    title: "Lady Chess 2025 – Nơi những nữ kỳ thủ tỏa sáng",
    time: "8:30 – 11:30, Chủ nhật 26/10/2025",
    location: "Urban Station Coffee, 7 Nguyễn Ngọc Doãn, Đống Đa, Hà Nội",
    format: "Cờ nhanh",
    participants: "20+ nữ kỳ thủ",
    intro: [
      "Nhân dịp Ngày Phụ nữ Việt Nam 20/10, Happy Bishops tổ chức Lady Chess 2025 – một giải đấu đặc biệt dành riêng cho các nữ kỳ thủ trong cộng đồng.",
      "Giải đấu thu hút hơn 20 bạn nữ tham gia, tạo nên một buổi sáng thi đấu đầy năng lượng và cảm xúc. Không chỉ là một sân chơi giao lưu, Lady Chess còn là dịp để tôn vinh sự tự tin, duyên dáng và mạnh mẽ của các bạn nữ trong làng cờ vua phong trào.",
      "Trong không gian ấm cúng của Lilla Lycka Coffee, các kỳ thủ đã mang đến nhiều ván cờ hấp dẫn cùng những khoảnh khắc đáng nhớ. Bên cạnh yếu tố thi đấu, giải đấu cũng là cơ hội để các bạn nữ gặp gỡ, làm quen và kết nối với nhau thông qua niềm đam mê cờ vua.",
    ],
    highlightsText:
      "Lady Chess 2025 đã khép lại với nhiều cảm xúc đẹp, không chỉ đối với các bạn tham gia mà còn với cả đội ngũ tổ chức. Happy Bishops xin gửi lời cảm ơn chân thành đến tất cả các nữ kỳ thủ đã góp phần tạo nên một bầu không khí vui vẻ và tích cực. Cộng đồng cũng xin cảm ơn Lilla Lycka Coffee đã đồng hành cùng giải đấu và mang đến một không gian tuyệt vời cho sự kiện.",
  },
  {
    id: "under-1800-2025",
    slug: "under-1800-2025",
    title: "Giải cờ chớp Under 1800 – Happy Bishops",
    time: "8:30 – 12:00, Chủ nhật 28/09/2025",
    location: "Urban Station Coffee, 7 Nguyễn Ngọc Doãn, Đống Đa, Hà Nội",
    format: "Cờ chớp 5|3, thi đấu 7 ván",
    participants: "30+ kỳ thủ",
    intro: [
      "Sau giải đấu đầu tiên ra mắt cộng đồng, Happy Bishops tiếp tục tổ chức Giải cờ chớp Under 1800 – một sân chơi dành cho những người chơi có trình độ tương đương để thi đấu và giao lưu với nhau.",
      "Giải đấu thu hút hơn 30 kỳ thủ tham gia trong một buổi sáng thi đấu sôi nổi. Với thể thức cờ chớp 5|3 quen thuộc, các ván cờ diễn ra nhanh, kịch tính nhưng vẫn giữ được tinh thần thân thiện và tôn trọng lẫn nhau – điều mà cộng đồng Happy Bishops luôn hướng tới.",
      "Đây cũng là giải đấu đầu tiên trong chuỗi giải “Under” mà Happy Bishops đang ấp ủ phát triển. Ý tưởng của chuỗi giải này là tạo ra nhiều sân chơi phù hợp với các mức trình độ khác nhau, giúp người chơi có cơ hội thi đấu công bằng, cọ xát và tiến bộ dần theo thời gian. Happy Bishops hy vọng trong tương lai có thể tổ chức thêm nhiều giải Under khác để cộng đồng ngày càng phát triển và gắn kết hơn.",
    ],
    results: {
      first: "Đỗ Quang Minh",
      second: "Nguyễn Hồng Quang",
      third: "Nguyễn Đình Khôi",
    },
    sidePrizes: ["🍀 Vận động viên may mắn: Nguyễn Minh Khang"],
    highlightsText:
      "Bên cạnh những ván cờ hấp dẫn, giải đấu cũng là dịp để các thành viên trong cộng đồng gặp gỡ, trò chuyện và kết nối với những người bạn mới cùng chung niềm đam mê cờ vua. Happy Bishops xin cảm ơn tất cả các kỳ thủ đã tham gia và góp phần tạo nên một buổi sáng thi đấu vui vẻ, tích cực và đầy năng lượng.",
  },
  {
    id: "ra-mat-cong-dong-2025",
    slug: "ra-mat-cong-dong-2025",
    title: "Happy Bishops – Giải cờ chớp ra mắt cộng đồng",
    time: "8:30 – 12:00, Chủ nhật 27/07/2025",
    location: "Urban Station Coffee, 7 Nguyễn Ngọc Doãn, Đống Đa, Hà Nội",
    format: "Cờ chớp 5|3, thi đấu 7 ván",
    participants: "Hơn 40 kỳ thủ",
    intro: [
      "Giải cờ chớp ra mắt cộng đồng Happy Bishops đã diễn ra trong không khí sôi nổi với sự tham gia của hơn 40 kỳ thủ. Đây là sự kiện đầu tiên đánh dấu sự ra đời của Happy Bishops – một cộng đồng cờ vua thân thiện dành cho những người yêu thích việc chơi cờ, gặp gỡ và kết nối với nhau.",
      "Trong suốt buổi sáng thi đấu, nhiều ván cờ nhanh và kịch tính đã diễn ra, xen lẫn với những khoảnh khắc vui vẻ khi các thành viên trong cộng đồng được gặp lại những người bạn cũ và làm quen với nhiều gương mặt mới cùng chung niềm đam mê cờ vua.",
    ],
    results: {
      first: "Vũ Gia Hưng",
      second: "Bùi Thành Đạt",
      third: "Đỗ Thạch Anh",
      femaleBest: "Tô Mai Phương",
    },
    sidePrizes: [
      "🍀 Vận động viên may mắn: Nguyễn Đức Minh",
      "♟ Cặp đôi song sát: Nguyễn Thu Phương – Lê Đức Duy",
    ],
    highlightsText:
      "Giải đấu đã mang lại một buổi sáng thi đấu sôi động với nhiều ván cờ hấp dẫn và những khoảnh khắc đáng nhớ của cộng đồng Happy Bishops.",
  },
];

export const workshops: Workshop[] = [
  {
    id: "boc-tham-trong-tai-co-ban-2025",
    slug: "boc-tham-trong-tai-co-ban-2025",
    title: "Workshop “Bốc thăm & Trọng tài cơ bản” – Happy Bishops",
    time: "Sáng Chủ nhật 30/11/2025",
    location: "Hà Nội",
    format: "Workshop offline",
    participants: "28 thành viên đến từ 7 CLB cờ học sinh – sinh viên",
    intro: [
      "Workshop “Bốc thăm & Trọng tài cơ bản” là chặng đầu tiên trong hành trình chuẩn bị cho Giải cờ vua đồng đội các CLB Học sinh – Sinh viên tranh cup Happy Bishops 2025.",
      "Buổi workshop được tổ chức nhằm hỗ trợ các câu lạc bộ hiểu rõ hơn về quy trình tổ chức giải đấu, từ cách bốc thăm chia bảng bằng Swiss Manager đến các nguyên tắc cơ bản trong công tác trọng tài và điều hành giải.",
      "Với sự tham gia của 28 thành viên đến từ 7 CLB cờ học sinh – sinh viên, workshop không chỉ là một buổi chia sẻ kiến thức mà còn là cơ hội để các câu lạc bộ gặp gỡ, kết nối và cùng chuẩn bị cho giải đấu đồng đội sắp tới.",
    ],
    contents: [
      "Cách sử dụng Swiss Manager để bốc thăm và quản lý giải đấu",
      "Các nguyên tắc cơ bản của trọng tài cờ vua trong thi đấu phong trào",
      "Những kinh nghiệm tổ chức giải đấu mà các CLB có thể áp dụng cho hoạt động của mình",
    ],
    highlightsText:
      "Bên cạnh phần chia sẻ kiến thức, workshop còn là dịp để các CLB cờ học sinh – sinh viên tại Hà Nội gặp gỡ và trao đổi kinh nghiệm tổ chức hoạt động. Happy Bishops xin gửi lời cảm ơn tới anh Lã Mạnh Tuấn, người đã mang đến những góc nhìn thực tế và nhiều lời khuyên hữu ích về việc tổ chức các giải đấu cờ vua cho cộng đồng. Chặng 1 đã khép lại với nhiều năng lượng tích cực, và hành trình chuẩn bị cho Giải cờ vua đồng đội các CLB HSSV vẫn còn tiếp tục ở phía trước.",
  },
];

export type category = "nong-nghiep" | "cong-nghiep" | "thuy-san";
export const products = [
  {
    name: "DAICHI NO TOMO",
    slug: "daichi-no-tomo",
    category: "nong-nghiep",
    volumes: ["100ml", "1L", "10L"],

    mainApplication:
      "Enzyme cải tạo đất , trị nấm bệnh, tuyến trùng,tăng sức đề kháng...",
    features: [
      "Trị nấm bệnh, tuyến trùng",
      "Loại bỏ (khóa) kim loại nặng",
      "Tăng sức đề kháng",
      "Giải độc đất và hoạt hóa vi sinh vật có lợi cho đất",
    ],
    featured: true,
    images: [
      "/images/products/DAICHI NO TOMO.jpg",
      "/images/products/DAICHI NO TOMO-mini.jpg",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc: "Tưới đất",
          ti_le_pha_loang: "Pha loãng 2000 lần",
          vi_du: "100ml / 200L",
        },
        {
          cach_thuc: "Phun trên lá",
          ti_le_pha_loang: "Pha loãng 2000-2500 lần",
          vi_du: "100ml / 200L ~ 250L",
        },
      ],
      tan_suat: "1 lần/ tháng",
      ghi_chu: null,
    },
  },
  {
    name: "DAICHI NO TOMO 500",
    slug: "daichi-no-tomo-500",
    category: "nong-nghiep",
    volumes: ["100ml", "1L", "10L"],

    mainApplication:
      "Enzyme dinh dưỡng hữu cơ,trị thối rễ, phục hồi bộ rễ, khắc phục vàng lá,...",
    features: [
      "Trị thối rễ, phục hồi bộ rễ",
      "Khắc phục vàng lá, cây suy",
      "Kéo đọt nhanh, xanh lá",
      "Phát triển bộ rễ",
      "Bổ sung các chất dinh dưỡng cần thiết",
    ],
    images: [
      "/images/products/DAICHI NO TOMO 500.jpg",
      "/images/products/DAICHI NO TOMO 500-mini.jpg",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc: "Tưới đất",
          ti_le_pha_loang: "Pha loãng 300 lần ~ 500 lần",
          vi_du: "100ml / 30L ~ 50L\n1L / 300L ~ 500L",
        },
      ],
      tan_suat: "1-2 lần/ tháng",
      ghi_chu:
        "Có thể kết hợp với DAICHI NO TOMO tưới đất\n*Thay thế cho phân bón",
    },
  },
  {
    name: "SP 10-15-20",
    slug: "sp-10-15-20",
    featured: true,
    category: "nong-nghiep",
    volumes: ["100ml", "1L", "10L"],

    mainApplication: "Enzyme hữu cơ, tăng năng suất thu hoạch,...",
    features: [
      "Tăng năng suất thu hoạch",
      "Thúc trái nhanh lớn",
      "Tăng độ ngọt Brix",
      "Cung cấp đầy đủ dưỡng chất cho cây trồng",
    ],
    images: [
      "/images/products/SP 10-15-20.jpg",
      "/images/products/SP 10-15-20-mini.jpg",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc: "Tưới đất",
          ti_le_pha_loang: "Pha loãng 300 lần ~ 500 lần",
          vi_du: "1L / 300L ~ 500L",
        },
        {
          cach_thuc: "Phun trên lá",
          ti_le_pha_loang: "Pha loãng 300 lần ~ 500 lần",
          vi_du: "1L / 300L ~ 500L",
        },
      ],
      tan_suat: "1 lần/ tháng",
      ghi_chu: "*Thay thế cho phân bón",
    },
  },
  {
    name: "MITAKA 1000",
    slug: "mitaka-1000",
    category: "nong-nghiep",
    volumes: ["100ml", "1L", "10L"],

    mainApplication: "Enzyme trị sâu bệnh, trị nhện, bọ trĩ, ruồi vàng,...",
    features: [
      "Bổ sung vitamin khoáng chất",
      "Thúc đẩy quá trình trao đổi chất",
      "Tạo lá xanh và bóng",
      "Trị nhện, bọ trĩ, ruồi vàng",
      "Ngăn ngừa, xua đuổi sâu và côn trùng gây hại",
      "Bảo vệ trái, ngăn ngừa thối trái",
    ],
    images: [
      "/images/products/MITAKA-1000.jpg",
      "/images/products/MITAKA 1000-mini.jpg",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc: "Phun trên lá",
          ti_le_pha_loang: "Pha loãng 1000-2000 lần",
          vi_du: "100ml / 100L ~ 200L",
        },
      ],
      tan_suat: "1 lần/ tháng",
      ghi_chu: "Có thể kết hợp với DAICHI NO TOMO phun trên lá",
    },
  },
  {
    name: "MITAKA 1200",
    slug: "mitaka-1200",
    category: "nong-nghiep",
    featured: true,
    volumes: ["100ml", "1L", "10L"],

    mainApplication:
      "Enzyme bảo quản trái cây sau thu hoạch, rửa trôi nấm bệnh trên bề mặt trái,...",
    features: [
      "Rửa trôi nấm bệnh trên bề mặt trái",
      "Kéo dài thời gian bảo quản",
      "Gây ức chế vi sinh vật gây hại",
      "Bảo vệ màu sắc, hương vị, dinh dưỡng",
      "Giảm tổn thất sau thu hoạch",
      "An toàn cho người sử dụng",
    ],
    images: [
      "/images/products/MITAKA 1200-mini.jpg",
      "/images/products/MITAKA 1200.jpg",
    ],
    cach_su_dung: null,
  },
  {
    name: "MITAKA 3000",
    slug: "mitaka-3000",
    category: "nong-nghiep",
    volumes: ["100ml", "1L", "10L"],

    mainApplication: "Enzyme phân hóa mầm hoa, tăng năng suất thu hoạch,...",
    features: [
      "Tăng năng suất thu hoạch",
      "Tăng khả năng tạo bông, đậu trái",
      "Tăng năng suất nông sản",
      "Giúp cây phát triển tự nhiên mà không can thiệp đến sinh trưởng",
    ],
    images: [
      "/images/products/MITAKA 3000.jpg",
      "/images/products/MITAKA 3000-mini.jpg",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc: "Tưới đất",
          ti_le_pha_loang: "Pha loãng 300 lần ~ 500 lần",
          vi_du: "1L / 300L ~ 500L",
        },
      ],
      tan_suat: null,
      ghi_chu: "Dùng 1 lần khi tạo bông, làm trái",
    },
  },
  {
    name: "BK PARTNER",
    slug: "bk-partner",
    featured: true,
    category: "cong-nghiep",
    volumes: ["100ml", "1L", "10L"],
    mainApplication:
      "Enzyme xử lý nước thải, cải thiện nước, giảm BOD, COD, ...",
    features: [
      "Cải thiện nước, giảm BOD, COD và chỉ số ô nhiễm",
      "Tăng vi sinh có lợi, thúc đẩy lợi khuẩn",
      "Ngăn và phân hủy nấm sợi, xạ khuẩn",
      "Cải thiện bùn lắng, khử mùi hôi tận gốc",
    ],
    images: [
      "/images/products/BK PARTNER.jpg",
      "/images/products/BK PARTNER-mini.jpg",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc:
            "Phun hoặc bơm vào bể xử lý nước, bể chứa nước, bể phốt và bể tự hoại.",
          ti_le_pha_loang: "Pha loãng",
          vi_du: "1 - 10 ml / 700L - 1000L",
        },
      ],
      tan_suat: "1 lần / ngày hoặc cách 2 - 3 ngày",
      ghi_chu: null,
    },
  },
  {
    name: "BK OILBUSTER",
    slug: "bk-oilbuster",
    category: "cong-nghiep",
    volumes: ["100ml", "1L", "10L"],

    mainApplication:
      "Enzyme xử lý chất béo/dầu, loại bỏ chất béo, dầu mỡ và BOD trong,...",
    features: [
      "Loại bỏ chất béo, dầu mỡ và BOD trong nước thải",
      "Phân hủy, ngăn bám cặn, hạn chế đông tụ",
      "Tăng hiệu suất bể, giảm chi phí vệ sinh",
      "Làm sạch và khử mùi bề mặt hiệu quả",
    ],
    images: [
      "/images/products/BK OILBUSTER.jpg",
      "/images/products/BK OILBUSTER-mini.jpg",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc: "Phun hoặc bơm vào bể xử lý nước.",
          ti_le_pha_loang: "Pha loãng",
          vi_du: "10ml - 20ml / 1000L",
        },
      ],
      tan_suat: "1 lần / ngày hoặc cách 2 - 3 ngày",
      ghi_chu: null,
    },
  },
  {
    name: "NIOI - ZERO",
    slug: "nioi-zero",
    category: "cong-nghiep",
    volumes: ["100ml", "1L", "10L"],

    mainApplication:
      "Enzyme khử mùi làm sạch không khí, cải thiện chất lượng không khí,....",
    features: [
      "Cải thiện chất lượng không khí",
      "Xử lý mùi hôi chuồng trại, bãi rác, cống rãnh, nước thải và khu công nghiệp",
    ],
    images: [
      "/images/products/NIOI - ZERO.jpg",
      "/images/products/NIOI - ZERO-mini.jpg",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc:
            "Phun đều vào môi trường ô nhiễm hoặc chuồng nuôi công nghiệp.",
          ti_le_pha_loang: "Pha loãng 1000 - 2000 lần",
          vi_du: "10ml / 20L - 40L",
        },
      ],
      tan_suat: "1-2 lần / tuần",
      ghi_chu: null,
    },
  },
  {
    name: "LAKE - POWER",
    slug: "lake-power",
    featured: true,
    category: "thuy-san",
    volumes: ["100ml", "1L", "10L"],

    mainApplication: "Enzyme cho ao/ hồ nuôi, làm sạch môi trường,....",
    features: [
      "Làm sạch môi trường sống",
      "Xử lý khí độc, (H2S, CH4, NO2-,NO3-,NH3)",
    ],
    images: [
      "/images/products/lake-power-f.png",
      "/images/products/lake-power-b.png",
      
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc: "tạt đều lên mặt ao",
          ti_le_pha_loang: "Pha với nước sạch tỉ lệ 1L xử lý cho 10m3 ",
          vi_du: "",
        },
      ],
      tan_suat: "Tuần 1 lần",
      ghi_chu: null,
    },
  },
  {
    name: "BF - NATURAL",
    slug: "bf-natural",
    featured: true,
    volumes: ["100ml", "1L", "10L"],

    category: "thuy-san",
    mainApplication: "Enzyme chăn nuôi thủy sản, tăng sức đề kháng,...",
    features: ["Tăng sức đề kháng", "Phát triển hệ tiêu hóa"],
    images: [
      "/images/products/bf-natural-f.png",
      "/images/products/bf-natural-b.png",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc:
            "Phun đều lên thức ăn tôm cá, vật nuôi. Cho 2 tấn thức ăn.",
          ti_le_pha_loang: "Pha với nước sạch 1L (căn nước)",
          vi_du: "",
        },
      ],
      tan_suat: "",
      ghi_chu: null,
    },
  },
];

export const products_feature = [
  {
    name: "BK PARTNER",
    slug: "bk-partner",
    featured: true,
    category: "cong-nghiep",
    volumes: ["100ml", "1L", "10L"],
    mainApplication: "Enzyme xử lý nước thải",
    features: [
      "Cải thiện nước, giảm BOD, COD và chỉ số ô nhiễm",
      "Tăng vi sinh có lợi, thúc đẩy lợi khuẩn",
      "Ngăn và phân hủy nấm sợi, xạ khuẩn",
      "Cải thiện bùn lắng, khử mùi hôi tận gốc",
    ],
    images: [
      "/images/products/BK PARTNER.jpg",
      "/images/products/BK PARTNER-mini.jpg",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc:
            "Phun hoặc bơm vào bể xử lý nước, bể chứa nước, bể phốt và bể tự hoại.",
          ti_le_pha_loang: "Pha loãng",
          vi_du: "1 - 10 ml / 700L - 1000L",
        },
      ],
      tan_suat: "1 lần / ngày hoặc cách 2 - 3 ngày",
      ghi_chu: null,
    },
  },
  {
    name: "BK OILBUSTER",
    slug: "bk-oilbuster",
    featured: true,
    category: "cong-nghiep",
    volumes: ["100ml", "1L", "10L"],

    mainApplication: "Enzyme xử lý chất béo/dầu",
    features: [
      "Loại bỏ chất béo, dầu mỡ và BOD trong nước thải",
      "Phân hủy, ngăn bám cặn, hạn chế đông tụ",
      "Tăng hiệu suất bể, giảm chi phí vệ sinh",
      "Làm sạch và khử mùi bề mặt hiệu quả",
    ],
    images: [
      "/images/products/BK OILBUSTER.jpg",
      "/images/products/BK OILBUSTER-mini.jpg",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc: "Phun hoặc bơm vào bể xử lý nước.",
          ti_le_pha_loang: "Pha loãng",
          vi_du: "10ml - 20ml / 1000L",
        },
      ],
      tan_suat: "1 lần / ngày hoặc cách 2 - 3 ngày",
      ghi_chu: null,
    },
  },
  {
    name: "NIOI - ZERO",
    slug: "nioi-zero",
    featured: true,
    category: "cong-nghiep",
    volumes: ["100ml", "1L", "10L"],

    mainApplication: "Enzyme khử mùi làm sạch không khí",
    features: [
      "Cải thiện chất lượng không khí",
      "Xử lý mùi hôi chuồng trại, bãi rác, cống rãnh, nước thải và khu công nghiệp",
    ],
    images: [
      "/images/products/NIOI - ZERO.jpg",
      "/images/products/NIOI - ZERO-mini.jpg",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc:
            "Phun đều vào môi trường ô nhiễm hoặc chuồng nuôi công nghiệp.",
          ti_le_pha_loang: "Pha loãng 1000 - 2000 lần",
          vi_du: "10ml / 20L - 40L",
        },
      ],
      tan_suat: "1-2 lần / tuần",
      ghi_chu: null,
    },
  },
  {
    name: "DAICHI NO TOMO",
    slug: "daichi-no-tomo",
    category: "nong-nghiep",
    volumes: ["100ml", "1L", "10L"],

    mainApplication: "Enzyme cải tạo đất ",
    features: [
      "Trị nấm bệnh, tuyến trùng",
      "Loại bỏ (khóa) kim loại nặng",
      "Tăng sức đề kháng",
      "Giải độc đất và hoạt hóa vi sinh vật có lợi cho đất",
    ],
    featured: true,
    images: [
      "/images/products/DAICHI NO TOMO.jpg",
      "/images/products/DAICHI NO TOMO-mini.jpg",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc: "Tưới đất",
          ti_le_pha_loang: "Pha loãng 2000 lần",
          vi_du: "100ml / 200L",
        },
        {
          cach_thuc: "Phun trên lá",
          ti_le_pha_loang: "Pha loãng 2000-2500 lần",
          vi_du: "100ml / 200L ~ 250L",
        },
      ],
      tan_suat: "1 lần/ tháng",
      ghi_chu: null,
    },
  },
  {
    name: "DAICHI NO TOMO 500",
    slug: "daichi-no-tomo-500",
    category: "nong-nghiep",
    volumes: ["100ml", "1L", "10L"],

    mainApplication: "Enzyme dinh dưỡng hữu cơ",
    featured: true,
    features: [
      "Trị thối rễ, phục hồi bộ rễ",
      "Khắc phục vàng lá, cây suy",
      "Kéo đọt nhanh, xanh lá",
      "Phát triển bộ rễ",
      "Bổ sung các chất dinh dưỡng cần thiết",
    ],
    images: [
      "/images/products/DAICHI NO TOMO 500.jpg",
      "/images/products/DAICHI NO TOMO 500-mini.jpg",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc: "Tưới đất",
          ti_le_pha_loang: "Pha loãng 300 lần ~ 500 lần",
          vi_du: "100ml / 30L ~ 50L\n1L / 300L ~ 500L",
        },
      ],
      tan_suat: "1-2 lần/ tháng",
      ghi_chu:
        "Có thể kết hợp với DAICHI NO TOMO tưới đất\n*Thay thế cho phân bón",
    },
  },
  {
    name: "SP 10-15-20",
    slug: "sp-10-15-20",
    featured: true,
    category: "nong-nghiep",
    volumes: ["100ml", "1L", "10L"],

    mainApplication: "Enzyme hữu cơ",
    features: [
      "Tăng năng suất thu hoạch",
      "Thúc trái nhanh lớn",
      "Tăng độ ngọt Brix",
      "Cung cấp đầy đủ dưỡng chất cho cây trồng",
    ],
    images: [
      "/images/products/SP 10-15-20.jpg",
      "/images/products/SP 10-15-20-mini.jpg",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc: "Tưới đất",
          ti_le_pha_loang: "Pha loãng 300 lần ~ 500 lần",
          vi_du: "1L / 300L ~ 500L",
        },
        {
          cach_thuc: "Phun trên lá",
          ti_le_pha_loang: "Pha loãng 300 lần ~ 500 lần",
          vi_du: "1L / 300L ~ 500L",
        },
      ],
      tan_suat: "1 lần/ tháng",
      ghi_chu: "*Thay thế cho phân bón",
    },
  },
  {
    name: "MITAKA 1000",
    slug: "mitaka-1000",
    category: "nong-nghiep",
    featured: true,
    volumes: ["100ml", "1L", "10L"],

    mainApplication: "Enzyme trị bệnh",
    features: [
      "Bổ sung vitamin khoáng chất",
      "Thúc đẩy quá trình trao đổi chất",
      "Tạo lá xanh và bóng",
      "Trị nhện, bọ trĩ, ruồi vàng",
      "Ngăn ngừa, xua đuổi sâu và côn trùng gây hại",
      "Bảo vệ trái, ngăn ngừa thối trái",
    ],
    images: [
      "/images/products/MITAKA-1000.jpg",
      "/images/products/MITAKA 1000-mini.jpg",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc: "Phun trên lá",
          ti_le_pha_loang: "Pha loãng 1000-2000 lần",
          vi_du: "100ml / 100L ~ 200L",
        },
      ],
      tan_suat: "1 lần/ tháng",
      ghi_chu: "Có thể kết hợp với DAICHI NO TOMO phun trên lá",
    },
  },
  {
    name: "MITAKA 1200",
    slug: "mitaka-1200",
    featured: true,
    category: "nong-nghiep",
    volumes: ["100ml", "1L", "10L"],

    mainApplication: "Enzyme bảo quản trái cây sau thu hoạch",
    features: [
      "Rửa trôi nấm bệnh trên bề mặt trái",
      "Kéo dài thời gian bảo quản",
      "Gây ức chế vi sinh vật gây hại",
      "Bảo vệ màu sắc, hương vị, dinh dưỡng",
      "Giảm tổn thất sau thu hoạch",
      "An toàn cho người sử dụng",
    ],
    images: [
      "/images/products/MITAKA 1200-mini.jpg",
      "/images/products/MITAKA 1200.jpg",
    ],
    cach_su_dung: null,
  },
  {
    name: "MITAKA 3000",
    slug: "mitaka-3000",
    category: "nong-nghiep",
    featured: true,
    volumes: ["100ml", "1L", "10L"],

    mainApplication: "Enzyme phân hóa mầm hoa",
    features: [
      "Tăng năng suất thu hoạch",
      "Tăng khả năng tạo bông, đậu trái",
      "Tăng năng suất nông sản",
      "Giúp cây phát triển tự nhiên mà không can thiệp đến sinh trưởng",
    ],
    images: [
      "/images/products/MITAKA 3000.jpg",
      "/images/products/MITAKA 3000-mini.jpg",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc: "Tưới đất",
          ti_le_pha_loang: "Pha loãng 300 lần ~ 500 lần",
          vi_du: "1L / 300L ~ 500L",
        },
      ],
      tan_suat: null,
      ghi_chu: "Dùng 1 lần khi tạo bông, làm trái",
    },
  },
  {
    name: "LAKE - POWER",
    slug: "lake-power",
    featured: true,
    category: "thuy-san",
    volumes: ["100ml", "1L", "10L"],

    mainApplication: "Enzyme cho ao/ hồ nuôi",
    features: [
      "Làm sạch môi trường sống",
      "Xử lý khí độc, (H2S, CH4, NO2-,NO3-,NH3)",
    ],
    images: [
      "/images/products/lake-power-f.png",
      "/images/products/lake-power-b.png",
      
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc: "tạt đều lên mặt ao",
          ti_le_pha_loang: "Pha với nước sạch tỉ lệ 1L xử lý cho 10m3 ",
          vi_du: "",
        },
      ],
      tan_suat: "Tuần 1 lần",
      ghi_chu: null,
    },
  },
  {
    name: "BF - NATURAL",
    slug: "bf-natural",
    featured: true,
    volumes: ["100ml", "1L", "10L"],

    category: "thuy-san",
    mainApplication: "Enzyme chăn nuôi thủy sản",
    features: ["Tăng sức đề kháng", "Phát triển hệ tiêu hóa"],
    images: [
      "/images/products/bf-natural-f.png",
      "/images/products/bf-natural-b.png",
    ],
    cach_su_dung: {
      huong_dan_chung: "Pha loãng với nước sạch theo tỉ lệ",
      phuong_phap_su_dung: [
        {
          cach_thuc:
            "Phun đều lên thức ăn tôm cá, vật nuôi. Cho 2 tấn thức ăn.",
          ti_le_pha_loang: "Pha với nước sạch 1L (căn nước)",
          vi_du: "",
        },
      ],
      tan_suat: "",
      ghi_chu: null,
    },
  },
];

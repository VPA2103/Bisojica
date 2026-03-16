// data/products.ts
export type category = "nong-nghiep" | "cong-nghiep" | "thuy-san";

export type Product = {
  name: string;
  slug: string;
  category: category;
  volumes: string[];
  featured?: boolean;
  images: string[];
  mainApplication: string;
};

// Chỉ giữ data TĨNH (không cần dịch)
export const products: Product[] = [
  {
    name: "DAICHI NO TOMO",
    slug: "daichi-no-tomo",
    category: "nong-nghiep",
    volumes: ["100ml", "1L", "10L"],
    featured: true,
    images: [
      "/images/products/DAICHI NO TOMO.jpg",
      "/images/products/DAICHI NO TOMO-mini.jpg",
    ],
    mainApplication: "Enzyme cải tạo đất, trị nấm bệnh, tuyến trùng,...",
  },
  {
    name: "DAICHI NO TOMO 500",
    slug: "daichi-no-tomo-500",
    category: "nong-nghiep",
    volumes: ["100ml", "1L", "10L"],
    featured: true,
    images: [
      "/images/products/DAICHI NO TOMO 500.jpg",
      "/images/products/DAICHI NO TOMO 500-mini.jpg",
    ],
    mainApplication: "Enzyme dinh dưỡng hữu cơ, trị thối rễ, phục hồi bộ rễ...",
  },
  {
    name: "SP 10-15-20",
    slug: "sp-10-15-20",
    category: "nong-nghiep",
    volumes: ["100ml", "1L", "10L"],
    featured: true,
    images: [
      "/images/products/SP 10-15-20.jpg",
      "/images/products/SP 10-15-20-mini.jpg",
    ],
    mainApplication: "Enzyme hữu cơ, tăng năng suất thu hoạch...",
  },
  {
    name: "MITAKA 1000",
    slug: "mitaka-1000",
    category: "nong-nghiep",
    volumes: ["100ml", "1L", "10L"],
    featured: true,
    images: [
      "/images/products/MITAKA-1000.jpg",
      "/images/products/MITAKA 1000-mini.jpg",
    ],
    mainApplication: "Enzyme trị sâu bệnh, trị nhện, bọ trĩ, ruồi vàng...",
  },
  {
    name: "MITAKA 1200",
    slug: "mitaka-1200",
    category: "nong-nghiep",
    volumes: ["100ml", "1L", "10L"],
    featured: true,
    images: [
      "/images/products/MITAKA 1200-mini.jpg",
      "/images/products/MITAKA 1200.jpg",
    ],
    mainApplication: "Enzyme bảo quản trái cây sau thu hoạch, rửa trôi ...",
  },
  {
    name: "MITAKA 3000",
    slug: "mitaka-3000",
    category: "nong-nghiep",
    volumes: ["100ml", "1L", "10L"],
    featured: true,
    images: [
      "/images/products/MITAKA 3000.jpg",
      "/images/products/MITAKA 3000-mini.jpg",
    ],
    mainApplication: "Enzyme phân hóa mầm hoa, tăng năng suất thu hoạch...",
  },
  {
    name: "BK PARTNER",
    slug: "bk-partner",
    category: "cong-nghiep",
    volumes: ["100ml", "1L", "10L"],
    featured: true,
    images: [
      "/images/products/BK PARTNER.jpg",
      "/images/products/BK PARTNER-mini.jpg",
    ],
    mainApplication: "Enzyme xử lý nước thải, cải thiện nước, giảm BOD...",
  },
  {
    name: "BK OILBUSTER",
    slug: "bk-oilbuster",
    category: "cong-nghiep",
    volumes: ["100ml", "1L", "10L"],
    featured: true,
    images: [
      "/images/products/BK OILBUSTER.jpg",
      "/images/products/BK OILBUSTER-mini.jpg",
    ],
    mainApplication:
      "Enzyme xử lý chất béo/dầu, loại bỏ chất béo, dầu mỡ và BOD...",
  },
  {
    name: "NIOI - ZERO",
    slug: "nioi-zero",
    category: "cong-nghiep",
    volumes: ["100ml", "1L", "10L"],
    featured: true,
    images: [
      "/images/products/NIOI - ZERO.jpg",
      "/images/products/NIOI - ZERO-mini.jpg",
    ],
    mainApplication:
      "Enzyme khử mùi làm sạch không khí, cải thiện chất lượng không khí...",
  },
  {
    name: "LAKE - POWER",
    slug: "lake-power",
    category: "thuy-san",
    volumes: ["100ml", "1L", "10L"],
    featured: true,
    images: [
      "/images/products/lake-power-f.png",
      "/images/products/lake-power-b.png",
    ],
    mainApplication: "Enzyme cho ao/ hồ nuôi, làm sạch môi trường...",
  },
  {
    name: "BF - NATURAL",
    slug: "bf-natural",
    category: "thuy-san",
    volumes: ["100ml", "1L", "10L"],
    featured: true,
    images: [
      "/images/products/bf-natural-f.png",
      "/images/products/bf-natural-b.png",
    ],
    mainApplication: "Enzyme chăn nuôi thủy sản, tăng sức đề kháng...",
  },
];

export const products_feature = products.filter((p) => p.featured);

// data/newsArticles.ts
export type ArticleStatic = {
    id: number;
    index: string;
    image: string;
    href: string;
  };
  
  export const articlesStatic: ArticleStatic[] = [
    {
      id: 1,
      index: "01",
      image: "/images/nong-nghiep.png",
      href: "/tin-tuc/nong-nghiep",
    },
    {
      id: 2,
      index: "02",
      image: "/images/cong-nghiep.png",
      href: "/tin-tuc/cong-nghiep",
    },
    {
      id: 3,
      index: "03",
      image: "/images/thuy-san.png",
      href: "/tin-tuc/thuy-san",
    },
    {
      id: 4,
      index: "04",
      image: "https://media.daidoanket.vn/w3840/uploaded/images/2025/09/08/a95db1d3-29cf-4849-aac2-56ecb03da9ee.jpg.avif",
      href: "https://daidoanket.vn/enzyme-lieu-thuoc-sinh-hoc-cuu-dat-hoi-sinh-vuon-cay-tuong-nhu-da-chet-10310034.html",
    },
    {
      id: 5,
      index: "05",
      image: "https://img.youtube.com/vi/oJuhF7213Pw/0.jpg",
      href: "https://www.youtube.com/watch?v=oJuhF7213Pw",
    },
  ];
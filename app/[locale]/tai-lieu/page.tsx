"use client";
import { Link } from "@/i18n/navigation";
import ProductDocuments from "./ProductDocuments";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";



type DocumentItem = {
  title: string;
  href: string;
  type: "page" | "file";
};

export default function PdfDownloadSection() {

  const t = useTranslations("documents");
  const locale = useLocale();                              // ← thay dòng này
  const lang = (locale === "en" ? "en" : "vi") as "vi" | "en";
  console.log("Current language:", lang);

  const documents: Record<string, DocumentItem[]> = {
    vi: [
      {
        title: "Thông tin về enzyme",
        href: "/enzyme",
        type: "page"
      },
      {
        title: "Bảng giá sản phẩm nông nghiệp",
        href: "/files/pdf/vi/san-pham-nong-nghiep.pdf",
        type: "file"
      },
      {
        title: "Bảng giá sản phẩm công nghiệp",
        href: "/files/pdf/vi/san-pham-cong-nghiep.pdf",
        type: "file"
      },
      {
        title: "Bảng giá sản phẩm thủy hải sản",
        href: "/files/pdf/vi/san-pham-ths.pdf",
        type: "file"
      },
      {
        title: "Brochure công nghiệp",
        href: "/files/pdf/vi/brochure-cong-nghiep.pdf",
        type: "file"
      },
      {
        title: "Brochure nông nghiệp",
        href: "/files/pdf/vi/brochure-nong-nghiep.pdf",
        type: "file"
      },
      {
        title: "Cải tạo đất",
        href: "/files/pdf/vi/cai-tao-dat.pdf",
        type: "file"
      },
      {
        title: "Hồ sơ năng lực Bisojica",
        href: "/files/pdf/vi/ho-so-nang-luc-biso-jica.pdf",
        type: "file"
      },
      {
        title: "Hướng dẫn sử dụng enzyme",
        href: "/files/pdf/vi/huong-dan-su-dung-san-pham-enzyme-khanh-hoang.pdf",
        type: "file"
      },
      {
        title: "Công dụng các loại sản phẩm enzyme của Bisojica",
        href: "https://drive.google.com/file/d/17sXN0LyY4UpwiZSk_8kfYBm0TK1tWdfz/view?usp=drive_link",
        type: "file"
      },
      {
        title: "Vườn Mai suy yếu - phục hồi toàn diện bằng enzyme vi sinh",
        href: "/files/pdf/vi/phan-tich.pdf",
        type: "file"
      },
      {
        title: "Quy trình canh tác lúa",
        href: "/files/pdf/vi/quy-trinh-canh-tac-lua.pdf",
        type: "file"
      },
      {
        title: "Quy trình canh hữu cơ cho cây sầu riêng",
        href: "/files/pdf/vi/quy-trinh-canh-huu-co-cho-cay-sau-rieng.pdf",
        type: "file"
      },
      {
        title: "Quy trình canh tác hành lá và rau màu",
        href: "/files/pdf/vi/quy-trinh-canh-tac-hanh-la-va-rau-mau.pdf",
        type: "file"
      },
      {
        title: "Quy trình cây ăn trái",
        href: "/files/pdf/vi/quy-trinh-cay-an-trai.pdf",
        type: "file"
      },
      {
        title: "Quy trình cho mai vàng",
        href: "/files/pdf/vi/quy-trinh-cho-mai-vang.pdf",
        type: "file"
      },
      {
        title: "Quy trình rau củ hoa màu",
        href: "/files/pdf/vi/quy-trinh-rau-cu-hoa-mau.pdf",
        type: "file"
      },
      {
        title: "QUY TRÌNH Ủ PHÂN HỮU CƠ VỚI MEN",
        href: "/files/pdf/vi/quy-trinh-u-phan-huu-co-voi-men.pdf",
        type: "file"
      },
      {
        title: "Ứng dụng Enzyme Biso vào trang trại chăn nuôi lợn",
        href: "/files/pdf/vi/ung-dung-enzyme-biso-vao-trang-trai-chan-nuoi-lon.pdf",
        type: "file"
      },

      {
        title: "Bệnh cháy lá",
        href: "/files/pdf/vi/benh-chay-la.pdf",
        type: "file"
      },
      {
        title: "Về trồng sầu riêng",
        href: "/files/pdf/vi/ve-trong-sau-rieng.pdf",
        type: "file"
      },
      {
        title: "Quy trình trồng sầu riêng hữu cơ xuất khẩu",
        href: "/files/pdf/vi/quy-trinh-trong-sau-rieng-huu-co-xuat-khau.pdf",
        type: "file"
      },
      {
        title: "Tăng sản lượng bằng cách trồng khoai tây",
        href: "/files/pdf/vi/tang-san-luong-bang-cach-trong-khoai-tay.pdf",
        type: "file"
      },

    ],

    en: [
      {
        title: "Enzyme Information",
        href: "/enzyme",
        type: "page"
      },
      {
        title: "Agricultural Product Price List",
        href: "/files/pdf/en/san-pham-nong-nghiep.pdf",
        type: "file"
      },
      {
        title: "Industrial Product Price List",
        href: "/files/pdf/en/san-pham-cong-nghiep.pdf",
        type: "file"
      },
      {
        title: "Industrial Brochure",
        href: "/files/pdf/en/brochure-cong-nghiep.pdf",
        type: "file"
      },
      {
        title: "Agricultural Brochure",
        href: "/files/pdf/en/brochure-nong-nghiep.pdf",
        type: "file"
      },
      {
        title: "Soil Improvement",
        href: "/files/pdf/en/cai-tao-dat.pdf",
        type: "file"
      },
      {
        title: "Bisojica Capability Profile",
        href: "/files/pdf/en/ho-so-nang-luc-biso-jica.pdf",
        type: "file"
      },
      {
        title: "Enzyme Usage Instructions",
        href: "/files/pdf/en/huong-dan-su-dung-san-pham-enzyme-khanh-hoang.pdf",
        type: "file"
      },
      // {
      //   title: "Uses of Bisojica Enzyme Products",
      //   href: "https://drive.google.com/file/d/17sXN0LyY4UpwiZSk_8kfYBm0TK1tWdfz/view?usp=drive_link",
      // },
      {
        title: "Weakened Apricot Garden - Comprehensive Recovery with Microbial Enzymes",
        href: "/files/pdf/en/phan-tich.pdf",
        type: "file"
      },
      {
        title: "Rice Cultivation Process",
        href: "/files/pdf/en/quy-trinh-canh-tac-lua.pdf",
        type: "file"
      },
      {
        title: "Organic Durian Cultivation Process",
        href: "/files/pdf/en/quy-trinh-canh-huu-co-cho-cay-sau-rieng.pdf",
        type: "file"
      },
      {
        title: "Green Onion and Vegetable Cultivation Process",
        href: "/files/pdf/en/quy-trinh-canh-tac-hanh-la-va-rau-mau.pdf",
        type: "file"
      },
      {
        title: "Fruit Tree Process",
        href: "/files/pdf/en/quy-trinh-cay-an-trai.pdf",
        type: "file"
      },
      {
        title: "Ochna Integerrima (Yellow Mai) Process",
        href: "/files/pdf/en/quy-trinh-cho-mai-vang.pdf",
        type: "file"
      },
      {
        title: "Vegetable and Crop Process",
        href: "/files/pdf/en/quy-trinh-rau-cu-hoa-mau.pdf",
        type: "file"
      },
      {
        title: "ORGANIC COMPOSTING PROCESS WITH ENZYMES",
        href: "/files/pdf/en/quy-trinh-u-phan-huu-co-voi-men.pdf",
        type: "file"
      },
      {
        title: "Application of Biso Enzyme in Pig Farms",
        href: "/files/pdf/en/ung-dung-enzyme-biso-vao-trang-trai-chan-nuoi-lon.pdf",
        type: "file"
      },

      {
        title: "Leaf Blight Disease",
        href: "/files/pdf/en/benh-chay-la.pdf",
        type: "file"
      },
      {
        title: "About Durian Cultivation",
        href: "/files/pdf/en/ve-trong-sau-rieng.pdf",
        type: "file"
      },
      {
        title: "Organic Durian Export Cultivation Process",
        href: "/files/pdf/en/quy-trinh-trong-sau-rieng-huu-co-xuat-khau.pdf",
        type: "file"
      },
      {
        title: "Increasing Yield by Growing Potatoes",
        href: "/files/pdf/en/tang-san-luong-bang-cach-trong-khoai-tay.pdf",
        type: "file"
      }
    ],
  };

  const currentDocs = documents[lang] || documents.vi;


  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/anh-tai-lieu.png"
            alt="Documents"
            width={60}
            height={60}
            className="object-contain"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 mt-4">
            {t("title")}
          </h2>
        </div>


        <div className="grid grid-cols-1 gap-6">
          {currentDocs.map((doc, index) =>
            doc.type === "page" ? (
              <Link
                key={index}
                href={doc.href}
                className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex justify-between">
                  <span className="text-base md:text-lg lg:text-2xl">{doc.title}</span>
                  <span>→</span>
                </div>
              </Link>
            ) : (
              <a
                key={index}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex justify-between">
                  <span className="text-base md:text-lg lg:text-2xl">{doc.title}</span>
                  <span>→</span>
                </div>
              </a>
            )
          )}
        </div>
        <div>
          <ProductDocuments />
        </div>
      </div>
    </section>
  );
}
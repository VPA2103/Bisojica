"use client";
import useGoogleTranslateLanguage from "@/hooks/useGoogleTranslateLanguage";
import ProductDocuments from "./ProductDocuments";



type DocumentItem = {
  title: string;
  href: string;
};

export default function PdfDownloadSection() {
  const lang = useGoogleTranslateLanguage();
  console.log("Current language:", lang);

  const documents: Record<string, DocumentItem[]> = {
    vi: [
      {
        title: "Thông tin về enzyme",
        href: "/enzyme",
      },
      {
        title: "Bảng giá sản phẩm nông nghiệp",
        href: "/files/pdf/vi/san-pham-nong-nghiep.pdf",
      },
      {
        title: "Bảng giá sản phẩm công nghiệp",
        href: "/files/pdf/vi/san-pham-cong-nghiep.pdf",
      },
      {
        title: "Brochure công nghiệp",
        href: "/files/pdf/vi/brochure-cong-nghiep.pdf",
      },
      {
        title: "Brochure nông nghiệp",
        href: "/files/pdf/vi/brochure-nong-nghiep.pdf",
      },
      {
        title: "Cải tạo đất",
        href: "/files/pdf/vi/cai-tao-dat.pdf",
      },
      {
        title: "Hồ sơ năng lực Bisojica",
        href: "/files/pdf/vi/ho-so-nang-luc-biso-jica.pdf",
      },
      {
        title: "Hướng dẫn sử dụng enzyme",
        href: "/files/pdf/vi/huong-dan-su-dung-san-pham-enzyme-khanh-hoang.pdf",
      },
      {
        title: "Combo đậu trái",
        href: "https://drive.google.com/file/d/17sXN0LyY4UpwiZSk_8kfYBm0TK1tWdfz/view?usp=drive_link",
      },
      {
        title: "Phân tích",
        href: "/files/pdf/vi/phan-tich.pdf",
      },
      {
        title: "Quy trình canh tác lúa",
        href: "/files/pdf/vi/quy-trinh-canh-tac-lua.pdf",
      },
      {
        title: "Quy trình canh hữu cơ cho cây sầu riêng",
        href: "/files/pdf/vi/quy-trinh-canh-huu-co-cho-cay-sau-rieng.pdf",
      },
      {
        title: "Quy trình canh tác hành lá và rau màu",
        href: "/files/pdf/vi/quy-trinh-canh-tac-hanh-la-va-rau-mau.pdf",
      },
      {
        title: "Quy trình cây ăn trái",
        href: "/files/pdf/vi/quy-trinh-cay-an-trai.pdf",
      },
      {
        title: "Quy trình cho mai vàng",
        href: "/files/pdf/vi/quy-trinh-cho-mai-vang.pdf",
      },
      {
        title: "Quy trình rau củ hoa màu",
        href: "/files/pdf/vi/quy-trinh-rau-cu-hoa-mau.pdf",
      },
      {
        title: "QUY TRÌNH Ủ PHÂN HỮU CƠ VỚI MEN",
        href: "/files/pdf/vi/quy-trinh-u-phan-huu-co-voi-men.pdf",
      },
      {
        title: "Ứng dụng Enzyme Biso vào trang trại chăn nuôi lợn",
        href: "/files/pdf/vi/ung-dung-enzyme-biso-vao-trang-trai-chan-nuoi-lon.pdf",
      },
      
      {
        title: "Bệnh cháy lá",
        href: "/files/pdf/vi/benh-chay-la.pdf",
      },
      {
        title: "Về trồng sầu riêng",
        href: "/files/pdf/vi/ve-trong-sau-rieng.pdf",
      },
      {
        title: "Quy trình trồng sầu riêng hữu cơ xuất khẩu",
        href: "/files/pdf/vi/quy-trinh-trong-sau-rieng-huu-co-xuat-khau.pdf",
      },
      {
        title: "Tăng sản lượng bằng cách trồng khoải tây",
        href: "/files/pdf/vi/tang-san-luong-bang-cach-trong-khoai-tay.pdf",
      },
      
    ],

    en: [
      {
        title: "Enzyme Information",
        href: "/enzyme",
      },
      {
        title: "Agricultural Product Price List",
        href: "/files/pdf/en/san-pham-nong-nghiep.pdf",
      },
      {
        title: "Industrial Product Price List",
        href: "/files/pdf/en/san-pham-cong-nghiep.pdf",
      },
      {
        title: "Industrial Brochure",
        href: "/files/pdf/en/brochure-cong-nghiep.pdf",
      },
      {
        title: "Agricultural Brochure",
        href: "/files/pdf/en/brochure-nong-nghiep.pdf",
      },
      {
        title: "Soil Improvement",
        href: "/files/pdf/en/cai-tao-dat.pdf",
      },
      {
        title: "Bisojica Capability Profile",
        href: "/files/pdf/en/ho-so-nang-luc-biso-jica.pdf",
      },
      {
        title: "Enzyme Usage Instructions",
        href: "/files/pdf/en/huong-dan-su-dung-san-pham-enzyme-khanh-hoang.pdf",
      },
      // {
      //   title: "Fruiting Combo",
      //   href: "https://drive.google.com/file/d/17sXN0LyY4UpwiZSk_8kfYBm0TK1tWdfz/view?usp=drive_link",
      // },
      {
        title: "Analysis",
        href: "/files/pdf/en/phan-tich.pdf",
      },
      {
        title: "Rice Cultivation Process",
        href: "/files/pdf/en/quy-trinh-canh-tac-lua.pdf",
      },
      {
        title: "Organic Durian Cultivation Process",
        href: "/files/pdf/en/quy-trinh-canh-huu-co-cho-cay-sau-rieng.pdf",
      },
      {
        title: "Green Onion and Vegetable Cultivation Process",
        href: "/files/pdf/en/quy-trinh-canh-tac-hanh-la-va-rau-mau.pdf",
      },
      {
        title: "Fruit Tree Process",
        href: "/files/pdf/en/quy-trinh-cay-an-trai.pdf",
      },
      {
        title: "Ochna Integerrima (Yellow Mai) Process",
        href: "/files/pdf/en/quy-trinh-cho-mai-vang.pdf",
      },
      {
        title: "Vegetable and Crop Process",
        href: "/files/pdf/en/quy-trinh-rau-cu-hoa-mau.pdf",
      },
      {
        title: "ORGANIC COMPOSTING PROCESS WITH ENZYMES",
        href: "/files/pdf/en/quy-trinh-u-phan-huu-co-voi-men.pdf",
      },
      {
        title: "Application of Biso Enzyme in Pig Farms",
        href: "/files/pdf/en/ung-dung-enzyme-biso-vao-trang-trai-chan-nuoi-lon.pdf",
      },

      {
        title: "Leaf Blight Disease",
        href: "/files/pdf/en/benh-chay-la.pdf",
      },
      {
        title: "About Durian Cultivation",
        href: "/files/pdf/en/ve-trong-sau-rieng.pdf",
      },
      {
        title: "Organic Durian Export Cultivation Process",
        href: "/files/pdf/en/quy-trinh-trong-sau-rieng-huu-co-xuat-khau.pdf",
      },
      {
        title: "Increasing Yield by Growing Potatoes",
        href: "/files/pdf/en/tang-san-luong-bang-cach-trong-khoai-tay.pdf",
      }
    ],
  };

  const currentDocs = documents[lang] || documents.vi;


  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tài liệu
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {currentDocs.map((doc, index) => (
            <a
              key={index}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between">
                <span>{doc.title}</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>

        <ProductDocuments />
      </div>
    </section>
  );
}
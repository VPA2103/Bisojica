import ProductDocuments from "./ProductDocuments";

export default function PdfDownloadSection() {
  const documents = [
    {
      title: "Bảng giá sản phẩm nông nghiệp",
      href: "/files/pdf/san-pham-nong-nghiep.pdf",
    },
    {
      title: "Bảng giá sản phẩm công nghiệp",
      href: "/files/pdf/san-pham-cong-nghiep.pdf",
    },
    {
      title: "Brochure công nghiệp",
      href: "/files/pdf/brochure-cong-nghiep.pdf",
    },
    {
      title: "Brochure nông nghiệp",
      href: "/files/pdf/brochure-nong-nghiep.pdf",
    },
    {
      title: "Cải tạo đất",
      href: "/files/pdf/cai-tao-dat.pdf",
    },
    {
      title: "Hồ sơ năng lực Bisojica",
      href: "/files/pdf/ho-so-nang-luc-biso-jica.pdf",
    },

    {
      title: "Hướng dẫn sử dụng enzyme",
      href: "/files/pdf/huong-dan-su-dung-san-pham-enzyme-khanh-hoang.pdf",
    },
    {
      title: "Combo đậu trái",
      href: "https://drive.google.com/file/d/17sXN0LyY4UpwiZSk_8kfYBm0TK1tWdfz/view?usp=drive_link",
    },
    {
      title: "Phân tích",
      href: "/files/pdf/phan-tich.pdf",
    },
    {
      title: "Quy trình canh tác lúa",
      href: "/files/pdf/quy-trinh-canh-tac-lua.pdf",
    },
    {
      title: "Quy trình canh hữu cơ cho cây sầu riêng",
      href: "/files/pdf/quy-trinh-canh-huu-co-cho-cay-sau-rieng.pdf",
    },
   
    {
      title: "Quy trình canh tác hành lá và rau màu",
      href: "/files/pdf/quy-trinh-canh-tac-hanh-la-va-rau-mau.pdf",
    },
    {
      title: "Quy trình cây ăn trái",
      href: "/files/pdf/quy-trinh-cay-an-trai.pdf",
    },
    {
      title: "Quy trình cho mai vàng",
      href: "/files/pdf/quy-trinh-cho-mai-vang.pdf",
    },
   
    {
      title: "Quy trình rau củ hoa màu",
      href: "/files/pdf/quy-trinh-rau-cu-hoa-mau.pdf",
    },
    {
      title: "QUY TRÌNH Ủ PHÂN HỮU CƠ VỚI MEN",
      href: "/files/pdf/quy-trinh-u-phan-huu-co-voi-men.pdf",
    },
    {
      title: "Ứng dụng Enzyme Biso vào trang trại chăn nuôi lợn",
      href: "/files/pdf/ung-dung-enzyme-biso-vao-trang-trai-chan-nuoi-lon.pdf",
    },
    {
      title: "たい肥化を効率化する方法",
      href: "/files/pdf/たい肥化を効率化する方法.pdf",
    },
    {
      title: "養豚場への使用方法（VN）2",
      href: "/files/pdf/養豚場への使用方法（VN）2.pdf",
    },
  ];


  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[--text-color] mb-12">
          Tài liệu
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 "
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-800 font-semibold group-hover:text-green-700 transition ">
                  {doc.title}
                </span>

                <span className="text-sm text-gray-500 group-hover:text-green-600 transition">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        <ProductDocuments />
      </div>
    </section>
  );
}
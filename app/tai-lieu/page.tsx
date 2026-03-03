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
      title: "Hướng dẫn sử dụng enzyme Khánh Hoàng",
      href: "/files/pdf/huong-dan-su-dung-san-pham-enzyme-khanh-hoang.pdf",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Tài liệu sản phẩm
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-800 font-semibold group-hover:text-green-700 transition">
                  {doc.title}
                </span>

                <span className="text-sm text-gray-500 group-hover:text-green-600 transition">
                  PDF →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
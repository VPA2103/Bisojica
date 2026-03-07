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
      title: "Hồ sơ năng lực công ty Bisojica",
      href: "https://drive.google.com/file/d/1Pi4a0zNJJANWOlbnc3YJK3wi1ax9D2wj/view?usp=drive_link",
    },
    {
      title: "Hướng dẫn sử dụng enzyme Khánh Hoàng",
      href: "/files/pdf/huong-dan-su-dung-san-pham-enzyme-khanh-hoang.pdf",
    },
    {
      title: "Combo đậu trái",
      href: "    https://drive.google.com/file/d/17sXN0LyY4UpwiZSk_8kfYBm0TK1tWdfz/view?usp=drive_link",
    },

  ];
  const word = [
    {
      title: "TCCS 01 - MITAKA1000",
      href: "/files/docx/tccs-01-mitaka1000.docx",
    },
    {
      title: "TCCS 02 - Daichi no Tomo",
      href: "/files/docx/tccs-02-daichi-no-tomo.docx",
    },
    {
      title: "TCCS 03 - BF-NATURAL",
      href: "/files/docx/tccs-03-bf-natural.docx",
    },
    {
      title: "TCCS 04 - Lake Power",
      href: "/files/docx/tccs-04-lake-power.docx",
    },
    {
      title: "TCCS 05 - BK-OILBUSTER",
      href: "/files/docx/tccs-05-bk-oilbuster.docx",
    },
    {
      title: "TCCS 06 - BK Partner",
      href: "/files/docx/tccs-06-bk-partner.docx",
    },
    {
      title: "TCCS 07 - Daichi no Tomo 500",
      href: "/files/docx/tccs-07-daichi-no-tomo-500.docx",
    },
    {
      title: "TCCS 08 - MITAKA3000",
      href: "/files/docx/tccs-08-mitaka3000.docx",
    },
    {
      title: "TCCS 09 - NIOI ZERO",
      href: "/files/docx/tccs-09-nioi-zero.docx",
    },
    {
      title: "TCCS 10 - SP 10-15-20",
      href: "/files/docx/tccs-10-sp-10-15-20.docx",
    },
    {
      title: "TCCS 11 - S-Power",
      href: "/files/docx/tccs-11-s-power.docx",
    },
    {
      title: "TCCS 12 - MITAKA1200",
      href: "/files/docx/tccs-12-mitaka1200.docx",
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[--text-color] mb-8 mt-4">
          Tài liệu sản phẩm
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {word.map((doc, index) => (
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
      </div>
    </section>
  );
}